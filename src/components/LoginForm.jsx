export default function LoginForm() {
    return (
        <div class="container-form">
            <form action="" class="formulario">
                <input type="text" class="text-input" placeholder="Email" />
                <input type="text" class="text-input" placeholder="Senha" />

                <a href="#">Esqueceu a senha?</a>
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