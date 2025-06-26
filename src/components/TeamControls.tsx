"use client";

type Props = {
  teams: { id: string; name: string }[];
  selectedId: string;
  onSelect: (id: string) => void;
  onCreate: () => void;
};

export default function TeamControls({
  teams,
  selectedId,
  onSelect,
  onCreate,
}: Props) {
  return (
    <div className="flex flex-wrap justify-between gap-4 mb-4">
      <div className="flex items-center">
        <p className="capitalize text-white">
          <strong className="text-white me-2">Teams:</strong>
        </p>{" "}
        <select
          value={selectedId}
          onChange={(e) => onSelect(e.target.value)}
          className="team-dropdown p-3 px-4 appearance-none"
        >
          {teams.map((t) => (
            <option key={t.id} value={t.id}>
              {t.name}
            </option>
          ))}
        </select>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onCreate}
          className="custom-button p-3 px-4"
          style={{ backgroundColor: "#63DD5D", color: "#202020" }}
        >
          + Crete Team
        </button>
      </div>
    </div>
  );
}
