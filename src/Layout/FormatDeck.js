import React from "react";
import { Link, useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { deleteDeck } from "../utils/api";
function FormatDeck({ deck, }) {
  const history = useHistory()
  const deleteHandler = async (deck) => {
    const result = window.confirm("Delete this card?");
    if (result) {
      await deleteDeck(deck.id);
            window.location.pathname === '/' ? window.location.reload() : history.push('/')
    }
  };
  return (
    <div className="card">
      <header  className="d-flex justify-content-between" style={{ fontSize: "36px" }}>{deck.name}
      <div className="card-count">{deck.cards.length} cards</div>
      </header>
      <div className="card-body">{deck.description}</div>
      <div className="d-flex justify-content-around">
        <Link to={`/decks/${deck.id}`}>
          <button type="button" className="btn btn-secondary">View</button>
        </Link>
        <Link to={`/decks/${deck.id}/study`}>
          <button type="button "className="btn  btn-primary">Study</button>
        </Link>
         <button
            onClick={()=>{deleteHandler(deck)}}
           
            type="button"
            className="btn btn-danger"
          >delete</button>
      </div >
    </div>
  );
}
export default FormatDeck;
