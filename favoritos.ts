import { perfillogin } from "./perfillogin";
import { filmes } from "./filme";



export class favoritos {

    

    favoritos: Array<filmes>;
    

    constructor(favoritos: Array<filmes>) {
       

        this.favoritos = favoritos;
    }



    get getFavoritos() {

        return this.favoritos
        
    }

    set setFavoritos(favoritos: Array<filmes>) {


        this.favoritos = favoritos;

    }




}


