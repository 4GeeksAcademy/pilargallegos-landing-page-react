import React from "react";
import Navbar from "./componentes/Navbar";
import Jumbotron from "./componentes/Jumbotron";
import Button from "./componentes/Button";

import CardList from "./componentes/Card";

const Home = () => {
  const handleClick = () => {
    alert("Hello!");
  };
  return (
    <div className="text-left">
      <Navbar />
      <div>
        <Jumbotron>
          <Button text="Call to action!" onClick={handleClick} />
        </Jumbotron>
        <CardList>
          <Button text="Find out more!"></Button>
        </CardList>
      </div>
    </div>
  );
};

export default Home;
