import React from 'react'

const viaggi = [
    {
      id: 1,
      nomeViaggio: 'Tour Classico di Roma',
      tipologia: 'Culturale',
      dataInizio: '2025-06-10',
      dataFine: '2025-06-14'
    },
    {
      id: 2,
      nomeViaggio: 'Relax alle Maldive',
      tipologia: 'Vacanza',
      dataInizio: '2025-07-05',
      dataFine: '2025-07-12'
    },
    {
      id: 3,
      nomeViaggio: 'Settimana Verde in Trentino',
      tipologia: 'Natura',
      dataInizio: '2025-08-01',
      dataFine: '2025-08-07'
    },
    {
      id: 4,
      nomeViaggio: 'Capitale Europea: Berlino',
      tipologia: 'Città',
      dataInizio: '2025-09-15',
      dataFine: '2025-09-20'
    }
  ];

const HomePage = () => {
  return (
        <ul>
          {viaggi.map((viaggio) => {
            return (
              <li>
                {viaggio.nomeViaggio}
                {viaggio.tipologia}
                {viaggio.dataInizio}
                {viaggio.dataFine}
              </li>             
            )
          })}
        </ul>
  )
}

export default HomePage