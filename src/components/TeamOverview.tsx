// components/TeamOverview.tsx
'use client';

type Props = {
  types: string[];
  avgExp: number;
};

export default function TeamOverview({ types, avgExp }: Props) {
  return (
    <div className="bg-white p-4 rounded shadow">
      <h2 className="text-2xl font-bold mb-3 text-blue-700">Team Overview</h2>
      <p><strong>Total Unique Types:</strong> {types.length}</p>
      <p className="capitalize"><strong>Types:</strong> {types.join(', ') || 'None'}</p>
      <p><strong>Average Base Experience:</strong> {avgExp}</p>
    </div>
  );
}
