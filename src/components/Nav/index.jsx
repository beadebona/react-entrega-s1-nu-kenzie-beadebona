import "./style.css";

const Nav = ({array, filterIncome, filterOutcome, setShow})=>{


    
    return(
    <nav>
        <h3>Resumo financeiro</h3>
        <div>
            <button  onClick={()=>{setShow(array)}}>Todos</button>
                <button onClick={()=>{setShow(filterIncome)}}>Entradas</button>
            <button onClick={()=>{setShow(filterOutcome)}}>Despesas</button>
        </div>
        
    </nav>
    )
}

export default Nav
