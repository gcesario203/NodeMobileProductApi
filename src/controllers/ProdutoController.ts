import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { ProdutoRepository } from '../reporitories/ProdutoRepository';

class ProdutoController
{
    async create(req:Request,res:Response)
    {
        let {nome,preco,quantidade} = req.body
        const {id} = req.params

        preco = Number.parseFloat(preco);

        const pProdutoRepo =  getCustomRepository(ProdutoRepository)

        const existProduto = await pProdutoRepo.findOne(
            {
                where:{nome}
            })

        if(id)
        {
            try {
                const produtoToChange =await pProdutoRepo.findOne(id)

                if(produtoToChange)
                {
                    await pProdutoRepo.update({id:produtoToChange.id},
                        {
                            nome:nome,
                            preco:preco,
                            quantidade:quantidade
                        })

                    res.status(203).send({mensagem:"Produto alterado com sucesso"})
                }
            } catch (error) {
                res.status(500).send({mensagem:`Algo deu errado, ${error.message}`})
            }
        }
        else
        {
            if(existProduto)
            {
                res.status(400).send(
                {
                    mensagem:"Produto ja existe"
                })
            }
            else
            {
                const newUser = pProdutoRepo.create(
                    {
                        nome,preco,quantidade
                    })

                await pProdutoRepo.save(newUser)

                res.status(201).send(
                    {
                        mensage:`Produto criado com sucesso:${newUser.nome}`
                    })
                    }   
        }
    }

    async delete(req:Request,res:Response)
    {
        const {id} = req.params

        const pProdutoRepo =  getCustomRepository(ProdutoRepository)

        const produto = await pProdutoRepo.findOne(id)

        if(produto)
        {
            await pProdutoRepo.delete(produto)

            res.status(200).send({mensagem:"Produto deletado com sucesso"})
        }
        else
        {
            res.status(500).send(
                {
                    mensagem:"Algo aconteceu"
                })
        }
    }

    async get(req:Request,res:Response)
    {
        const {id} = req.params


        const pProdutoRepo =  getCustomRepository(ProdutoRepository)

        if(id)
        {
            const produto = await pProdutoRepo.findOne(id)

            if(produto)
            {
                res.status(200).send({
                    produto
                })
            }
            else
            {
                res.status(404).send({mensagem:"Produto não encontrado"})
            }
        }
        else
        {
            const produtos = await pProdutoRepo.find();

            res.status(200).send(
            {
                produtos
            })
        }
    }
}

export {ProdutoController}