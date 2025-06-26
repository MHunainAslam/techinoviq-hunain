"use client";

import Image from "next/image";
import { Pokemon } from "@/types";

type Props = {
  pokemon: Pokemon;
  inTeam: boolean;
  onAdd: () => void;
  onRemove: () => void;
};

export default function PokemonCard({
  pokemon,
  inTeam,
  onAdd,
  onRemove,
}: Props) {
  return (
    <div className="my-6 px-4 border py-3 border-white searchbar flex lg:flex-row flex-col justify-center items-center gap-4 shadow">
      <div className="flex items-center">
        <Image
          src={pokemon.image}
          alt={pokemon.name}
          width={250}
          height={200}
          className="w-auto min-w-[100px] min-h-[100px] object-contain object-left"
        />
        <div>
          <h2
            className="text-xl font-semibold capitalize"
            style={{ color: "#FFE031" }}
          >
            {pokemon.name}
          </h2>
          <p className="mb-1 text-white">
            Types:{" "}
            <span className="capitalize">{pokemon.types.join(", ")}</span>
          </p>
        </div>
      </div>
      {inTeam ? (
        <button
          onClick={onRemove}
          className="text-white p-3 lg:ms-auto custom-button"
          style={{ backgroundColor: "#F9292C" }}
        >
          Remove from Team
        </button>
      ) : (
        <button
          onClick={onAdd}
          className="text-white p-3 lg:ms-auto custom-button"
          style={{ backgroundColor: "#6d5ddd" }}
        >
          Add to Team
        </button>
      )}
    </div>
  );
}
