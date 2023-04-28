import React, { useState } from "react";

const NewTodoList = () => {
  const [toDo, setTodoList] = useState([]);
  const [text, setText] = useState("");
  const [edit, setEdit] = useState("");
  const [editingText, setEditingText] = useState(-1);
  const handleSubmit = () => {
    if (text.length > 0) {
      setTodoList((prev) => [...prev, text]);
      setText("");
    }
    return;
  };
  const handleDelete = (index) => {
    const newData = toDo.filter((elem, i) => {
      return i != index;
    });
    setTodoList(newData);
  };
  const handleEdit = (index) => {
    setEditingText(index);
    setEdit(toDo[index]);
  };
  const handleCancel=()=>{
    setEdit('');
    setEditingText(-1);
  }
  const handleSave=(index)=>{

    const newData=[...toDo];///
    newData[index]=edit;
    setTodoList(newData);
    setEditingText(-1);
    setEdit('');
  }
  const list = toDo.map((item, index) => (
    <div key={index}>
      <li>
        {editingText !== index ? (
          <div>
            {item}
            <button onClick={() => handleEdit(index)}>Edit</button>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        ) : (
          <div>
            <textarea value={edit} onChange={(e)=>setEdit(e.target.value)}/>
            <button onClick={()=>handleSave(index)} >Save</button>
            <button onClick={()=>handleCancel()}>Cancel</button>
          </div>
        )}
      </li>
    </div>
  ));

  return (
    <div>
      <h1>TO DO LIST</h1>
      <textarea data-testid="task" value={text} onChange={(e) => setText(e.target.value)} />
      <button type="submit" onClick={handleSubmit} data-testid="btn">
        Add Task
      </button>
      <div>
        <ul>{list}</ul>
      </div>
    </div>
  );
};

export default NewTodoList;
