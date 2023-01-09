require("@nomicfoundation/hardhat-toolbox");
const dotenv = require("dotenv");

dotenv.config();
/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: process.env.INFURA_GOERLI_ENDPOINT,
      accounts: [process.env.PRIVATE_KEY],
  }
  }
};
