import {
    Connection,
    LAMPORTS_PER_SOL,
    PublicKey,
    clusterApiUrl,
    TransactionInstruction,
    SystemProgram, Transaction, sendAndConfirmTransaction
} from "@solana/web3.js";
import "dotenv/config"
import * as web3 from "@solana/web3.js";
import { getKeypairFromEnvironment,airdropIfRequired } from "@solana-developers/helpers";

export default class Base {
    private pubkey: string;
    constructor(pubkey: string) {
        this.pubkey = pubkey
    }

    static connection() {
        const connection = new Connection('http://127.0.0.1:8899', 'confirmed');
        return connection
    }

    static async balanceIncr(pubkey, num) {
        const connection = Base.connection()
        const newBalance = await airdropIfRequired(
            connection,
            new PublicKey(pubkey),
            num * web3.LAMPORTS_PER_SOL,
            0.5 * web3.LAMPORTS_PER_SOL,
        );
        return newBalance;
    }
    static async balanceGet(pubkey) {
        const connection = Base.connection()
        return await connection.getBalance(new PublicKey(pubkey))
    }

    static async sendTransfer(sendPair, tokey, lamports) {
        const transInstruction = SystemProgram.transfer({
           fromPubkey: new PublicKey(sendPair.publicKey.toBase58()),
           toPubkey: new PublicKey(tokey),
           lamports
        });

        const trans = new Transaction();
        trans.add(transInstruction);

        const connection = Base.connection();

        console.log('sendPair:', sendPair.publicKey.toString())
        const sign = await sendAndConfirmTransaction(connection, trans, [sendPair]);
        return sign
    }

}
