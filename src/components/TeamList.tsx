// components/TeamList.tsx
'use client';

import Image from 'next/image';
import { Pokemon } from '@/types';

type Props = {
  pokemons: Pokemon[];
  onRemove: (id: number) => void;
};

export default function TeamList({ pokemons, onRemove }: Props) {
  return (
    <ul className="space-y-3">
      {pokemons.map(p => (
        <li key={p.id} className="flex items-center gap-4 border p-3 rounded bg-white shadow">
          <Image src={p.image} alt={p.name} width={60} height={60} />
          <div>
            <h3 className="capitalize font-semibold text-red-500">{p.name}</h3>
            <p className="capitalize">Types: {p.types.join(', ')}</p>
            <button onClick={() => onRemove(p.id)} className="text-sm text-red-600">Remove</button>
          </div>
        </li>
      ))}
    </ul>
  );
}
