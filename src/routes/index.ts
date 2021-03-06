import {RouterInstance} from '../config/GlobalRouter'
import { ProdutoRoutes } from "./ProdutoRoutes"
export class RoutesHandler
{
    ProdutoRoutes:ProdutoRoutes;

    constructor()
    {
        this.ProdutoRoutes = new ProdutoRoutes();
    }
    
    init()
    {
        return RouterInstance.router
    }
}