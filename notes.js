const fs = require('fs')
const chalk = require('chalk')

const getNotes = () =>{
    
    return "Your notes ..."
}

const addNotes = (title,body) =>{
    const notes = loadNotes()
    var duplicateNote = []
    duplicateNote.push(notes.find((note) => note.title === title))
    if(duplicateNote.length!=0){
        notes.push({
            title: title, 
            body: body
        })
        saveNotes(notes)
        console.log("New Note added")
    }
    else {
        console.log("Note title taken")
    }
}
const removeNote = (title) =>{
    const notes = loadNotes()
    const notesToKeep = notes.filter((note) => note.title !== title)
    if(notesToKeep.length === notes.length){
        console.log(chalk.red.inverse("No Note Found!"))

    }
    else{
        console.log(chalk.green.inverse("Note removed!"))
    }

    saveNotes(notesToKeep)
   
}

const listNotes = () =>{
    console.log(chalk.green("Your Notes"))
    const allNotes = loadNotes()
    
    allNotes.forEach((note) =>{
        console.log(note.title)
    })
}

const readNote = (title) =>{
    const notes = loadNotes()
    const noteToBeRead = notes.find((note) => note.title === title)
    if (!noteToBeRead){
        console.log("No note by the given title "+title)
    }
    else{
        console.log(chalk.inverse("Your Note is"))
        console.log(noteToBeRead.body)
    }

}

const saveNotes = (notes) =>{
    const dataJSON = JSON.stringify(notes)
    fs.writeFileSync('notes.json',dataJSON)
}

const loadNotes = () =>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    }
    catch(err){
        return [] 
    }
    

}
module.exports = {
    getNotes: getNotes,
    addNotes: addNotes,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote
}