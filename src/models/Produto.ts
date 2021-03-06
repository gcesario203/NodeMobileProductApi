import {Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, PrimaryColumn} from 'typeorm'


@Entity("produtos")
class Produto
{
    @PrimaryGeneratedColumn()
    readonly id: number;

    @Column()
    nome: string;

    @Column()
    preco: number;

    @Column("decimal", { precision: 8, scale: 2 })
    quantidade: number;

    @CreateDateColumn()
    criadoEm:Date;
}

export {Produto}
