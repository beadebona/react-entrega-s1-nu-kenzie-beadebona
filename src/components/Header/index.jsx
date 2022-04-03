import "./style.css";
import Logo from './../img/Nu Kenzie.png';


const Header = ({setIsLoggedIn})=>{
    function handleLogout (){
        setIsLoggedIn(false);
    }
    return (
        <header className="header">
        <img src= {Logo}/>
        <button onClick = {handleLogout}>Sair</button>
        </header>
    )
}
export default Header