// components/PokemonCard.tsx
'use client';

import Image from 'next/image';
import { Pokemon } from '@/types';

type Props = {
  pokemon: Pokemon;
  inTeam: boolean;
  onAdd: () => void;
  onRemove: () => void;
};

export default function PokemonCard({ pokemon, inTeam, onAdd, onRemove }: Props) {
  return (
    <div className="mb-6 p-4 border rounded flex items-center gap-4 bg-white shadow">
      <Image src={pokemon.image} alt={pokemon.name} width={80} height={80} />
      <div>
        <h2 className="text-xl font-semibold capitalize text-red-500">{pokemon.name}</h2>
        <p className="mb-1">Types: <span className="capitalize">{pokemon.types.join(', ')}</span></p>
        {inTeam ? (
          <button onClick={onRemove} className="bg-red-500 text-white px-3 py-1 rounded">Remove from Team</button>
        ) : (
          <button onClick={onAdd} className="bg-green-500 text-white px-3 py-1 rounded">Add to Team</button>
        )}
      </div>
    </div>
  );
}
