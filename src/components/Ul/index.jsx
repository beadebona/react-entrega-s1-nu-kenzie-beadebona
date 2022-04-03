import "./style.css";
import { FaTrash } from 'react-icons/fa';
// import Card from "./../Card";

const Ul= ({show, handleTransaction})=>{

    return (
        <ul>{ show.length > 0 ?(
        show.map((transaction, index)=>{
                return (
                    <li className={transaction.type} key={index}>
                    <div className="flex-start">
                        <h3>{transaction.description}</h3>
                        <p className="exemplo">{transaction.type}</p>
                    </div>
                    <div className="info">
                        <span>R$ {transaction.value}</span>
                        <button onClick={()=>handleTransaction(transaction.description)} className="trash-button" ><FaTrash/></button>
                    </div>
                            
                </li>
                )}
            )

        ):(
            <>
                <div>
                    <h2>Você ainda não possui nenhum lançamento</h2>
                </div>
                <li className="empty">
                    <div className="MarkerOne"></div>
                    <div className="MarkerTwo"></div>
                </li>
                <li className="empty">
                    <div className="MarkerOne"></div>
                    <div className="MarkerTwo"></div>
                </li>
                <li className="empty">
                    <div className="MarkerOne"></div>
                    <div className="MarkerTwo"></div>
                </li>
            </>
        )}
            
        </ul>
    )
}

export default Ul