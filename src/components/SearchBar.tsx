'use client';

type Props = {
  value: string;
  onChange: (val: string) => void;
  notFound: boolean;
};

export default function SearchBar({ value, onChange, notFound }: Props) {
  return (
    <div className="relative mb-6 w-full">
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search Pokémon by name"
        className="border p-3 px-4 rounded-lg w-full bg-white searchbar"
      />
      {value && notFound && (
        <div className="absolute z-10 bg-white w-full border mt-1 rounded shadow p-3 text-gray-500">
          No Pokémon Found
        </div>
      )}
    </div>
  );
}
