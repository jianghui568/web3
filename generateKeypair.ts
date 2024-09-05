import { Connection,LAMPORTS_PER_SOL, PublicKey,clusterApiUrl } from "@solana/web3.js";
import "dotenv/config"
import { getKeypairFromEnvironment } from "@solana-developers/node-helpers";

const keypair = getKeypairFromEnvironment('SECRET_KEY')


// const keypair = Keypair.generate();

let publicKey = keypair.publicKey.toBase58()
console.log(`The public key is: `, publicKey);
console.log(`The secret key is: `, keypair.secretKey);
console.log(`✅ Finished!`);


const connection = new Connection('http://127.0.0.1:8899', 'confirmed');

const address = new PublicKey(publicKey)

await requestAndConfirmAirdropIfRequired(
    connection,
    keypair.publicKey,
    1 * LAMPORTS_PER_SOL,
    0.5 * LAMPORTS_PER_SOL,
);

//
// console.log('address : ', address)
//
// const balanceLamports = await connection.getBalance(address);
// const balance = balanceLamports / LAMPORTS_PER_SOL
// console.log('balance : ', balance)
