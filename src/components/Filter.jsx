import React from "react";

const Filter = ({ filter, setFilter }) => {
  return (
    <input
      name="name"
      className="form-control w-50 my-4"
      type="text"
      placeholder="Cerca un partecipante..."
      value={filter}
      onChange={(e) => setFilter(e.target.value)}
    />
  );
};

export default Filter;
