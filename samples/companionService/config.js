/**
 * @module
 * This module defines the settings that need to be configured for a new
 * environment.
 * The clientId and clientSecret are provided when you create
 * a new security profile in Login with Amazon.  
 * 
 * You will also need to specify
 * the redirect url under allowed settings as the return url that LWA
 * will call back to with the authorization code.  The authresponse endpoint
 * is setup in app.js, and should not be changed.  
 * 
 * lwaRedirectHost and lwaApiHost are setup for login with Amazon, and you should
 * not need to modify those elements.
 */
var config = {
    clientId: "amzn1.application-oa2-client.69080b76d49a40938a03c0f354966775",
    clientSecret: "90bb6fb632cc46fa24ee96a112e33b83ae6825cacfeee7453da75e2dfce3458b",
    redirectUrl: 'https://localhost:3000/authresponse',
    lwaRedirectHost: "amazon.com",
    lwaApiHost: "api.amazon.com",
    validateCertChain: true,
    sslKey: "/home/pi/Desktop/alexa-avs-sample-app/samples/javaclient/certs/server/node.key",
    sslCert: "/home/pi/Desktop/alexa-avs-sample-app/samples/javaclient/certs/server/node.crt",
    sslCaCert: "/home/pi/Desktop/alexa-avs-sample-app/samples/javaclient/certs/ca/ca.crt",
    products: {
        "myRasPiDev": ["1xxxxxxxxxx"],
    },
};

module.exports = config;
