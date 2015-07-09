
'use strict';

var util = require('util');
var msRest = require('ms-rest');
var ServiceClient = msRest.ServiceClient;
var WebResource = msRest.WebResource;

var models = require('../models');

/**
 * @class
 * PathItems
 * __NOTE__: An instance of this class is automatically created for an
 * instance of the AutoRestUrlTestService.
 * Initializes a new instance of the PathItems class.
 * @constructor
 *
 * @param {AutoRestUrlTestService} client Reference to the service client.
 */
function PathItems(client) {
  this.client = client;
}

/**
 * send globalStringPath='globalStringPath',
 * pathItemStringPath='pathItemStringPath',
 * localStringPath='localStringPath', globalStringQuery='globalStringQuery',
 * pathItemStringQuery='pathItemStringQuery',
 * localStringQuery='localStringQuery'
 * @param {String} [globalStringPath] A string value 'globalItemStringPath' that appears in the path
 *
 * @param {String} [globalStringQuery] should contain value null
 *
 * @param {String} [localStringPath] should contain value 'localStringPath'
 *
 * @param {String} [localStringQuery] should contain value 'localStringQuery'
 *
 * @param {String} [pathItemStringPath] A string value 'pathItemStringPath' that appears in the path
 *
 * @param {String} [pathItemStringQuery] A string value 'pathItemStringQuery' that appears as a query parameter
 *
 * @param {object} [options]
 *
 * @param {object} [options.customHeaders] headers that will be added to
 * request
 *
 * @param {function} callback
 *
 * @returns {Stream} The Response stream
 */
