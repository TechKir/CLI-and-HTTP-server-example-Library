const http = require('http');
const dotenv = require('dotenv');
const {BookRepository} = require('./repositories/book_repository')
const getBook = require('./services/getBook')

dotenv.config({path: __dirname + '/.env'});
const {NODE_PORT} = process.env;

const booksUri = '/book'
const bookUri = '/book?bookId='

const server = http.createServer( async (req,res)=>{
    const { headers, method, url } = req;
    const endpointSupported = method == 'GET' && url.includes(booksUri);
    
    if (!endpointSupported) {
        res.writeHead(404);
        res.end('Route or method not found');
        return
    }

    if (url === booksUri){
        const allBooks = await BookRepository.findAll();
        res.writeHead(200,{
            'Content-Type': 'application.json'
        })
        res.end(JSON.stringify(allBooks))
    }

    if (url.includes(bookUri)) {
        const bookId = url.replace('/book?bookId=','');
        const accept = headers.accept
        
        if(!bookId || !accept){
            res.writeHead(400);
            res.end('BookId or Accept missing')
        }

        const fetchedBook = await getBook(bookId,accept)

        if(!fetchedBook){
            res.writeHead(404);
            res.end('Book not found');
            return
        }

        res.writeHead(200, {
            'Content-Type': accept
        })
        
        res.end(JSON.stringify(fetchedBook))
    }
})

server.listen(NODE_PORT, () =>{
    console.log(`server is listening at port ${NODE_PORT}`)
})