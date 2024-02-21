/* 
Date : April 21st 2022
Author : Souleymane Ouattara 
Description : This Web3.js script is intented to display all the incoming 'pending transactions' in Ethereum Blockchain.
One can check the transaction state (pending or confirmed) and all its information by copying the transaction's hash, 
from the results showing in the console, and paste it in etherscan.io

*/

//import ethers.js package
const Web3 = require('web3');

//define websocket url + api id from your api provider. Here we're using alchemy
const URL = 'wss://eth-mainnet.alchemyapi.io/v2/API_KEY';

//access the web3.js websocket provider by using our alchemy api url
const provider = new Web3.providers.WebsocketProvider(URL);

////access the web3.js websocket provider by using our alchemy api url
const web3 = new Web3(provider);

//the function "subscribe" and the key word "pendingTransactions" are defined to access the pending transactions on the Ethereum Blockchain

const main = function(){

    web3.eth.subscribe('pendingTransactions', function(error, result){
        if (!error) //if any error occurs ...
            web3.eth.getTransactionReceipt(result)
            .then(console.log)
                // console.log(result); //...display it here
    })
    .on("data", function(transaction){ //else if some data found ...
        console.log(transaction); //...display it here
    });

}

main(); //call our main function to process the task we intend to do
