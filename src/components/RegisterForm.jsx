export default function RegisterForm() {
    return (
        <div class="container-form">

            <form action="" class="formulario">
                <input type="text" class="text-input" placeholder="Email" />
                <input type="text" class="text-input" placeholder="Senha" />
                <input type="text" class="text-input" placeholder="Confirmção de Senha" />
                <input type="date" class="text-input" placeholder="Senha" />

                <p>
                    Concordo com os Termos de Uso e Privacidade
                    <input type="checkbox" />
                </p>

                <button class="botao-form">
                    <a href="#" class="botao-texto">Entrar</a>
                </button>
                <button class="botao-form">
                    <a href="#" class="botao-texto">Entrar com Google</a>
                </button>
                <p> Ainda não possui conta? <a href="#">Registrar</a> </p>
            </form>
        </div>
    )
}