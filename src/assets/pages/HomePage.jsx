import React from 'react'
import { Link } from 'react-router-dom';

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

  // const [selectedTrip, setSelectedTrip] = useState(null);

  return (
    <div className='container'>
      <div className='row'>
        <div className="col-12">
          <div>
            {viaggi.map((viaggio) => {
              return (
                <Link to="/travelpage">
                  <div className='card'>
                    <div className="">
                      <h5>{viaggio.nomeViaggio}</h5>
                      <p>{viaggio.tipologia}</p>
                      <p>{viaggio.dataInizio}</p>
                      <p>{viaggio.dataFine}</p>
                    </div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </div>
    </div >
  )
}

export default HomePage