import React from 'react'
import gaLogo from '../images/GA-logo.svg'
import segmentLogo from '../images/Segment-logo.svg'
import PropTypes from 'prop-types'

const ThirdPage = (props) => {
  return (
    <div className="third-page">
      <p>Please select the destination that you&apos;d like to connect your store with</p>
      <div className='d-flex destination justify-content-around'>
        <div className='img-box'>
          <img src={gaLogo} alt='Google Analytics logo' onClick={props.nextPage} />
          <h5>Google <br /> Analytics</h5>
        </div>
        <div className='img-box'>
          <img src={segmentLogo} alt='Segment logo' onClick={props.nextPage} />
          <h5>Segment</h5>
        </div>

      </div>
    </div >
  )
}

ThirdPage.propTypes = {
  nextPage: PropTypes.func
}

export default ThirdPage