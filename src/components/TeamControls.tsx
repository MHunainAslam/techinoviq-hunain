// components/TeamControls.tsx
'use client';

type Props = {
  teams: { id: string; name: string }[];
  selectedId: string;
  onSelect: (id: string) => void;
  onCreate: () => void;
  onRename: () => void;
  onDelete: () => void;
};

export default function TeamControls({ teams, selectedId, onSelect, onCreate, onRename, onDelete }: Props) {
  return (
    <div className="flex flex-wrap justify-between gap-4 mb-4">
      <select
        value={selectedId}
        onChange={(e) => onSelect(e.target.value)}
        className="border p-2 rounded"
      >
        {teams.map(t => (
          <option key={t.id} value={t.id}>{t.name}</option>
        ))}
      </select>
      <div className="flex gap-2">
        <button onClick={onCreate} className="bg-green-600 text-white px-3 py-1 rounded">+ Team</button>
        <button onClick={onRename} className="bg-yellow-500 text-white px-3 py-1 rounded">Rename</button>
        <button onClick={onDelete} className="bg-red-600 text-white px-3 py-1 rounded">Delete</button>
      </div>
    </div>
  );
}
