import Link from "next/link";

const PokemonsSearchResult = ({ pokemons }: { pokemons: string[] }) => {
  return pokemons.length > 0 ? (
    <div className="search-grid">
      {pokemons.map((pokemon) => (
        <Link href={`/pokemon/${pokemon}`} key={pokemon}>
            <div className="pokemon-card">{pokemon}</div>
        </Link>
      ))}
    </div>
  ) : (
    <div className="search-message"> No pokemons found</div>
  );
};

export default PokemonsSearchResult;
