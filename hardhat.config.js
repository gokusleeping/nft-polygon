/* hardhat.config.js */
const fs = require("fs");
const privateKey = fs.readFileSync(".env").toString();
require("@nomiclabs/hardhat-waffle")
module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    hardhat: {
      chainId: 80001  
    },
 mumbai: {  
   url: "https://polygon-mumbai.g.alchemy.com/v2/wVQ2CVr2bH63W1XTyGtXTwfU8b5sGHDQ",
   accounts: [privateKey]
 }
  },
  solidity: {
    version: "0.8.4",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200
      }
    }
  }
}