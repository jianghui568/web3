import {getKeypairFromEnvironment} from "@solana-developers/node-helpers";
import axios from 'axios'

const web3 = require("@solana/web3.js");

const netWork ="https://api.devnet.solana.com" //开发网

let connection = new web3.Connection(netWork, "recent");

// const keypair = getKeypairFromEnvironment('SECRET_KEY')

const pubkey = 'FRY4ftiio57Ya8bcFPuvGKyUDr1Wy2bANtRSemWoHWyi'
const url = web3.clusterApiUrl("devnet")

const data = {
    jsonrpc: "2.0",
    id: 1,
    method: 'getBalance',
    params: [pubkey,{"encoding": "base58"}]
}
axios.post(url,data,{
    headers: {
        "Content-Type": "application/json"
    }
}).then((rsp) => {
    console.log(rsp.data)
    console.log(rsp.data.result.value/web3.LAMPORTS_PER_SOL)
}).catch((e: any) => {
    console.error(e.message)
    console.log(e.code, e.response.status)
    console.log(e.response.data)
})
// try {
//     let slot = await connection.getBalance(new web3.PublicKey('FRY4ftiio57Ya8bcFPuvGKyUDr1Wy2bANtRSemWoHWyi'));
//     console.log(slot);
// } catch (e) {
//     console.log(e)
// }


// 93186439
//
// let blockTime = await connection.getBlockTime(slot);
// console.log(blockTime);
// // 1630747045
//
// let block = await connection.getBlock(slot);
// console.log(block);
//
// /*
// {
//     blockHeight: null,
//     blockTime: 1630747045,
//     blockhash: 'AsFv1aV5DGip9YJHHqVjrGg6EKk55xuyxn2HeiN9xQyn',
//     parentSlot: 93186438,
//     previousBlockhash: '11111111111111111111111111111111',
//     rewards: [],
//     transactions: []
// }
// */
//
// let slotLeader = await connection.getSlotLeader();
// console.log(slotLeader);
//49AqLYbpJYc2DrzGUAH1fhWJy62yxBxpLEkfJwjKy2jr
