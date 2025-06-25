// hooks/usePokemonSearch.ts
import { useEffect, useRef, useState } from 'react';
import { Pokemon } from '@/types';

export function usePokemonSearch(term: string) {
  const [result, setResult] = useState<Pokemon | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (!term) {
      setResult(null);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      fetch(`https://pokeapi.co/api/v2/pokemon/${term.toLowerCase()}`)
        .then(res => res.json())
        .then(data => {
          const pokemon: Pokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map((t: any) => t.type.name),
            base_experience: data.base_experience,
          };
          setResult(pokemon);
        })
        .catch(() => setResult(null));
    }, 300);
  }, [term]);

  return result;
}
