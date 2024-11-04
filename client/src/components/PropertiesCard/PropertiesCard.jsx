import React from "react";
import "./PropertiesCard.css";
import {AiFillHeart} from 'react-icons/ai'
import {truncate} from 'lodash' 
import { useNavigate } from "react-router-dom";
import Heart from "../Heart/Heart";
const PropertiesCard = ({ card }) => {

  const { image, price, name, detail } = card;
  const imageUrl = image || ""; 


  const navigate = useNavigate();
  return (
    <div className="flexColStart r-card" onClick={()=>navigate(`../properties/${card.id}`)}>
      <img src={imageUrl} alt="home" />
        <Heart id={card?.id}/>
      <span secondaryText r-price>
        <span style={{ color: "orange" }}>$</span>
        <span>{price || ""}</span> {/* Provide an empty string if price is undefined */}
      </span>
      <span className="primaryText">{truncate(card.title,{length: 15})}</span> {/* Provide an empty string if name is undefined */}
      <span className="SecondaryText">{truncate(card.description,{length:18})}</span> {/* Provide an empty string if detail is undefined */}
    </div>
  );
};

export default PropertiesCard;
