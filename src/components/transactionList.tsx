import { TransactionSchema } from "../lib/transactionSchema";

interface TransactionListProps {
  transactions: TransactionSchema[];
}

const TransactionList: React.FC<TransactionListProps> = ({ transactions }) => {
  return (
    <div>
      {transactions.map((transaction) => (
        <div key={transaction.id}>
          <p>Amount: {transaction.amount}</p>
          <p>Timestamp: {transaction.timestamp}</p>
          {/* Display other transaction details as needed */}
        </div>
      ))}
    </div>
  );
};

export default TransactionList;
