import React from "react";
import Header from "./Header";
import Footer from "./Footer"
import Note from "./Note";
import notes from "../notes";
import TakeNote from "./TakeNote";

function App(){
    return(
    <div>
        <Header />
        <TakeNote />
        <Note key={1} title="Note title" content="Note content" />
        <Footer />
    </div>
    );
}

export default App;