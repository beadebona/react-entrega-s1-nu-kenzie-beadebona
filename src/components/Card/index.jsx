import "./style.css";

const Card = ({transaction})=>{
    return (
        <li className={transaction.type} key={transaction.id}>
            <div className="flex-start">
                <h2>{transaction.description}</h2>
                <p className="exemplo">Ex: Compra de roupas</p>
            </div>
            <div className="info">
                <span>R$ {transaction.value}</span>
                <button className="trash-button">ic</button>
            </div>
                    
        </li>
    )
}

export default Card;