import "./Home.css";
const Home = () => {
  return (
    <div className="home">
      <div className="home-bemv">
        <div className="home-bemv-card">
          <img
            className="home-imguno"
            src="https://blog.petiko.com.br/wp-content/uploads/2020/10/capa-4.jpg"
            alt="cachorroegatoamigo"
          />
          <div className="home-textouno">
            <h1>BEM VINDO!</h1>
            <h2>Ao mundo dos Pets,</h2>
            <h1> bem-vindo a TheRoyalPeT</h1>
          </div>
        </div>
      </div>
      <div className="home-banho">
        <img
          className="home-imgdos"
          src="https://www.ative.pet/wp-content/uploads/2020/12/original-cea330e3c460ef992af4841daeedd1f4-scaled-2560x1280.jpeg"
          alt="gatomolhado"
        />
        <div className="home-textodos">
          <h1>Espuma</h1>
          <h2> & </h2>
          <h1>Doces de Cuidado</h1>
        </div>
        <div className="home-textotres">
          <h2>Todo para higiene do seu pet</h2>
          <h1>Banho & Tosa </h1> <h1>TheRoyalPet</h1>
        </div>
      </div>
      <div className="homecontainercard">
        <div className="homecard">
          <div className="homeimgcard">
            <img
              className="homeimgcard"
              src="https://love.doghero.com.br/wp-content/uploads/2019/09/Golden.jpg.jpg"
              alt="cachorro"
            ></img>
            <div className="homecardtexto">
              <h1>Sobre Cachorros</h1>
              <p>
                é essencial saber qual é sua taxonomia, ou seja, sua
                classificação no sistema de nomenclatura binomial. O cachorro é
                um mamífero quadrúpede (ou seja, anda sobre quatro patas) que se
                destaca por ter uma cauda e uma cobertura de pelos por todo o
                seu corpo. O cão tem dois sentidos particularmente bem
                desenvolvidos: olfato e audição. Começaremos com o mais
                importante, o olfato, que é fundamental para a caça, o
                comportamento social e sexual. Ao contrário dos humanos, que têm
                apenas 5 milhões de receptores olfativos, os cães têm entre 200
                e 300 milhões de receptores olfativos.
              </p>
            </div>
          </div>
        </div>
        <div className="homecard">
          <div className="homeimgcard">
            <img
              className="homeimgcard"
              src="https://i1.wp.com/gatinhobranco.com/wp-content/uploads/2014/08/cats16.jpg?resize=600%2C369"
              alt=""
            ></img>
            <div className="homecardtexto">
              <h1>Sobre Gatos</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                officia, magni deserunt quos commodi nihil facere earum itaque
                modi quo ducimus! Quibusdam obcaecati nesciunt error architecto
                exercitationem, quam temporibus blanditiis?
              </p>
            </div>
          </div>
        </div>
        <div className="homecard">
          <div className="homeimgcard">
            <img
              className="homeimgcard"
              src="https://www.vetquality.com.br/wp-content/uploads/2016/07/adocao-de-caes-e-gatos.jpg"
              alt="manoepata"
            ></img>
            <div className="homecardtexto">
              <h1>Sobre Adoptar Pets</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                officia, magni deserunt quos commodi nihil facere earum itaque
                modi quo ducimus! Quibusdam obcaecati nesciunt error architecto
                exercitationem, quam temporibus blanditiis?
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
