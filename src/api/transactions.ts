import { NextApiRequest, NextApiResponse } from "next";
import * as web3 from "@solana/web3.js";

const DEV_NET = web3.clusterApiUrl("devnet");
const LAMPORTS_PER_SOL = 1000000000;
const solanaConnection = new web3.Connection(DEV_NET);

const getAddressInfo = async (address: string, numTx: number = 3) => {
  const pubKey = new web3.PublicKey(address);
  //   get transactions from the address, set a limit to the size of the data in the response
  const transactionList = await solanaConnection.getSignaturesForAddress(
    pubKey,
    { limit: numTx },
  );
  //   get Balance from the account using the getBalance method on the
  const accountBalance = await solanaConnection.getBalance(pubKey);
  // return the transactionList and accountBalance
  return { transactionList, accountBalance };
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { address } = req.query;

  if (!address) {
    return res.status(400).json({ message: "Invalid address" });
  }

  try {
    const { transactionList, accountBalance } = await getAddressInfo(address);
    return res.status(200).json({ transactionList, accountBalance });
  } catch (err) {
    console.error(err);
    return res
      .status(500)
      .json({ message: "Something went to shit, try again later" });
  }
}
