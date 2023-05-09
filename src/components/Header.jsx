import { BrowserRouter, Route, Link } from "react-router-dom";

export default function Header(){
    return(
        <header class="cabecalho">
            <nav class="cabecalho-nav">
                <ul class="cabecalho-menu">
                    
                    <li class="nav-item">
                        <Link to="/">Home</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/login">Entrar</Link>
                    </li>
                    <li class="nav-item">
                        <Link to="/register">Registrar</Link>
                    </li>
                    
                </ul>
            </nav>
        </header>
    )
}