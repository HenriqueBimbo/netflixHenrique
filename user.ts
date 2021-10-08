
import { perfillogin } from "./perfillogin";
export class userAccount {

    lista: Array<perfillogin>; 
    

    email: string;
    senha: string;

    constructor(email: string, senha: string , lista: Array<perfillogin>) {
        this.lista = lista;
        this.email = email;
        this.senha = senha;
    }

    logar(email: string, senha: string) {

        if (this.email == email && this.senha == senha) {

            return console.log ( "Seja bem vindo a Netflix");

        }

        else {

            return console.log( "Dados inválidos");
        }

    }

}

const will = new userAccount("henrique.bimbo@gmail.com", "brq001" , [])

will.logar("henrique.bimbo@gmail.com" , "brq001")

