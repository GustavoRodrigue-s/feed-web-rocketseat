import { IPost } from "../types";
import { user } from "./user";

export const posts: IPost[] = [
  {
    id: 1,
    author: user,
    publishedAt: new Date("2024-11-26 16:35"),
    content: [
      {
        type: 'paragraph',
        value: "Fala galeraa 👋"
      },
      {
        type: 'paragraph',
        value: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: 'link',
        value: "jane.design/doctorcare"
      },
      {
        type: 'link',
        value: "#novoprojeto #nlw #rocketseat"
      },
    ],
    comments: [
      {
        id: 1,
        author: {
          name: 'Diego Fernandes',
          avatarUrl: "https://github.com/diego3g.png",
          role: 'CTO Rocketseat'
        },
        likes: 30,
        publishedAt: new Date("2024-11-27 18:17:00"),
        content: [
          {
            type: 'paragraph',
            value: 'Muito bom Gustavo, parabéns!!'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Maik Brito',
          avatarUrl: "https://github.com/maykbrito.png",
          role: 'CCO Rocketseat'
        },
        likes: 23,
        publishedAt: new Date("2024-11-26 20:05"),
        content: [
          {
            type: 'paragraph',
            value: 'Muito sucesso para você, parabéns!!'
          },
        ]
      },
    ]
  },
  {
    id: 2,
    author: {
      name: 'Diego Fernandes',
      avatarUrl: "https://github.com/diego3g.png",
      role: 'CTO Rocketseat'
    },
    publishedAt: new Date("2024-11-23"),
    content: [
      {
        type: 'paragraph',
        value: "Fala galeraa 👋"
      },
      {
        type: 'paragraph',
        value: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: 'link',
        value: "jane.design/doctorcare"
      },
      {
        type: 'link',
        value: "#novoprojeto #nlw #rocketseat"
      },
    ],
    comments: [
      {
        id: 1,
        author: {
          name: 'Diego Fernandes',
          avatarUrl: "https://github.com/diego3g.png",
          role: 'CTO Rocketseat'
        },
        likes: 2,
        publishedAt: new Date("2024-11-26 18:17"),
        content: [
          {
            type: 'paragraph',
            value: 'Muito bom Gustavo, parabéns!!'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Maik Brito',
          avatarUrl: "https://github.com/maykbrito.png",
          role: 'CCO Rocketseat'
        },
        likes: 2,
        publishedAt: new Date("2024-11-26 20:05"),
        content: [
          {
            type: 'paragraph',
            value: 'Muito sucesso para você, parabéns!!'
          },
        ]
      },
    ]
  },
  {
    id: 3,
    author: {
      name: 'Maik Brito',
      avatarUrl: "https://github.com/maykbrito.png",
      role: 'CCO Rocketseat'
    },
    publishedAt: new Date("2024-11-21"),
    content: [
      {
        type: 'paragraph',
        value: "Fala galeraa 👋"
      },
      {
        type: 'paragraph',
        value: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀"
      },
      {
        type: 'link',
        value: "jane.design/doctorcare"
      },
      {
        type: 'link',
        value: "#novoprojeto #nlw #rocketseat"
      },
    ],
    comments: [
      {
        id: 1,
        author: {
          name: 'Diego Fernandes',
          avatarUrl: "https://github.com/diego3g.png",
          role: 'CTO Rocketseat'
        },
        likes: 2,
        publishedAt: new Date("2024-11-26 18:17"),
        content: [
          {
            type: 'paragraph',
            value: 'Muito bom Gustavo, parabéns!!'
          }
        ]
      },
      {
        id: 2,
        author: {
          name: 'Maik Brito',
          avatarUrl: "https://github.com/maykbrito.png",
          role: 'CCO Rocketseat'
        },
        likes: 2,
        publishedAt: new Date("2024-11-26 20:05"),
        content: [
          {
            type: 'paragraph',
            value: 'Muito sucesso para você, parabéns!!'
          },
        ]
      },
    ]
  }
]