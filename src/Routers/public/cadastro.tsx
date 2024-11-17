import React from "react";
import { DarkThemeToggle } from "flowbite-react";
import '../../assets/css/estilo.css';


function Cadastro(){

    return(
<main>
    <div className="background">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>
    <form action="" method="">
        <legend>
            <img src="" alt="B-tec" style={{margin:"0px 39%"}}/>
        </legend>
    <h3>Login</h3>
    <label htmlFor="email">Email</label>
    <input type="text" placeholder="Email or Phone" id="email" required />

    <label htmlFor="password">Password</label>
    <input type="password" placeholder="Password" id="password" required/>
    
    <button>Log In</button>

    <div className="social">
          <div className="go"><i className="fab fa-google"></i>  Google</div>
          <div className="fb"><i className="fab fa-facebook"></i>  Facebook</div>
        </div>

    </form>

</main>
    );
}
export default Cadastro;