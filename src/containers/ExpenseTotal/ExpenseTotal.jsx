import { useSelector } from "react-redux";
import s from "./style.module.css";

export function ExpenseTotal(props) {
  const items = useSelector((store) => store.EXPENSE.expenseList);
  const income = useSelector((store) => store.EXPENSE.income);

  const total = items.reduce(
    (accumulator, item) => accumulator + item.price,
    0
  );

  const remaining = income - total;

  return (
    <div>
      <div className="row">
        <div className={`col ${s.label}`}>Total expenses</div>
        <div className={`col ${s.amount}`}>${total}</div>
      </div>
      <div className="row">
        <div className={`col ${s.label}`}>Remaining money</div>
        <div className={`col ${s.amount}`}>${remaining}</div>
      </div>
    </div>
  );
}
