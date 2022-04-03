import { useState } from "react";
import "./style.css";

const Form =({addTransactions})=>{
    const [report, setReport]= useState({

        description:"",
        value: 0,
        type:"Entrada",
    })

    const inputValue = e => setReport({...report, [e.target.name]: e.target.value})
    return (
        <form onSubmit={(event) => event.preventDefault()}>
                <h4>Descrição</h4>
                <div className="flex-start">
                    <input name="description" type="text" onChange={inputValue} />
                    <p className="exemplo">Ex: Compra de roupas</p>
                </div>
               
                <div className="flex">
                    <div className="flex-column">
                        <p>Valor</p>
                        <input name="value" className="mid-size" type="number" onChange={inputValue} />
                    </div>
                    <div className="flex-column">
                        <p>Tipo de valor</p>
                        <select name="type" className="mid-size" id="" onChange={inputValue} >
                            <option value="Entrada">Entrada</option>
                            <option value="Despesa">Despesa</option> 
                        </select>
                        
                    </div>
                    
                
                </div>
                <button onClick={()=>addTransactions(report)} className="pink">Inserir valor</button>
                
            </form>
    )
}

export default Form