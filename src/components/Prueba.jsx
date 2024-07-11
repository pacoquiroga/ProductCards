import {useEffect, useState} from 'react'

const Prueba = () => {
  const [vehiculos, setVehiculos] = useState([])

  useEffect(() => {
    fetch('http://localhost:8000/vehiculos')
    .then(res => res.json())
    .then(res => setVehiculos(res))
  },[])

  return (
    <div>
      {vehiculos.map((vehiculo, index) => {
        return (
          <div key={index} className='flex p-4 m-8'>
            <h1>{vehiculo.placa}</h1><br/>
            <p>{vehiculo.marca}</p>
            <p>{vehiculo.modelo}</p>
            <p>{vehiculo.color}</p>
            <p>{vehiculo.alias}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Prueba
