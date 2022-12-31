import styled from "@emotion/styled";

const Contenido = styled.div`
    color: #fff;
    font-size: 16px;
    font-family: 'Lato', sans-serif;
    font-weight: 400;
    display: flex;
    align-items: center;
    margin-top: 20px;
    gap: 10px;

    p:first-of-type{
        font-size: 24px;
    }

    span {
        color: #66a2fe;
    }
`

const IMAGEN = styled.img`
    display: block;
    width: 100px;

`

const Resultado = ({ resultado }) => {
  const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } =
    resultado;
  return <Contenido>
    <IMAGEN src={`https://cryptocompare.com/${IMAGEURL}`} alt="Imagen cripto" />
    <div>
        <p>El precio es de: <span>{PRICE}</span></p>
        <p>El precio más alto del día: <span>{HIGHDAY}</span></p>
        <p>El precio más bajo del día: <span>{LOWDAY}</span></p>
        <p>Variación últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></p>
        <p>Última actalización: <span>{LASTUPDATE}</span></p>
    </div>
  </Contenido>;
};

export default Resultado;
