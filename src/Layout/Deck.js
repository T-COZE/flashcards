import React, { useEffect, useState } from "react";
import { readDeck, deleteDeck } from "../utils/api";
import {
  Link,
  useParams,
  useHistory,
} from "react-router-dom/cjs/react-router-dom.min";
import CardList from "./CardList";


function Deck() {
  const [deck, setDeck] = useState({ cards: [] });
  const { deckId } = useParams();

  useEffect(() => {
    const intId = Number(deckId);
    readDeck(intId).then((data) => setDeck(data));
  }, [deckId]);
  const history = useHistory();
  const deleteHandler = async () => {
    const result = window.confirm(
      "Delete this deck? You will not be able to recover it."
    );
    if (result) {
      await deleteDeck(deck.id);
      history.push("/");
     
    }
  };

  return (
    
    <div className="main">
      <nav label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to={`/decks/${deckId}`}>{deck.name}</Link>
          </li>
        </ol>
      </nav>
      <div className="card">
        <header
          className="d-flex justify-content-between"
          style={{ fontSize: "36px" }}
        >
          {deck.name}
        </header>
        <div className="card-body">{deck.description}</div>
        <div className="buttons d-flex">
          <Link to={`/decks/${deck.id}/edit`}>
            <button type="button" className="btn btn-secondary">
              Edit
            </button>
          </Link>
          <Link to={`/decks/${deck.id}/study`}>
            <button type="button" className="btn btn-primary">
              Study
            </button>
          </Link>
          <Link to={`/decks/${deck.id}/cards/new`}>
            <button type="button" className="btn btn-success">
              + Add Card
            </button>
          </Link>
          <button
            onClick={()=>deleteHandler(deck.id)}
            type="button"
            className="btn btn-danger"
          >
            Delete
          </button>
        </div>
      </div>
      <h2>Cards</h2>

      <div>
        <CardList deck={deck} />
      </div>
    </div>
  );
}

export default Deck;
