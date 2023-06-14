import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";


function CardList({deck, }){
   return(
    <main >
        {deck.cards.map((card, index)=>(
        <div className="card" type="card" key={index}>
        <div>{card.front}</div>
        <div>{card.back}</div>
        <div className="buttons d-flex justify-content-end">
            <Link to='/decks/${deck.id}/cards/edit'>
                <button type="button" className="btn btn-secondary" >Edit</button>
            </Link>
            <button type="button" className="btn btn-danger" >delete</button>
        </div>
        </div>
        ))}
    </main>
   )
}
export default CardList;