PathItems.prototype.getAllWithValues = function (localStringPath, pathItemStringPath, globalStringPath, localStringQuery, pathItemStringQuery, globalStringQuery, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (localStringPath === null || localStringPath === undefined) {
      throw new Error('\'localStringPath\' cannot be null');
    }
    if (localStringPath !== null && localStringPath !== undefined && typeof localStringPath !== 'string') {
      throw new Error('localStringPath must be of type string.');
    }
    if (pathItemStringPath === null || pathItemStringPath === undefined) {
      throw new Error('\'pathItemStringPath\' cannot be null');
    }
    if (pathItemStringPath !== null && pathItemStringPath !== undefined && typeof pathItemStringPath !== 'string') {
      throw new Error('pathItemStringPath must be of type string.');
    }
    if (globalStringPath === null || globalStringPath === undefined) {
      throw new Error('\'globalStringPath\' cannot be null');
    }
    if (globalStringPath !== null && globalStringPath !== undefined && typeof globalStringPath !== 'string') {
      throw new Error('globalStringPath must be of type string.');
    }
    if (localStringQuery !== null && localStringQuery !== undefined && typeof localStringQuery !== 'string') {
      throw new Error('localStringQuery must be of type string.');
    }
    if (pathItemStringQuery !== null && pathItemStringQuery !== undefined && typeof pathItemStringQuery !== 'string') {
      throw new Error('pathItemStringQuery must be of type string.');
    }
    if (globalStringQuery !== null && globalStringQuery !== undefined && typeof globalStringQuery !== 'string') {
      throw new Error('globalStringQuery must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri + 
                   '//pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/pathItemStringQuery/localStringQuery';
  requestUrl = requestUrl.replace('{localStringPath}', encodeURIComponent(localStringPath));
  requestUrl = requestUrl.replace('{pathItemStringPath}', encodeURIComponent(pathItemStringPath));
  requestUrl = requestUrl.replace('{globalStringPath}', encodeURIComponent(globalStringPath));
  var queryParameters = [];
  if (localStringQuery !== null && localStringQuery !== undefined) {
    queryParameters.push('localStringQuery=' + encodeURIComponent(localStringQuery));
  }
  if (pathItemStringQuery !== null && pathItemStringQuery !== undefined) {
    queryParameters.push('pathItemStringQuery=' + encodeURIComponent(pathItemStringQuery));
  }
  if (globalStringQuery !== null && globalStringQuery !== undefined) {
    queryParameters.push('globalStringQuery=' + encodeURIComponent(globalStringQuery));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  httpRequest.headers['Content-Length'] = 0;
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = httpRequest;
      error.response = response;
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        error.body = parsedErrorResponse;
          if (error.body !== null && error.body !== undefined) {
            error.body = client._models['ErrorModel'].deserialize(error.body);
          }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody - "%s" for the default response.', defaultError, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = new msRest.HttpOperationResponse();
    result.request = httpRequest;
    result.response = response;
    if (responseBody === '') responseBody = null;

    return callback(null, result);
  });
};

/**
 * send globalStringPath='globalStringPath',
 * pathItemStringPath='pathItemStringPath',
 * localStringPath='localStringPath', globalStringQuery=null,
 * pathItemStringQuery='pathItemStringQuery',
 * localStringQuery='localStringQuery'
 * @param {String} [globalStringPath] A string value 'globalItemStringPath' that appears in the path
 *
 * @param {String} [globalStringQuery] should contain value null
 *
 * @param {String} [localStringPath] should contain value 'localStringPath'
 *
 * @param {String} [localStringQuery] should contain value 'localStringQuery'
 *
 * @param {String} [pathItemStringPath] A string value 'pathItemStringPath' that appears in the path
 *
 * @param {String} [pathItemStringQuery] A string value 'pathItemStringQuery' that appears as a query parameter
 *
 * @param {object} [options]
 *
 * @param {object} [options.customHeaders] headers that will be added to
 * request
 *
 * @param {function} callback
 *
 * @returns {Stream} The Response stream
 */
PathItems.prototype.getGlobalQueryNull = function (localStringPath, pathItemStringPath, globalStringPath, localStringQuery, pathItemStringQuery, globalStringQuery, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (localStringPath === null || localStringPath === undefined) {
      throw new Error('\'localStringPath\' cannot be null');
    }
    if (localStringPath !== null && localStringPath !== undefined && typeof localStringPath !== 'string') {
      throw new Error('localStringPath must be of type string.');
    }
    if (pathItemStringPath === null || pathItemStringPath === undefined) {
      throw new Error('\'pathItemStringPath\' cannot be null');
    }
    if (pathItemStringPath !== null && pathItemStringPath !== undefined && typeof pathItemStringPath !== 'string') {
      throw new Error('pathItemStringPath must be of type string.');
    }
    if (globalStringPath === null || globalStringPath === undefined) {
      throw new Error('\'globalStringPath\' cannot be null');
    }
    if (globalStringPath !== null && globalStringPath !== undefined && typeof globalStringPath !== 'string') {
      throw new Error('globalStringPath must be of type string.');
    }
    if (localStringQuery !== null && localStringQuery !== undefined && typeof localStringQuery !== 'string') {
      throw new Error('localStringQuery must be of type string.');
    }
    if (pathItemStringQuery !== null && pathItemStringQuery !== undefined && typeof pathItemStringQuery !== 'string') {
      throw new Error('pathItemStringQuery must be of type string.');
    }
    if (globalStringQuery !== null && globalStringQuery !== undefined && typeof globalStringQuery !== 'string') {
      throw new Error('globalStringQuery must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri + 
                   '//pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/localStringQuery';
  requestUrl = requestUrl.replace('{localStringPath}', encodeURIComponent(localStringPath));
  requestUrl = requestUrl.replace('{pathItemStringPath}', encodeURIComponent(pathItemStringPath));
  requestUrl = requestUrl.replace('{globalStringPath}', encodeURIComponent(globalStringPath));
  var queryParameters = [];
  if (localStringQuery !== null && localStringQuery !== undefined) {
    queryParameters.push('localStringQuery=' + encodeURIComponent(localStringQuery));
  }
  if (pathItemStringQuery !== null && pathItemStringQuery !== undefined) {
    queryParameters.push('pathItemStringQuery=' + encodeURIComponent(pathItemStringQuery));
  }
  if (globalStringQuery !== null && globalStringQuery !== undefined) {
    queryParameters.push('globalStringQuery=' + encodeURIComponent(globalStringQuery));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  httpRequest.headers['Content-Length'] = 0;
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = httpRequest;
      error.response = response;
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        error.body = parsedErrorResponse;
          if (error.body !== null && error.body !== undefined) {
            error.body = client._models['ErrorModel'].deserialize(error.body);
          }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody - "%s" for the default response.', defaultError, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = new msRest.HttpOperationResponse();
    result.request = httpRequest;
    result.response = response;
    if (responseBody === '') responseBody = null;

    return callback(null, result);
  });
};

/**
 * send globalStringPath=globalStringPath,
 * pathItemStringPath='pathItemStringPath',
 * localStringPath='localStringPath', globalStringQuery=null,
 * pathItemStringQuery='pathItemStringQuery', localStringQuery=null
 * @param {String} [globalStringPath] A string value 'globalItemStringPath' that appears in the path
 *
 * @param {String} [globalStringQuery] should contain value null
 *
 * @param {String} [localStringPath] should contain value 'localStringPath'
 *
 * @param {String} [localStringQuery] should contain null value
 *
 * @param {String} [pathItemStringPath] A string value 'pathItemStringPath' that appears in the path
 *
 * @param {String} [pathItemStringQuery] A string value 'pathItemStringQuery' that appears as a query parameter
 *
 * @param {object} [options]
 *
 * @param {object} [options.customHeaders] headers that will be added to
 * request
 *
 * @param {function} callback
 *
 * @returns {Stream} The Response stream
 */
PathItems.prototype.getGlobalAndLocalQueryNull = function (localStringPath, pathItemStringPath, globalStringPath, localStringQuery, pathItemStringQuery, globalStringQuery, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (localStringPath === null || localStringPath === undefined) {
      throw new Error('\'localStringPath\' cannot be null');
    }
    if (localStringPath !== null && localStringPath !== undefined && typeof localStringPath !== 'string') {
      throw new Error('localStringPath must be of type string.');
    }
    if (pathItemStringPath === null || pathItemStringPath === undefined) {
      throw new Error('\'pathItemStringPath\' cannot be null');
    }
    if (pathItemStringPath !== null && pathItemStringPath !== undefined && typeof pathItemStringPath !== 'string') {
      throw new Error('pathItemStringPath must be of type string.');
    }
    if (globalStringPath === null || globalStringPath === undefined) {
      throw new Error('\'globalStringPath\' cannot be null');
    }
    if (globalStringPath !== null && globalStringPath !== undefined && typeof globalStringPath !== 'string') {
      throw new Error('globalStringPath must be of type string.');
    }
    if (localStringQuery !== null && localStringQuery !== undefined && typeof localStringQuery !== 'string') {
      throw new Error('localStringQuery must be of type string.');
    }
    if (pathItemStringQuery !== null && pathItemStringQuery !== undefined && typeof pathItemStringQuery !== 'string') {
      throw new Error('pathItemStringQuery must be of type string.');
    }
    if (globalStringQuery !== null && globalStringQuery !== undefined && typeof globalStringQuery !== 'string') {
      throw new Error('globalStringQuery must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri + 
                   '//pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/null/pathItemStringQuery/null';
  requestUrl = requestUrl.replace('{localStringPath}', encodeURIComponent(localStringPath));
  requestUrl = requestUrl.replace('{pathItemStringPath}', encodeURIComponent(pathItemStringPath));
  requestUrl = requestUrl.replace('{globalStringPath}', encodeURIComponent(globalStringPath));
  var queryParameters = [];
  if (localStringQuery !== null && localStringQuery !== undefined) {
    queryParameters.push('localStringQuery=' + encodeURIComponent(localStringQuery));
  }
  if (pathItemStringQuery !== null && pathItemStringQuery !== undefined) {
    queryParameters.push('pathItemStringQuery=' + encodeURIComponent(pathItemStringQuery));
  }
  if (globalStringQuery !== null && globalStringQuery !== undefined) {
    queryParameters.push('globalStringQuery=' + encodeURIComponent(globalStringQuery));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  httpRequest.headers['Content-Length'] = 0;
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = httpRequest;
      error.response = response;
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        error.body = parsedErrorResponse;
          if (error.body !== null && error.body !== undefined) {
            error.body = client._models['ErrorModel'].deserialize(error.body);
          }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody - "%s" for the default response.', defaultError, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = new msRest.HttpOperationResponse();
    result.request = httpRequest;
    result.response = response;
    if (responseBody === '') responseBody = null;

    return callback(null, result);
  });
};

/**
 * send globalStringPath='globalStringPath',
 * pathItemStringPath='pathItemStringPath',
 * localStringPath='localStringPath', globalStringQuery='globalStringQuery',
 * pathItemStringQuery=null, localStringQuery=null
 * @param {String} [globalStringPath] A string value 'globalItemStringPath' that appears in the path
 *
 * @param {String} [globalStringQuery] should contain value null
 *
 * @param {String} [localStringPath] should contain value 'localStringPath'
 *
 * @param {String} [localStringQuery] should contain value null
 *
 * @param {String} [pathItemStringPath] A string value 'pathItemStringPath' that appears in the path
 *
 * @param {String} [pathItemStringQuery] should contain value null
 *
 * @param {object} [options]
 *
 * @param {object} [options.customHeaders] headers that will be added to
 * request
 *
 * @param {function} callback
 *
 * @returns {Stream} The Response stream
 */
PathItems.prototype.getLocalPathItemQueryNull = function (localStringPath, pathItemStringPath, globalStringPath, localStringQuery, pathItemStringQuery, globalStringQuery, options, callback) {
  var client = this.client;
  if(!callback && typeof options === 'function') {
    callback = options;
    options = null;
  }
  if (!callback) {
    throw new Error('callback cannot be null.');
  }
  // Validate
  try {
    if (localStringPath === null || localStringPath === undefined) {
      throw new Error('\'localStringPath\' cannot be null');
    }
    if (localStringPath !== null && localStringPath !== undefined && typeof localStringPath !== 'string') {
      throw new Error('localStringPath must be of type string.');
    }
    if (pathItemStringPath === null || pathItemStringPath === undefined) {
      throw new Error('\'pathItemStringPath\' cannot be null');
    }
    if (pathItemStringPath !== null && pathItemStringPath !== undefined && typeof pathItemStringPath !== 'string') {
      throw new Error('pathItemStringPath must be of type string.');
    }
    if (globalStringPath === null || globalStringPath === undefined) {
      throw new Error('\'globalStringPath\' cannot be null');
    }
    if (globalStringPath !== null && globalStringPath !== undefined && typeof globalStringPath !== 'string') {
      throw new Error('globalStringPath must be of type string.');
    }
    if (localStringQuery !== null && localStringQuery !== undefined && typeof localStringQuery !== 'string') {
      throw new Error('localStringQuery must be of type string.');
    }
    if (pathItemStringQuery !== null && pathItemStringQuery !== undefined && typeof pathItemStringQuery !== 'string') {
      throw new Error('pathItemStringQuery must be of type string.');
    }
    if (globalStringQuery !== null && globalStringQuery !== undefined && typeof globalStringQuery !== 'string') {
      throw new Error('globalStringQuery must be of type string.');
    }
  } catch (error) {
    return callback(error);
  }

  // Construct URL
  var requestUrl = this.client.baseUri + 
                   '//pathitem/nullable/globalStringPath/{globalStringPath}/pathItemStringPath/{pathItemStringPath}/localStringPath/{localStringPath}/globalStringQuery/null/null';
  requestUrl = requestUrl.replace('{localStringPath}', encodeURIComponent(localStringPath));
  requestUrl = requestUrl.replace('{pathItemStringPath}', encodeURIComponent(pathItemStringPath));
  requestUrl = requestUrl.replace('{globalStringPath}', encodeURIComponent(globalStringPath));
  var queryParameters = [];
  if (localStringQuery !== null && localStringQuery !== undefined) {
    queryParameters.push('localStringQuery=' + encodeURIComponent(localStringQuery));
  }
  if (pathItemStringQuery !== null && pathItemStringQuery !== undefined) {
    queryParameters.push('pathItemStringQuery=' + encodeURIComponent(pathItemStringQuery));
  }
  if (globalStringQuery !== null && globalStringQuery !== undefined) {
    queryParameters.push('globalStringQuery=' + encodeURIComponent(globalStringQuery));
  }
  if (queryParameters.length > 0) {
    requestUrl += '?' + queryParameters.join('&');
  }
  // trim all duplicate forward slashes in the url
  var regex = /([^:]\/)\/+/gi;
  requestUrl = requestUrl.replace(regex, '$1');

  // Create HTTP transport objects
  var httpRequest = new WebResource();
  httpRequest.method = 'GET';
  httpRequest.headers = {};
  httpRequest.url = requestUrl;
  // Set Headers
  httpRequest.headers['Content-Type'] = 'application/json; charset=utf-8';
  httpRequest.body = null;
  httpRequest.headers['Content-Length'] = 0;
  if(options) {
    for(var headerName in options['customHeaders']) {
      if (options['customHeaders'].hasOwnProperty(headerName)) {
        httpRequest.headers[headerName] = options['customHeaders'][headerName];
      }
    }
  }
  // Send Request
  return client.pipeline(httpRequest, function (err, response, responseBody) {
    if (err) {
      return callback(err);
    }
    var statusCode = response.statusCode;
    if (statusCode !== 200) {
      var error = new Error(responseBody);
      error.statusCode = response.statusCode;
      error.request = httpRequest;
      error.response = response;
      if (responseBody === '') responseBody = null;
      var parsedErrorResponse;
      try {
        parsedErrorResponse = JSON.parse(responseBody);
        error.body = parsedErrorResponse;
          if (error.body !== null && error.body !== undefined) {
            error.body = client._models['ErrorModel'].deserialize(error.body);
          }
      } catch (defaultError) {
        error.message = util.format('Error "%s" occurred in deserializing the responseBody - "%s" for the default response.', defaultError, responseBody);
        return callback(error);
      }
      return callback(error);
    }
    // Create Result
    var result = new msRest.HttpOperationResponse();
    result.request = httpRequest;
    result.response = response;
    if (responseBody === '') responseBody = null;

    return callback(null, result);
  });
};


module.exports = PathItems;