
import styled from '@emotion/styled'
import { useState } from 'react'

const Label = styled.label`
    color: #fff;
    display: block;
    font-family: 'Lato', sans-serif;
    font-size: 24px;
    font-weight: 700;
`

const Select = styled.select`
    display: block;
    margin: 10px auto;
    width: 100%;
    padding: 5px;
    border-radius: 5px;
    font-family: 'Lato', sans-serif;
    font-size: 16px;
`

const useSelectMonedas = (label, opciones) => {

  const [state, setState] = useState('')

  const SelectMonedas = () => (
    <>
        <Label>{ label }</Label>
        <Select
            value={state}
            onChange={(e) => setState(e.target.value)}
        >
            <option value="">-- Seleccione una opción --</option>
            {
                opciones.map( opcion => (<option key={opcion.id} value={opcion.id}>{opcion.nombre}</option>))
            }
        </Select>
    </>
  )

  return [ state, SelectMonedas ]
}

export default useSelectMonedas