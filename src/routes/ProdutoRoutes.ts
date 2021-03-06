import {RouterInstance} from '../config/GlobalRouter'
import { ProdutoController } from "../controllers/ProdutoController"

class ProdutoRoutes
{
    produtoController:ProdutoController;

    constructor()
    {
        this.produtoController = new ProdutoController();
        this.init()
    }

    init()
    {
        RouterInstance.router.get("/produtos", this.produtoController.get)
        RouterInstance.router.get("/produtos/:id", this.produtoController.get)
        RouterInstance.router.post("/produtos", this.produtoController.create)
        RouterInstance.router.delete("/produtos/:id", this.produtoController.delete)
        RouterInstance.router.put("/produtos/:id", this.produtoController.create)

    }
}

export {ProdutoRoutes}