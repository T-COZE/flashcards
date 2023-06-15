import React, { useEffect, useState } from "react";
import CardForm from "../CardForm";
import { createCard, readDeck } from "../utils/api";
import {
  useParams,
  useHistory,
  Link,
} from "react-router-dom/cjs/react-router-dom.min";

function AddCard() {
  const { deckId } = useParams();
  const history = useHistory();
  const initialFormData = { front: "", back: "" };

  const [deck, setDeck] = useState({ name: "", description: "", id: "" });

  useEffect(() => {
    readDeck(deckId).then((fetched) => setDeck(fetched));
  }, [deckId]);

  const [formData, setFormData] = useState(initialFormData);

  const createHandler = (e) => {
    e.preventDefault();
    createCard(formData).then((data) =>
      history.push(`/decks/${deck.id}/${data.id}`)
    );
    setFormData({ ...initialFormData });
  };
  const doneHandler = () => history.push(`/decks/${deck.id}`);
  console.log(formData);
  return (
    <div>
      <nav label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
          <li className="breadcrumb-item">
            <Link to={`/decks/${deckId}/study`}>Study</Link>
          </li>
          <li className="breadcrumb-item active">Add Card</li>
        </ol>
      </nav>
      <h2>{deck.name}: Add Card</h2>
      <CardForm
        initialFormData={initialFormData}
        setFormData={setFormData}
        formData={formData}
      />
       <button onClick={createHandler}type="button" className="btn btn-primary"> Save</button>
       
       <button onClick={doneHandler}type="button" className="btn btn-secondary">Done</button>
    </div>
  );
}

export default AddCard;
