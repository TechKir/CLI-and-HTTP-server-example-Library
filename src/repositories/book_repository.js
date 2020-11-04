const path = require('path')
const fs = require('fs')
const pathToBooks = path.resolve(path.join(__dirname, '../assets/books.json'))

const bookCollection = JSON.parse(fs.readFileSync(pathToBooks, 'utf-8'));

const BookRepository = {
    
    findAll: async () => {
      return Object.values(bookCollection)
    },
    findById: async id => {
        return bookCollection[id]
    },
    save: async book => {
      Object.assign(bookCollection,book)
      fs.writeFileSync(pathToBooks,JSON.stringify(bookCollection,null,2), 'utf-8')
    }
  };

module.exports={
  BookRepository
}