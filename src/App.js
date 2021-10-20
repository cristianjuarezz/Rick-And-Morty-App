import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import React, { useEffect, useState } from "react";
import Navigation from "./Navigation";
import Characters from "./Characters";
import Paginator from "./Paginator";

export default function App() {
  const apiurl = "https://rickandmortyapi.com/api/character?page=1";
  const [characters, setCharacters] = useState([]);
  const [info, setInfo] = useState({});
  const requestOptions = {
    method: "GET"
  };

  const onPrevious = () => {
    fetchCharacters(info.prev);
  };
  const onNext = () => {
    fetchCharacters(info.next);
  };

  const fetchCharacters = async (url) => {
    await fetch(url, requestOptions)
      .then((res) => res.json())
      .then((data) => {
        setCharacters(data.results);
        setInfo(data.info);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchCharacters(apiurl);
  }, []);

  /*useEffect(()=>{
    console.log(characters)
  }, [characters])*/

  return (
    <>
      <Navigation />
      <div className="container mt-5 pt-4 pb-5">
        <h1 className="title mb-5">Rick And Morty App!</h1>
        <Paginator
          prev={info.prev}
          next={info.next}
          onPrev={onPrevious}
          onNext={onNext}
        />
        <Characters chars={characters} />
        <Paginator
          prev={info.prev}
          next={info.next}
          onPrev={onPrevious}
          onNext={onNext}
        />
      </div>
    </>
  );
}
