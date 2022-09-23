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
                O cachorro é um mamífero quadrúpede (anda sobre quatro patas)
                que se destaca por ter uma cauda e uma cobertura de pelos por
                todo o seu corpo. O cão tem dois sentidos particularmente bem
                desenvolvidos: olfato e audição o mais importante, o olfato, que
                é fundamental para a caça, o comportamento social e sexual.
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
                O gato (felis catus) é um mamífero carnívoro e quadrúpede
                pertencente à família Felidae e à ordem carnívora. É um animal
                doméstico apreciado por caçar ratos e ratazanas. Este animal
                possui unhas retráteis, ouvidos e olfação bem aguçados, uma
                notável visão noturna e um corpo flexível, musculoso e compacto.
                Trata-se de um animal com boa memória e com capacidade de
                aprender por meio da observação e da experiência.
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
              <h1>Adoptar Pets</h1>
              <p>
                Todos os pets merecem uma vida digna, regada com muito amor e
                proteção. Por esse motivo, ao concretizar uma adoção responsável
                você está proporcionado uma vida de mais qualidade para o pet.
                Além disso, ao adotar o animal de um abrigo você estará,
                automaticamente, salvando mais de uma vida, pois o espaço do seu
                novo melhor amigo será disponibilizado a outro animal de rua que
                será resgatado.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
