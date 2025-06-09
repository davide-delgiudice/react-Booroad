const Modal = ({ selected, setIsModalOpen }) => {
  return (
    <div className="container-modale">
      <div className="modale">
        <div className="card p-4">
          <div className="">
            <h2 className="pb-4">
              {selected.nome} {selected.cognome}
            </h2>
          </div>
          <div className="">
            <p>
              <strong>Numero di telefono:</strong> {selected.telefono}
            </p>
            <p>
              <strong>Email:</strong> {selected.email}
            </p>
            <p>
              <strong>Codice Fiscale:</strong> {selected.cf}
            </p>
          </div>
          <div className="d-flex justify-content-around">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
              onClick={() => setIsModalOpen(false)}
            >
              Close
            </button>
            <button type="button" className="btn btn-primary">
              Contatta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
