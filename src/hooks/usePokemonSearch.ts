import { useEffect, useRef, useState } from 'react';
import { Pokemon } from '@/types';

export function usePokemonSearch(term: string) {
  const [result, setResult] = useState<Pokemon | null>(null);
  const debounceRef = useRef<NodeJS.Timeout | null>(null);
  const controllerRef = useRef<AbortController | null>(null);

  useEffect(() => {
    if (!term) {
      setResult(null);
      return;
    }

    if (debounceRef.current) clearTimeout(debounceRef.current);

    debounceRef.current = setTimeout(() => {
      if (controllerRef.current) {
        controllerRef.current.abort();
      }

      const controller = new AbortController();
      controllerRef.current = controller;

      fetch(`https://pokeapi.co/api/v2/pokemon/${term.toLowerCase()}`, {
        signal: controller.signal,
      })
        .then((res) => {
          if (!res.ok) throw new Error('Not found');
          return res.json();
        })
        .then((data) => {
          const pokemon: Pokemon = {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map((t: any) => t.type.name),
            base_experience: data.base_experience,
          };
          setResult(pokemon);
        })
        .catch((err) => {
          if (err.name !== 'AbortError') {
            setResult(null);
          }
        });
    }, 300);

    return () => {
      if (controllerRef.current) controllerRef.current.abort();
    };
  }, [term]);

  return result;
}
