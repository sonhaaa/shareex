require('dotenv').config()
var Web3 = require('web3')
var Tx = require('ethereumjs-tx').Transaction
const web3 = new Web3(`https://ropsten.infura.io/v3/${process.env.INFURA_ACCESS_TOKEN}`)
const ABI = require('./ABI.json')

const main = async () => {
    console.log(`web3 version: ${web3.version}`)
    var myAddress = process.env.WALLET_ADDRESS
    var destAddress = process.env.DESTINATION_WALLET_ADDRESS
    var transferAmount = 15000
    var count = await web3.eth.getTransactionCount(myAddress, 'pending')
    console.log(`num transactions so far: ${count}`)
    var abiArray = ABI.abi

    var contractAddress = process.env.DESTINATION_WALLET_ADDRESS
    var contract = new web3.eth.Contract(abiArray, contractAddress, {
        from: myAddress
    })
    var balance = await contract.methods.balanceOf(myAddress).call()
    console.log(`Balance before send: ${balance} SHAX`)
    var gasPriceGwei = 3
    var gasLimit = 3000000

    var chainId = 3
    var rawTransaction = {
        "from": myAddress,
        "nonce": "0x" + count.toString(16),
        "gasPrice": web3.utils.toHex(gasPriceGwei * 1e9),
        "gasLimit": web3.utils.toHex(gasLimit),
        "to": contractAddress,
        "value": "0x0",
        "data": contract.methods.transfer(destAddress, transferAmount).encodeABI(),
        "chainId": chainId
    }
    console.log(`Raw of Transaction: \n${JSON.stringify(rawTransaction, null, '\t')}\n`)

    var privKey = Buffer.from(process.env.WALLET_PRIVATE_KEY, 'hex')
    var tx = new Tx(rawTransaction, {chain: 'ropsten'})
    tx.sign(privKey)
    var serializedTx = tx.serialize()

    console.log(`Attempting to send signed tx:  ${serializedTx.toString('hex')}\n`)
    await web3.eth.sendSignedTransaction('0x' + serializedTx.toString('hex')).on('receipt', console.log)
    
    balance = await contract.methods.balanceOf(myAddress).call()
    console.log(`Balance after send: ${balance} SHRX`)
}

main()