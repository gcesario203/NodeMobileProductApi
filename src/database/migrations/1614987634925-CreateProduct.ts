import {MigrationInterface, QueryRunner, Table} from "typeorm";

export class CreateProduct1614987634925 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name:"produtos",
                columns:
                [
                    {
                        name:"id",
                        type:"int",
                        isPrimary:true,
                        isGenerated:true,
                        generationStrategy:'increment'
                    },
                    {
                        name:"nome",
                        type:"varchar",
                        isNullable: false
                    },
                    {
                        name:"preco",
                        type:"double",
                        isNullable: false
                    },
                    {
                        name:"quantidade",
                        type:"int",
                        isNullable:false
                    },
                    {
                        name:'criadoEm',
                        type:'timestamp',
                        default:'now()'
                    }
                ]
            }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable("produtos");
    }

}
