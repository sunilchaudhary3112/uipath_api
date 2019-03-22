"use strict";

var log4js = require('log4js');
var logger = log4js.getLogger();
var Client = require('node-rest-client').Client;
var client = new Client();

module.exports = {

    metadata: function metadata() {
        return {
            "name": "Get_Release",
            "properties": {
                // "authKey": {
                //     "type": "string",
                //     "required": true
                // }
            },

            "supportedActions": ['POST']
        };
    },

    invoke: (conversation, done) => {
        var mobileSdk = conversation.mobileSdk;
        //console.log('Rest CALL INITIATED For Release!!');
        
        var args = {
            headers: {  "Authorization": "Basic " + new Buffer("v.vikram.s.singh@oracle.com:Or@cle123456").toString("base64") }
        };

        client.get("https://erpcatoic-sehubemeaprod.integration.ocp.oraclecloud.com/ic/api/integration/v1/flows/rest/FCCSCLOSEMANAGERCHATBOT/1.0/start", args, function (data, response) {
            // parsed response body as js object

            console.log('Rest CALL INITIATED For Release!!');
            if (Buffer.isBuffer(data)) {
                data = data.toString('utf8');
            }
            console.log('data------------');
            console.log(data);
            conversation.transition();
            done();
        }).on('error', function (err) {
            console.log('Rest CALL INITIATED with error!!');
            console.log('something went wrong on the request', err.request.options);
            conversation.transition();
            done();
        });

    }
};
