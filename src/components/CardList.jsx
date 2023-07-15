import React from "react";
import Card from "./Card";


function CardList({ stays }) {
    return (
      <div className="card-list">
        {stays.map((stay, index) => (
          <Card key={index} stay={stay} />
        ))}
      </div>
    );
  }
  
  export default CardList;