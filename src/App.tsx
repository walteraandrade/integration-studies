import * as React from 'react'
import {  useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { HashLoader } from 'react-spinners';
import './App.css'

function App() {
  const [id, setId] = React.useState(1)
  const [pokemon, setPokemon] = React.useState<any>();
  const { data, isPending } = useQuery({ queryKey: ['pokemon'], queryFn: () => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then(res => setPokemon(res.data))
  })



  return (
    <div>
     <Button setId={() => setId(prev => prev + 1)} />
      <div style={{ height: '500px'}}>
     {isPending ? <HashLoader color='white' /> :  <PokemonCard pokemon={pokemon} />}
     </div>
    </div>
  )
}

const PokemonCard = (data: any) => (
  <div>
    <h1 style={{ color: 'white'}}>{data?.pokemon?.name}</h1>
    <img src={data?.pokemon?.sprites?.front_default} alt="pokemon" height={'100px'} />
  </div>
)


const Button = ({setId}: { setId: () => void}) => (
  <button onClick={setId}>Click me!</button>
)

export default App
