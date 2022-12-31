import styled from "@emotion/styled";
import { useEffect, useState } from "react";
import { monedas } from "../data/monedas";
import useSelectMonedas from "../hooks/useSelectMonedas";
import Mensaje from "./Mensaje";

const InputSubmit = styled.input`
  background-color: #9497ff;
  border: none;
  width: 100%;
  padding: 10px;
  color: #fff;
  font-weight: 700;
  text-transform: uppercase;
  font-size: 20px;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #7a7dfe;
    cursor: pointer;
  }
`;

const Formulario = ({ setMonedas }) => {

    const [criptomonedas, setCriptomonedas] = useState([])
    const [mensaje, setMensaje] = useState('')
  // El orden es importante en array destructuring
  // Se puede asignar cualquier nombre
  const [moneda, SelectMonedas] = useSelectMonedas("Elige tu Moneda", monedas);
    const [ cripto, SelectCriptomoneda ] = useSelectMonedas('Elige tu Criptomoneda', criptomonedas)

  useEffect(() => {
      
      const consultarAPI = async() => {
        const url = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD`

        const resp = await fetch(url)
        const respJSON = await resp.json()

        const arrayCriptos = respJSON.Data.map( data => {
            const { CoinInfo } = data

            const objeto = {
                id: CoinInfo.Name,
                nombre: CoinInfo.FullName
            }

            return objeto;
        })

        setCriptomonedas(arrayCriptos)
        console.log(arrayCriptos);

    }

    consultarAPI();
  }, [])

  const handleSubmit = (ev) => {
    ev.preventDefault()
    setMensaje('')
    if( [moneda, cripto].includes('')){
        setMensaje('Los campos son obligatorios');
        return
    }

    setMonedas({ moneda, cripto })
  }

  return (
    <>
        {
            mensaje && (<Mensaje>{mensaje}</Mensaje>)
        }
        <form onSubmit={handleSubmit}>
        <SelectMonedas />
        <SelectCriptomoneda />
        <InputSubmit type="submit" value="Calcular" />
        
        </form>
    </>
  );
};

export default Formulario;
