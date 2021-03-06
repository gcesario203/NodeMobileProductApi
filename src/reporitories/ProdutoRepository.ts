import { EntityRepository, Repository } from "typeorm";
import { Produto } from "../models/Produto";

@EntityRepository(Produto)
class ProdutoRepository extends Repository<Produto>
{

}

export {ProdutoRepository}