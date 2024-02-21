async function main() {
    require('dotenv').config();
    const { API_URL, PRIVATE_KEY } = process.env;
    const { createAlchemyWeb3 } = require("@alch/alchemy-web3");
    const web3 = createAlchemyWeb3('https://eth-mainnet.alchemyapi.io/v2/API_KEY');
    const myAddress = '0xe3242ca2b4036f90f42C6D7861af28d06c6161cC'; 
   
    const private_key = "PRIVATE_KEY";

    const nonce = await web3.eth.getTransactionCount(myAddress, 'latest'); 

    console.log(private_key);
    const transaction = {
     'to': '0xe3242ca2b4036f90f42C6D7861af28d06c6161cC', 
     'value': 1,
     'gas': 30000,
     'maxPriorityFeePerGas': 1000000108,
     'nonce': nonce,
    };
   
    const signedTx = await web3.eth.accounts.signTransaction(transaction, PRIVATE_KEY);
    
    web3.eth.sendSignedTransaction(signedTx.rawTransaction, function(error, hash) {
    if (!error) {
      console.log("🎉 The hash of your transaction is: ", hash);
    } else {
      console.log("❗Something went wrong :", error)
    }
   });
}

main();