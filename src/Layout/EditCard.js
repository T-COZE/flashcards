import React, { useEffect, useState } from "react";
import { readCard } from "../utils/api";
import { readDeck } from "../utils/api";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { updateCard } from "../utils/api";
import CardForm from "../CardForm";

function EditCard() {
  const { deckId, cardId } = useParams();
  const history = useHistory();
   const [formData, setFormData] = useState({});
//   const [card, setCard] = useState({ front: "", back: "", id: "" });
  const [deck, setDeck] = useState({ name: "", description: "", id: "" });

  useEffect(() => {
    readDeck(deckId).then((data) => setDeck(data));
  }, [deckId]);
  useEffect(() => {
    readCard(cardId).then((cardData) => setFormData(cardData))
},[cardId]);

 
  const updateHandler = (e) => {
    e.preventDefault();
    updateCard(formData).then(() => history.push(`/decks/${deck.id}`));
    
  };
  const cancelHandler = () => history.push(`/decks/${deck.id}`);

  return (
    <div>
      <nav label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item">
          </li>
          <li className="breadcrumb-item active">Edit Card</li>
        </ol>
      </nav>
      <h2>Edit Card</h2>
      <div>
        <CardForm formData={formData} setFormData={setFormData} />
      </div>
      <button onClick={updateHandler} className="btn btn-success">
        Save
      </button>

      <button onClick={cancelHandler} className="btn btn-secondary">
        Cancel
      </button>
    </div>
  );
}
export default EditCard;
