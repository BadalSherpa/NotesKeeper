import React, { useState } from "react";
import AddCircleIcon from '@material-ui/icons/AddCircle';
import Fab from '@material-ui/core/Fab';
import Zoom from '@material-ui/core/Zoom';

function CreateArea(props) {
  const[isExpanded,setIsExpanded]=useState(false);

  const [note, setNote] = useState({
    title: "",
    content: ""
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setNote(prevNote => {
      return {
        ...prevNote,
        [name]: value
      };
    });
  }

  function submitNote(event) {
    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
    event.preventDefault();
  }

  function expand()
  {
    setIsExpanded(true)
  }

  return (
    <div>
      <form className="create-note">
        {isExpanded &&<input
          name="title"
          onChange={handleChange}
          value={note.title}
          placeholder="Title"
          autoFocus={true}
        />}
        
        <textarea
          name="content"
          onChange={handleChange}
          value={note.content}
          onClick={expand}
          placeholder="Take a note..."
          rows={isExpanded?3:1}
        />
        <Zoom in={isExpanded?true:false}>
        <Fab onClick={submitNote}><AddCircleIcon /></Fab>
        </Zoom>
        
      </form>
    </div>
  );
}

export default CreateArea;
