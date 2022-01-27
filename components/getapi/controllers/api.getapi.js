/*
 * This code file belongs to Mantra Framework project (www.mantrajs.com)
 * in the scope of MIT license. More info at support@mantrajs.com. Enjoy :-)
 */ 

"use strict";

const GetApiHelper = require("../lib/getapihelper");

module.exports = {
    /*
     * API async Mantra.api.getapi.makegetcall
     * Makes a GET call to an http or https endpoint.
     * Params:
     *    fullPath: <full path to the API Rest>
     * 
     * The method detects if http or https should be used
     */
    makegetcall: async (Mantra, fullPath) => {
        const options = GetApiHelper.GetOptions( Mantra, fullPath );
        const protocolClient = GetApiHelper.GetProtocolClient( options.apiprotocol );

        return GetApiHelper.Get( protocolClient, options );
    }
}