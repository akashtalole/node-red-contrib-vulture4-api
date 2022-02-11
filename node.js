'use strict';
var lib = require('./lib.js');

module.exports = function (RED) {
    function Vulture4ApiNode(config) {
        RED.nodes.createNode(this, config);
        this.service = RED.nodes.getNode(config.service);
        this.method = config.method;
        this.getDarwinAclByObjectId_objectId = config.getDarwinAclByObjectId_objectId;
        this.getDarwinAclByObjectId_objectIdType = config.getDarwinAclByObjectId_objectIdType || 'str';
        this.putDarwinAclByObjectId_objectId = config.putDarwinAclByObjectId_objectId;
        this.putDarwinAclByObjectId_objectIdType = config.putDarwinAclByObjectId_objectIdType || 'str';
        this.getDarwinFilterByObjectId_objectId = config.getDarwinFilterByObjectId_objectId;
        this.getDarwinFilterByObjectId_objectIdType = config.getDarwinFilterByObjectId_objectIdType || 'str';
        this.getDarwinFilterByFilterTypeByResssource_filterType = config.getDarwinFilterByFilterTypeByResssource_filterType;
        this.getDarwinFilterByFilterTypeByResssource_filterTypeType = config.getDarwinFilterByFilterTypeByResssource_filterTypeType || 'str';
        this.getDarwinFilterByFilterTypeByResssource_ressource = config.getDarwinFilterByFilterTypeByResssource_ressource;
        this.getDarwinFilterByFilterTypeByResssource_ressourceType = config.getDarwinFilterByFilterTypeByResssource_ressourceType || 'str';
        this.getDarwinPolicyByObjectId_objectId = config.getDarwinPolicyByObjectId_objectId;
        this.getDarwinPolicyByObjectId_objectIdType = config.getDarwinPolicyByObjectId_objectIdType || 'str';
        this.putDarwinPolicyByObjectId_objectId = config.putDarwinPolicyByObjectId_objectId;
        this.putDarwinPolicyByObjectId_objectIdType = config.putDarwinPolicyByObjectId_objectIdType || 'str';
        this.deleteDarwinPolicyByObjectId_objectId = config.deleteDarwinPolicyByObjectId_objectId;
        this.deleteDarwinPolicyByObjectId_objectIdType = config.deleteDarwinPolicyByObjectId_objectIdType || 'str';
        this.postDarwinPolicyByObjectIdByAction_objectId = config.postDarwinPolicyByObjectIdByAction_objectId;
        this.postDarwinPolicyByObjectIdByAction_objectIdType = config.postDarwinPolicyByObjectIdByAction_objectIdType || 'str';
        this.postDarwinPolicyByObjectIdByAction_action = config.postDarwinPolicyByObjectIdByAction_action;
        this.postDarwinPolicyByObjectIdByAction_actionType = config.postDarwinPolicyByObjectIdByAction_actionType || 'str';
        this.postSystemConfigByListType_listType = config.postSystemConfigByListType_listType;
        this.postSystemConfigByListType_listTypeType = config.postSystemConfigByListType_listTypeType || 'str';
        this.getSystemNodeByObjectId_objectId = config.getSystemNodeByObjectId_objectId;
        this.getSystemNodeByObjectId_objectIdType = config.getSystemNodeByObjectId_objectIdType || 'str';
        this.postSystemNodeByObjectId_objectId = config.postSystemNodeByObjectId_objectId;
        this.postSystemNodeByObjectId_objectIdType = config.postSystemNodeByObjectId_objectIdType || 'str';
        this.putSystemNodeByObjectId_objectId = config.putSystemNodeByObjectId_objectId;
        this.putSystemNodeByObjectId_objectIdType = config.putSystemNodeByObjectId_objectIdType || 'str';
        this.patchSystemNodeByObjectId_objectId = config.patchSystemNodeByObjectId_objectId;
        this.patchSystemNodeByObjectId_objectIdType = config.patchSystemNodeByObjectId_objectIdType || 'str';
        this.getSystemNetaddrByObjectId_objectId = config.getSystemNetaddrByObjectId_objectId;
        this.getSystemNetaddrByObjectId_objectIdType = config.getSystemNetaddrByObjectId_objectIdType || 'str';
        this.getSystemTenantsByObjectId_objectId = config.getSystemTenantsByObjectId_objectId;
        this.getSystemTenantsByObjectId_objectIdType = config.getSystemTenantsByObjectId_objectIdType || 'str';
        this.putSystemTenantsByObjectId_objectId = config.putSystemTenantsByObjectId_objectId;
        this.putSystemTenantsByObjectId_objectIdType = config.putSystemTenantsByObjectId_objectIdType || 'str';
        this.deleteSystemTenantsByObjectId_objectId = config.deleteSystemTenantsByObjectId_objectId;
        this.deleteSystemTenantsByObjectId_objectIdType = config.deleteSystemTenantsByObjectId_objectIdType || 'str';
        this.getSystemVmByObjectId_objectId = config.getSystemVmByObjectId_objectId;
        this.getSystemVmByObjectId_objectIdType = config.getSystemVmByObjectId_objectIdType || 'str';
        this.getSystemZfsByObjectId_objectId = config.getSystemZfsByObjectId_objectId;
        this.getSystemZfsByObjectId_objectIdType = config.getSystemZfsByObjectId_objectIdType || 'str';
        this.postSystemZfsByObjectIdByAction_objectId = config.postSystemZfsByObjectIdByAction_objectId;
        this.postSystemZfsByObjectIdByAction_objectIdType = config.postSystemZfsByObjectIdByAction_objectIdType || 'str';
        this.postSystemZfsByObjectIdByAction_action = config.postSystemZfsByObjectIdByAction_action;
        this.postSystemZfsByObjectIdByAction_actionType = config.postSystemZfsByObjectIdByAction_actionType || 'str';
        this.getWorkflowByObjectId_objectId = config.getWorkflowByObjectId_objectId;
        this.getWorkflowByObjectId_objectIdType = config.getWorkflowByObjectId_objectIdType || 'str';
        this.postWorkflowByObjectId_objectId = config.postWorkflowByObjectId_objectId;
        this.postWorkflowByObjectId_objectIdType = config.postWorkflowByObjectId_objectIdType || 'str';
        this.deleteWorkflowByObjectId_objectId = config.deleteWorkflowByObjectId_objectId;
        this.deleteWorkflowByObjectId_objectIdType = config.deleteWorkflowByObjectId_objectIdType || 'str';
        this.getAuthenticationIdpByObjectId_objectId = config.getAuthenticationIdpByObjectId_objectId;
        this.getAuthenticationIdpByObjectId_objectIdType = config.getAuthenticationIdpByObjectId_objectIdType || 'str';
        this.getAuthenticationIdpByObjectId_objectType = config.getAuthenticationIdpByObjectId_objectType;
        this.getAuthenticationIdpByObjectId_objectTypeType = config.getAuthenticationIdpByObjectId_objectTypeType || 'str';
        this.getAuthenticationIdpByObjectId_groupName = config.getAuthenticationIdpByObjectId_groupName;
        this.getAuthenticationIdpByObjectId_groupNameType = config.getAuthenticationIdpByObjectId_groupNameType || 'str';
        this.getAuthenticationIdpByObjectId_search = config.getAuthenticationIdpByObjectId_search;
        this.getAuthenticationIdpByObjectId_searchType = config.getAuthenticationIdpByObjectId_searchType || 'str';
        this.postAuthenticationIdpUsersByObjectId_objectId = config.postAuthenticationIdpUsersByObjectId_objectId;
        this.postAuthenticationIdpUsersByObjectId_objectIdType = config.postAuthenticationIdpUsersByObjectId_objectIdType || 'str';
        this.putAuthenticationIdpUsersByObjectId_objectId = config.putAuthenticationIdpUsersByObjectId_objectId;
        this.putAuthenticationIdpUsersByObjectId_objectIdType = config.putAuthenticationIdpUsersByObjectId_objectIdType || 'str';
        this.deleteAuthenticationIdpUsersByObjectId_objectId = config.deleteAuthenticationIdpUsersByObjectId_objectId;
        this.deleteAuthenticationIdpUsersByObjectId_objectIdType = config.deleteAuthenticationIdpUsersByObjectId_objectIdType || 'str';
        this.postAuthenticationIdpGroupsByObjectId_objectId = config.postAuthenticationIdpGroupsByObjectId_objectId;
        this.postAuthenticationIdpGroupsByObjectId_objectIdType = config.postAuthenticationIdpGroupsByObjectId_objectIdType || 'str';
        var node = this;

        node.on('input', function (msg) {
            var errorFlag = false;
            var client;
            if (this.service && this.service.host) {
                client = new lib.Vulture4Api({ domain: this.service.host });
            } else {
                node.error('Host in configuration node is not specified.', msg);
                errorFlag = true;
            }
            if (!errorFlag) {
                client.body = msg.payload;
            }

            var result;
            if (!errorFlag && node.method === 'getDarwinAcl') {
                var getDarwinAcl_parameters = [];
                var getDarwinAcl_nodeParam;
                var getDarwinAcl_nodeParamType;
                result = client.getDarwinAcl(getDarwinAcl_parameters);
            }
            if (!errorFlag && node.method === 'postDarwinAcl') {
                var postDarwinAcl_parameters = [];
                var postDarwinAcl_nodeParam;
                var postDarwinAcl_nodeParamType;
                result = client.postDarwinAcl(postDarwinAcl_parameters);
            }
            if (!errorFlag && node.method === 'getDarwinAclByObjectId') {
                var getDarwinAclByObjectId_parameters = [];
                var getDarwinAclByObjectId_nodeParam;
                var getDarwinAclByObjectId_nodeParamType;

                getDarwinAclByObjectId_nodeParam = node.getDarwinAclByObjectId_objectId;
                getDarwinAclByObjectId_nodeParamType = node.getDarwinAclByObjectId_objectIdType;
                if (getDarwinAclByObjectId_nodeParamType === 'str') {
                    getDarwinAclByObjectId_parameters.objectId = getDarwinAclByObjectId_nodeParam || '';
                } else {
                    getDarwinAclByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, getDarwinAclByObjectId_nodeParam);
                }
                getDarwinAclByObjectId_parameters.objectId = !!getDarwinAclByObjectId_parameters.objectId ? getDarwinAclByObjectId_parameters.objectId : msg.payload;
                                result = client.getDarwinAclByObjectId(getDarwinAclByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'putDarwinAclByObjectId') {
                var putDarwinAclByObjectId_parameters = [];
                var putDarwinAclByObjectId_nodeParam;
                var putDarwinAclByObjectId_nodeParamType;

                putDarwinAclByObjectId_nodeParam = node.putDarwinAclByObjectId_objectId;
                putDarwinAclByObjectId_nodeParamType = node.putDarwinAclByObjectId_objectIdType;
                if (putDarwinAclByObjectId_nodeParamType === 'str') {
                    putDarwinAclByObjectId_parameters.objectId = putDarwinAclByObjectId_nodeParam || '';
                } else {
                    putDarwinAclByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, putDarwinAclByObjectId_nodeParam);
                }
                putDarwinAclByObjectId_parameters.objectId = !!putDarwinAclByObjectId_parameters.objectId ? putDarwinAclByObjectId_parameters.objectId : msg.payload;
                                result = client.putDarwinAclByObjectId(putDarwinAclByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'getDarwinFilter') {
                var getDarwinFilter_parameters = [];
                var getDarwinFilter_nodeParam;
                var getDarwinFilter_nodeParamType;
                result = client.getDarwinFilter(getDarwinFilter_parameters);
            }
            if (!errorFlag && node.method === 'getDarwinFilterByObjectId') {
                var getDarwinFilterByObjectId_parameters = [];
                var getDarwinFilterByObjectId_nodeParam;
                var getDarwinFilterByObjectId_nodeParamType;

                getDarwinFilterByObjectId_nodeParam = node.getDarwinFilterByObjectId_objectId;
                getDarwinFilterByObjectId_nodeParamType = node.getDarwinFilterByObjectId_objectIdType;
                if (getDarwinFilterByObjectId_nodeParamType === 'str') {
                    getDarwinFilterByObjectId_parameters.objectId = getDarwinFilterByObjectId_nodeParam || '';
                } else {
                    getDarwinFilterByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, getDarwinFilterByObjectId_nodeParam);
                }
                getDarwinFilterByObjectId_parameters.objectId = !!getDarwinFilterByObjectId_parameters.objectId ? getDarwinFilterByObjectId_parameters.objectId : msg.payload;
                                result = client.getDarwinFilterByObjectId(getDarwinFilterByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'getDarwinFilterTypes') {
                var getDarwinFilterTypes_parameters = [];
                var getDarwinFilterTypes_nodeParam;
                var getDarwinFilterTypes_nodeParamType;
                result = client.getDarwinFilterTypes(getDarwinFilterTypes_parameters);
            }
            if (!errorFlag && node.method === 'getDarwinFilterByFilterTypeByResssource') {
                var getDarwinFilterByFilterTypeByResssource_parameters = [];
                var getDarwinFilterByFilterTypeByResssource_nodeParam;
                var getDarwinFilterByFilterTypeByResssource_nodeParamType;

                getDarwinFilterByFilterTypeByResssource_nodeParam = node.getDarwinFilterByFilterTypeByResssource_filterType;
                getDarwinFilterByFilterTypeByResssource_nodeParamType = node.getDarwinFilterByFilterTypeByResssource_filterTypeType;
                if (getDarwinFilterByFilterTypeByResssource_nodeParamType === 'str') {
                    getDarwinFilterByFilterTypeByResssource_parameters.filterType = getDarwinFilterByFilterTypeByResssource_nodeParam || '';
                } else {
                    getDarwinFilterByFilterTypeByResssource_parameters.filterType = RED.util.getMessageProperty(msg, getDarwinFilterByFilterTypeByResssource_nodeParam);
                }
                getDarwinFilterByFilterTypeByResssource_parameters.filterType = !!getDarwinFilterByFilterTypeByResssource_parameters.filterType ? getDarwinFilterByFilterTypeByResssource_parameters.filterType : msg.payload;
                
                getDarwinFilterByFilterTypeByResssource_nodeParam = node.getDarwinFilterByFilterTypeByResssource_ressource;
                getDarwinFilterByFilterTypeByResssource_nodeParamType = node.getDarwinFilterByFilterTypeByResssource_ressourceType;
                if (getDarwinFilterByFilterTypeByResssource_nodeParamType === 'str') {
                    getDarwinFilterByFilterTypeByResssource_parameters.ressource = getDarwinFilterByFilterTypeByResssource_nodeParam || '';
                } else {
                    getDarwinFilterByFilterTypeByResssource_parameters.ressource = RED.util.getMessageProperty(msg, getDarwinFilterByFilterTypeByResssource_nodeParam);
                }
                getDarwinFilterByFilterTypeByResssource_parameters.ressource = !!getDarwinFilterByFilterTypeByResssource_parameters.ressource ? getDarwinFilterByFilterTypeByResssource_parameters.ressource : msg.payload;
                                result = client.getDarwinFilterByFilterTypeByResssource(getDarwinFilterByFilterTypeByResssource_parameters);
            }
            if (!errorFlag && node.method === 'getDarwinPolicy') {
                var getDarwinPolicy_parameters = [];
                var getDarwinPolicy_nodeParam;
                var getDarwinPolicy_nodeParamType;
                result = client.getDarwinPolicy(getDarwinPolicy_parameters);
            }
            if (!errorFlag && node.method === 'postDarwinPolicy') {
                var postDarwinPolicy_parameters = [];
                var postDarwinPolicy_nodeParam;
                var postDarwinPolicy_nodeParamType;
                result = client.postDarwinPolicy(postDarwinPolicy_parameters);
            }
            if (!errorFlag && node.method === 'getDarwinPolicyByObjectId') {
                var getDarwinPolicyByObjectId_parameters = [];
                var getDarwinPolicyByObjectId_nodeParam;
                var getDarwinPolicyByObjectId_nodeParamType;

                getDarwinPolicyByObjectId_nodeParam = node.getDarwinPolicyByObjectId_objectId;
                getDarwinPolicyByObjectId_nodeParamType = node.getDarwinPolicyByObjectId_objectIdType;
                if (getDarwinPolicyByObjectId_nodeParamType === 'str') {
                    getDarwinPolicyByObjectId_parameters.objectId = getDarwinPolicyByObjectId_nodeParam || '';
                } else {
                    getDarwinPolicyByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, getDarwinPolicyByObjectId_nodeParam);
                }
                getDarwinPolicyByObjectId_parameters.objectId = !!getDarwinPolicyByObjectId_parameters.objectId ? getDarwinPolicyByObjectId_parameters.objectId : msg.payload;
                                result = client.getDarwinPolicyByObjectId(getDarwinPolicyByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'putDarwinPolicyByObjectId') {
                var putDarwinPolicyByObjectId_parameters = [];
                var putDarwinPolicyByObjectId_nodeParam;
                var putDarwinPolicyByObjectId_nodeParamType;

                putDarwinPolicyByObjectId_nodeParam = node.putDarwinPolicyByObjectId_objectId;
                putDarwinPolicyByObjectId_nodeParamType = node.putDarwinPolicyByObjectId_objectIdType;
                if (putDarwinPolicyByObjectId_nodeParamType === 'str') {
                    putDarwinPolicyByObjectId_parameters.objectId = putDarwinPolicyByObjectId_nodeParam || '';
                } else {
                    putDarwinPolicyByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, putDarwinPolicyByObjectId_nodeParam);
                }
                putDarwinPolicyByObjectId_parameters.objectId = !!putDarwinPolicyByObjectId_parameters.objectId ? putDarwinPolicyByObjectId_parameters.objectId : msg.payload;
                                result = client.putDarwinPolicyByObjectId(putDarwinPolicyByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'deleteDarwinPolicyByObjectId') {
                var deleteDarwinPolicyByObjectId_parameters = [];
                var deleteDarwinPolicyByObjectId_nodeParam;
                var deleteDarwinPolicyByObjectId_nodeParamType;

                deleteDarwinPolicyByObjectId_nodeParam = node.deleteDarwinPolicyByObjectId_objectId;
                deleteDarwinPolicyByObjectId_nodeParamType = node.deleteDarwinPolicyByObjectId_objectIdType;
                if (deleteDarwinPolicyByObjectId_nodeParamType === 'str') {
                    deleteDarwinPolicyByObjectId_parameters.objectId = deleteDarwinPolicyByObjectId_nodeParam || '';
                } else {
                    deleteDarwinPolicyByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, deleteDarwinPolicyByObjectId_nodeParam);
                }
                deleteDarwinPolicyByObjectId_parameters.objectId = !!deleteDarwinPolicyByObjectId_parameters.objectId ? deleteDarwinPolicyByObjectId_parameters.objectId : msg.payload;
                                result = client.deleteDarwinPolicyByObjectId(deleteDarwinPolicyByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'postDarwinPolicyByObjectIdByAction') {
                var postDarwinPolicyByObjectIdByAction_parameters = [];
                var postDarwinPolicyByObjectIdByAction_nodeParam;
                var postDarwinPolicyByObjectIdByAction_nodeParamType;

                postDarwinPolicyByObjectIdByAction_nodeParam = node.postDarwinPolicyByObjectIdByAction_objectId;
                postDarwinPolicyByObjectIdByAction_nodeParamType = node.postDarwinPolicyByObjectIdByAction_objectIdType;
                if (postDarwinPolicyByObjectIdByAction_nodeParamType === 'str') {
                    postDarwinPolicyByObjectIdByAction_parameters.objectId = postDarwinPolicyByObjectIdByAction_nodeParam || '';
                } else {
                    postDarwinPolicyByObjectIdByAction_parameters.objectId = RED.util.getMessageProperty(msg, postDarwinPolicyByObjectIdByAction_nodeParam);
                }
                postDarwinPolicyByObjectIdByAction_parameters.objectId = !!postDarwinPolicyByObjectIdByAction_parameters.objectId ? postDarwinPolicyByObjectIdByAction_parameters.objectId : msg.payload;
                
                postDarwinPolicyByObjectIdByAction_nodeParam = node.postDarwinPolicyByObjectIdByAction_action;
                postDarwinPolicyByObjectIdByAction_nodeParamType = node.postDarwinPolicyByObjectIdByAction_actionType;
                if (postDarwinPolicyByObjectIdByAction_nodeParamType === 'str') {
                    postDarwinPolicyByObjectIdByAction_parameters.action = postDarwinPolicyByObjectIdByAction_nodeParam || '';
                } else {
                    postDarwinPolicyByObjectIdByAction_parameters.action = RED.util.getMessageProperty(msg, postDarwinPolicyByObjectIdByAction_nodeParam);
                }
                postDarwinPolicyByObjectIdByAction_parameters.action = !!postDarwinPolicyByObjectIdByAction_parameters.action ? postDarwinPolicyByObjectIdByAction_parameters.action : msg.payload;
                                result = client.postDarwinPolicyByObjectIdByAction(postDarwinPolicyByObjectIdByAction_parameters);
            }
            if (!errorFlag && node.method === 'getSystemConfig') {
                var getSystemConfig_parameters = [];
                var getSystemConfig_nodeParam;
                var getSystemConfig_nodeParamType;
                result = client.getSystemConfig(getSystemConfig_parameters);
            }
            if (!errorFlag && node.method === 'putSystemConfig') {
                var putSystemConfig_parameters = [];
                var putSystemConfig_nodeParam;
                var putSystemConfig_nodeParamType;
                result = client.putSystemConfig(putSystemConfig_parameters);
            }
            if (!errorFlag && node.method === 'postSystemConfigByListType') {
                var postSystemConfigByListType_parameters = [];
                var postSystemConfigByListType_nodeParam;
                var postSystemConfigByListType_nodeParamType;

                postSystemConfigByListType_nodeParam = node.postSystemConfigByListType_listType;
                postSystemConfigByListType_nodeParamType = node.postSystemConfigByListType_listTypeType;
                if (postSystemConfigByListType_nodeParamType === 'str') {
                    postSystemConfigByListType_parameters.listType = postSystemConfigByListType_nodeParam || '';
                } else {
                    postSystemConfigByListType_parameters.listType = RED.util.getMessageProperty(msg, postSystemConfigByListType_nodeParam);
                }
                postSystemConfigByListType_parameters.listType = !!postSystemConfigByListType_parameters.listType ? postSystemConfigByListType_parameters.listType : msg.payload;
                                result = client.postSystemConfigByListType(postSystemConfigByListType_parameters);
            }
            if (!errorFlag && node.method === 'getSystemNode') {
                var getSystemNode_parameters = [];
                var getSystemNode_nodeParam;
                var getSystemNode_nodeParamType;
                result = client.getSystemNode(getSystemNode_parameters);
            }
            if (!errorFlag && node.method === 'getSystemNodeByObjectId') {
                var getSystemNodeByObjectId_parameters = [];
                var getSystemNodeByObjectId_nodeParam;
                var getSystemNodeByObjectId_nodeParamType;

                getSystemNodeByObjectId_nodeParam = node.getSystemNodeByObjectId_objectId;
                getSystemNodeByObjectId_nodeParamType = node.getSystemNodeByObjectId_objectIdType;
                if (getSystemNodeByObjectId_nodeParamType === 'str') {
                    getSystemNodeByObjectId_parameters.objectId = getSystemNodeByObjectId_nodeParam || '';
                } else {
                    getSystemNodeByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, getSystemNodeByObjectId_nodeParam);
                }
                getSystemNodeByObjectId_parameters.objectId = !!getSystemNodeByObjectId_parameters.objectId ? getSystemNodeByObjectId_parameters.objectId : msg.payload;
                                result = client.getSystemNodeByObjectId(getSystemNodeByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'postSystemNodeByObjectId') {
                var postSystemNodeByObjectId_parameters = [];
                var postSystemNodeByObjectId_nodeParam;
                var postSystemNodeByObjectId_nodeParamType;

                postSystemNodeByObjectId_nodeParam = node.postSystemNodeByObjectId_objectId;
                postSystemNodeByObjectId_nodeParamType = node.postSystemNodeByObjectId_objectIdType;
                if (postSystemNodeByObjectId_nodeParamType === 'str') {
                    postSystemNodeByObjectId_parameters.objectId = postSystemNodeByObjectId_nodeParam || '';
                } else {
                    postSystemNodeByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, postSystemNodeByObjectId_nodeParam);
                }
                postSystemNodeByObjectId_parameters.objectId = !!postSystemNodeByObjectId_parameters.objectId ? postSystemNodeByObjectId_parameters.objectId : msg.payload;
                                result = client.postSystemNodeByObjectId(postSystemNodeByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'putSystemNodeByObjectId') {
                var putSystemNodeByObjectId_parameters = [];
                var putSystemNodeByObjectId_nodeParam;
                var putSystemNodeByObjectId_nodeParamType;

                putSystemNodeByObjectId_nodeParam = node.putSystemNodeByObjectId_objectId;
                putSystemNodeByObjectId_nodeParamType = node.putSystemNodeByObjectId_objectIdType;
                if (putSystemNodeByObjectId_nodeParamType === 'str') {
                    putSystemNodeByObjectId_parameters.objectId = putSystemNodeByObjectId_nodeParam || '';
                } else {
                    putSystemNodeByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, putSystemNodeByObjectId_nodeParam);
                }
                putSystemNodeByObjectId_parameters.objectId = !!putSystemNodeByObjectId_parameters.objectId ? putSystemNodeByObjectId_parameters.objectId : msg.payload;
                                result = client.putSystemNodeByObjectId(putSystemNodeByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'patchSystemNodeByObjectId') {
                var patchSystemNodeByObjectId_parameters = [];
                var patchSystemNodeByObjectId_nodeParam;
                var patchSystemNodeByObjectId_nodeParamType;

                patchSystemNodeByObjectId_nodeParam = node.patchSystemNodeByObjectId_objectId;
                patchSystemNodeByObjectId_nodeParamType = node.patchSystemNodeByObjectId_objectIdType;
                if (patchSystemNodeByObjectId_nodeParamType === 'str') {
                    patchSystemNodeByObjectId_parameters.objectId = patchSystemNodeByObjectId_nodeParam || '';
                } else {
                    patchSystemNodeByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, patchSystemNodeByObjectId_nodeParam);
                }
                patchSystemNodeByObjectId_parameters.objectId = !!patchSystemNodeByObjectId_parameters.objectId ? patchSystemNodeByObjectId_parameters.objectId : msg.payload;
                                result = client.patchSystemNodeByObjectId(patchSystemNodeByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'getSystemCluster') {
                var getSystemCluster_parameters = [];
                var getSystemCluster_nodeParam;
                var getSystemCluster_nodeParamType;
                result = client.getSystemCluster(getSystemCluster_parameters);
            }
            if (!errorFlag && node.method === 'getSystemNetif') {
                var getSystemNetif_parameters = [];
                var getSystemNetif_nodeParam;
                var getSystemNetif_nodeParamType;
                result = client.getSystemNetif(getSystemNetif_parameters);
            }
            if (!errorFlag && node.method === 'postSystemNetifRefresh') {
                var postSystemNetifRefresh_parameters = [];
                var postSystemNetifRefresh_nodeParam;
                var postSystemNetifRefresh_nodeParamType;
                result = client.postSystemNetifRefresh(postSystemNetifRefresh_parameters);
            }
            if (!errorFlag && node.method === 'getSystemNetaddr') {
                var getSystemNetaddr_parameters = [];
                var getSystemNetaddr_nodeParam;
                var getSystemNetaddr_nodeParamType;
                result = client.getSystemNetaddr(getSystemNetaddr_parameters);
            }
            if (!errorFlag && node.method === 'getSystemNetaddrByObjectId') {
                var getSystemNetaddrByObjectId_parameters = [];
                var getSystemNetaddrByObjectId_nodeParam;
                var getSystemNetaddrByObjectId_nodeParamType;

                getSystemNetaddrByObjectId_nodeParam = node.getSystemNetaddrByObjectId_objectId;
                getSystemNetaddrByObjectId_nodeParamType = node.getSystemNetaddrByObjectId_objectIdType;
                if (getSystemNetaddrByObjectId_nodeParamType === 'str') {
                    getSystemNetaddrByObjectId_parameters.objectId = getSystemNetaddrByObjectId_nodeParam || '';
                } else {
                    getSystemNetaddrByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, getSystemNetaddrByObjectId_nodeParam);
                }
                getSystemNetaddrByObjectId_parameters.objectId = !!getSystemNetaddrByObjectId_parameters.objectId ? getSystemNetaddrByObjectId_parameters.objectId : msg.payload;
                                result = client.getSystemNetaddrByObjectId(getSystemNetaddrByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'getSystemPkiGetCa') {
                var getSystemPkiGetCa_parameters = [];
                var getSystemPkiGetCa_nodeParam;
                var getSystemPkiGetCa_nodeParamType;
                result = client.getSystemPkiGetCa(getSystemPkiGetCa_parameters);
            }
            if (!errorFlag && node.method === 'getSystemPkiGetCert') {
                var getSystemPkiGetCert_parameters = [];
                var getSystemPkiGetCert_nodeParam;
                var getSystemPkiGetCert_nodeParamType;
                result = client.getSystemPkiGetCert(getSystemPkiGetCert_parameters);
            }
            if (!errorFlag && node.method === 'getSystemTenants') {
                var getSystemTenants_parameters = [];
                var getSystemTenants_nodeParam;
                var getSystemTenants_nodeParamType;
                result = client.getSystemTenants(getSystemTenants_parameters);
            }
            if (!errorFlag && node.method === 'postSystemTenants') {
                var postSystemTenants_parameters = [];
                var postSystemTenants_nodeParam;
                var postSystemTenants_nodeParamType;
                result = client.postSystemTenants(postSystemTenants_parameters);
            }
            if (!errorFlag && node.method === 'getSystemTenantsByObjectId') {
                var getSystemTenantsByObjectId_parameters = [];
                var getSystemTenantsByObjectId_nodeParam;
                var getSystemTenantsByObjectId_nodeParamType;

                getSystemTenantsByObjectId_nodeParam = node.getSystemTenantsByObjectId_objectId;
                getSystemTenantsByObjectId_nodeParamType = node.getSystemTenantsByObjectId_objectIdType;
                if (getSystemTenantsByObjectId_nodeParamType === 'str') {
                    getSystemTenantsByObjectId_parameters.objectId = getSystemTenantsByObjectId_nodeParam || '';
                } else {
                    getSystemTenantsByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, getSystemTenantsByObjectId_nodeParam);
                }
                getSystemTenantsByObjectId_parameters.objectId = !!getSystemTenantsByObjectId_parameters.objectId ? getSystemTenantsByObjectId_parameters.objectId : msg.payload;
                                result = client.getSystemTenantsByObjectId(getSystemTenantsByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'putSystemTenantsByObjectId') {
                var putSystemTenantsByObjectId_parameters = [];
                var putSystemTenantsByObjectId_nodeParam;
                var putSystemTenantsByObjectId_nodeParamType;

                putSystemTenantsByObjectId_nodeParam = node.putSystemTenantsByObjectId_objectId;
                putSystemTenantsByObjectId_nodeParamType = node.putSystemTenantsByObjectId_objectIdType;
                if (putSystemTenantsByObjectId_nodeParamType === 'str') {
                    putSystemTenantsByObjectId_parameters.objectId = putSystemTenantsByObjectId_nodeParam || '';
                } else {
                    putSystemTenantsByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, putSystemTenantsByObjectId_nodeParam);
                }
                putSystemTenantsByObjectId_parameters.objectId = !!putSystemTenantsByObjectId_parameters.objectId ? putSystemTenantsByObjectId_parameters.objectId : msg.payload;
                                result = client.putSystemTenantsByObjectId(putSystemTenantsByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'deleteSystemTenantsByObjectId') {
                var deleteSystemTenantsByObjectId_parameters = [];
                var deleteSystemTenantsByObjectId_nodeParam;
                var deleteSystemTenantsByObjectId_nodeParamType;

                deleteSystemTenantsByObjectId_nodeParam = node.deleteSystemTenantsByObjectId_objectId;
                deleteSystemTenantsByObjectId_nodeParamType = node.deleteSystemTenantsByObjectId_objectIdType;
                if (deleteSystemTenantsByObjectId_nodeParamType === 'str') {
                    deleteSystemTenantsByObjectId_parameters.objectId = deleteSystemTenantsByObjectId_nodeParam || '';
                } else {
                    deleteSystemTenantsByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, deleteSystemTenantsByObjectId_nodeParam);
                }
                deleteSystemTenantsByObjectId_parameters.objectId = !!deleteSystemTenantsByObjectId_parameters.objectId ? deleteSystemTenantsByObjectId_parameters.objectId : msg.payload;
                                result = client.deleteSystemTenantsByObjectId(deleteSystemTenantsByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'getSystemVm') {
                var getSystemVm_parameters = [];
                var getSystemVm_nodeParam;
                var getSystemVm_nodeParamType;
                result = client.getSystemVm(getSystemVm_parameters);
            }
            if (!errorFlag && node.method === 'getSystemVmByObjectId') {
                var getSystemVmByObjectId_parameters = [];
                var getSystemVmByObjectId_nodeParam;
                var getSystemVmByObjectId_nodeParamType;

                getSystemVmByObjectId_nodeParam = node.getSystemVmByObjectId_objectId;
                getSystemVmByObjectId_nodeParamType = node.getSystemVmByObjectId_objectIdType;
                if (getSystemVmByObjectId_nodeParamType === 'str') {
                    getSystemVmByObjectId_parameters.objectId = getSystemVmByObjectId_nodeParam || '';
                } else {
                    getSystemVmByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, getSystemVmByObjectId_nodeParam);
                }
                getSystemVmByObjectId_parameters.objectId = !!getSystemVmByObjectId_parameters.objectId ? getSystemVmByObjectId_parameters.objectId : msg.payload;
                                result = client.getSystemVmByObjectId(getSystemVmByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'getSystemZfs') {
                var getSystemZfs_parameters = [];
                var getSystemZfs_nodeParam;
                var getSystemZfs_nodeParamType;
                result = client.getSystemZfs(getSystemZfs_parameters);
            }
            if (!errorFlag && node.method === 'getSystemZfsByObjectId') {
                var getSystemZfsByObjectId_parameters = [];
                var getSystemZfsByObjectId_nodeParam;
                var getSystemZfsByObjectId_nodeParamType;

                getSystemZfsByObjectId_nodeParam = node.getSystemZfsByObjectId_objectId;
                getSystemZfsByObjectId_nodeParamType = node.getSystemZfsByObjectId_objectIdType;
                if (getSystemZfsByObjectId_nodeParamType === 'str') {
                    getSystemZfsByObjectId_parameters.objectId = getSystemZfsByObjectId_nodeParam || '';
                } else {
                    getSystemZfsByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, getSystemZfsByObjectId_nodeParam);
                }
                getSystemZfsByObjectId_parameters.objectId = !!getSystemZfsByObjectId_parameters.objectId ? getSystemZfsByObjectId_parameters.objectId : msg.payload;
                                result = client.getSystemZfsByObjectId(getSystemZfsByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'postSystemZfsByObjectIdByAction') {
                var postSystemZfsByObjectIdByAction_parameters = [];
                var postSystemZfsByObjectIdByAction_nodeParam;
                var postSystemZfsByObjectIdByAction_nodeParamType;

                postSystemZfsByObjectIdByAction_nodeParam = node.postSystemZfsByObjectIdByAction_objectId;
                postSystemZfsByObjectIdByAction_nodeParamType = node.postSystemZfsByObjectIdByAction_objectIdType;
                if (postSystemZfsByObjectIdByAction_nodeParamType === 'str') {
                    postSystemZfsByObjectIdByAction_parameters.objectId = postSystemZfsByObjectIdByAction_nodeParam || '';
                } else {
                    postSystemZfsByObjectIdByAction_parameters.objectId = RED.util.getMessageProperty(msg, postSystemZfsByObjectIdByAction_nodeParam);
                }
                postSystemZfsByObjectIdByAction_parameters.objectId = !!postSystemZfsByObjectIdByAction_parameters.objectId ? postSystemZfsByObjectIdByAction_parameters.objectId : msg.payload;
                
                postSystemZfsByObjectIdByAction_nodeParam = node.postSystemZfsByObjectIdByAction_action;
                postSystemZfsByObjectIdByAction_nodeParamType = node.postSystemZfsByObjectIdByAction_actionType;
                if (postSystemZfsByObjectIdByAction_nodeParamType === 'str') {
                    postSystemZfsByObjectIdByAction_parameters.action = postSystemZfsByObjectIdByAction_nodeParam || '';
                } else {
                    postSystemZfsByObjectIdByAction_parameters.action = RED.util.getMessageProperty(msg, postSystemZfsByObjectIdByAction_nodeParam);
                }
                postSystemZfsByObjectIdByAction_parameters.action = !!postSystemZfsByObjectIdByAction_parameters.action ? postSystemZfsByObjectIdByAction_parameters.action : msg.payload;
                                result = client.postSystemZfsByObjectIdByAction(postSystemZfsByObjectIdByAction_parameters);
            }
            if (!errorFlag && node.method === 'getWorkflow') {
                var getWorkflow_parameters = [];
                var getWorkflow_nodeParam;
                var getWorkflow_nodeParamType;
                result = client.getWorkflow(getWorkflow_parameters);
            }
            if (!errorFlag && node.method === 'postWorkflow') {
                var postWorkflow_parameters = [];
                var postWorkflow_nodeParam;
                var postWorkflow_nodeParamType;
                result = client.postWorkflow(postWorkflow_parameters);
            }
            if (!errorFlag && node.method === 'getWorkflowByObjectId') {
                var getWorkflowByObjectId_parameters = [];
                var getWorkflowByObjectId_nodeParam;
                var getWorkflowByObjectId_nodeParamType;

                getWorkflowByObjectId_nodeParam = node.getWorkflowByObjectId_objectId;
                getWorkflowByObjectId_nodeParamType = node.getWorkflowByObjectId_objectIdType;
                if (getWorkflowByObjectId_nodeParamType === 'str') {
                    getWorkflowByObjectId_parameters.objectId = getWorkflowByObjectId_nodeParam || '';
                } else {
                    getWorkflowByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, getWorkflowByObjectId_nodeParam);
                }
                getWorkflowByObjectId_parameters.objectId = !!getWorkflowByObjectId_parameters.objectId ? getWorkflowByObjectId_parameters.objectId : msg.payload;
                                result = client.getWorkflowByObjectId(getWorkflowByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'postWorkflowByObjectId') {
                var postWorkflowByObjectId_parameters = [];
                var postWorkflowByObjectId_nodeParam;
                var postWorkflowByObjectId_nodeParamType;

                postWorkflowByObjectId_nodeParam = node.postWorkflowByObjectId_objectId;
                postWorkflowByObjectId_nodeParamType = node.postWorkflowByObjectId_objectIdType;
                if (postWorkflowByObjectId_nodeParamType === 'str') {
                    postWorkflowByObjectId_parameters.objectId = postWorkflowByObjectId_nodeParam || '';
                } else {
                    postWorkflowByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, postWorkflowByObjectId_nodeParam);
                }
                postWorkflowByObjectId_parameters.objectId = !!postWorkflowByObjectId_parameters.objectId ? postWorkflowByObjectId_parameters.objectId : msg.payload;
                                result = client.postWorkflowByObjectId(postWorkflowByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'deleteWorkflowByObjectId') {
                var deleteWorkflowByObjectId_parameters = [];
                var deleteWorkflowByObjectId_nodeParam;
                var deleteWorkflowByObjectId_nodeParamType;

                deleteWorkflowByObjectId_nodeParam = node.deleteWorkflowByObjectId_objectId;
                deleteWorkflowByObjectId_nodeParamType = node.deleteWorkflowByObjectId_objectIdType;
                if (deleteWorkflowByObjectId_nodeParamType === 'str') {
                    deleteWorkflowByObjectId_parameters.objectId = deleteWorkflowByObjectId_nodeParam || '';
                } else {
                    deleteWorkflowByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, deleteWorkflowByObjectId_nodeParam);
                }
                deleteWorkflowByObjectId_parameters.objectId = !!deleteWorkflowByObjectId_parameters.objectId ? deleteWorkflowByObjectId_parameters.objectId : msg.payload;
                                result = client.deleteWorkflowByObjectId(deleteWorkflowByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'getAuthenticationIdpByObjectId') {
                var getAuthenticationIdpByObjectId_parameters = [];
                var getAuthenticationIdpByObjectId_nodeParam;
                var getAuthenticationIdpByObjectId_nodeParamType;

                getAuthenticationIdpByObjectId_nodeParam = node.getAuthenticationIdpByObjectId_objectId;
                getAuthenticationIdpByObjectId_nodeParamType = node.getAuthenticationIdpByObjectId_objectIdType;
                if (getAuthenticationIdpByObjectId_nodeParamType === 'str') {
                    getAuthenticationIdpByObjectId_parameters.objectId = getAuthenticationIdpByObjectId_nodeParam || '';
                } else {
                    getAuthenticationIdpByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, getAuthenticationIdpByObjectId_nodeParam);
                }
                getAuthenticationIdpByObjectId_parameters.objectId = !!getAuthenticationIdpByObjectId_parameters.objectId ? getAuthenticationIdpByObjectId_parameters.objectId : msg.payload;
                
                getAuthenticationIdpByObjectId_nodeParam = node.getAuthenticationIdpByObjectId_objectType;
                getAuthenticationIdpByObjectId_nodeParamType = node.getAuthenticationIdpByObjectId_objectTypeType;
                if (getAuthenticationIdpByObjectId_nodeParamType === 'str') {
                    getAuthenticationIdpByObjectId_parameters.objectType = getAuthenticationIdpByObjectId_nodeParam || '';
                } else {
                    getAuthenticationIdpByObjectId_parameters.objectType = RED.util.getMessageProperty(msg, getAuthenticationIdpByObjectId_nodeParam);
                }
                getAuthenticationIdpByObjectId_parameters.objectType = !!getAuthenticationIdpByObjectId_parameters.objectType ? getAuthenticationIdpByObjectId_parameters.objectType : msg.payload;
                
                getAuthenticationIdpByObjectId_nodeParam = node.getAuthenticationIdpByObjectId_groupName;
                getAuthenticationIdpByObjectId_nodeParamType = node.getAuthenticationIdpByObjectId_groupNameType;
                if (getAuthenticationIdpByObjectId_nodeParamType === 'str') {
                    getAuthenticationIdpByObjectId_parameters.groupName = getAuthenticationIdpByObjectId_nodeParam || '';
                } else {
                    getAuthenticationIdpByObjectId_parameters.groupName = RED.util.getMessageProperty(msg, getAuthenticationIdpByObjectId_nodeParam);
                }
                getAuthenticationIdpByObjectId_parameters.groupName = !!getAuthenticationIdpByObjectId_parameters.groupName ? getAuthenticationIdpByObjectId_parameters.groupName : msg.payload;
                
                getAuthenticationIdpByObjectId_nodeParam = node.getAuthenticationIdpByObjectId_search;
                getAuthenticationIdpByObjectId_nodeParamType = node.getAuthenticationIdpByObjectId_searchType;
                if (getAuthenticationIdpByObjectId_nodeParamType === 'str') {
                    getAuthenticationIdpByObjectId_parameters.search = getAuthenticationIdpByObjectId_nodeParam || '';
                } else {
                    getAuthenticationIdpByObjectId_parameters.search = RED.util.getMessageProperty(msg, getAuthenticationIdpByObjectId_nodeParam);
                }
                getAuthenticationIdpByObjectId_parameters.search = !!getAuthenticationIdpByObjectId_parameters.search ? getAuthenticationIdpByObjectId_parameters.search : msg.payload;
                                result = client.getAuthenticationIdpByObjectId(getAuthenticationIdpByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'postAuthenticationIdpUsersByObjectId') {
                var postAuthenticationIdpUsersByObjectId_parameters = [];
                var postAuthenticationIdpUsersByObjectId_nodeParam;
                var postAuthenticationIdpUsersByObjectId_nodeParamType;

                postAuthenticationIdpUsersByObjectId_nodeParam = node.postAuthenticationIdpUsersByObjectId_objectId;
                postAuthenticationIdpUsersByObjectId_nodeParamType = node.postAuthenticationIdpUsersByObjectId_objectIdType;
                if (postAuthenticationIdpUsersByObjectId_nodeParamType === 'str') {
                    postAuthenticationIdpUsersByObjectId_parameters.objectId = postAuthenticationIdpUsersByObjectId_nodeParam || '';
                } else {
                    postAuthenticationIdpUsersByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, postAuthenticationIdpUsersByObjectId_nodeParam);
                }
                postAuthenticationIdpUsersByObjectId_parameters.objectId = !!postAuthenticationIdpUsersByObjectId_parameters.objectId ? postAuthenticationIdpUsersByObjectId_parameters.objectId : msg.payload;
                                result = client.postAuthenticationIdpUsersByObjectId(postAuthenticationIdpUsersByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'putAuthenticationIdpUsersByObjectId') {
                var putAuthenticationIdpUsersByObjectId_parameters = [];
                var putAuthenticationIdpUsersByObjectId_nodeParam;
                var putAuthenticationIdpUsersByObjectId_nodeParamType;

                putAuthenticationIdpUsersByObjectId_nodeParam = node.putAuthenticationIdpUsersByObjectId_objectId;
                putAuthenticationIdpUsersByObjectId_nodeParamType = node.putAuthenticationIdpUsersByObjectId_objectIdType;
                if (putAuthenticationIdpUsersByObjectId_nodeParamType === 'str') {
                    putAuthenticationIdpUsersByObjectId_parameters.objectId = putAuthenticationIdpUsersByObjectId_nodeParam || '';
                } else {
                    putAuthenticationIdpUsersByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, putAuthenticationIdpUsersByObjectId_nodeParam);
                }
                putAuthenticationIdpUsersByObjectId_parameters.objectId = !!putAuthenticationIdpUsersByObjectId_parameters.objectId ? putAuthenticationIdpUsersByObjectId_parameters.objectId : msg.payload;
                                result = client.putAuthenticationIdpUsersByObjectId(putAuthenticationIdpUsersByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'deleteAuthenticationIdpUsersByObjectId') {
                var deleteAuthenticationIdpUsersByObjectId_parameters = [];
                var deleteAuthenticationIdpUsersByObjectId_nodeParam;
                var deleteAuthenticationIdpUsersByObjectId_nodeParamType;

                deleteAuthenticationIdpUsersByObjectId_nodeParam = node.deleteAuthenticationIdpUsersByObjectId_objectId;
                deleteAuthenticationIdpUsersByObjectId_nodeParamType = node.deleteAuthenticationIdpUsersByObjectId_objectIdType;
                if (deleteAuthenticationIdpUsersByObjectId_nodeParamType === 'str') {
                    deleteAuthenticationIdpUsersByObjectId_parameters.objectId = deleteAuthenticationIdpUsersByObjectId_nodeParam || '';
                } else {
                    deleteAuthenticationIdpUsersByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, deleteAuthenticationIdpUsersByObjectId_nodeParam);
                }
                deleteAuthenticationIdpUsersByObjectId_parameters.objectId = !!deleteAuthenticationIdpUsersByObjectId_parameters.objectId ? deleteAuthenticationIdpUsersByObjectId_parameters.objectId : msg.payload;
                                result = client.deleteAuthenticationIdpUsersByObjectId(deleteAuthenticationIdpUsersByObjectId_parameters);
            }
            if (!errorFlag && node.method === 'postAuthenticationIdpGroupsByObjectId') {
                var postAuthenticationIdpGroupsByObjectId_parameters = [];
                var postAuthenticationIdpGroupsByObjectId_nodeParam;
                var postAuthenticationIdpGroupsByObjectId_nodeParamType;

                postAuthenticationIdpGroupsByObjectId_nodeParam = node.postAuthenticationIdpGroupsByObjectId_objectId;
                postAuthenticationIdpGroupsByObjectId_nodeParamType = node.postAuthenticationIdpGroupsByObjectId_objectIdType;
                if (postAuthenticationIdpGroupsByObjectId_nodeParamType === 'str') {
                    postAuthenticationIdpGroupsByObjectId_parameters.objectId = postAuthenticationIdpGroupsByObjectId_nodeParam || '';
                } else {
                    postAuthenticationIdpGroupsByObjectId_parameters.objectId = RED.util.getMessageProperty(msg, postAuthenticationIdpGroupsByObjectId_nodeParam);
                }
                postAuthenticationIdpGroupsByObjectId_parameters.objectId = !!postAuthenticationIdpGroupsByObjectId_parameters.objectId ? postAuthenticationIdpGroupsByObjectId_parameters.objectId : msg.payload;
                                result = client.postAuthenticationIdpGroupsByObjectId(postAuthenticationIdpGroupsByObjectId_parameters);
            }
            if (!errorFlag && result === undefined) {
                node.error('Method is not specified.', msg);
                errorFlag = true;
            }
            var setData = function (msg, data) {
                if (data) {
                    if (data.response) {
                        if (data.response.statusCode) {
                            msg.statusCode = data.response.statusCode;
                        }
                        if (data.response.headers) {
                            msg.headers = data.response.headers;
                        }
                        if (data.response.request && data.response.request.uri && data.response.request.uri.href) {
                            msg.responseUrl = data.response.request.uri.href;
                        }
                    }
                    if (data.body) {
                        msg.payload = data.body;
                    }
                }
                return msg;
            };
            if (!errorFlag) {
                node.status({ fill: 'blue', shape: 'dot', text: 'Vulture4Api.status.requesting' });
                result.then(function (data) {
                    node.send(setData(msg, data));
                    node.status({});
                }).catch(function (error) {
                    var message = null;
                    if (error && error.body && error.body.message) {
                        message = error.body.message;
                    }
                    node.error(message, setData(msg, error));
                    node.status({ fill: 'red', shape: 'ring', text: 'node-red:common.status.error' });
                });
            }
        });
    }

    RED.nodes.registerType('vulture4-api', Vulture4ApiNode);
    function Vulture4ApiServiceNode(n) {
        RED.nodes.createNode(this, n);
        this.host = n.host;

    }

    RED.nodes.registerType('vulture4-api-service', Vulture4ApiServiceNode, {
        credentials: {
            temp: { type: 'text' }
        }
    });
};
