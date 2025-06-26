"use client";

type Props = {
  types: string[];
  avgExp: number;
  onRename: () => void;
  onDelete: () => void;
};

export default function TeamOverview({
  types,
  avgExp,
  onRename,
  onDelete,
}: Props) {
  return (
    <div className="mt-5 p-4 rounded shadow border border-white border-dashed lg:flex justify-between">
      <div>
        <h2 className="text-2xl font-bold mb-3 " style={{ color: "#FFE031" }}>
          Team Overview
        </h2>
        <p className="text-white">
          <strong className="text-blue-300">Total Unique Types:</strong>{" "}
          {types.length}
        </p>
        <p className="capitalize text-white">
          <strong className="text-blue-300">Types:</strong>{" "}
          {types.join(", ") || "None"}
        </p>
        <p className="text-white">
          <strong className="text-blue-300">Average Base Experience:</strong>{" "}
          {avgExp}
        </p>
      </div>
      <div className="lg:mt-0 mt-4">
        <button
          onClick={onRename}
          className="bg-yellow-500 text-white p-3 custom-button "
        >
          Rename
        </button>
        <button
          onClick={onDelete}
          className="bg-red-600 text-white p-3 custom-button ms-2"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
