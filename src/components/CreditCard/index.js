import {useState} from 'react'
import {
  Heading2,
  HeadingContent,
  ParaContent,
  DivCard,
  Img,
  DivCardContainer,
  DivContainer,
  DivContent,
} from './styledComponents'

const CreditCard = () => {
  const [paratext, setTypePara] = useState('')

  const [numbers, setTypeNum] = useState('')

  const nums = event => {
    setTypeNum(event.target.value)
  }
  const para = e => {
    setTypePara(e.target.value)
  }

  return (
    <DivContent>
      <DivContainer>
        <HeadingContent>CREDIT CARD</HeadingContent>
        <Img data-testid="creditCard" />
        <DivCardContainer>
          {numbers}
          <ParaContent>CARDHOLDER NAME</ParaContent>

          {paratext}
        </DivCardContainer>
      </DivContainer>

      <DivCard>
        <Heading2>Payment Method</Heading2>
        <input
          type="numbers"
          value={numbers}
          onChange={nums}
          placeholder="Card Number"
        />
        <input
          type="text"
          value={paratext}
          onChange={para}
          placeholder="Cardholder Name"
        />
      </DivCard>
    </DivContent>
  )
}

export default CreditCard
