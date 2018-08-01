'use strict'
import createReducer from '../create-reducer'

const initialState = [
  {
    id: 0,
    title: 'Um sistema de grid simples com Styled Components',
    link: 'https://medium.com/@ricoSP/um-sistema-de-grid-simples-com-styled-components-41a8f57dfea3',
    tags: [
      {
        id: 'tag-0',
        title: 'React'
      },
      {
        id: 'tag-1',
        title: 'Styled Components'
      },
      {
        id: 'tag-2',
        title: 'Grid CSS'
      }
    ]
  },
  {
    id: 1,
    title: 'Utilizando Sass para gerar cor e box-shadow em um loop',
    link: 'https://medium.com/@ricoSP/utilizando-sass-para-gerar-cor-e-box-shadow-em-um-loop-f3fb72718ba8',
    tags: [
      {
        id: 'tag-0',
        title: 'CSS'
      },
      {
        id: 'tag-1',
        title: 'SASS'
      }
    ]
  },
  {
    id: 2,
    title: 'Botão com sombra longa com CSS3 e SASS',
    link: 'https://medium.com/@ricoSP/bot%C3%A3o-com-sombra-longa-com-css3-e-sass-5c0d931f253c',
    tags: [
      {
        id: 'tag-0',
        title: 'CSS'
      },
      {
        id: 'tag-1',
        title: 'SASS'
      }
    ]
  },
  {
    id: 3,
    title: 'Retrospectiva 2017 de um jovem padawan front-end',
    link: 'https://medium.com/trainingcenter/retrospectiva-2017-de-um-jovem-padawan-front-end-8ef43fad01db',
    tags: [
      {
        id: 'tag-1',
        title: 'Front-End'
      },
      {
        id: 'tag-2',
        title: 'Retrospectives'
      }
    ]
  },
  {
    id: 4,
    title: 'Exibindo promoção em uma determinada hora com JS Date()',
    link: 'https://medium.com/@ricoSP/exibindo-promo%C3%A7%C3%A3o-em-uma-determinada-hora-com-js-date-57ffdff0dadc',
    tags: [
      {
        id: 'tag-1',
        title: 'Date'
      },
      {
        id: 'tag-2',
        title: 'Javascript'
      }
    ]
  },
  {
    id: 5,
    title: 'Como foi o desafio Daily CSS Image',
    link: 'https://medium.com/@ricoSP/como-foi-o-desafio-daily-css-image-a65bd0e5a4ea',
    tags: [
      {
        id: 'tag-0',
        title: 'CSS'
      },
      {
        id: 'tag-1',
        title: 'Daily Css Image'
      }
    ]
  },
  {
    id: 6,
    title: 'Alinhando dois parágrafos com um pouco de gambiarra',
    link: 'https://medium.com/@ricoSP/alinhando-dois-par%C3%A1grafos-com-um-pouco-de-gambiarra-78682c9d852a',
    tags: [
      {
        id: 'tag-2',
        title: 'CSS'
      }
    ]
  },
  {
    id: 7,
    title: 'Retrospectiva 2016',
    link: 'https://medium.com/@ricoSP/retrospectiva-2016-8d08d7d97689',
    tags: [
      {
        id: 'tag-0',
        title: 'Front-End'
      },
      {
        id: 'tag-1',
        title: 'Retrospectives'
      }
    ]
  }
]

const blogList = createReducer(initialState, {})

export default blogList
