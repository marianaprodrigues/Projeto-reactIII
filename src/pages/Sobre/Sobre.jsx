import './sobre.css'
import Header from '../../components/Header/Header';
import about_me_image from '../../assets/minhaimagem.jpg'

function Sobre() {
  return (
    <>
      <Header
      image={about_me_image}
      description="Minha Imagem"
      >Sobre Mim</Header>
      <h2 className="sobreh2">Olá, Eu sou a Mariana</h2>
      <p className="sobre_p">"Aluna da turma On17 de Front-End da Reprograma e atualmente 
        trabalho com nutricionista até conseguir iniciar a minha carreira como
        desenvolvedora, que é o que eu mais quero fazer.</p>
    </>
  );
}

export default Sobre;