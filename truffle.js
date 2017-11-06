// set up a provider truffle to use
const testrpcProvider = require("ethereumjs-testrpc").provider({
  network_id: "89",
  accounts: [{
    balance: 1000000000000000000000,
    // address: 0x9c6b4ee31b39289d6901e54db8492a1623ba0abb
    private_key: "0xd86cbe4ebcfa55af640c0114184e43e71f73363a6d5c5c6b01619a5aab92e413",
  },{
    balance: 10000000000000000000000,
    // address: 0x0d3d5c27e29aac95bc20478527cb4fa793ea08b4
    private_key: "0x1e1621ca9adefc5210836902cf5012747dc8ca0b50261ddd19f4dd174b163a6e",
  }]
});

module.exports = {
  networks: {
    testrpc: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    inline: {
      provider: testrpcProvider,
      network_id: "*" // Match any network id
    }
  }
};
