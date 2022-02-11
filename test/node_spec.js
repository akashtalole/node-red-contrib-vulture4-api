var should = require('should');
var helper = require('node-red-node-test-helper');
var node = require('../node.js');

helper.init(require.resolve('node-red'));

describe('vulture4-api node', function () {

    before(function (done) {
        helper.startServer(done);
    });

    after(function (done) {
        helper.stopServer(done);
    });

    afterEach(function () {
        helper.unload();
    });

    it('should be loaded', function (done) {
        var flow = [{ id: 'n1', type: 'vulture4-api', name: 'vulture4-api' }];
        helper.load(node, flow, function () {
            var n1 = helper.getNode('n1');
            n1.should.have.property('name', 'vulture4-api');
            done();
        });
    });

    it('should handle getDarwinAcl()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getDarwinAcl',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postDarwinAcl()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'postDarwinAcl',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDarwinAclByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getDarwinAclByObjectId',
                getDarwinAclByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle putDarwinAclByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'putDarwinAclByObjectId',
                putDarwinAclByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDarwinFilter()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getDarwinFilter',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDarwinFilterByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getDarwinFilterByObjectId',
                getDarwinFilterByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDarwinFilterTypes()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getDarwinFilterTypes',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDarwinFilterByFilterTypeByResssource()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getDarwinFilterByFilterTypeByResssource',
                getDarwinFilterByFilterTypeByResssource_filterType: '<node property>', // (1) define node properties
                getDarwinFilterByFilterTypeByResssource_ressource: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDarwinPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getDarwinPolicy',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postDarwinPolicy()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'postDarwinPolicy',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getDarwinPolicyByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getDarwinPolicyByObjectId',
                getDarwinPolicyByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle putDarwinPolicyByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'putDarwinPolicyByObjectId',
                putDarwinPolicyByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteDarwinPolicyByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'deleteDarwinPolicyByObjectId',
                deleteDarwinPolicyByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postDarwinPolicyByObjectIdByAction()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'postDarwinPolicyByObjectIdByAction',
                postDarwinPolicyByObjectIdByAction_objectId: '<node property>', // (1) define node properties
                postDarwinPolicyByObjectIdByAction_action: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemConfig()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemConfig',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle putSystemConfig()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'putSystemConfig',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postSystemConfigByListType()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'postSystemConfigByListType',
                postSystemConfigByListType_listType: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemNode()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemNode',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemNodeByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemNodeByObjectId',
                getSystemNodeByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postSystemNodeByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'postSystemNodeByObjectId',
                postSystemNodeByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle putSystemNodeByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'putSystemNodeByObjectId',
                putSystemNodeByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle patchSystemNodeByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'patchSystemNodeByObjectId',
                patchSystemNodeByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemCluster()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemCluster',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemNetif()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemNetif',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postSystemNetifRefresh()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'postSystemNetifRefresh',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemNetaddr()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemNetaddr',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemNetaddrByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemNetaddrByObjectId',
                getSystemNetaddrByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemPkiGetCa()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemPkiGetCa',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemPkiGetCert()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemPkiGetCert',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemTenants()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemTenants',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postSystemTenants()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'postSystemTenants',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemTenantsByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemTenantsByObjectId',
                getSystemTenantsByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle putSystemTenantsByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'putSystemTenantsByObjectId',
                putSystemTenantsByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteSystemTenantsByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'deleteSystemTenantsByObjectId',
                deleteSystemTenantsByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemVm()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemVm',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemVmByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemVmByObjectId',
                getSystemVmByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemZfs()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemZfs',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getSystemZfsByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getSystemZfsByObjectId',
                getSystemZfsByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postSystemZfsByObjectIdByAction()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'postSystemZfsByObjectIdByAction',
                postSystemZfsByObjectIdByAction_objectId: '<node property>', // (1) define node properties
                postSystemZfsByObjectIdByAction_action: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getWorkflow()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getWorkflow',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postWorkflow()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'postWorkflow',
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getWorkflowByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getWorkflowByObjectId',
                getWorkflowByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postWorkflowByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'postWorkflowByObjectId',
                postWorkflowByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteWorkflowByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'deleteWorkflowByObjectId',
                deleteWorkflowByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle getAuthenticationIdpByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'getAuthenticationIdpByObjectId',
                getAuthenticationIdpByObjectId_objectId: '<node property>', // (1) define node properties
                getAuthenticationIdpByObjectId_objectType: '<node property>', // (1) define node properties
                getAuthenticationIdpByObjectId_groupName: '<node property>', // (1) define node properties
                getAuthenticationIdpByObjectId_search: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postAuthenticationIdpUsersByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'postAuthenticationIdpUsersByObjectId',
                postAuthenticationIdpUsersByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle putAuthenticationIdpUsersByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'putAuthenticationIdpUsersByObjectId',
                putAuthenticationIdpUsersByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle deleteAuthenticationIdpUsersByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'deleteAuthenticationIdpUsersByObjectId',
                deleteAuthenticationIdpUsersByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
    it('should handle postAuthenticationIdpGroupsByObjectId()', function (done) {
        var flow = [
            { id: 'n1', type: 'vulture4-api', name: 'vulture4-api',
                method: 'postAuthenticationIdpGroupsByObjectId',
                postAuthenticationIdpGroupsByObjectId_objectId: '<node property>', // (1) define node properties
                wires: [['n3']],
                service: 'n2' },
            { id: 'n2', type: 'vulture4-api-service', host: 'http://<host name>' }, // (4) define host name
            { id: 'n3', type: 'helper' }
        ];
        helper.load(node, flow, function () {
            var n3 = helper.getNode('n3');
            var n1 = helper.getNode('n1');
            n3.on('input', function (msg) {
                try {
                    msg.should.have.property('payload', '<output message>'); // (3) define output message
                    done();
                } catch (e) {
                    done(e);
                }
            });
            n1.receive({ payload: '<input message>' }); // (2) define input message
        });
    });
});
