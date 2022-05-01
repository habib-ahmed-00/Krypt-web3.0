// https://eth-ropsten.alchemyapi.io/v2/ubZTWHZ7EWeXSSoxgeAhNJfyvLE6sVjd

require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.0',
  networks: {
    ropsten: {
      url: 'https://eth-ropsten.alchemyapi.io/v2/ubZTWHZ7EWeXSSoxgeAhNJfyvLE6sVjd',
      accounts: ['d66e722cbbe5487b41d63703a3b4164be85e2f67a7d2e6d0370ce8430215bc63'],
    },
  },
};