const Moralis = require('moralis/node');
const serverUrl = "YOUR_SERVER_URL";
const appId = "APP_ID";
Moralis.start({serverUrl, appId});

const data = {
    chain: "eth",
    address: "0x00843e09a0d0834ad355f5c2280edd24c3e86249",
    token_address: "0x139732c3f717071843f90977d93400393bdf9664",
};

const main = async()=>{
    const nfts = await Moralis.Web3API.account.getNFTsForContract(data);
    //console.log(nfts);
    console.log("\n===================================\n")
    console.log(nfts);
};

main();
