require('dotenv').config()
const express = require('express')
const cors = require('cors')
const Web3 = require('web3')
const ABI = require('./ABI.json')

const app = express()
app.use(cors())

// const accessToken = process.env.INFURA_ACCESS_TOKEN

const web3 = new Web3(`https://ropsten.infura.io/v3/${process.env.INFURA_ACCESS_TOKEN}`)
const contract = new web3.eth.Contract(ABI.abi, process.env.DESTINATION_WALLET_ADDRESS)
contract.methods.balanceOf(process.env.DESTINATION_WALLET_ADDRESS).call().then(console.log)
web3.eth.defaultAccount = process.env.WALLET_ADDRESS

const amountToSend = 0.001

app.get('/', (req, res) => {
    res.send("Hello from Shareex 👋")
})

app.get('/:walletAddress', (req, res) => {
    let walletAddress = req.params.walletAddress;
    let coinInfo = getWalletAddress(walletAddress)
    coinInfo.then(data => res.json({
        "name": data[0],
        "symbol": data[1],
        "balance": data[2]
    }))
})

async function getWalletAddress(walletAddress) {
    const contract = await new web3.eth.Contract(ABI.abi, walletAddress)

    const name = await contract.methods.name().call()
    const symbol = await contract.methods.symbol().call()
    const balance = await contract.methods.balanceOf(walletAddress).call()

    return [name, symbol, balance]
}


const port = process.env.PORT || 3000

app.listen(port, () => {
    console.log(`Listen on port ${port}`)
})















// const Web3 = require('web3')
// const axios = require('axios')
// const Tx = require("ethereumjs-tx").Transaction
// const log = require('ololog').configure({ time: true })
// const ansi = require('ansicolor').nice
// require('dotenv').config()
 
// const web3 = new Web3( new Web3.providers.HttpProvider('https://rinkeby.infura.io/v3/08bf722966564ea182c198253fd055ad') )
 
// web3.eth.defaultAccount = process.env.WALLET_ADDRESS
 
// const amountToSend = 0.00100000
 
// const getCurrentGasPrices = async () => {
//   let response = await axios.get('https://ethgasstation.info/json/ethgasAPI.json')
//   let prices = {
//     low: response.data.safeLow / 10,
//     medium: response.data.average / 10,
//     high: response.data.fast / 10
//   }
 
//   console.log("\r\n")
//   log (`Current ETH Gas Prices (in GWEI):`.cyan)
//   console.log("\r\n")
//   log(`Low: ${prices.low} (transaction completes in < 30 minutes)`.green)
//   log(`Standard: ${prices.medium} (transaction completes in < 5 minutes)`.yellow)
//   log(`Fast: ${prices.high} (transaction completes in < 2 minutes)`.red)
//   console.log("\r\n")
 
//   return prices
// }

// const main = async () => {

//     await web3.eth.getBalance(web3.eth.defaultAccount).then(console.log);
 
//     let nonce = web3.eth.getTransactionCount(web3.eth.defaultAccount)
//     log(`The outgoing transaction count for your wallet address is: ${nonce}`.magenta)
    
//     let gasPrices = await getCurrentGasPrices()
    
//     let details = {
//         "to": process.env.DESTINATION_WALLET_ADDRESS,
//         "value": web3.utils.toHex( web3.utils.toWei(`${amountToSend}`, 'ether') ),
//         "gas": 21000,
//         "gasPrice": gasPrices.low * 1000000000, 
//         "nonce": nonce,
//         "chainId": 4 
//     }
    
//     const transaction = new Tx(details)
    
//     transaction.sign( Buffer.from(process.env.WALLET_PRIVATE_KEY, 'hex') )
    
//     const serializedTransaction = transaction.serialize()
//     const transactionId = web3.eth.sendRawTransaction('0x' + serializedTransaction.toString('hex') )
    
//     const url = `https://rinkeby.etherscan.io/tx/${transactionId}`
//     log(url.cyan)
    
//     log(`Note: please allow for 30 seconds before transaction appears on Etherscan`.magenta)
    
//     process.exit()
// }
 
// main()