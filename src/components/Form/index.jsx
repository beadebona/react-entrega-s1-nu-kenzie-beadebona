import { useState } from "react";
import "./style.css";

const Form =({addTransactions})=>{
    const [description, setDescription] = useState("")
    const [value, setValue] = useState("")
    const [type, setType] = useState("Entrada")
    const [id, setId]= useState(1)
    const object = {
        description: description, 
        value: value,
        type: type,
        id: id
    }

    const gerarId = () =>{
        setId(id + 1)
        return id
    }
    const handleSubmit = () =>{
        if(description !== "" && value !== ""){
            gerarId()
          addTransactions(object)  
        }   
    }
    return (
        <form onSubmit={event => event.preventDefault()}>
                <h4>Descrição</h4>
                <div className="flex-start">
                    <input name="description" type="text"   onChange={e => setDescription(e.target.value)}/>
                    <p className="exemplo">Ex: Compra de roupas</p>
                </div>
               
                <div className="flex">
                    <div className="flex-column">
                        <p>Valor</p>
                        <input name="value" className="mid-size" type="number"  onChange={e => setValue(e.target.value)}/>
                    </div>
                    <div className="flex-column">
                        <p>Tipo de valor</p>
                        <select name="type" className="mid-size" id="" onChange={e => setType(e.target.value)} >
                            <option value="Entrada">Entrada</option>
                            <option value="Despesa">Despesa</option> 
                        </select>
                        
                    </div>
                    
                
                </div>
                <button onClick={() =>handleSubmit()} className="pink">Inserir valor</button>
                
            </form>
    )
}

export default Form