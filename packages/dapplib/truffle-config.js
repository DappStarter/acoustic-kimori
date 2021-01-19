require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture bread tail tragic educate ranch remember honey hope knee olympic ghost'; 
let testAccounts = [
"0x5c447fc9d02d12719c3b86d267f32ff99bde25ea531cfbb2789504a72bcdbd0c",
"0x5f834ff72d5a29a47e8214e5cfa9eb645dc7aa4d660e66dfa9049af3b9a9f17c",
"0x99dbc144a82e6302c0c1ffac71a1d965c802873400f71121c84abe8a582e78d7",
"0x24d03e2fe27ddd05165a39b177f2f2f51d9a5297d84b141ddef11bc18a9488d1",
"0x6bd92297734d941b02b0ddb577de2f31bc5792bbdd496e4415d8bd9c9e233a1e",
"0x81f47bde8c697064051b97cb0555c2a572f459038841adc2f231522e45c9a415",
"0x9a594f5041d85891c706d02814aad1c97088a3278949b6a4e91cfbde52f7e2e2",
"0x78e1de3cfc560dbb75169341e7a4076070b2cb0654efbe3fc15cb3359cbf4c8e",
"0x0cb524ccd6167198ac4b7eb92da768b1e60dbda2368e325150dbcd463a683da6",
"0x366220a1f085d6b03acda8a4e41c172fd1e3776fa64df8297c2a15dca96add03"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
