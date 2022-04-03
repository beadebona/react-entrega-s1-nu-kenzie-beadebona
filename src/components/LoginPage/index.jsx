import "./style.css";
import Logo from "./../img/Nu Kenzie2.png";

const LoginPage = ({setIsLoggedIn})=>{
  
    return(
    <main className="Login">
        <div className="container">
            <img src={Logo} />
            <h1>Centralize o controle das suas finanças</h1>
            <p>de forma rápida e segura</p>
            <button className="Login" onClick={setIsLoggedIn}>Iniciar</button>
        </div>
        <div className="set4">
            <div className="set3">
                <div className="set2">
                    <div className="set1">
                        <div className="setDot">
                            <section className="dot1"></section>
                            <section className="dot2"></section>
                            <section className="dot3"></section>
                        </div>
                        <div className="setBox"></div>
                        <div className="setBox"></div>
                        <div className="setBox"></div>
                        <div className="setBox"></div>
                        <div className="setBox"></div>
                        <div className="setBox"></div>

                    </div>
                </div>
            </div>
        </div>
    </main>

    )
}

export default LoginPage