"use client";

import { Fragment, useEffect, useState } from "react";
import { Pokemon, Team } from "@/types";
import { v4 as uuid } from "uuid";
import SearchBar from "@/components/SearchBar";
import PokemonCard from "@/components/PokemonCard";
import TeamControls from "@/components/TeamControls";
import TeamList from "@/components/TeamList";
import TeamOverview from "@/components/TeamOverview";
import { usePokemonSearch } from "@/hooks/usePokemonSearch";
import {
  loadTeams,
  saveTeams,
  loadSelectedTeamId,
  saveSelectedTeamId,
} from "@/lib/storage";

const defaultTeam: Team = {
  id: "default-team",
  name: "Default Team",
  pokemons: [],
};

export default function HomePage() {
  const [search, setSearch] = useState("");
  const [teams, setTeams] = useState<Team[]>([defaultTeam]);
  const [selectedTeamId, setSelectedTeamId] = useState<string>("default-team");

  const searchResult = usePokemonSearch(search);
  const selectedTeam = teams.find((t) => t.id === selectedTeamId);

  useEffect(() => {
    const savedTeams = loadTeams();
    const savedId = loadSelectedTeamId();
    if (savedTeams.length) {
      setTeams(savedTeams);
      setSelectedTeamId(savedId || savedTeams[0].id);
    }
  }, []);

  useEffect(() => {
    saveTeams(teams);
  }, [teams]);

  useEffect(() => {
    if (selectedTeamId) saveSelectedTeamId(selectedTeamId);
  }, [selectedTeamId]);

  const addToTeam = () => {
    if (!searchResult) return;

    setTeams((prev) =>
      prev.map((team) => {
        if (team.id !== selectedTeamId) return team;

        const exists = team.pokemons.some((p) => p.id === searchResult.id);
        if (exists) {
          alert("Already in team");
          return team;
        }
        if (team.pokemons.length >= 6) {
          alert("Team is full");
          return team;
        }

        return {
          ...team,
          pokemons: [...team.pokemons, searchResult],
        };
      })
    );
  };

  const removeFromTeam = (id: number) => {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === selectedTeamId
          ? { ...team, pokemons: team.pokemons.filter((p) => p.id !== id) }
          : team
      )
    );
  };

  const createNewTeam = () => {
    const name = prompt("Enter team name");
    if (!name) return;
    const newTeam: Team = { id: uuid(), name, pokemons: [] };
    setTeams((prev) => [...prev, newTeam]);
    setSelectedTeamId(newTeam.id);
  };

  const renameTeam = () => {
    const currentName = teams.find(team => team.id === selectedTeamId)?.name || '';
    const name = prompt("Enter new team name", currentName);
    if (!name) return;
    setTeams(prev =>
      prev.map(team =>
        team.id === selectedTeamId ? { ...team, name } : team
      )
    );
  };
  const deleteTeam = () => {
    if (!confirm("Delete this team?")) return;
    setTeams((prev) => {
      const filtered = prev.filter((t) => t.id !== selectedTeamId);
      setSelectedTeamId(filtered[0]?.id || "");
      return filtered;
    });
  };

  const getUniqueTypes = (): string[] => {
    const types = selectedTeam?.pokemons.flatMap((p) => p.types) || [];
    return [...new Set(types)];
  };

  const getAvgExp = (): number => {
    const list = selectedTeam?.pokemons || [];
    if (!list.length) return 0;
    return Math.round(
      list.reduce((sum, p) => sum + p.base_experience, 0) / list.length
    );
  };

  return (
    <>
      <div className="md:w-3/4 w-4/5 m-auto ">
        <SearchBar
          value={search}
          onChange={setSearch}
          notFound={!!search && !searchResult}
        />

        {searchResult && selectedTeam && (
          <PokemonCard
            pokemon={searchResult}
            inTeam={selectedTeam.pokemons.some((p) => p.id === searchResult.id)}
            onAdd={addToTeam}
            onRemove={() => removeFromTeam(searchResult.id)}
          />
        )}
        <TeamControls
          teams={teams}
          selectedId={selectedTeamId}
          onSelect={setSelectedTeamId}
          onCreate={createNewTeam}
        />

        <div>
          <h2
            className="text-2xl font-bold mt-3 mb-5 text-center"
            style={{ color: "#FFE031" }}
          >
            Your Team ({selectedTeam?.pokemons.length || 0}/6)
          </h2>
            <TeamList
              pokemons={selectedTeam?.pokemons}
              onRemove={removeFromTeam}
            />
        </div>

        <TeamOverview
          types={getUniqueTypes()}
          avgExp={getAvgExp()}
          onRename={renameTeam}
          onDelete={deleteTeam}
        />
      </div>
    </>
  );
}
