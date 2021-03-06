import {Connection, ConnectionOptions, createConnection, getConnectionOptions} from 'typeorm';

export default async ():Promise<Connection> =>
{
    const defaultOptions = await getConnectionOptions()

    const getOptions = async () => {
        if (process.env.DATABASE_URL) {
            let newObj: ConnectionOptions
            newObj = {
                type: 'postgres',
                username:process.env.USER,
                password:process.env.PASSWORD,
                host:process.env.HOST,
                database:process.env.DATABASE,
                url:  process.env.DATABASE_URL,
                migrations:
                [
                    './dist/database/migrations/**.js'
                ],
                entities:['./dist/models/**.js'],
                cli:
                {
                    migrationsDir:"./dist/database/migrations"
                }
            }

            console.log(newObj)

            return newObj
        }
        return defaultOptions;
      };
    const teste = await getOptions();
    
    return createConnection(teste);
}