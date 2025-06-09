import React from "react";

const Form = ({ formData, handleSubmit, handleChange }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div className="container mt-4 p-3 bg-primary rounded">
        <div className="col-12">
          <div className="row py-3">
            <div className="col d-flex justify-content-between align-items-center">
              <h2 className="fw-bold text-white">Aggiungi un passeggero</h2>
              <button type="submit" className="btn btn-warning">
                Aggiungi
              </button>
            </div>
          </div>
          <div className="row g-3">
            <div className="col-md-6">
              <input
                required
                onChange={handleChange}
                name="nome"
                value={formData.nome}
                type="text"
                className="form-control"
                placeholder="Nome"
              />
            </div>
            <div className="col-md-6">
              <input
                required
                onChange={handleChange}
                name="cognome"
                value={formData.cognome}
                type="text"
                className="form-control"
                placeholder="Cognome"
              />
            </div>
            <div className="col-md-6">
              <input
                required
                onChange={handleChange}
                name="telefono"
                value={formData.telefono}
                type="text"
                className="form-control"
                placeholder="Numero di telefono"
              />
            </div>
            <div className="col-md-6">
              <input
                required
                onChange={handleChange}
                name="email"
                value={formData.email}
                type="text"
                className="form-control"
                placeholder="Email"
              />
            </div>
            <div className="col-md-12 text-center">
              <input
                required
                onChange={handleChange}
                name="cf"
                value={formData.cf}
                type="text"
                className="form-control"
                placeholder="Codice fiscale"
              />
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default Form;
