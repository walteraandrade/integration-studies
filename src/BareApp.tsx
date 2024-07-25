import * as React from 'react'

import './App.css'

function BareApp() {
  const [id, setId] = React.useState(3)
  const [pokemon, setPokemon] = React.useState<any>();

  React.useEffect(() => {
    let ignore = false;
    const handleFetchPokemon = async () => {
      setPokemon(null);

      const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
      const json = await res.json();
      if (!ignore) {
        setPokemon(json);
      }
    }

    handleFetchPokemon();
     return () => {
      ignore = true;
    };
  }, [id])


  return (
    <div>
     <Button setId={() => setId(prev => prev + 1)} />
      <div style={{ height: '500px'}}>
     {pokemon?.name && <PokemonCard pokemon={pokemon} />}
     </div>
    </div>
  )
}

const PokemonCard = (pokemon: any) => (
  <div>
    <h1 style={{ color: 'white'}}>{pokemon?.pokemon?.name}</h1>
    <img src={pokemon?.pokemon?.sprites?.front_default} alt="pokemon" height={'100px'} />
  </div>
)


const Button = ({setId}: { setId: () => void}) => (
  <button onClick={setId}>Click me!</button>
)

export default BareApp
