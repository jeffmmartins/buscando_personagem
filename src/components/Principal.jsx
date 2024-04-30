import React from 'react'

const Principal = ({characterList}) => {
  return (
    <div className='main'>
      {characterList.map(character => (
       <div  key={character.id}>
        <h1>{character.name}</h1>
        <h2>{character.status}</h2>
        <img src={character.image} alt={`Imagem de ${character.name}`} />
       </div>
     ))}
    </div>
  )
}

export default Principal
