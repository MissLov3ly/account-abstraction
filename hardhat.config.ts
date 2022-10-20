import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
dotenv.config()

import '@nomiclabs/hardhat-waffle'
import "@nomiclabs/hardhat-ethers";
import '@typechain/hardhat'
import { HardhatUserConfig } from 'hardhat/config'
import 'hardhat-deploy'
import '@nomiclabs/hardhat-etherscan'

import 'solidity-coverage'

import * as fs from 'fs'

const mnemonicFileName = process.env.MNEMONIC_FILE ?? `${process.env.HOME}/.secret/testnet-mnemonic.txt`
let mnemonic = 'test '.repeat(11) + 'junk'
if (fs.existsSync(mnemonicFileName)) { mnemonic = fs.readFileSync(mnemonicFileName, 'ascii') }

function getNetwork1(url: string): { url: string, accounts: { mnemonic: string } } {
  return {
    url,
    accounts: { mnemonic }
  }
}

function getNetwork(name: string): { url: string, accounts: { mnemonic: string } } {
  return getNetwork1(`https://${name}.infura.io/v3/${process.env.INFURA_ID}`)
  // return getNetwork1(`wss://${name}.infura.io/ws/v3/${process.env.INFURA_ID}`)
}

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version: '0.8.15',
    settings: {
      optimizer: { enabled: true, runs: 1000000 }
    }
  },
  namedAccounts: {
    deployer: {
      dev: '0x90F79bf6EB2c4f870365E785982E1f101E93b906',
    },
  },
  networks: {
    dev: {
      url: 'http://127.0.0.1:8545',
      allowUnlimitedContractSize: true,
    },
    // github action starts localgeth service, for gas calculations
    localgeth: { url: 'http://localgeth:8545' },
    goerli: getNetwork('goerli'),
    proxy: getNetwork1('http://localhost:8545'),
    kovan: getNetwork('kovan'),
    mumbai: getNetwork('polygon-mumbai'),
  },
  mocha: {
    timeout: 10000
  },

  etherscan: {
    apiKey: process.env.ETHERSCAN_API_KEY
  }

}

export default config
