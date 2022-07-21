import Header from "../../components/Header/Header"
import image from "../../assets/project.svg"
import { useState, useEffect } from 'react'
import { BsArrowReturnRight } from 'react-icons/bs'
import axios from 'axios'

import './portfolio.css'

const list = [
  {
    id: 1,
    nome: 'M de Maravilhosa',
    descricao: 'Projeto criado para homenagiar uma mulher maravilhosa',
    imagem: 'https://media.giphy.com/media/K9usva8rnZy1TNj9Cy/giphy.gif',
  },
  {
    id: 2,
    nome: 'Meu Diário Reprograma',
    descricao: 'Primeiro projeto criado usando o react',
    imagem: 'https://media.giphy.com/media/hQ7n9dPBoq6YVZSIlA/giphy.gif',
  },
  {
    id: 3,
    nome: 'Via CEP',
    descricao: 'Projeto de requisição ViaCep',
    imagem: 'https://media.giphy.com/media/6VYxTlMLjY1di3ysAn/giphy.gif',
  },
  {
    id: 4,
    nome: 'Studio Ghibli',
    descricao: 'Projeto criado usando a API Ghibli',
    imagem: 'https://media.giphy.com/media/tAWLMGViV3zdYxj2Yx/giphy.gif',
  }
]

function Portfolio() {
  const [repos, setRepos] = useState([])
  const baseURL = 'https://api.github.com/users/marianaprodrigues/repos'

  useEffect(()=> {
    axios
      .get(baseURL)
      .then((response) => setRepos(response.data))
  }, [])

    return (
        <>
        <Header
            image={image}
            description="ilustração mulher com site"
        >
            Meus Projetos
        </Header>

<div className="cartao-container">
{
  list.map(projeto => {
    return(
      <div className="cartao" key={projeto.id}>
        <h1>{projeto.nome}</h1>
        <img src={projeto.imagem} alt={"gif do projeto "+ projeto.nome}/>
        <p>{projeto.descricao}</p>
        <a href={projeto.link} className="enter-repo" target="_blank">
          <BsArrowReturnRight siz={16} color="#111"/>
        </a>
      </div>
    )
  })
}
</div>
<h2 className="titulo">Outros Projetos no meu Github</h2>  
<div className="card-container">
{
  repos.map(repo => {
    return(
      <div className="card" key={repo.id}>
        <h3>{repo.name}</h3>
        <p>{repo.description}</p>
        <a href={repo.html_url} className="enter-repo" target="_blank">
                <BsArrowReturnRight siz={16} color="#fff"/>
              </a>
            </div>
          )
        })
      }
    </div>
   </>
    )
}
export default Portfolio