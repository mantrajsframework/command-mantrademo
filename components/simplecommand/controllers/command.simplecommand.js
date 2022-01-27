/*
 * This code file belongs to Mantra Framework project (www.mantrajs.com)
 * in the scope of MIT license. More info at support@mantrajs.com. Enjoy :-)
 */ 

"use strict";

const BLOCKCHAIN_INFO_ENDPOINT = "https://blockchain.info/ticker";

module.exports = {
    /*
     * Command 'getbtcprice'.
     * Get current BTC prices from exchange using blockchain.info API.
     * Params:
     *   coin: optional, if present, then show the price in an specific coins (EUR, USD, SEK, CAD, etc.)
     */
    getbtcprice_description: "Get BTC real time price. Use 'mantrad getbtcprice <coin, optional>",
    getbtcprice: async (Mantra, coin) => {
        const jsonBTCPrices = await Mantra.api.getapi.makegetcall( Mantra, BLOCKCHAIN_INFO_ENDPOINT );

        if ( coin && jsonBTCPrices[coin.toUpperCase()] ) {
            Mantra.LogInfo( jsonBTCPrices[coin.toUpperCase()] );
        } else {
            Mantra.LogInfo( jsonBTCPrices );
        }
    }
}