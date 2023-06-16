import React from "react";
import {
  Link,
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { deleteCard } from "../utils/api";

function CardList({ deck }) {
  const { cardId } = useParams();
  const history = useHistory();
  const deleteHandler = async (cardId) => {
    const result = window.confirm("Delete this card?");
    if (result) {
      await deleteCard(cardId);
      history.push("/");
    }
  };
  return (
    <main>
      {deck.cards.map((card, index) => (
        <div className="card" type="card" key={index}>
          <div>{card.front}</div>
          <div>{card.back}</div>
          <div className="buttons d-flex justify-content-end">
            <Link to={`/decks/${deck.id}/cards/${card.id}/edit`}>
              <button type="button" className="btn btn-secondary">
                Edit
              </button>
            </Link>
            <button
              onClick={()=>deleteHandler(card.id)}
              type="button"
              className="btn btn-danger"
            >
              delete
            </button>
          </div>
        </div>
      ))}
    </main>
  );
}
export default CardList;
