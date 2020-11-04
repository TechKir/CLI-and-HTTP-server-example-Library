const fs = require('fs');
const path = require('path')
const {BookRepository} = require('../repositories/book_repository');
const logger = require('../utils/logger')
const pathToBooks = path.resolve(path.join(__dirname, '../assets/books.json'));

const descriptionToHtml = (book) => (
    `<html>
        <header>${book.title}</header>
        <body>
            <p>Author:<b>${book.author}</b></p>
            <p>Path:<b>${book.path}</b></p>
            <p>Genre:<b>${book.genre}</b></p>
        </body>
    </html>`
)

module.exports = async (id,accept)=>{
    const book = await BookRepository.findById(id)
    
    logger(`BookId ${id} was requested in format: ${accept}`)

    if(!book){
        return
    }
    
    switch(accept){
        case 'application/pdf':
            return{
                accept,
                content: fs.createReadStream(pathToBooks,'utf-8')
            }
        case 'application/json':
            return{
                accept,
                content: JSON.stringify({
                    id: "6078d9c7-8b00-4852-af42-51fefbc3a2bd",
                    title: "Title",
                    author: "Author",
                    path: "path",
                    genre: "genre",
                })
            }
        case 'text/html':
            return{
                accept,
                content:descriptionToHtml(book)
            }  
        default:
            break          
    }
}