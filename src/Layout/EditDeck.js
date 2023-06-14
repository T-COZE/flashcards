import React, { useEffect } from "react";
import { readDeck, updateDeck } from "../utils/api";
import DeckForm from "./DeckForm";
import { useState } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";

function EditDeck() {
  const history = useHistory();
  const { deckId } = useParams();
  const [deck, setDeck] = useState({ name: "", description: "", id: "" });

  useEffect(() => {
    readDeck( deckId ).then((fetched) => setDeck(fetched));
  }, [deckId]);
  
  useEffect(() => {
    setFormData({ ...deck });
  }, [deck]);
  const [formData, setFormData] = useState({ ...deck });
  const handleSubmit = (e) => {
    e.preventDefault();
    updateDeck(formData).then(() => history.push(`/decks/${deck.id}`));
    setFormData({ ...formData });
  };

  const cancelHandler = ()=> history.push(`decks/${deck.id}`)


return <div>
    <DeckForm 
    formData={formData}
    setFormData={setFormData}
    cancelHandler={cancelHandler}
    handleSubmit={handleSubmit}
    />
</div>
}
export default EditDeck;
