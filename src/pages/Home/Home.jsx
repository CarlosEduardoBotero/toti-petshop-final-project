import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="homebarrauno">
        <div className="homelogo">
          <h1>TheRoyalFriend</h1>
          <div className="homecep">
            <div className="frm-row">
              <label for="cep">cep</label>
              <input type="text" name="cep" />
            </div>
            <form action="#" method="post">
              <input
                type="text"
                name="Buscar"
                id="search"
                placeholder="search"
                required
              />
              <button type="submt">
                <i className="fas fa-serch"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
      <div className="home_carrusel">
        <button className="arrow-left-control" aria-label="previousimge">
          ◀
        </button>
        <button className="arrow-right-control" aria-label="nextimg">
          ▶
        </button>
        <div className="home__gallery">
          <div className="home_img_gallery">
            <img
              src="https://ederepente50.files.wordpress.com/2017/09/hora-do-banho-cachorro-gato-pets.png"
              alt="cachorroegatomolhado"
              width={350}
              height={350}
              class="item curren-item"
            />
            <img
              src="https://perrosycachorros.net/wp-content/uploads/2010/09/Cachorro-Perro-y-Gato.jpg"
              alt="fotocachorroegato"
              class="item curren-item"
            />
            <img
              src="https://cdn1.mundodastribos.com/688217-Dicas-para-criar-c%C3%A3es-e-gatos-em-apartamentos-6.jpg"
              alt="acessoriospets"
              class="item curren-item"
            />
            <img
              src="https://www.clubeparacachorros.com.br/wp-content/uploads/2017/10/cachorro-doente-gripe-asma.jpg"
              alt="cachorrocomfebre"
              class="item curren-item"
            />
            <img
              src="https://www.petsonic.com/blog/wp-content/uploads/2019/02/Vacunas-obligatorias-en-perros-y-gatos-2.jpg"
              alt="cachorro-gato-human"
              class="item curren-item"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
