import {  useState } from 'react';
import './style.css'

interface Usuario{
    nome: string;
    cpf: string;
    email: string;
    dataNascimento: Date;
    telefone: string;
    senha: string;
    confirmaSenha: string;
}

export function CadastraUsuario(){
    const [usuario, setUsuario] = useState<Usuario>({nome: '', cpf: '', email: '', dataNascimento: new Date, telefone: '', senha: '', confirmaSenha: ''})
    const [msgErro, setMsgErro] = useState('');
    const [isExibeErro, setIsExibeErro] = useState(false)
    
    function handleCadastrar(){
        
    }   
    
    function Validaformulario(event){
        event.preventDefault();
        if(usuario.nome === ''){
            setMsgErro('Ops... Nome não preenchido, verifique!')
            setIsExibeErro(true)
            return
        }
        if(usuario.cpf.length != 11){
            setMsgErro('Ops... CPF inválido, verifique!')
            setIsExibeErro(true)
            return
        }
        if(usuario.email === ''){
            setMsgErro('Ops... Nome não preenchido, verifique!')
            setIsExibeErro(true)
            return
        }
        if(usuario.senha === ''){
            setMsgErro('Ops... Nome não preenchido, verifique!')
            setIsExibeErro(true)
            return
        }
        if(usuario.confirmaSenha === ''){
            setMsgErro('Ops... Nome não preenchido, verifique!')
            setIsExibeErro(true)
            return
        }
        setIsExibeErro(false)
        setMsgErro('')
        handleCadastrar();
    }

    return(
        <div>
            <div className="container container-cadastra-usuario">
                <h4>Preencha seus dados para se cadastrar</h4>
                <form action="" method="post" className='form-cadastra-usuario'>
                    <div className="containerErro" style={{display: isExibeErro === true ? '' : 'nome'}}>
                        { msgErro }
                    </div>
                    <div className="mb-2">
                        <label htmlFor="nome">Nome completo</label>
                        <input type="text" name="nome" id="nome" className="form-control"  placeholder='Informe seu nome' value={usuario.nome} onChange={(e)=>{setUsuario({... usuario, nome: e.target.value})}} />
                    </div>
                    <div className="mb-2 row justify-content-start">
                        <div className="col-8">
                            <label htmlFor="cpf">CPF</label>
                            <input type="text" name="cpf" id="cpf" className="form-control"  placeholder='Informe seu CPF' value={usuario.cpf} onChange={(e)=>{setUsuario({... usuario, cpf: e.target.value})}} />
                        </div>
                            <div className="col-4">
                                <label htmlFor="dtNascimento">Data de nascimento</label>
                                <input type="date" name="dtNascimento" id="dtNascimento" className="form-control"  value={usuario?.dataNascimento} onChange={(e)=>{setUsuario({... usuario, dataNascimento: e.target.value})}} />
                            </div>
                    </div>
                    <div className="mb-2 row justify-content-start">
                            <div className="col-8">
                                <label htmlFor="email">Email</label>
                                <input type="email" name="email" id="email" className="form-control"  placeholder='Informe seu E-mail' value={usuario.email} onChange={(e)=>{setUsuario({... usuario, email: e.target.value})}} />
                            </div>
                            <div className="col-4">
                                <label htmlFor="telefone">Telefone</label>
                                <input type="text" name="telefone" id="telefone" className="form-control" placeholder='Informe seu telefone' value={usuario.telefone} onChange={(e)=>{setUsuario({... usuario, telefone: e.target.value})}} />
                            </div>
                    </div>
                    <div className="mb-2 row">
                    <div className="col" >
                        <label htmlFor="senha">Senha</label>
                        <input type="password" name="senha" id="senha" className="form-control"  placeholder='Informe sua senha' value={usuario.senha} onChange={(e)=>{setUsuario({... usuario, senha: e.target.value})}} />
                    </div>
                    <div className="col">
                        <label htmlFor="confirmaSenha">Confirme sua senha</label>
                        <input type="password" name="confirmaSenha" id="confirmaSenha" className="form-control"  placeholder='Confirme sua senha' value={usuario.confirmaSenha} onChange={(e)=>{setUsuario({... usuario, confirmaSenha: e.target.value})}} />
                    </div> 
                    </div>
                    <div className="mb-2 container-btn-cadastra-usuario">
                        <button className='btn btn-dark' onClick={Validaformulario}>Cadastrar</button>
                    </div>
                </form>
            </div>
        </div>
    )
}