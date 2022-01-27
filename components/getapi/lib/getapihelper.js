/*
 * This code file belongs to Mantra Framework project (www.mantrajs.com)
 * in the scope of MIT license. More info at support@mantrajs.com. Enjoy :-)
 */ 

"use strict";

module.exports = {   
    GetProtocolClient: ( protocol ) => {
        switch( protocol ) {
            case "http": return require("http");
            case "https": return require("https");
 
            default: throw Error(`Unknown protocol named ${protocol}`);
        }
    },
    
    Get: (protocolClient, getOptions) => {
        return new Promise( (resolve,reject) => {
            const req = protocolClient.request(getOptions, res => {
                let payload = "";
              
                res.on('data', d => {
                    payload += d;
                })
              
                res.on('end', () => {
                    if ( res.statusCode == 200 ) {
                        resolve(JSON.parse(payload));
                    } else {
                        reject( `API call error with status: ${res.statusCode}`);
                    }
                })
              })
              
              req.on('error', error => {
                reject(error);
              })      
              
           req.end();
        })
    },
    
    GetOptions: ( Mantra, fullPath ) => {
        const apiParts = Mantra.Utils.ExtractValues( fullPath, "{protocol}://{host}/{api}" );
        
        if ( apiParts == null ) throw new Error(`Unkown path or format invalid for api post: ${fullPath}`);
        
        return {
          apiprotocol: apiParts.protocol,
          hostname: apiParts.host,
          port: getPortFromProtocolAndHost( apiParts.protocol, apiParts.host ),
          path: `/${apiParts.api}`,
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            'Content-Length': 0
          }
        }
    }    
}

function getPortFromProtocolAndHost( protocol, host ) {
    if ( protocol == 'http' && host == "localhost" ) return 3084;
    if ( protocol == 'http' && host != "localhost" ) return 80;
    if ( protocol == 'https') return 443;

    throw new Error( `Not allowed protocol and/or host: ${protocol} ${host}`);
}