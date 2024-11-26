import React from "react";
import Button from './Button' ;

const cards = [
    {
      id: 1,
      title: "Card 1",
      text: "This is the first card",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Card 2",
      text: "This is the second card",
      image: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "Card 3",
      text: "This is the third card",
      image: "https://via.placeholder.com/150"
    },
    {
        id: 4,
        title: "Card 4",
        text: "This is the fourth card",
        image: "https://via.placeholder.com/150"
      }
  ];

const Card = ({title, text, image}) => {
    return (
        <div className="card">
            <img src={image} className="card-img-top" alt="" />
            <div className="card-body">
                <h5 className="card-tittle">{title}</h5>
                <p className="card-text">{text}</p>
                <Button text="Find out more!" />
            </div>
        </div>
    )
}
function CardList() {
    return (
        <div className="row w-75 m-auto">
            {cards.map((card) => (
                <div className="col-3" key={card.id}>
                    <Card tittle={card.tittle} text={card.text} image={card.image} />
                </div>
            ))}
        </div>

    )
};
export default CardList;