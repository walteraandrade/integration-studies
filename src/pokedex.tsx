import { useParams } from "react-router-dom";

export default function Pokedex() {
  const { pokemonName } = useParams()


  return (
    <div id="pokemon">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
        <h1>
          {pokemonName}
        </h1>
      </div>

    </div>
  );
}

