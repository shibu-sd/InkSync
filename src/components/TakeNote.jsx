import React from "react";

function TakeNote(){
    return (
        <div>
            <form>
                <input name="title" placeholder="Title" />
                <textarea name="content" placeholder="Take a note..." rows="3" />
                <button className="btn">+</button>
            </form>
        </div>
    );
}

export default TakeNote;