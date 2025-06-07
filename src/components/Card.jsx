import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ data, onClick }) => {
    return (
        <div className="card my-4" onClick={onClick}>
            <div className="card-body">
                {data.nome && data.cognome && (
                    <h5 className="card-title">{data.nome} {data.cognome}</h5>
                )}

                {data.nomeViaggio && (
                    <>
                        <h5 className="card-title">{data.nomeViaggio}</h5>
                        <Link to={`/travelpage/${data.nomeViaggio}`} className='btn btn-primary'>Vai al viaggio</Link>
                    </>
                )}


            </div>
        </div>
    )
}

export default Card