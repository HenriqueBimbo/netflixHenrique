import { filmes } from "./filme";
import { userAccount } from "./user";
import { favoritos } from "./favoritos";


export class perfillogin extends favoritos {



    nome: string;

    constructor(nome: string, favoritos: Array<filmes>) {
        super(favoritos)




        this.nome = nome;
    }



    get getPerfil() {

        return this.nome
    }

    set setPerfil(perfil: string) {


        this.nome = perfil;

    }


    addFavorito(filmes: filmes) {



        this.favoritos.push(filmes)


    }

}
var filme1 = new filmes("Livre", "Longa", "De volta para o futuro", "1985", "Ficção", " Marty McFly um adolescente de uma pequena cidade californiana, é transportado para a década de 1950 quando a experiência do excêntrico cientista Doc Brown dá errado. Viajando no tempo em um carro modificado, Marty conhece versões jovens de seus pais e precisa fazer com que eles se apaixonem, ou então ele deixará de existir. Para complicar, Marty precisa voltar para casa a tempo de salvar o cientista. ")

var Henrique = new perfillogin("Henrique", [])
Henrique.addFavorito(filme1)

console.log(Henrique);


Henrique.setPerfil = "Henrique"
console.log(Henrique);




