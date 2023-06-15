import React, { useState } from "react";
import DeckForm from "./DeckForm";
import { useHistory, Link } from "react-router-dom/cjs/react-router-dom.min";
import { createDeck } from "./utils/api";

function CreateDeck() {
  const history = useHistory();
  const initialFormData = {
    name: "",
    description: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleSubmit = (e) => {
    e.preventDefault();
    createDeck(formData).then((data) => history.push(`/decks/${data.id}`));
    setFormData({ ...initialFormData });
  };
  const cancelHandler = () => history.push("/");
  console.log(formData);
  return (
    <div>
      <nav label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/">Home</Link>
          </li>
          <li className="breadcrumb-item active">
            <Link to={`/decks/new`}>Create Deck</Link>
          </li>
        </ol>
      </nav>
      <h2>Create Deck</h2>
      <DeckForm
        initialFormData={initialFormData}
        handleSubmit={handleSubmit}
        setFormData={setFormData}
        formData={formData}
        cancelHandler={cancelHandler}
      />
    </div>
  );
}

export default CreateDeck;
