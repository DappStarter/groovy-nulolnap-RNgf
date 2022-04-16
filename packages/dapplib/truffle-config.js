require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name rescue stick mistake hockey indoor foster gate'; 
let testAccounts = [
"0xa7cdc973470e53e98437d9857552d117c790854e6563e8dccb425ad7f82fa2a1",
"0x24af81f830c3c4d6ed8827ce507da65c7b9317def4d4f2588ad4737429c63738",
"0xfbf13711cd8c281270bbb9abb33eb8d360387626f12141fcc513c77e557966ad",
"0x3fd3d491e4574f22b0e82605a3c4efc521ba6004f75d572637e7a27eede7fa17",
"0xc11c4fb38a109a6a06bff725239241a39a2bee46e9bbf6c6814f47baa229da4a",
"0x40caaca1be01a6cb303785ab5e5e16b96f5911c1849f35d3d8a11ee40e98df85",
"0x920a960d3d66265d809b9d8c25cd0cd03ebc5f48ea1e35a9da4f18104593c919",
"0xa13eef144dfaef16b38078ee4ac6ae1a9cfd025feb7ec0f3307b11e6da22f70c",
"0xe16c3e51dd1360d9c67d9a022f7b347882b3c1b0a08945d0c1fa689870a42e7b",
"0x4aa271b45cff45831dfb7ad8c59d3295614f74e1afa93669c361fb4a0cca5008"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

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
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


