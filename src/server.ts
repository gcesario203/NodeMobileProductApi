import {app} from './app'
const port = process.env.PORT || 9999;

app.listen(port, ()=> console.log(`Rodando na porta ${port}`));