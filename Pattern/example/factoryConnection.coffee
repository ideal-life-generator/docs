class QueueHandler
	@queue = [ ]
	@requestInProgress = no
	@retryDelay = 5