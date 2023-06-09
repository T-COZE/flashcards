import React, {useState} from "react";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";

function Card({deck, deckId}){

const initialState = {index: 0, flipped: false, viewed: false}
const [session, setSession] = useState({...initialState})
const history = useHistory()

function handleFlip() {
    setSession({
      ...session,
      flipped: !session.flipped,
      viewed: true,
    });
  }
  function handleFlipNext(){
    setSession({
        ...session, index: session.index +1,
        flipped: false,
        viewed: false
    })
  }
  function handleReset(){
    const restart = window.confirm(
        "Restart Cards? Click 'cancel' to return to home page"
        )
        restart? setSession(initialState): history.push("/")
    
  }

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
          <li className="breadcrumb-item active" >
            Study
          </li>
        </ol>
      </nav>
      <h1>Study: {deck.name}</h1>
      <h2>
        Card {session.index + 1} of {deck.cards.length}
      </h2>
      <p>
        {session.flipped
          ? deck.cards[session.index].back
          : deck.cards[session.index].front}
      </p>
      <button onClick={handleFlip}>Flip</button>
      {session.viewed && session.index < deck.cards.length - 1 ? (
        <button onClick={handleFlipNext}>Next</button>
      ) : (
        session.viewed && <button onClick={handleReset}>Reset</button>
      )}
    </div>
  )
}


export default Card;