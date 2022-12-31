import styled from '@emotion/styled'

const MensajeP = styled.p`
    display: block;
    margin: 0 auto;
    padding: 10px 0;
    border-radius: 5px;
    text-align: center;
    background-color: #B7322C;
    color: #fff;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
    margin-bottom: 15px;
    text-transform: uppercase;
`
const Mensaje = ({ children }) => {
  return (
    <MensajeP>{children}</MensajeP>
  )
}

export default Mensaje