import React, { useEffect, useState } from "react";
import { readDeck } from "../utils/api";
import { useParams, Link } from "react-router-dom/cjs/react-router-dom.min";
import Card from "../Card";
import NotEnoughCards from "./NotEnoughCards";

function Study(){
    const {deckId}=useParams()
    const [deck, setDeck]=useState({})


    useEffect(() => readDeck(deckId).then(setDeck), [deckId])
      
      if(deck===null || deck.cards === undefined){
        return <p>Loading...</p>;
      }
      const cardNum = deck.cards.length
      
     return  cardNum < 3 ? <NotEnoughCards deck = {deck} deckId = {deckId}/>
      : (<Card deck={deck} deckId={deckId} />)
    }
      


export default Study;