import { createServer } from 'http';

const server = createServer((request, response) => {
    switch(request.url){
        //Rota para status
        case '/status': {
            //head = cabeÇalho
            response.writeHead(200, {
            'content-type': 'application/json',
            });
            //corpo
            response.write(
                JSON.stringify({
                    status: 'Okay',
                }));
            //final
            response.end();
            break;
        }    
        default: {
            response.writeHead(404, 'Service not found'); 
            response.end();
        }  
    }
});
//Variável global do Node
const PORT = process.env.PORT ? parseInt(process.env.PORT) : 8000;
const HOSTNAME = process.env.HOSTNAME ? parseInt(process.env.PORT) : 8000;

server.listen(PORT, '127.0.0.1', () => {
    console.log(`Server is listening at http://127.0.0.1:${PORT}`);
});