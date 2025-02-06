import { createContext, useState} from "react";
import { useNavigate } from "react-router-dom";
import api from '../api/index';

interface dadosLogin{
    cpf: string;
    senha: string;
}

export interface retorno{
    isExibe: boolean,
    msg: string
}

interface usuarioLogado{
    nome: string,
    id: number
}

interface AuthContextType{
    login: (dadosLogin: dadosLogin) => void;
    dadosLogin: dadosLogin,
    userLogado: usuarioLogado | null,
    retorno: retorno,
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);


function AuthProvider({children}){

    const [retorno, setRetorno] = useState<retorno>({ isExibe: false, msg: "" })
    const [userLogado, setUserLogado] = useState<usuarioLogado>({nome: '', id: 0})
    const navigate = useNavigate()

    
    async function login(user: dadosLogin){
        console.log('Chegou')
        setRetorno({isExibe: false, msg: ""})
        if(user.cpf == '' || user.senha == ''){
            setRetorno({isExibe: true, msg: "Ops.. Verifique CPF e senha!" });
            return
        }
        if(user.cpf.length < 11){
            setRetorno({isExibe: true, msg: "Ops... CPF deve ter 11 caracteres!"});
            return
        }else{
            const result = await api.post('Login',{
                    CPF: user.cpf,
                    SENHA: user.senha
        })
            if(result.data.isSucesso){
                console.log(result.data)
                setUserLogado({nome: result.data.nome, id: result.data.usuario_id})
                //sessionStorage.setItem("usuario", result.data.usuario_id)
                navigate('/')
            }
        }

    }


    return(
        <AuthContext.Provider value={{ login, dadosLogin: {cpf: '', senha: ''}, userLogado, retorno }}>
            { children }
        </AuthContext.Provider>
    )
}

export default AuthProvider