import React from 'react'
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Card from '../components/Card';

const partecipanti = [
    {
        id: 1,
        nome: 'Luca',
        cognome: 'Rossi',
        telefono: '3331234567',
        email: 'luca.rossi@example.com',
        destinazione: 'Capitale Europea: Berlino',
        cf: 'GPPNHL93G33H254I'
    },
    {
        id: 2,
        nome: 'Giulia',
        cognome: 'Bianchi',
        telefono: '3332345678',
        email: 'giulia.bianchi@example.com',
        destinazione: 'Settimana Verde in Trentino',
        cf: 'GPPNHL93G33H254I'
    },
    {
        id: 3,
        nome: 'Marco',
        cognome: 'Verdi',
        telefono: '3333456789',
        email: 'marco.verdi@example.com',
        destinazione: 'Settimana Verde in Trentino',
        cf: 'GPPNHL93G33H254I'
    },
    {
        id: 4,
        nome: 'Elena',
        cognome: 'Neri',
        telefono: '3334567890',
        email: 'elena.neri@example.com',
        destinazione: 'Relax alle Maldive',
        cf: 'GPPNHL93G33H254I'
    },
    {
        id: 5,
        nome: 'Alessandro',
        cognome: 'Gialli',
        telefono: '3335678901',
        email: 'alessandro.gialli@example.com',
        destinazione: 'Capitale Europea: Berlino',
        cf: 'GPPNHL93G33H254I'
    },
    {
        id: 6,
        nome: 'Francesca',
        cognome: 'Moretti',
        telefono: '3336789012',
        email: 'francesca.moretti@example.com',
        destinazione: 'Tour Classico di Roma',
        cf: 'GPPNHL93G33H254I'
    },
    {
        id: 7,
        nome: 'Davide',
        cognome: 'Conti',
        telefono: '3337890123',
        email: 'davide.conti@example.com',
        destinazione: 'Relax alle Maldive',
        cf: 'GPPNHL93G33H254I'
    },
    {
        id: 8,
        nome: 'Sara',
        cognome: 'Esposito',
        telefono: '3338901234',
        email: 'sara.esposito@example.com',
        destinazione: 'Tour Classico di Roma',
        cf: 'GPPNHL93G33H254I'
    },
    {
        id: 9,
        nome: 'Matteo',
        cognome: 'Fontana',
        telefono: '3339012345',
        email: 'matteo.fontana@example.com',
        destinazione: 'Relax alle Maldive',
        cf: 'GPPNHL93G33H254I'
    },
    {
        id: 10,
        nome: 'Valentina',
        cognome: 'Lombardi',
        telefono: '3330123456',
        email: 'valentina.lombardi@example.com',
        destinazione: ' Capitale Europea: Berlino',
        cf: 'GPPNHL93G33H254I'
    }
];

const TravelPage = () => {

    const [selected, setSelected] = useState(null)
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [filteredPeople, setFilteredPeople] = useState(partecipanti)
    const [filter, setFilter] = useState("");

    const { id } = useParams();

    useEffect(() => {
        const partecipantiFiltrati = partecipanti.filter((p) => `${p.nome} ${p.cognome}`.toLowerCase().includes(filter.toLowerCase()))

        setFilteredPeople(partecipantiFiltrati)

    }, [filter])

    const handleModalContent = (partecipante) => {
        setSelected(partecipante)
        setIsModalOpen(true);
    }

    return (
        <>
            <div className="container-fluid mt-5">
                <div className="row">
                    <h1 className="text-dark fs-1 fw-bold text-center">{id}</h1>
                    <div className="text-center">
                        <div>
                            <input
                                name='name'
                                className="input-box "
                                type='text'
                                placeholder='Cerca un partecipante...'
                                value={filter}
                                onChange={e => setFilter(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="col-12">
                        {filteredPeople.filter((partecipante) => partecipante.destinazione === id).map((partecipante) => (
                            <Card key={`partecipante-${partecipante.id}`} data={partecipante} onClick={() => handleModalContent(partecipante)} />
                        ))}
                    </div>
                </div>
            </div>
            {isModalOpen && selected && (
                <div className="container-modale">
                    <div className="modale">
                        <div className="card p-4">
                            <div className="">
                                <h5 className="">{selected.nome} {selected.cognome}</h5>
                            </div>
                            <div className="">
                                <p>{selected.telefono}</p>
                                <p>{selected.email}</p>
                                <p>{selected.cf}</p>
                            </div>
                            <div className="d-flex justify-content-around">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={() => setIsModalOpen(false)}>Close</button>
                                <button type="button" className="btn btn-primary">Contatta</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default TravelPage


