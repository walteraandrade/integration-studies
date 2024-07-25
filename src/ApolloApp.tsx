import * as React from 'react'
import { HashLoader } from 'react-spinners';
import { useQuery, gql } from '@apollo/client'
import './App.css'

const pokemonQuery = gql`{
  pokemon_v2_pokemonability_by_pk(id: 10) {
    pokemon_v2_pokemon {
      id
      name
      pokemon_v2_pokemonsprites {
        sprites
      }
    }
  }
}`

function ApolloApp() {
  const [pokemon, setPokemon] = React.useState<any>();
  const { data, loading } = useQuery(pokemonQuery, { onCompleted: (data) => setPokemon(data), fetchPolicy: 'no-cache' })


  console.log(data)


  return (
    <div>
     <Button setId={() => console.log({ data })} />
      <div style={{ height: '500px'}}>
     {loading ? <HashLoader color='white' /> :  <PokemonCard pokemon={pokemon} />}
     </div>
    </div>
  )
}

const PokemonCard = (data: any) => {
console.log(data)

return(
  <div>
    <h1 style={{ color: 'white'}}>{data.pokemon?.pokemon_v2_pokemonability_by_pk?.pokemon_v2_pokemon?.name}</h1>
    {/* <img src={data.pokemon?.pokemon_v2_pokemonability_by_pk?.pokemon_v2_pokemon.} alt="pokemon" height={'100px'} /> */}
  </div>)
}


const Button = ({setId}: { setId: () => void}) => (
  <button onClick={setId}>Click me!</button>
)

export default ApolloApp
