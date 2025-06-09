import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "../components/Card";
import Modal from "../components/Modal";
import Form from "../components/Form";
import Filter from "../components/Filter";

const partecipanti = [
  {
    id: 1,
    nome: "Luca",
    cognome: "Rossi",
    telefono: "3331234567",
    email: "luca.rossi@example.com",
    destinazione: "Capitale Europea: Berlino",
    cf: "GPPNHL93G33H254I",
  },
  {
    id: 2,
    nome: "Giulia",
    cognome: "Bianchi",
    telefono: "3332345678",
    email: "giulia.bianchi@example.com",
    destinazione: "Settimana Verde in Trentino",
    cf: "GPPNHL93G33H254I",
  },
  {
    id: 3,
    nome: "Marco",
    cognome: "Verdi",
    telefono: "3333456789",
    email: "marco.verdi@example.com",
    destinazione: "Settimana Verde in Trentino",
    cf: "GPPNHL93G33H254I",
  },
  {
    id: 4,
    nome: "Elena",
    cognome: "Neri",
    telefono: "3334567890",
    email: "elena.neri@example.com",
    destinazione: "Relax alle Maldive",
    cf: "GPPNHL93G33H254I",
  },
  {
    id: 5,
    nome: "Alessandro",
    cognome: "Gialli",
    telefono: "3335678901",
    email: "alessandro.gialli@example.com",
    destinazione: "Capitale Europea: Berlino",
    cf: "GPPNHL93G33H254I",
  },
  {
    id: 6,
    nome: "Francesca",
    cognome: "Moretti",
    telefono: "3336789012",
    email: "francesca.moretti@example.com",
    destinazione: "Tour Classico di Roma",
    cf: "GPPNHL93G33H254I",
  },
  {
    id: 7,
    nome: "Davide",
    cognome: "Conti",
    telefono: "3337890123",
    email: "davide.conti@example.com",
    destinazione: "Relax alle Maldive",
    cf: "GPPNHL93G33H254I",
  },
  {
    id: 8,
    nome: "Sara",
    cognome: "Esposito",
    telefono: "3338901234",
    email: "sara.esposito@example.com",
    destinazione: "Tour Classico di Roma",
    cf: "GPPNHL93G33H254I",
  },
  {
    id: 9,
    nome: "Matteo",
    cognome: "Fontana",
    telefono: "3339012345",
    email: "matteo.fontana@example.com",
    destinazione: "Relax alle Maldive",
    cf: "GPPNHL93G33H254I",
  },
  {
    id: 10,
    nome: "Valentina",
    cognome: "Lombardi",
    telefono: "3330123456",
    email: "valentina.lombardi@example.com",
    destinazione: " Capitale Europea: Berlino",
    cf: "GPPNHL93G33H254I",
  },
];

const TravelPage = () => {
  const { id } = useParams();
  /* nuovo stato che cambia i partecipanti */
  const [allPartecipants, setAllPartecipants] = useState(partecipanti);
  /* stati per i filtri dei partecipanti */
  const [filteredPeople, setFilteredPeople] = useState([]);
  const [filter, setFilter] = useState("");
  /* stati della modale */
  const [selected, setSelected] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  /* stato della form */
  const [formData, setFormData] = useState({
    id: null,
    nome: "",
    cognome: "",
    telefono: "",
    email: "",
    destinazione: "",
    cf: "",
  });

  useEffect(() => {
    const partecipantiFiltrati = allPartecipants.filter((p) =>
      `${p.nome} ${p.cognome}`.toLowerCase().includes(filter.toLowerCase())
    );

    setFilteredPeople(partecipantiFiltrati);
  }, [filter, allPartecipants]);

  /* metodo per aprire e popolare la modale */
  const handleModalContent = (partecipante) => {
    setSelected(partecipante);
    setIsModalOpen(true);
  };
  /* metodo per gestire i valori dell'input per la creazione del chistiano */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((formData) => ({ ...formData, [name]: value }));
  };
  /* metodo per inviare i dati del chistiano nuovo */
  const handleSubmit = (e) => {
    e.preventDefault();

    const nome = formData.nome.trim();
    const cognome = formData.cognome.trim();
    const telefono = formData.telefono.trim();
    const email = formData.email.trim();
    const cf = formData.cf.trim();

    /* la nuova persona avrà questi valori */
    const newPerson = {
      id: partecipanti.length + 1,
      nome,
      cognome,
      telefono,
      email,
      destinazione: id,
      cf,
    };

    /* aggiungo all'array dei partecipanti (current) òla newPersona */
    setAllPartecipants((currentPeople) => [...currentPeople, newPerson]);

    /* svuoto tutte cose */
    setFormData({
      id: null,
      nome: "",
      cognome: "",
      telefono: "",
      email: "",
      destinazione: "",
      cf: "",
    });
  };

  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <h1 className="text-dark fs-1 fw-bold text-center">{id}</h1>

          <Filter filter={filter} setFilter={setFilter} />

          <div className="col-12">
            {filteredPeople
              .filter(
                (partecipante) => partecipante.destinazione.trim() === id.trim()
              )
              .map((partecipante) => (
                <Card
                  key={`partecipante-${partecipante.id}`}
                  data={partecipante}
                  onClick={() => handleModalContent(partecipante)}
                />
              ))}
          </div>
        </div>
        <div className="row">
          <Form
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            formData={formData}
          />
        </div>
      </div>

      {isModalOpen && (
        <Modal selected={selected} setIsModalOpen={setIsModalOpen} />
      )}
    </>
  );
};

export default TravelPage;
