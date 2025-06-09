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
    accompagnatori: 2
  },
  {
    id: 2,
    nomeViaggio: "Relax alle Maldive",
    tipologia: "Vacanza",
    dataInizio: "2025-07-05",
    dataFine: "2025-07-12",
    accompagnatori: 1
  },
  {
    id: 3,
    nomeViaggio: "Settimana Verde in Trentino",
    tipologia: "Natura",
    dataInizio: "2025-08-01",
    dataFine: "2025-08-07",
    accompagnatori: 2
  },
  {
    id: 4,
    nomeViaggio: "Capitale Europea: Berlino",
    tipologia: "Città",
    dataInizio: "2025-09-15",
    dataFine: "2025-09-20",
    accompagnatori: 1
  },
];

const HomePage = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div>
            {viaggi.map((viaggio) => {
              return <Card 
                        key={`viaggio-${viaggio.id}`} 
                        nomeViaggio = {viaggio.nomeViaggio}
                        id = {viaggio.id}
                        isTrip = {true}
                        dataInizio = {viaggio.dataInizio}
                        dataFine = {viaggio.dataFine}
                        accompagnatori = {viaggio.accompagnatori}
                      />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
