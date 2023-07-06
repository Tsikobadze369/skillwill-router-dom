import React from "react";
import { useParams } from "react-router-dom";

function Fact() {
  const { factId } = useParams();

  const facts = [
    { id: 1, text: "The Harry Potter Series by J.K. Rowling has 7 books." },
    { id: 2, text: "There are approximately 600 students at Hogwarts." },
    {
      id: 3,
      text: "The Harry Potter films have been nominated for 12 Oscars but won none.",
    },
    { id: 4, text: "In the first book, Harry Potter is only 11 years old." },
  ];

  const parsedFactId = parseInt(factId, 10); // Convert factId to a number

  const fact = facts.find((item) => item.id === parsedFactId);

  const factNotFound = !fact;

  return (
    <div className="fact-container">
      <h2>Fact Page</h2>
      {factNotFound ? (
        <p className="fact-text not-found-text">
          Fact with ID {factId} not found
        </p>
      ) : (
        <p className="fact-text">{fact.text}</p>
      )}
    </div>
  );
}

export default Fact;
