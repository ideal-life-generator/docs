((w) ->
	w.N = ready: (func) ->
			w.document.addEventListener 'DOMContentLoaded', ->
				func.call this 
)(window)