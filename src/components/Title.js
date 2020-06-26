import React from "react"
import styled from "styled-components"

const Title = ({ title, subtitle }) => {
  return (
    <TitleWrapper>
      <div>
        <h4 className="title">
          <span>{title}</span>
        </h4>
      </div>
    </TitleWrapper>
  )
}

const TitleWrapper = styled.div`
  margin: 2rem -20px;
  background: var(--backgroundColor1);
  h4 {
    font-size: 4rem;
    text-align: center;
    color: var(--primaryColor2);
  }
`

export default Title
