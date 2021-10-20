const Characters = ({ chars }) => {
  return (
    <div className="row mt-4">
      {chars.map((char, index) => (
        <div key={index} className="col">
          <div className="card bg-dark p-2 pb-4 mb-4">
            <img className="card" src={char.image} alt={char.name} />
            <div className="card-body">
              <h5>{char.name}</h5>
              <hr />
              <div className="col3">
                <p>
                  <b>Status:</b> <span>{char.status}</span>
                </p>
                <p>
                  <b>Species:</b> <span>{char.species}</span>
                </p>
                <p>
                  <b>Gender:</b> <span>{char.gender}</span>
                </p>
                <p>
                  <b>Origin:</b> <span>{char.origin.name}</span>
                </p>
                <p>
                  <b>Location:</b> <span>{char.location.name}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Characters;
