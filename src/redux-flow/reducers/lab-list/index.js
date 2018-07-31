'use strict'
import createReducer from '../create-reducer'

const initialState = [
  {
    id: 0,
    title: 'Simples grid com React.js e Styled Components',
    link: 'https://henriquemelanda.com.br/grid-styled-components/',
    image: 'https://henriquemelanda.com.br/assests/img/grid-styled-components.jpg'
  },
  {
    id: 1,
    title: 'Color Gradient Generator React.js + Redux',
    link: 'https://henriquemelanda.com.br/color-gradient-generator/',
    image: 'https://henriquemelanda.com.br/assests/img/color-generetor.png'
  },
  {
    id: 2,
    title: 'Meu currículo GitHub',
    link: 'https://meu-curriculo.wedeploy.io/',
    image: 'http://henriquemelanda.com.br/assests/img/capa.jpg'
  },
  {
    id: 3,
    title: 'HTML5 Ambient Light API',
    link: 'http://henriquemelanda.com.br/ambient-light-api/',
    image: 'http://henriquemelanda.com.br/ambient-light-api/image/ambient-light-api.jpg'
  },
  {
    id: 4,
    title: 'CSS Padawan',
    link: 'http://henriquemelanda.com.br/css-padawan/',
    image: 'http://henriquemelanda.com.br/css-padawan/image/chatbot-css-padawan.jpg'
  },
  {
    id: 5,
    title: 'Battery Status API',
    link: 'http://henriquemelanda.com.br/battery-status-api/',
    image: 'http://henriquemelanda.com.br/battery-status-api/image/battery-status-api.jpg'
  },
  {
    id: 6,
    title: 'Vibration API',
    link: 'http://henriquemelanda.com.br/vibration-api/',
    image: 'http://henriquemelanda.com.br/vibration-api/image/vibration-api.jpg'
  },
  {
    id: 7,
    title: 'Simple Grid CSS',
    link: 'http://henriquemelanda.com.br/simple-grid-css/',
    image: 'http://henriquemelanda.com.br/simple-grid-css/images/simple-grid-css.jpg'
  },
  {
    id: 8,
    title: 'CSS Components',
    link: 'http://www.henriquemelanda.com.br/css-components',
    image: 'https://henriquemelanda.com.br/assests/img/css-componentes.jpg'
  },
  {
    id: 9,
    title: 'Filter Instagram Pure CSS',
    link: 'https://codepen.io/hjdesigner/full/xRmqpp',
    image: 'http://s3-us-west-2.amazonaws.com/i.cdpn.io/299715.xRmqpp.small.1df17a4e-491f-4a8b-82c7-3bac096f91ef.png'
  },
  {
    id: 10,
    title: 'Luke Skywalker Pixel Art CSS',
    link: 'https://codepen.io/hjdesigner/full/JbzywJ',
    image: 'http://s3-us-west-2.amazonaws.com/i.cdpn.io/299715.JbzywJ.small.c26a9f97-784a-4b8c-8654-5b0f6f642a61.png'
  },
  {
    id: 11,
    title: 'Pagination Pure CSS',
    link: 'http://codepen.io/hjdesigner/full/qqgZzz/',
    image: 'http://s3-us-west-2.amazonaws.com/i.cdpn.io/299715.qqgZzz.small.75d4bee0-dbf3-4cdc-8bf9-41a0426f009c.png'
  },
  {
    id: 12,
    title: 'Facebook Reactions Halloween Pure CSS',
    link: 'http://codepen.io/hjdesigner/full/Gjbmyj/',
    image: 'http://s3-us-west-2.amazonaws.com/i.cdpn.io/299715.Gjbmyj.small.5944658f-5d4c-4da4-add5-1e9733fc9b7c.png'
  }
]

const labList = createReducer(initialState, {})

export default labList
