import React from "react";
import { Link } from "react-router-dom";
import Card from "../components/Card";

const viaggi = [
  {
    id: 1,
    nomeViaggio: "Tour Classico di Roma",
    tipologia: "Culturale",
    dataInizio: "2025-06-10",
    dataFine: "2025-06-14",
  },
  {
    id: 2,
    nomeViaggio: "Relax alle Maldive",
    tipologia: "Vacanza",
    dataInizio: "2025-07-05",
    dataFine: "2025-07-12",
  },
  {
    id: 3,
    nomeViaggio: "Settimana Verde in Trentino",
    tipologia: "Natura",
    dataInizio: "2025-08-01",
    dataFine: "2025-08-07",
  },
  {
    id: 4,
    nomeViaggio: "Capitale Europea: Berlino",
    tipologia: "Città",
    dataInizio: "2025-09-15",
    dataFine: "2025-09-20",
  },
];

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div>
            {viaggi.map((viaggio) => {
              return <Card key={`viaggio-${viaggio.id}`} data={viaggio} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
