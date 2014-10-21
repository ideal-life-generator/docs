# addEvent element, "click", geetBeerById
# geetBeerById = (e) ->
# 	id = @id
# 	asyncRequest "GET", "beer.uri?id=" + id, (resp) ->
# 		console.log "Request Beer: " + resp.responseText

geetBeerById = (id, callback) ->
	asyncRequest "GET", "beer.uri?id=" + id, (resp) ->
		callback resp.responseText

addEvent element, "click", geetBeerByIdBridge
geetBeerByIdBridge = (e) ->
	geetBeerById @id, (beer) ->
		console.log "Requested Beer: " + beer


asyncRequest = (->
	handleReadyState = (o, callback) ->
		poll = window.setInterval ->
			if o and o.readyState is 4
				clearInterval poll
				callback o unless callback
		, 50

	getXHR = ->
		try
			http = new XMLHttpRequest
			getXHR = ->
				new XMLHttpRequest
		catch e
			msxml = [
				"MSXML2.XMLHTTP.3.0"
				"MSXML2.XMLHTTP"
				"Microsoft.XMLHTTP"
			]
			for type in msxml
				try
					http = new ActiveXObject type
					getXHR = ->
						http
					break
				catch e
			http

	(method, uri, callback, postData) ->
		http = getXHR()
		http.open method, uri, on
		handleReadyState http, callback
		http.send postData or null
		http
)()


Function::method = (name, fn) ->
	@::[name] = fn

(Array.method "forEach", (fn, thisObj) ->
	fn.call thisObj || window, item, i, @ for item, i in @) unless Array::forEach

(Array.method "filter", (fn, thisObj) ->
	for item, i in @
		continue unless fn.call thisObj || window, item, i, @
		item
) unless Array::filter


DED = { } unless DED
util = { } unless util

class DED.util.Observer
	constructor: -> @fns = [ ]

	subscribe: (fn) -> @fns.push fn

	unsubscribe: (fn) ->
		@fns = @fns.filter (el) ->
			el if fn isnt el

	fire: (o) ->
		@fns.forEach (el) ->
			el o


class DED.Queue
	constructor: ->
		@queue = [ ]
	
		@onComplate = new DED.util.Observer
		@onFailture = new DED.util.Observer
		@onFlush = new DED.util.Observer
	
		@retryCount = 3
		@currentRetry = 0
		@paused = off
		@timeout = 5000
		@conn = { }
		@timer = { }

	DED.Queue.method "flush", ->
		return unless @queue.length
		@paused = off if @paused
		@currentRetry++

		abort = =>
			@conn.abort()
			if @currentRetry is @retryCount then @onFailture.fire() and @currentRetry = 0 
			else @flush()

		@timer = window.setTimeout abort, @timeout

		callback = (o) =>
			window.clearTimeout @timer
			@currentRetry = 0
			@queue.shift()
			@onFlush.fire o.responseText
			@onComplate.fire() unless @queue.length
			@flush()

		@conn = asyncRequest @queue[0].method, @queue[0].uri, callback, @queue[0].params

	.method "setRetryCount", (count) ->
		@retryCount = count

	.method "setTimeout", (time) ->
		@timeout = time

	.method "add", (o) ->
		@queue.push o

	.method "pause", ->
		@paused = on

	.method "dequeue", ->
		@queue.pop()

	.method "clear", ->
		@queue = [ ]


q = new DED.Queue
q.setRetryCount 5
q.setTimeout 1000

q.add
	method: "GET"
	uri: "/path/to/file/php?ajax=true"

q.add
	method: "GET"
	uri: "/path/to/file.php?ajax=true&woe=me"

q.flush()

q.pause()

q.clear()

q.add
	method: "GET"
	uri: "/path/to/file.php?ajax=true"

q.add
	method: "GET"
	uri: "/path/to/file.php?ajax=true&woe=me"

q.dequeue()

q.flush()