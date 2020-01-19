import React from "react"
import StyledCard from "./styles"
import Paragraph from "../Paragraph"

const Card = () => {
  return (
    <StyledCard>
      <Paragraph>Город</Paragraph>
      <div>
        <img src="" alt="Погода" />
        12c
      </div>
      <Paragraph>Ветер: 3 м/c</Paragraph>
      <Paragraph>Давление: 3 мм</Paragraph>

      <button
        onClick={() => {
          console.log("Закрыть плашку")
        }}
        type="button"
      >
        +
      </button>
    </StyledCard>
  )
}

export default Card
