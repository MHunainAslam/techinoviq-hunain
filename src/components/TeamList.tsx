"use client";

import Image from "next/image";
import { Pokemon } from "@/types";

type Props = {
  pokemons: Pokemon[] | undefined;
  onRemove: (id: number) => void;
};

export default function TeamList({ pokemons, onRemove }: Props) {
  const emptySlots = 6 - (pokemons?.length || 0);
  return (
    <div className="grid 2xl:grid-cols-6 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
      {pokemons?.map((p) => (
        <div
          key={p.id}
          className="gap-4 border p-3 rounded-lg shadow pokemon-card "
        >
          <Image
            src={p.image}
            alt={p.name}
            width={120}
            height={120}
            className="min-full object-contain m-auto"
          />
          <div>
            <h3 className="capitalize font-semibold text-white mb-1">
              {p.name}
            </h3>
            <div className="flex bg-black rounded-full justify-between w-full p-1">
              <div
                className="rounded-full flex items-center"
                style={{ backgroundColor: "#2D3036" }}
              >
                <p className="capitalize text-white text-xs px-2 text-center">
                  {p.types.join(", ")}
                </p>
              </div>

              <button
                onClick={() => onRemove(p.id)}
                className="text-sm shadow-none text-white bg-red-500 rounded-full p-2"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="14"
                  height="14"
                  fill="white"
                  className="bi bi-trash3"
                  viewBox="0 0 16 16"
                >
                  <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5M11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47M8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      ))}

      {Array.from({ length: emptySlots }).map((_, idx) => (
        <div
          key={`empty-${idx}`}
          className=" pokemon-card-empty gap-4 border p-3 rounded-lg shadow flex min-h-[200px]"
        >
          <Image
            src={"/assets/images/empty-icon.png"}
            width={70}
            height={70}
            alt=""
            className="m-auto"
          />
        </div>
      ))}
    </div>
  );
}
