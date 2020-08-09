const chalk = require('chalk')
const yargs = require('yargs')
const notes = require('./notes.js')
const { argv } = require('yargs')

//Create Add command
yargs.command({
    command: 'add',
    describe:'Add a new note',
    builder:{
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        },
        body:{
            describe:'Note body',
            demandOption: true,
            type: 'string'}
    },
    handler (argv){
        notes.addNotes(argv.title, argv.body)

    }
})

// Create Remove command
yargs.command({
    command: 'remove',
    describe:'Removing a note',
    builder:{
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (){
        notes.removeNote(argv.title)
    }
})

// Create list command
yargs.command({
    command: 'list',
    describe:'list all the notes',
    handler (){
        notes.listNotes()
    }
})

// Create read command
yargs.command({
    command: 'read',
    describe:'read a note',
    builder:{
        title: {
            describe:'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler (){
        notes.readNote(argv.title)
    }
})

yargs.parse()






