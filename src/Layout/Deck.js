import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import { Link, useParams } from "react-router-dom/cjs/react-router-dom.min";
import CardList from "./CardList";

function Deck({ data }) {
  const [deck, setDeck] = useState({cards:[]});
  const {deckId}= useParams()
  useEffect(() => {
    const intId = Number(deckId);
    readDeck(intId).then((data) => setDeck(data));
  },[deckId]);
  console.log(deck)
  
  return (
    <div className="main">
    <div className="card">
      <header
        className="d-flex justify-content-between"
        style={{ fontSize: "36px" }}
      >
        {deck.name}
        
      </header>
      <div className="card-body">{deck.description}</div>
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
      <button>Delete</button>
    </div>
    <h2>Cards</h2>
    {/* {deck.cards.map((card, index)=> */}<div>
    <CardList deck = {deck} /></div>
    {/* )} */}
    </div>
  );
}

export default Deck;
