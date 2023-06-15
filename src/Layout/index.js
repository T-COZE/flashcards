import React from "react";
import Header from "./Header";
import NotFound from "./NotFound";
import Home from "./Home";
import AddCard from "./AddCard";
import EditDeck from "./EditDeck";
import Study from "./Study";
import Deck from "./Deck";
import CreateDeck from "./CreateDeck";
import EditCard from "./EditCard";

import { Route, Switch, useParams, useRouteMatch } from "react-router-dom";
import NotEnoughCards from "./NotEnoughCards";

function Layout() {
  const { path } = useRouteMatch();
  const { deckId, cardId } = useParams();

  return (
    <>
      <Header />
      <div className="container">
        <Switch>
          <Route path="/decks/:deckId/cards/:cardId/edit">
            <EditCard />
          </Route>
          <Route path="/decks/:deckId/cards/new">
            <AddCard />
          </Route>
          <Route path="/decks/:deckId/edit">
            <EditDeck />
          </Route>
          <Route path="/decks/new">
            <CreateDeck />
          </Route>
          <Route path="/decks/:deckId/study">
            <Study />
          </Route>
          <Route path="/decks/:deckId">
            <Deck />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
    </>
  );
}

export default Layout;
