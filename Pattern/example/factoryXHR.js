// Generated by CoffeeScript 1.8.0
(function() {
  var Ajax, OfflineHandler, QueueHandler, XhrManager, myHandler,
    __hasProp = {}.hasOwnProperty,
    __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

  Ajax = (function() {
    function Ajax() {}

    Ajax.prototype.request = function(req) {
      var xhr;
      xhr = this.createXhrObject();
      return xhr.onreadystatechange = function() {
        if (xhr.readyState !== 4) {
          null;
        }
        if (xhr.status === 200) {
          callback.success(xhr.responseText);
        } else {
          callback.error({
            status: xhr.status,
            statusText: xhr.statusText,
            text: xhr.responseText
          });
        }
        xhr.open(req.method, req.url, true);
        if (req.method !== "POST") {
          req.data = null;
        }
        return xhr.send(req.data);
      };
    };

    Ajax.prototype.createXhrObject = function() {
      var error, methods, xhrObject;
      methods = [
        function() {
          return new XMLHttpRequest();
        }, function() {
          return new ActiveXObject("Msxml2.XMLHTTP");
        }, function() {
          return new ActiveXObject("Microsoft.XMLHTTP");
        }
      ];
      xhrObject = (function() {
        var _i, _len, _results;
        _results = [];
        for (_i = 0, _len = methods.length; _i < _len; _i++) {
          xhrObject = methods[_i];
          try {
            _results.push(xhrObject());
          } catch (_error) {
            error = _error;
            continue;
          }
        }
        return _results;
      })();
      return this.createXhrObject = xhrObject[0];
    };

    return Ajax;

  })();

  QueueHandler = (function(_super) {
    __extends(QueueHandler, _super);

    function QueueHandler() {
      this.queue = [];
      this.requestInProgress = false;
      this.retryDelay = 5;
    }

    QueueHandler.prototype.request = function(req) {
      var that, xhr;
      if (this.requestInProgress && !override) {
        return this.queue.push(req);
      } else {
        this.requestInProgress = true;
        xhr = this.createXhrObject();
        that = this;
        if (xhr.status === 200) {
          callback.success(xhr.responseText);
          return this.advanceQueue();
        } else {
          callback.error({
            status: xhr.status,
            statusText: xhr.statusText,
            text: xhr.responseText
          });
          setTimeout(function() {
            return that.request(req);
          }, 1000 * this.retryDelay);
          xhr.open(req.method, req.url, true);
          if (method !== "POST") {
            req.data = null;
          }
          return xhr.send(req.data);
        }
      }
    };

    QueueHandler.prototype.advanceQueue = function() {
      var req;
      if (this.queue.length === 0) {
        this.requestInProgress = false;
      }
      req = this.queue.shift();
      return this.request(req);
    };

    return QueueHandler;

  })(Ajax);

  OfflineHandler = (function(_super) {
    __extends(OfflineHandler, _super);

    function OfflineHandler() {
      this.storeRequests = [];
    }

    OfflineHandler.prototype.superclass = {
      request: Ajax.prototype.request
    };

    OfflineHandler.prototype.request = function(req) {
      if (!XhrManager.isOffline()) {
        this.storeRequests.push(req);
      } else {
        this.flushStoreRequests();
        this.surepclass.request(req);
      }
      return {
        flushStoreRequests: function() {
          var _i, _len, _results;
          _results = [];
          for (_i = 0, _len = storeRequests.length; _i < _len; _i++) {
            req = storeRequests[_i];
            _results.push(OfflineHandler.superclass.request(req));
          }
          return _results;
        }
      };
    };

    return OfflineHandler;

  })(Ajax);

  XhrManager = {
    createXhrHandler: function() {
      if (this.isOffline()) {
        return new OfflineHandler();
      } else if (this.isHighLatency()) {
        return new QueueHandler();
      } else {
        return new Ajax();
      }
    },
    isOffline: function() {},
    isHighLatency: function() {}
  };

  myHandler = XhrManager.createXhrHandler();

  myHandler.request({
    method: "GET",
    url: "ttt",
    data: "hello",
    callback: {
      success: function(result) {
        return console.log(result);
      },
      error: function(error) {
        return console.log(error);
      }
    }
  });

}).call(this);
