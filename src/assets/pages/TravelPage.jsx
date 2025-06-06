import React from 'react'

const partecipanti = [
    {
        id: 1,
        nome: 'Luca',
        cognome: 'Rossi',
        telefono: '3331234567',
        email: 'luca.rossi@example.com',
        destinazione: 'Capitale Europea: Berlino'
    },
    {
        id: 2,
        nome: 'Giulia',
        cognome: 'Bianchi',
        telefono: '3332345678',
        email: 'giulia.bianchi@example.com',
        destinazione: 'Settimana Verde in Trentino'
    },
    {
        id: 3,
        nome: 'Marco',
        cognome: 'Verdi',
        telefono: '3333456789',
        email: 'marco.verdi@example.com',
        destinazione: 'Settimana Verde in Trentino'
    },
    {
        id: 4,
        nome: 'Elena',
        cognome: 'Neri',
        telefono: '3334567890',
        email: 'elena.neri@example.com',
        destinazione: 'Relax alle Maldive'
    },
    {
        id: 5,
        nome: 'Alessandro',
        cognome: 'Gialli',
        telefono: '3335678901',
        email: 'alessandro.gialli@example.com',
        destinazione: 'Capitale Europea: Berlino'
    },
    {
        id: 6,
        nome: 'Francesca',
        cognome: 'Moretti',
        telefono: '3336789012',
        email: 'francesca.moretti@example.com',
        destinazione: 'Tour Classico di Roma'
    },
    {
        id: 7,
        nome: 'Davide',
        cognome: 'Conti',
        telefono: '3337890123',
        email: 'davide.conti@example.com',
        destinazione: 'Relax alle Maldive'
    },
    {
        id: 8,
        nome: 'Sara',
        cognome: 'Esposito',
        telefono: '3338901234',
        email: 'sara.esposito@example.com',
        destinazione: 'Tour Classico di Roma'
    },
    {
        id: 9,
        nome: 'Matteo',
        cognome: 'Fontana',
        telefono: '3339012345',
        email: 'matteo.fontana@example.com',
        destinazione: 'Relax alle Maldive'
    },
    {
        id: 10,
        nome: 'Valentina',
        cognome: 'Lombardi',
        telefono: '3330123456',
        email: 'valentina.lombardi@example.com',
        destinazione: ' Capitale Europea: Berlino'
    }
];

const TravelPage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className="row">
                    <h1>TravelPage</h1>
                    {partecipanti.map((partecipante) => {
                        return (
                            <div className="col-12">
                                <div className="card">
                                    <h5>{partecipante.nome}</h5>
                                    <h5>{partecipante.cognome}</h5>
                                </div>     
                            </div>
                        )
                    })}
                </div>
            </div>
            
        </>
    )
}

export default TravelPage