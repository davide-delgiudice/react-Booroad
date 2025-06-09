import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ nome, cognome, nomeViaggio, dataInizio, dataFine, accompagnatori, isTrip, onClick }) => {

    const formatDate = (dateStr) => {
        return new Date(dateStr).toLocaleDateString("it-IT") 
    };

    return (
        <div className="card my-4" onClick={onClick}>
            <div className="card-body">
                {isTrip ? (
                    <>
                        <h5 className="card-title">{nomeViaggio}</h5>
                        <p><em>Data Inizio : {formatDate(dataInizio)}</em></p>
                        <p><em>Data fine: {formatDate(dataFine)}</em></p>
                        <p>n° Accompagnatori: {accompagnatori}</p>
                        <Link to={`/travelpage/${nomeViaggio}`} className="btn btn-primary"> Vai al viaggio </Link>
                    </>

                ) : (
                    <h5 className="card-title">
                        {nome} {cognome}
                    </h5>
                )
                }
            </div>
        </div>
    )
}

export default Card




{/* <div className='flag '>
    Accompagnatore
</div>
<button>
    <i class="fa-solid fa-user-check"></i>  
</button> */}