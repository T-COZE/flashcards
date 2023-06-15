import React, { useEffect, useState } from "react";
import { listDecks } from "../utils/api";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import FormatDeck from "../FormatDeck";

function Home() {
  const [allDecks, setAllDecks] = useState([]);

  useEffect(() => {
    const abortController = new AbortController();
    listDecks()
      .then((data) => setAllDecks(data))
      .catch((e) => {
        if (e.name === "AbortError") {
          console.log("Aborted");
        } else {
          throw e;
        }
        return () => {
          abortController.abort();
        };
      });
  }, []);
  if (allDecks.length > 0) {
    return (
      <div>
        <Link to="/decks/new">
          <button type="button" className="btn btn-outline-primary">+ Create Deck</button>
        </Link>
        <div>
          {allDecks.map((deck, index) => {
            return <FormatDeck key={index} deck={deck} />;
          })}
        </div>
      </div>
    );
  }
  return <p>Loading</p>;
}

export default Home;
