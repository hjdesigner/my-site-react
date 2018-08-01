'use strict'
import React from 'react'
import { connect } from 'react-redux'
import { toggleTheme } from 'reducers/theme/action-creators'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'

const Light = ({ status, handleClick }) => {
  const body = document.querySelector('body')
  body.className = ''
  body.classList.add(status.visibilityTheme)

  return (
    <LightContaniner>
      <FontAwesomeIcon icon={faLightbulb} data-js={status.visibilityTheme} onClick={handleClick(status)} />
    </LightContaniner>
  )
}

const LightContaniner = styled.div`
  position: absolute;
  right: 8px;
  top: 8px;
  cursor: pointer;
  @media screen and (min-width: 1000px){
    right: 15px;
    top: 15px;
  }
  svg {
    color: #FF9800;
    &[data-js="false"] {
      color: #FFF;
    }
    @media screen and (min-width: 1000px){
      font-size: 1.6em;
    }
  }
  
`

const mapStateProps = (state) => ({
  status: state.theme
})

const mapDispatchToProps = (dispatch) => ({
  handleClick: (status) => () => {
    dispatch(toggleTheme(!status.visibilityTheme))
  }
})

export default connect(mapStateProps, mapDispatchToProps)(Light)
