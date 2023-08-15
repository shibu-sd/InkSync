import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from "./Note";
import notes from "../notes";
import TakeNote from "./TakeNote";

function App(){

    const [notes, setNotes] = useState([]);

    function addNote(newNote){
        setNotes(prevNotes => {
            return [... prevNotes, newNote];
        });
    }

    return(
    <div>
        <Header />
        <TakeNote onAdd={addNote} />
        {notes.map((noteItem) => {
            return <Note title={noteItem.title} content={noteItem.content} />
        })}
        <Footer />
    </div>
    );
}

export default App;