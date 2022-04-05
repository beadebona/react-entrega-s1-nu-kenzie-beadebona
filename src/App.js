import './App.css';
import Header from './components/Header'
import Form from './components/Form'
import TotalMoney from './components/TotalMoney'
import Ul from './components/Ul'
import Nav from './components/Nav'
import { useState } from 'react';
import LoginPage from './components/LoginPage'
// import Card from './components/Card'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [transactions, setTransactions] = useState([])
  const [show, setShow] = useState([...transactions])

  const addTransactions = (newTransaction)=>{
    setTransactions([...transactions, newTransaction]);
    setShow([...transactions, newTransaction])
  }

  const handleTransaction = (ok) => {
    const filtered = transactions.filter((item)=>{
         return item.id !== ok
     })
     setTransactions(filtered)
     setShow(filtered)
  }

  const filterIncome = transactions.filter((transaction)=> transaction.type === "Entrada")
  const filterOutcome = transactions.filter((transaction)=> transaction.type === "Despesa")
  
  return (
    <div className="App">{isLoggedIn?(
      <>
      <Header setIsLoggedIn= {setIsLoggedIn} />
      <main>
        <aside>
        <div className="box">
          <Form addTransactions={addTransactions}/>
        </div>
        < >
          <TotalMoney array={transactions}  filterIncome={filterIncome} filterOutcome={filterOutcome} />
        </>
        </aside>

        <div>
          <Nav array={transactions} filterIncome={filterIncome} filterOutcome={filterOutcome} setShow={setShow} />
          <Ul show= {show} handleTransaction={handleTransaction}/>
        </div>
      </main>
      </>
      ):(
        <LoginPage setIsLoggedIn= {setIsLoggedIn}/>
      )} 
    </div>
  );
}

export default App;
