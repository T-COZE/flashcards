import React from "react";
function CardForm({ formData, doneHandler, setFormData,createHandler,  }) {
    const changeHandler = ({ target }) => {
      setFormData({ ...formData, [target.name]: target.value });
      
    };
   
    return(

    <form onSubmit={createHandler}>
        
      <label htmlFor="card front">Card Front</label>
      <textarea
        name="front"
        type="text"
        placeholder="card front"
        id="name"
        value={formData.front}
        onChange={changeHandler}
        rows={4}
        style = {{width: "100%"}}
      ></textarea>
      <label htmlFor="card back">Card Back</label>
      <textarea
       name="back"
       type="text"
       placeholder="card back"
       id="back"
       value={formData.back}
       onChange={changeHandler}
       style= {{width: "100%"}}
       rows={4}>Card Back</textarea>
       
    
    </form>
    
    )
  }
export default CardForm;