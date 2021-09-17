import React from "react";
import "./styles.css";
import { useState } from "react";

const movielist = {
  SuperHero: [
    { name: "  The Dark Knight ", rating: "5/5" },
    { name: " Avengers: Endgame ", rating: "4.5/5" },
    { name: "  Loki   ", rating: "4/5" },
    { name: " Guardians of the Galaxy ", rating: "4/5" },
    { name: "  Suicide Squad ", rating: "3.5/5" }
  ],

  Horror: [
    {
      name: "Stranger Things",
      rating: "5/5"
    },
    {
      name: "The Night House",
      rating: "4.5/5"
    },
    {
      name: " Supernatural",
      rating: "4/5"
    },
    {
      name: "The Conjuring 2",
      rating: "4/5"
    },
    {
      name: "Annabelle",
      rating: "3.5/5"
    }
  ],
  Animation: [
    {
      name: " Rick and Morty  ",
      rating: "5/5"
    },
    {
      name: " Minions",
      rating: "5/5"
    },
    {
      name: " Kung Fu Panda",
      rating: "5/5"
    },
    {
      name: "Incredibles 2",
      rating: "5/5"
    },
    {
      name: "Frozen",
      rating: "4.5/5"
    }
  ],
  Thriller: [
    {
      name: "Breaking Bad ",
      rating: "5/5"
    },
    {
      name: " Money Heist ",
      rating: "5/5"
    },
    {
      name: "  Sherlock Holmes  ",
      rating: "4.5/5"
    },
    {
      name: "  F9: The Fast Saga  ",
      rating: "3.5/5"
    },
    {
      name: " Peaky Blinders ",
      rating: "4.5/5"
    }
  ],
  Romance: [
    {
      name: "Dilwale Dulhania Le Jayenge... ",
      rating: "5/5"
    },
    {
      name: "Titanic",
      rating: "5/5"
    },
    {
      name: "Jab We Met",
      rating: "4.5/5"
    },
    {
      name: "The Notebook",
      rating: "4.5/5"
    },
    {
      name: "Kabir Singh",
      rating: "3.5/5"
    }
  ]
};

export default function App() {
  const [selectedGenre, setGenre] = useState("Animation");
  function genreClickHandler(genre) {
    setGenre(genre);
  }
  return (
    <div className="App">
      <h1> The picture-show 🎥 </h1>
      <h2 style={{ fontSize: "large" }}>
        {" "}
        Hey <strong> movie freak !</strong> Select a genre and look into it.{" "}
      </h2>

      <div>
        {Object.keys(movielist).map((genre) => (
          <button
            onClick={() => genreClickHandler(genre)}
            style={{
              cursor: "pointer",
              background: "#E5E7EB",
              borderRadius: "0.5rem",
              padding: "0.5rem  1rem",
              border: "1px solid black",
              margin: "1rem 0.3rem"
            }}
          >
            {genre}
          </button>
        ))}
      </div>
      <hr />
      <div style={{ textAlign: "centre" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {movielist[selectedGenre].map((book) => (
            <li
              key={book.name}
              style={{
                listStyle: "none",
                padding: "0.5rem",
                border: "1px solid #D1D5DB",
                width: "40%",
                margin: "1rem 24rem",
                borderRadius: "5rem"
              }}
            >
              {" "}
              <div style={{ fontSize: "larger" }}> {book.name} </div>
              <div style={{ fontSize: "smaller" }}> {book.rating} </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
