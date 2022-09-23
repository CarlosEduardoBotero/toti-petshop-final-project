import "./AdoptaMe.css";

const AdoptaMeCard = (props) => {
  return (
    <div className="AdoptaMecard">
      <img src={props.imagen} alt="pet" width={200} height={180}></img>
      <div class="AdoptaMecontainer">
        <h1>{props.titulo}</h1>
      </div>
      <div className="AdoptaMedescp">
        <p>{props.genero}</p>
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
  );
};

export default AdoptaMeCard;
