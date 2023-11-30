import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import ExpenseList from "./components/expense-list/ExpenseList";
import AddExpense from "./components/add-expense/AddExpense";
import SearchExpense from "./components/search-expense/SearchExpense";
import Profile from "./components/profile/Profile";
import { useEffect, useState } from "react";
import axios from "axios";

const App = () => {
  const [expenses, setExpenses] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const getExpenses = async () => {
      try {
        setIsLoading(true);
        const { data } = await axios.get("http://localhost:4000/expenses");
        console.log(data);
        setExpenses(data);
      } catch (error) {
        console.log(error);
        setError("Something is missing");
      } finally {
        setError("");
        setIsLoading(false);
      }
    };

    getExpenses();
  }, []);

  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<ExpenseList />} />
          <Route path="/add" element={<AddExpense />} />
          <Route path="/search" element={<SearchExpense />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default App;
