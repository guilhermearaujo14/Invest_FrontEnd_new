import { useState, useContext } from 'react';
import './style.css';
import { Link } from 'react-router-dom';
import { AuthContext, retorno } from '../../contexts/auth';


interface dadosLogin{
    cpf: string;
    senha: string;
}
export function Login(){
    const [dadosLogin, setDadosLogin] = useState<dadosLogin>({cpf: '', senha: ''})
    const  {login} = useContext(AuthContext);
    const [retorno, setRetorno] = useState<retorno>()


    function handleLogin(event){
        event.PreventDefault();
        console.log("Chamou função")
        //setRetorno(login(dadosLogin))
    }

    return(
        <div>
            <div className="container container-body-login">
                <div className="container-img-login">
                    <img src="../../../public/Logo.svg" alt="" width={130} />
                </div>
                <div className="msg-error" style={{display: retorno?.isExibe === true ? '': 'none'}}>
                    {retorno?.msg}
                </div>
                <form className='form-login' method='POST'>
                    <div className="mb-2">
                        <label htmlFor="cpf">CPF</label>
                        <input type="text" name="cpf" id="cpf" className="form-control" placeholder='Informe seu CPF' value={dadosLogin?.cpf} onChange={(e)=>{setDadosLogin({ ...dadosLogin, cpf: e.target.value})}} />
                    </div>
                    <div className="mb-2">
                        <label htmlFor="password">Senha</label>
                        <input type="password" name="password" id="password" className="form-control" value={dadosLogin?.senha} onChange={(e)=>{setDadosLogin({ ...dadosLogin, senha: e.target.value})}}/>
                    </div>
                    <div className="mb-2 container-btn-login">
                        <button className='btn btn-dark btn-login' onClick={handleLogin}>Entrar</button>
                    </div>                    
                <div className="link-cadastrar">
                    <span><Link to={'/novoUsuario'} >Não tem cadastro? Clique aqui!</Link></span>
                </div>
                </form>
            </div>
        </div>
    )
}