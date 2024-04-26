import { useState } from "react";

import axios from "axios";

export default function Tokenomics() {
  const [transactionList, setTransactionList] = useState([]);
  const [balance, setBalance] = useState(null);
  const [address, setAddress] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFormSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    setLoading(true);
    setErrorMessage("");

    try {
      const resp = await axios.get(`/api/transactions?address=${address}`);
      if (resp.status === 200) {
        setTransactionList(resp.data.transactionlist);
        const accountBalance =
          parseInt(resp.data.accountBalance) / 1_000_000_000;
        setBalance(accountBalance);
      }
    } catch (err) {
      setErrorMessage("Unable to fetch transactions. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  interface TransactionListProps {}
  return (
    <section className="bg-[#FBD38D] h-screen" id="tokenomics">
      <TransactionList transactions={transactionList} />
    </section>
  );
}
