import "./style.css";

    const totalMoney = ({array, filterIncome, filterOutcome})=>{
    
    
    const valorIncome = filterIncome.reduce((vAn, vAt)=>{
            return vAn + Number(vAt.value)       
    },0) 
    const valorOutcome = filterOutcome.reduce((vAn, vAt)=>{
        return vAn + Number(vAt.value)       
    },0) 
    const valorTotal = valorIncome - valorOutcome

    return (
          
        <>{array.length > 0 ?(
            <div className="totalValue">
                <div>
                    <h3>Valor total:</h3>
                    <p>O valor se refere ao saldo</p>
                </div>
                <div>
                <span>R$ {valorTotal}</span>
                </div>
            </div>
        ):(
           <>

           </> 
        )}
    </>
    )
}

export default totalMoney