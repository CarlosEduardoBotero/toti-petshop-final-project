import "./AdoptaMe.css";

const AdoptaMeCard = (props) => {
  return (
    <>
      {props.details.map((value) => (
        <div className="AdoptaMecard">
          <img src={props.imagen} width={200} height={180}></img>
          <div class="AdoptaMecontainer">
            <h1>{value.titulo}</h1>
          </div>
          <div className="AdoptaMedescp">
            <p>{value.genero}</p>
          </div>
          <div className="AdoptaMebuttoncontainer">
            <button
              className="AdoptaMebutton"
              onClick={() => alert("Obrigado por me adotar!")}
            >
              ADOPTE-ME
            </button>
          </div>
        </div>
      ))}
      ;
    </>
  );
};

export default AdoptaMeCard;
