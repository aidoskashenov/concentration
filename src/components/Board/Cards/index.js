import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"

import { Card } from "./Card"

import api from "api"

import "./Cards.css"

export const Cards = ({ handler }) => {
  const [cards, setCards] = useState([])

  useEffect(() => {
    ;(async () => {
      const { cards } = await api.index(4)
      setCards(cards)
    })()
  }, [])

  const flipHandler = (event) => {
    console.log(event.target)
  }

  const renderCards = () => cards.map(({ image, suit, value }, i) => (
    <Card
      image={image}
      suit={suit}
      value={value}
      handler={flipHandler}
      key={i}
    />
  ))

  return <div className="container">{renderCards()}</div>
}

Cards.propTypes = {
  // Notify parent of when to start and stop the timer
  handler: PropTypes.func,
}
