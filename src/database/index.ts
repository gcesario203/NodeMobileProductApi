import {Connection, ConnectionOptions, createConnection, getConnectionOptions} from 'typeorm';

export default async ():Promise<Connection> =>
{
    const defaultOptions = await getConnectionOptions()

    const getOptions = async () => {
        if (process.env.DATABASE_URL) {
            let newObj: ConnectionOptions

            newObj = {
                type:'postgres',
                url:process.env.DATABASE_URL,
                ssl:{rejectUnauthorized:false}
            }
            console.log(defaultOptions)
            return newObj

          
        }
        return defaultOptions;
      };
    const teste = await getOptions();
    
    return createConnection(teste);
}