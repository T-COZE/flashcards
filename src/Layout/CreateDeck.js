import React, { useState } from "react";
import DeckForm from "./DeckForm";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { createDeck } from "../utils/api";

function CreateDeck({deck}){
    const history = useHistory()
    const initialFormData = {
        name:"",
        description:"",
    }
    const [formData, setFormData]= useState(initialFormData)
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        createDeck(formData).then((data)=>history.push(`/decks/${data.id}`))
        setFormData({...initialFormData})
    }
    const cancelHandler = () => history.push("/")
    console.log(formData)
    return <div>
        <DeckForm 
        initialFormData= {initialFormData}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        formData={formData}
        cancelHandler={cancelHandler}
        />
    </div>
    
    }


export default CreateDeck