import Base from './base'
import {getKeypairFromEnvironment} from "@solana-developers/node-helpers";

const fromKeypair = getKeypairFromEnvironment('SECRET_KEY')
const toKeypair = getKeypairFromEnvironment('SECRET_KEY2')
console.log('fromkey:', fromKeypair.publicKey.toBase58())
console.log('  tokey:', toKeypair.publicKey.toBase58())
// const incr = await Base.balanceIncr(toKeypair.publicKey.toBase58(), 1)
// console.log('add balance:', toKeypair.publicKey.toBase58(), incr)

const balance = await Base.balanceGet(fromKeypair.publicKey.toBase58())
console.log('from_balacne: ', balance)

const lamportsToSend = 500
const sign = await Base.sendTransfer(fromKeypair, toKeypair.publicKey.toBase58(), lamportsToSend)

console.log('send sign:', sign)
function run() {


}


