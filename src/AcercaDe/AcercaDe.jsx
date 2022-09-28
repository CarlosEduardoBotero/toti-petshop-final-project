import "./AcercaDe.css";
import todosprinc from "./lmg/todos.jpeg";
import politica from "./lmg/politica-de-privacidade.jpg";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";

const validation = yup.object().shape({
  nome: yup.string().required("nome é um campo obrigatório"),
  email: yup.string().required("email é um campo obrigatório"),
  menssage: yup.string().required("message é um campo obrigatório")
})

const AcercaDe = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validation)
  });
  const envio = data => console.log(data)

  return (
    <div>
      <img className="acercadeimgprincipal" src={todosprinc}></img>

      <h2 className="AcercaDeh2">Quem Somos</h2>
       
      <div className="AcercaDep">
            <p>Royal Pets é um aplicativo que começa por iniciativa da realização do projeto final do grupo Número 19 do Toti do ano de 2022, O Toti é uma plataforma brasileira de educação e inclusão de refugiados e migrantes no mercado de trabalho tecnológico, Com o propósito de inspirar mudanças conectando educação, tecnologia e diversidade.</p><br/>
            <p>Desde então, trabalhamos constantemente com o aperfeiçoamento e desenvolvimento de novas estratégias de e-commerce, parcerias com empresas conceituadas do setor pet e realizando atendimento personalizado para nos aproximarmos dos nossos clientes e entender o que ele e seu pet precisam.</p><br/>
            <p>Nosso maior foco é proporcionarmos ao seu animal de estimação itens essenciais no dia-a-dia dele com altíssima qualidade, custo-benefício e na hora em que ele mais precisa!</p><br/>
            <p>Nossos colaboradores possuem ampla experiência no setor e dispomos a eles toda a estrutura, treinamento e o suporte necessário, no que contribui a pensar no bem-estar animal de uma maneira mais unida e empática.</p><br/>
            <p>Ah, e todos por aqui são APAIXONADOS por pets! Sabemos da importância que um pet tem dentro de cada família e é dessa forma buscamos atender nossos clientes. Repassando o mesmo cuidado, proteção, amor e carinho que o cliente tem com seu melhor amigo.</p><br/>
            <p>Mais do que essa apresentação, convidamos você a conhecer um pouco mais do nosso site e dos nossos perfis nas redes sociais. Se precisar, entre em contato conosco.</p><br/>
      </div>

      <h2 className="AcercaDeh2">Politicas</h2>
      <img className="acercadeimgpolitica" src={politica}></img>
            <p className="AcercaDep">Todas as suas informações pessoais recolhidas, serão usadas para o ajudar a tornar a sua visita no nosso site o mais produtiva e agradavelmente possível. A garantia da confidencialidade dos dados pessoais dos utilizadores do nosso site é importante para a RoyalPets. Todas as informações pessoais relativas a membros, assinantes, clientes ou visitantes que usem o RoyalPets serão tratadas em concordância com a Lei da Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei n.º 67/98). A informação pessoal recolhida pode incluir o seu nome, e-mail, número de telefone e/ou celular, morada, data de nascimento e/ou outros. O uso da RoyalPets pressupõe a aceitação deste Acordo de privacidade. A equipe da RoyalPets reserva-se ao direito de alterar este acordo sem aviso prévio. Deste modo, recomendamos que consulte a nossa política de privacidade com regularidade de forma a estar sempre atualizado.</p><br/>

      <h4 className="AcercaDeh4">Os Anúncios</h4>
            <p className="AcercaDep">Tal como outros websites, coletamos e utilizamos informação contida nos anúncios. A informação contida nos anúncios, inclui o seu endereço IP (Internet Protocol), o seu ISP (Internet Service Provider), o browser que utilizou ao visitar o nosso website (como o Internet Explorer ou o Google Chrome), o tempo da sua visita e que páginas visitou dentro do nosso website.</p><br/>

      <h4 className="AcercaDeh4">Os Cookies e Web Beacons</h4>
            <p className="AcercaDep">Utilizamos cookies para armazenar informação, tais como as suas preferências pessoas quando visita o nosso website. Isto poderá incluir um simples popup, ou uma ligação em vários serviços que providenciamos, tais como fóruns. Você detém o poder de desligar os seus cookies, nas opções do seu browser, ou efetuando alterações nas ferramentas de programas Anti-Virus, como o Norton Internet Security. No entanto, isso poderá alterar a forma como interage com o nosso website, ou outros websites. Isso poderá afetar ou não permitir que faça logins em programas, sites ou fóruns da nossa e de outras redes.</p><br/>

      <h4 className="AcercaDeh4">Ligações a Sites de Terceiros</h4>
            <p className="AcercaDep">A RoyalPets possui ligações para outros sites, os quais, a nosso ver, podem conter informações e/ou ferramentas úteis para os nossos visitantes. A nossa política de privacidade não é aplicada a sites de terceiros. Caso visite outro site a partir do nosso deverá ler a política de privacidade do mesmo. Não nos responsabilizamos pela política de privacidade ou conteúdo presente nesses mesmos sites.</p><br/>
            <div className="AcercaDeRodape">

            <div className="AcercaDeformulario">
              <h1 className="AcercaDefor">Formulario de Contato</h1>
              
                <h5 className="AcercaDeesc">Escreva-nos e entraremos em contato em breve</h5>
                    
                  <form className="AcercaDeconten"onSubmit={handleSubmit(envio)}>
                      <label> Nome:<br/>
                        <input className="AcercaDeinput" type="text" name="nome" {...register("nome")}
                          placeholder="Escreva seu nome">
                        </input><br/>
                        <p>{errors.nome?.message}</p>
                      </label><br/>

                      <label> E-mail:<br/>
                        <input className="AcercaDeinput" type="email" name="email"{...register("email")}
                          placeholder="Escreva seu Email">
                        </input><br/>
                        <p>{errors.email?.message}</p>
                      </label><br/>

                      <label>Message:<br/>
                        <textarea type= "text" name="menssage" className="AcercaDemessage"{...register("menssage")}
                           placeholder="Deixa aquí seu comentario..."></textarea>
                           <p>{errors.menssage?.message}</p>
                      </label><br/>
                  <br/><br/>

                      <button className="AcercaDebtn" type="submit" name="enviar_formulario" id="AvercaDeenviar">
                        Enviar
                      </button>
                      </form>
            </div>
            <p className= "AcercaDeder">© 2022 TheRoyalPet. Todos os direitos reservados. Aviso legal,
política de privacidade e proteção de dados pessoais.</p>
    </div>

 </div>
  );
};

export default AcercaDe;