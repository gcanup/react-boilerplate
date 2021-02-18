import { Button } from 'reactstrap'
import React from 'react'
import PropTypes from 'prop-types'

import bodyContent from '../images/bodyContent.png'

const EndScreen = (props) => {
  return (
    <div className="EndScreen w-75 align-self-center">
      <h2>Littledata App</h2>
      <img src={bodyContent} className='w-50' /><br />
      <Button
        className='mt-5 screen-btn'
        color='success'
        onClick={() => props.history.push('/')}
        >
        Go Back to Start
      </Button>
    </div >
  )
}

EndScreen.propTypes = {
  history: PropTypes.object
}

export default EndScreen