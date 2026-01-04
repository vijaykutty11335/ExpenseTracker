import Navbar from "./components/Navbar/Navbar";
import ExpenseForm from "./components/ExpenseForm/ExpenseForm";
import ExpenseList from "./components/ExpenseList/ExpenseList";
import ExpenseItem from "./components/ExpenseItem/ExpenseItem";

import "./App.css"

const App = () => {
  return(
    <>
    <Navbar/>
    <ExpenseForm/>
    <ExpenseList/>
    <ExpenseItem/>
    </>
  )
}

export default App;