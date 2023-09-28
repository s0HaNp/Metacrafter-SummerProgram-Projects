require("@nomicfoundation/hardhat-toolbox");
require('dotenv').config();

const FORK_FUJI = true;
const FORK_MAINNET = false;
let forkingData = undefined;

if (FORK_MAINNET) {
  forkingData = {
    url: "https://api.avax.network/ext/bc/C/rpcc",
  };
}
if (FORK_FUJI) {
  forkingData = {
    url: "https://api.avax-test.network/ext/bc/C/rpc",
  };
}

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      gasPrice: 225000000000,
      chainId: !forkingData ? 43112 : undefined, //Only specify a chainId if we are not forking
      forking: forkingData,
    },
    fuji: {
      url: "https://api.avax-test.network/ext/bc/C/rpc",
      gasPrice: 225000000000,
      chainId: 43113,
      accounts: ["dbda1821b80551c9d65939329250298aa3472ba22feea921c0cf5d620ea67b97"], // we use a .env file to hide our wallets private key
    },
    
  },
  etherscan: {
    apiKey: "C77JCDPB6N788JTK9UW8EUYEJFBC7PFIFR", // we use an .env file to hide our Snowtrace API KEY
  },
};
