const {prompt} = require('inquirer');
const {ACCEPTED_GENRES}=require('../config');
const {BookRepository} = require('../repositories/book_repository');
const uuid = require("uuid");

module.exports = async () => {
    try{
        const anId = uuid.v4();
        const questions = [
            {
                name:"title",
                message:"What is the title?"
            },
            {
                name:"author",
                message:"What is the author?"
            },
            {
                name:"path",
                message:"Where is it stored on your hard drive? (Absolute path)"
            },
            {
                name:"genere",
                message:"What is the genere?",
                type:"list",
                choices:ACCEPTED_GENRES.split(',')
            }
        ]
    
        const {title,author,path,genere}= await prompt(questions);
        
        const newBookToSave = {
            [anId]: {
              id: uuid.v4(),
              title,
              author,
              genere,
              path
            }
        };
    
        BookRepository.save(newBookToSave)
    }catch (err){
        console.log(err)
    }
    
}
