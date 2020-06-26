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
  h4 {
    font-size: 4rem;
    text-align: center;
    color: var(--mainWhite);
    padding: 10px 0;
    font-weight: 300;
  }
`

export default Title
