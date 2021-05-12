import { useState } from "react";
import ExpenseFilter from "../ExpenseFilter/ExpenseFilter";
import Card from "../UI/Card";
import ExpensesList from "./ExpensesList";
import "./Expenses.css";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterByYear = (selectedYear) => {
    console.log("in expenses.js", selectedYear);
    setFilteredYear(selectedYear);
  };

  const filteredExpenses = props.items.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  return (
    <li>
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onChangeFilter={filterByYear} />
      <ExpensesList items={filteredExpenses} />
    </Card>
    </li>
      
  );
};

export default Expenses;
