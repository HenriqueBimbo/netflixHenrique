import { categoriaFilme } from "./categoriaFilme";




export class filmes extends categoriaFilme {
    
    
    nome: string;
    lancamento: string;
    sinopse: string; 


    constructor(classificacao: string , metragem: string , nome: string, lancamento: string, categoria: string, sinopse: string) {
        super(classificacao , categoria, metragem); 

        this.nome = nome;
        this.lancamento = lancamento;
        this.sinopse = sinopse; 
        
        

    }



    

}

var filme1  = new filmes ("Livre" , "Longa" , "De volta para o futuro" ,  "1985" , "Ficção" , " Marty McFly um adolescente de uma pequena cidade californiana, é transportado para a década de 1950 quando a experiência do excêntrico cientista Doc Brown dá errado. Viajando no tempo em um carro modificado, Marty conhece versões jovens de seus pais e precisa fazer com que eles se apaixonem, ou então ele deixará de existir. Para complicar, Marty precisa voltar para casa a tempo de salvar o cientista. ")
var filme2 = new filmes ("12" , "Longa" , "A casa de cera" ,  "2005" ,  "Terror" , "Um grupo de amigos da faculdade está a caminho de um jogo de futebol quando, em uma cidade fantasma, o carro quebra e são obrigados a procurar auxílio no único lugar que está aberto: o museu de cera local. Eles ficam impressionados com a perfeição das esculturas e logo percebem a razão de tanto realismo. Aterrorizados, fogem para não se transformarem em peças de museu.")
var filme3 = new filmes  ("16" , "Longa" , "El camino", "2019" , "Ficção" ,  "A Breaking Bad Movie é um filme norte-americano de drama lançado em 2019, escrito e dirigido por Vince Gilligan. É uma sequência e epílogo para a série de televisão Breaking Bad, com o ator Aaron Paul retornando para o papel de Jesse Pinkman. ")
console.log(filme1);
console.log(filme2);
console.log(filme3);


