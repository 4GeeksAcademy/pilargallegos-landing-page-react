import React from "react";
import { MyCard } from "./MyCard";

const cards = [
    {
        id: 1,
        title: "Card 1",
        text: "This is the first card",
        image: "https://via.placeholder.com/500x325"
    },
    {
        id: 2,
        title: "Card 2",
        text: "This is the second card",
        image: "https://via.placeholder.com/500x325"
    },
    {
        id: 3,
        title: "Card 3",
        text: "This is the third card",
        image: "https://via.placeholder.com/500x325"
    },
    {
        id: 4,
        title: "Card 4",
        text: "This is the fourth card",
        image: "https://via.placeholder.com/500x325"
    }
];


function CardList() {
    return (
        <div className="row w-75 m-auto">
            {cards.map((card) => (
                <div className="col-3 mb-5" key={card.id}>
                    <MyCard tittle={card.tittle} text={card.text} image={card.image} />
                </div>
            ))}
        </div>

    )
};
export default CardList;