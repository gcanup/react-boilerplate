import React from 'react'
import { Label, Input, Button } from 'reactstrap'
import PropTypes from 'prop-types'
import { faArrowRight, faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const SecondPage = (props) => {
  return (
    <div className="second-page text-left">
      <h5 className='mt-3'>How did you hear about Littledata?</h5>
      <div className='radio-btn pl-4'>
        <Label check><Input type='radio' name='radio1' />{' '}THROUGH SHOPIFY APP STORE </Label> <br />
        <Label check><Input type='radio' name='radio1' />{' '}RECOMMENDED BY MY AGENCY </Label> <br />
        <Label check><Input type='radio' name='radio1' />{' '}THROUGH A FRIEND / COLLEAGUE </Label> <br />
        <Label check><Input type='radio' name='radio1' />{' '}I SAW A LITTLEDATA ADD </Label> <br />
        <Label check><Input type='radio' name='radio1' />{' '}I READ A BLOG POST / ARTICLE / BOOK BY LITTLEDATA</Label> <br />
        <Label check><Input type='radio' name='radio1' />{' '}OTHERS</Label><br />
      </div>

      <h5 className='mt-5'>Are you part of an agency or a consulting firm?</h5>
      <div className='radio-btn pl-4'>
        <Label check><Input type='radio' name='radio2' />{' '}YES</Label>
        <Label check style={{ marginLeft: '56px' }}><Input type='radio' name='radio2' />{' '}NO</Label>
      </div>

      <div className='footer d-flex justify-content-between'>
        <Button
          className='prev'
          onClick={props.prevPage}>
          <FontAwesomeIcon icon={faArrowLeft} />
          &nbsp; &nbsp;Previous
          </Button>
        <Button
          className='next'
          onClick={props.storeUrl.includes('myshopify.com') ? props.nextPage : props.endPage}>
          Next&nbsp;&nbsp;<FontAwesomeIcon icon={faArrowRight} />
        </Button>
      </div>
    </div >
  )
}

SecondPage.propTypes = {
  prevPage: PropTypes.func,
  nextPage: PropTypes.func,
  storeUrl: PropTypes.string,
  history: PropTypes.object,
  endPage: PropTypes.func
}

export default SecondPage