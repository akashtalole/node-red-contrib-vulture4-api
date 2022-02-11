/*jshint -W069 */
/**
 * 
 * @class Vulture4Api
 * @param {(string|object)} [domainOrOptions] - The project domain or options object. If object, see the object's optional properties.
 * @param {string} [domainOrOptions.domain] - The project domain
 * @param {object} [domainOrOptions.token] - auth token - object with value property and optional headerOrQueryName and isQuery properties
 */
var Vulture4Api = (function(){
    'use strict';

    var request = require('request');
    var Q = require('q');
    var fileType = require('file-type');

    function Vulture4Api(options){
        var domain = (typeof options === 'object') ? options.domain : options;
        this.domain = domain ? domain : '';
        if(this.domain.length === 0) {
            throw new Error('Domain parameter must be specified as a string.');
        }
    }

    function mergeQueryParams(parameters, queryParameters) {
        if (parameters.$queryParameters) {
            Object.keys(parameters.$queryParameters)
                  .forEach(function(parameterName) {
                      var parameter = parameters.$queryParameters[parameterName];
                      queryParameters[parameterName] = parameter;
            });
        }
        return queryParameters;
    }

    /**
     * HTTP Request
     * @method
     * @name Vulture4Api#request
     * @param {string} method - http method
     * @param {string} url - url to do request
     * @param {object} parameters
     * @param {object} body - body parameters / object
     * @param {object} headers - header parameters
     * @param {object} queryParameters - querystring parameters
     * @param {object} form - form data object
     * @param {object} deferred - promise object
     */
    Vulture4Api.prototype.request = function(method, url, parameters, body, headers, queryParameters, form, deferred){
        var req = {
            method: method,
            uri: url,
            qs: queryParameters,
            headers: headers,
            body: body
        };
        if(Object.keys(form).length > 0) {
            if (req.headers['Content-Type'] && req.headers['Content-Type'][0] === 'multipart/form-data') {
                delete req.body;
                var keyName = Object.keys(form)[0]
                req.formData = {
                    [keyName]: {
                        value: form[keyName],
                        options: {
                            filename: (fileType(form[keyName]) != null ? `file.${ fileType(form[keyName]).ext }` : `file` )
                        }
                    }
                };
            } else {
                req.form = form;
            }
        }
        if(typeof(body) === 'object' && !(body instanceof Buffer)) {
            req.json = true;
        }
        request(req, function(error, response, body){
            if(error) {
                deferred.reject(error);
            } else {
                if(/^application\/(.*\\+)?json/.test(response.headers['content-type'])) {
                    try {
                        body = JSON.parse(body);
                    } catch(e) {}
                }
                if(response.statusCode === 204) {
                    deferred.resolve({ response: response });
                } else if(response.statusCode >= 200 && response.statusCode <= 299) {
                    deferred.resolve({ response: response, body: body });
                } else {
                    deferred.reject({ response: response, body: body });
                }
            }
        });
    };


/**
 * List of Access Control
 * @method
 * @name Vulture4Api#getDarwinAcl
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getDarwinAcl = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/acl/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Create an Access Control
 * @method
 * @name Vulture4Api#postDarwinAcl
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.postDarwinAcl = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/acl/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Access Control
 * @method
 * @name Vulture4Api#getDarwinAclByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the Access Control object
 */
 Vulture4Api.prototype.getDarwinAclByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/acl/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Edit an Access Control
 * @method
 * @name Vulture4Api#putDarwinAclByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the Access Control object
 */
 Vulture4Api.prototype.putDarwinAclByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/acl/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * List filter instances
 * @method
 * @name Vulture4Api#getDarwinFilter
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getDarwinFilter = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/filter/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get specific filter instance
 * @method
 * @name Vulture4Api#getDarwinFilterByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - the id of a filter instance
 */
 Vulture4Api.prototype.getDarwinFilterByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/filter/{object_id}/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * List filter types
 * @method
 * @name Vulture4Api#getDarwinFilterTypes
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getDarwinFilterTypes = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/filter/types/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * List available ressources for a specific filter type
 * @method
 * @name Vulture4Api#getDarwinFilterByFilterTypeByResssource
 * @param {object} parameters - method options and parameters
     * @param {} parameters.filterType - the name of the filter_type to get available ressources from
     * @param {} parameters.ressource - the ressource to get from the filter_type
 */
 Vulture4Api.prototype.getDarwinFilterByFilterTypeByResssource = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/filter/{filter_type}/{resssource}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{filter_type}', parameters['filterType']);
        
        


        if(parameters['filterType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: filterType'));
            return deferred.promise;
        }
 
        
            path = path.replace('{ressource}', parameters['ressource']);
        
        


        if(parameters['ressource'] === undefined){
            deferred.reject(new Error('Missing required  parameter: ressource'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * List policies
 * @method
 * @name Vulture4Api#getDarwinPolicy
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getDarwinPolicy = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/policy/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Create policy
 * @method
 * @name Vulture4Api#postDarwinPolicy
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.postDarwinPolicy = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/policy/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get Policy
 * @method
 * @name Vulture4Api#getDarwinPolicyByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the policy
 */
 Vulture4Api.prototype.getDarwinPolicyByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/policy/{object_id}/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * verb to create or update a specific policy based on its ID
 * @method
 * @name Vulture4Api#putDarwinPolicyByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the policy
 */
 Vulture4Api.prototype.putDarwinPolicyByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/policy/{object_id}/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Delete a policy based on its ID
 * @method
 * @name Vulture4Api#deleteDarwinPolicyByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the policy
 */
 Vulture4Api.prototype.deleteDarwinPolicyByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/policy/{object_id}/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Action on policy
 * @method
 * @name Vulture4Api#postDarwinPolicyByObjectIdByAction
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - the id of the policy
     * @param {} parameters.action - the action to execute on this policy (currently none)
 */
 Vulture4Api.prototype.postDarwinPolicyByObjectIdByAction = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/darwin/policy/{object_id}/{action}/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{action}', parameters['action']);
        
        


        if(parameters['action'] === undefined){
            deferred.reject(new Error('Missing required  parameter: action'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get Cluster configuration
 * @method
 * @name Vulture4Api#getSystemConfig
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getSystemConfig = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/config/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Edit Config
 * @method
 * @name Vulture4Api#putSystemConfig
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.putSystemConfig = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/config/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Define Packet Filter Whitelist or Blacklist
 * @method
 * @name Vulture4Api#postSystemConfigByListType
 * @param {object} parameters - method options and parameters
     * @param {} parameters.listType - Whitelist or Blacklist
 */
 Vulture4Api.prototype.postSystemConfigByListType = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/config/{list_type}/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{list_type}', parameters['listType']);
        
        


        if(parameters['listType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: listType'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get all nodes
 * @method
 * @name Vulture4Api#getSystemNode
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getSystemNode = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/node/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get one node
 * @method
 * @name Vulture4Api#getSystemNodeByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the node
 */
 Vulture4Api.prototype.getSystemNodeByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/node/{object_id}/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Update a node
 * @method
 * @name Vulture4Api#postSystemNodeByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the node
 */
 Vulture4Api.prototype.postSystemNodeByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/node/{object_id}/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Update a node
 * @method
 * @name Vulture4Api#putSystemNodeByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the node
 */
 Vulture4Api.prototype.putSystemNodeByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/node/{object_id}/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Update a node
 * @method
 * @name Vulture4Api#patchSystemNodeByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the node
 */
 Vulture4Api.prototype.patchSystemNodeByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/node/{object_id}/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PATCH', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Cluster list
 * @method
 * @name Vulture4Api#getSystemCluster
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getSystemCluster = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/cluster/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * List of all available network address cards
 * @method
 * @name Vulture4Api#getSystemNetif
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getSystemNetif = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/netif/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Refresh list of network cards
 * @method
 * @name Vulture4Api#postSystemNetifRefresh
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.postSystemNetifRefresh = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/netif/refresh/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * List of all network address
 * @method
 * @name Vulture4Api#getSystemNetaddr
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getSystemNetaddr = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/netaddr/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get one network address
 * @method
 * @name Vulture4Api#getSystemNetaddrByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the network address
 */
 Vulture4Api.prototype.getSystemNetaddrByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/netaddr/{object_id}/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get CA certificate
 * @method
 * @name Vulture4Api#getSystemPkiGetCa
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getSystemPkiGetCa = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/pki/get_ca';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get certificate
 * @method
 * @name Vulture4Api#getSystemPkiGetCert
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getSystemPkiGetCert = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/pki/get_cert';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Multi tenants
 * @method
 * @name Vulture4Api#getSystemTenants
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getSystemTenants = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/tenants';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Create a tenant
 * @method
 * @name Vulture4Api#postSystemTenants
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.postSystemTenants = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/tenants';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Multi tenants
 * @method
 * @name Vulture4Api#getSystemTenantsByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the tenant
 */
 Vulture4Api.prototype.getSystemTenantsByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/tenants/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Update a tenant
 * @method
 * @name Vulture4Api#putSystemTenantsByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the tenant
 */
 Vulture4Api.prototype.putSystemTenantsByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/tenants/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Delete a tenant
 * @method
 * @name Vulture4Api#deleteSystemTenantsByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the tenant
 */
 Vulture4Api.prototype.deleteSystemTenantsByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/tenants/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Virtual Machines
 * @method
 * @name Vulture4Api#getSystemVm
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getSystemVm = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/vm/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Virtual Machine
 * @method
 * @name Vulture4Api#getSystemVmByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the virtual machine
 */
 Vulture4Api.prototype.getSystemVmByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/vm/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * ZFS list
 * @method
 * @name Vulture4Api#getSystemZfs
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getSystemZfs = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/zfs/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * ZFS
 * @method
 * @name Vulture4Api#getSystemZfsByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the zfs
 */
 Vulture4Api.prototype.getSystemZfsByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/zfs/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Create ZFS
 * @method
 * @name Vulture4Api#postSystemZfsByObjectIdByAction
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the zfs
     * @param {} parameters.action - Action to execute
 */
 Vulture4Api.prototype.postSystemZfsByObjectIdByAction = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/system/zfs/{object_id}/{action}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
        
            path = path.replace('{action}', parameters['action']);
        
        


        if(parameters['action'] === undefined){
            deferred.reject(new Error('Missing required  parameter: action'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * List of Workflow
 * @method
 * @name Vulture4Api#getWorkflow
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.getWorkflow = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/workflow/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Create a workflow
 * @method
 * @name Vulture4Api#postWorkflow
 * @param {object} parameters - method options and parameters
 */
 Vulture4Api.prototype.postWorkflow = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/workflow/';
    var body = {}, queryParameters = {}, headers = {}, form = {};


    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Get a workflow configuration
 * @method
 * @name Vulture4Api#getWorkflowByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the worfklow
 */
 Vulture4Api.prototype.getWorkflowByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/workflow/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Edit a workflow
 * @method
 * @name Vulture4Api#postWorkflowByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the workflow
 */
 Vulture4Api.prototype.postWorkflowByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/workflow/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Delete a workflow
 * @method
 * @name Vulture4Api#deleteWorkflowByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the workflow
 */
 Vulture4Api.prototype.deleteWorkflowByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/workflow/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * List Groups/Users or Search Users
 * @method
 * @name Vulture4Api#getAuthenticationIdpByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the Portal
     * @param {} parameters.objectType - 
     * @param {} parameters.groupName - Groupe name to query. Required only if object_type is 'users'
     * @param {} parameters.search - Search string: Required only if object_type is search
 */
 Vulture4Api.prototype.getAuthenticationIdpByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/authentication/idp/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 

                if(parameters['objectType'] !== undefined){
                    queryParameters['object_type'] = parameters['objectType'];
                }
        
        
        


        if(parameters['objectType'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectType'));
            return deferred.promise;
        }
 

                if(parameters['groupName'] !== undefined){
                    queryParameters['group_name'] = parameters['groupName'];
                }
        
        
        


 

                if(parameters['search'] !== undefined){
                    queryParameters['search'] = parameters['search'];
                }
        
        
        


 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('GET', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Create an user
 * @method
 * @name Vulture4Api#postAuthenticationIdpUsersByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the Portal
 */
 Vulture4Api.prototype.postAuthenticationIdpUsersByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/authentication/idp/users/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Edit an user
 * @method
 * @name Vulture4Api#putAuthenticationIdpUsersByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the Portal
 */
 Vulture4Api.prototype.putAuthenticationIdpUsersByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/authentication/idp/users/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('PUT', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Delete an user
 * @method
 * @name Vulture4Api#deleteAuthenticationIdpUsersByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the portal
 */
 Vulture4Api.prototype.deleteAuthenticationIdpUsersByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/authentication/idp/users/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('DELETE', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };
/**
 * Create a group
 * @method
 * @name Vulture4Api#postAuthenticationIdpGroupsByObjectId
 * @param {object} parameters - method options and parameters
     * @param {} parameters.objectId - ID of the Portal
 */
 Vulture4Api.prototype.postAuthenticationIdpGroupsByObjectId = function(parameters){
    if(parameters === undefined) {
        parameters = {};
    }
    var deferred = Q.defer();
    var domain = this.domain,  path = '/authentication/idp/groups/{object_id}';
    var body = {}, queryParameters = {}, headers = {}, form = {};


        
            path = path.replace('{object_id}', parameters['objectId']);
        
        


        if(parameters['objectId'] === undefined){
            deferred.reject(new Error('Missing required  parameter: objectId'));
            return deferred.promise;
        }
 
    queryParameters = mergeQueryParams(parameters, queryParameters);

    this.request('POST', domain + path, parameters, body, headers, queryParameters, form, deferred);

    return deferred.promise;
 };

    return Vulture4Api;
})();

exports.Vulture4Api = Vulture4Api;
