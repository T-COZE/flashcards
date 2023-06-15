import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function DeckForm({ formData, handleSubmit, setFormData,cancelHandler }) {
  const changeHandler = ({ target }) => {
    setFormData({ ...formData, [target.name]: target.value });
    
  };
  console.log(formData.description)
  return(
  <form onSubmit={handleSubmit}>
    <label htmlFor="name">Name</label>
    <input
      name="name"
      type="text"
      placeholder="Name of Deck"
      id="name"
      value={formData.name}
      onChange={changeHandler}
      rows={4}
      style = {{width: "100%"}}
    ></input>
    <label htmlFor="description">Description</label>
    <textarea 
     name="description"
     type="text"
     placeholder="Description"
     id="name"
     value={formData.description}
     onChange={changeHandler}
     style= {{width: "100%"}}
     rows={6}>Description</textarea>
     
        <button type="submit"> <span className="oi oi-plus">Submit</span></button>
     
     <button onClick={cancelHandler}>Cancel</button>
  </form>
  
  )
}

export default DeckForm;
