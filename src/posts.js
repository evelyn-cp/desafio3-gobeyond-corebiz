import profilePicture from './images/pic-evelyn.jpg';
import imgBackground from './images/bg.jpg';
import imgDesafioGB1 from './images/desafioGB1.jpeg';
import imgDesafioGB2 from './images/desafioGB2.jpeg';
import imgDesafioGB3 from './images/desafioGB3.jpeg';
import imgDesafioHC1 from './images/desafioHC1.jpeg';
import imgDesafioHC2 from './images/desafioHC2.jpeg';
import imgDesafioHC3 from './images/desafioHC3.jpeg';
import imgDesafioHC4 from './images/desafioHC4.jpeg';
import todolist1 from './images/simpletodolist.jpeg';
import passgenerate from './images/passwordgenerate.jpeg';
import todolist2 from './images/jstodolist.jpeg';
import listapresentes from './images/listapresentesreact.jpeg';


export const posts = {
  user: {
    background: imgBackground,
    picture: profilePicture,
    name: "Evelyn Pereira",
    description: "Front-end Developer"
  },
  content: [
    {
      title: "👊🏻 Desafios Hiring Coders",
      posts: [
        {
          background: imgDesafioHC1,
          link: "https://github.com/evelyn-cp/desafio1-hiring-coders",
          title: "Desafio 1",
          description: "Descrição"
        },
        {
          background: imgDesafioHC2,
          link: "https://github.com/evelyn-cp/desafio2-hiring-coders",
          title: "Desafio 2",
          description: "Descrição"
        },
        {
          background: imgDesafioHC3,
          link: "https://github.com/evelyn-cp/desafio3-hiring-coders",
          title: "Desafio 3",
          description: "Descrição"
        },
        {
          background: imgDesafioHC4,
          link: "https://github.com/evelyn-cp/desafio-final-corebiz-hiring-coders",
          title: "Desafio 4",
          description: "Descrição"
        }
      ]
    },
    {
      title: "🚀 Desafios Go Beyond",
      posts: [
        {
          background: imgDesafioGB1,
          link: "https://github.com/evelyn-cp/desafio1-gobeyond-corebiz",
          title: "Desafio 1",
          description: "Descrição"
        },
        {
          background: imgDesafioGB2,
          link: "https://github.com/evelyn-cp/desafio2-gobeyond-corebiz",
          title: "Desafio 2",
          description: "Descrição"
        },
        {
          background: imgDesafioGB3,
          link: "https://github.com/evelyn-cp/desafio3-gobeyond-corebiz",
          title: "Desafio 3",
          description: "Descrição"
        }
      ]
    },
    {
      title: "💻 Projetos",
      posts: [
        {
          background: listapresentes,
          link: "https://lista-presentes-react.netlify.app/",
          title: "Lista de Presentes (React)",
          description: "Descrição"
        },
        {
          background: todolist2,
          link: "https://js-studies-todolist.netlify.app/",
          title: "To Do List (JS)",
          description: "Descrição"
        }, 
        {
          background: passgenerate,
          link: "https://js-studies-passwordgenerate.netlify.app/",
          title: "Password Generate (JS)",
          description: "Descrição"
        },
        {
          background: todolist1,
          link: "https://simple-todolistapp.netlify.app/",
          title: "Simple To Do List (HTML + CSS)",
          description: "Descrição"
        }
      ]
    }
  ],
  navigation: {
    linkedin: "https://www.linkedin.com/in/evelyncper/",
    github: "https://github.com/evelyn-cp",
    email: "evedcp@gmail.com"
  }
}