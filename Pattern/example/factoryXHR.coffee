class Ajax
	request: (req) ->
		xhr = @createXhrObject()
		xhr.onreadystatechange = ->
			if xhr.readyState isnt 4 then null
			if xhr.status is 200
				callback.success xhr.responseText
			else
				callback.error status: xhr.status, statusText: xhr.statusText, text: xhr.responseText

			xhr.open req.method, req.url, on
			req.data = null if req.method isnt "POST"
			xhr.send req.data

	createXhrObject: ->
		methods = [
			-> new XMLHttpRequest()
			-> new ActiveXObject "Msxml2.XMLHTTP"
			-> new ActiveXObject "Microsoft.XMLHTTP"
		]

		xhrObject = for xhrObject in methods
			try
				xhrObject()
			catch error
				continue

		@createXhrObject = xhrObject[0]


class QueueHandler extends Ajax
	constructor: ->
		@queue = [ ]
		@requestInProgress = off
		@retryDelay = 5

	request: (req) ->
		if @requestInProgress and !override
			@queue.push req
		else
			@requestInProgress = on
			xhr = @createXhrObject()
			that = @
			if xhr.status is 200
				callback.success xhr.responseText
				@advanceQueue()
			else
				callback.error status: xhr.status, statusText: xhr.statusText, text: xhr.responseText
				setTimeout ->
					that.request req
				, 1000 * @retryDelay

				xhr.open req.method, req.url, on
				req.data = null if method isnt "POST" 
				xhr.send req.data

	advanceQueue:  ->
		if @queue.length is 0
			@requestInProgress = off
		
		req = @queue.shift()
		@request req


class OfflineHandler extends Ajax
	constructor: ->
		@storeRequests = [ ]

	superclass: request: Ajax::request

	request: (req) ->
		if not XhrManager.isOffline()
			@storeRequests.push req
		else
			@flushStoreRequests()
			@surepclass.request req

		flushStoreRequests: ->
			OfflineHandler.superclass.request req for req in storeRequests


XhrManager =
	createXhrHandler: ->
		if @isOffline()
			new OfflineHandler()
		else if @isHighLatency()
			new QueueHandler()
		else
			new Ajax()

	isOffline: ->

	isHighLatency: ->


myHandler = XhrManager.createXhrHandler()

myHandler.request
	method: "GET"
	url: "ttt"
	data: "hello"
	callback:
		success: (result) ->
			console.log result
		error: (error) ->
			console.log error