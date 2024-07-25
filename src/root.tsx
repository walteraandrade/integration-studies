import * as React from 'react';
import { Link, Outlet } from "react-router-dom";
import { PokemonSummaryModel } from './model/pokemon';
import axios from 'axios';
import { useQuery } from '@tanstack/react-query';



export default function Root() {

  return (
    <>
      <div id="sidebar">
        <h1>Pokedex</h1>
        <div>
          <form id="search-form" role="search">
            <input
              id="q"
              aria-label="Search pokemons"
              placeholder="Search"
              type="search"
              name="q"
            />
            <div
              id="search-spinner"
              aria-hidden
              hidden={true}
            />
            <div
              className="sr-only"
              aria-live="polite"
            ></div>
          </form>
        </div>
         <nav>
         {/* {pokemons.length ? (
            <ul>
              {pokemons.map((pokemon) => (
                <li key={pokemon.name}>
                  <Link to={`pokedex/${pokemon.name}`}>
                   {pokemon.name.charAt(0).toUpperCase() + pokemon.name.slice(1)}
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p>
              <i>No pokemons</i>
            </p>
          )} */}
        </nav>
      </div>
      <div id="detail">
        <Outlet />
      </div>
    </>
  );
}