import React, { useState, useEffect, useContext } from 'react'
import { Row, Col, Progress } from 'reactstrap'
import PropTypes from 'prop-types'
import FirstPage from '../Components/FirstPage'
import SecondPage from '../Components/SecondPage'
import ThirdPage from '../Components/ThirdPage'
import logo from '../images/Littledata-Logo.svg'
import { Context } from "../helpers/context";
import '../styles/welcome-screen.scss'

const WelcomeScreen = (props) => {
  const [page, setPage] = useState('first')
  const [url, setUrl] = useState('')
  const [context, setContext] = useContext(Context)

  useEffect(() => {
    console.log(context, setContext)
    context === 'second' && setPage('second')
  }, [])

  return (
    <Row className='welcome-screen d-flex w-100'>
      <Col sm='6' className='left-content pl-0 pr-0'><div className='backdrop' /> </Col>
      <Col sm='6' className='right-content align-self-center'>
        <div>
          <img src={logo} alt='little data logo' className='logo' />
          <h4 className='heading'> {page === 'third' ? 'Choose Destination' : 'Welcome to Littledata'}</h4>
          <Progress value={page === 'first' ? 50 : 100} className={page === 'third' ? 'd-none' : ''} />
          {page === 'first' &&
            <FirstPage
              nextPage={() => setPage('second')}
              setUrl={(e) => setUrl(e.target.value)} />}
          {page === 'second' &&
            <SecondPage
              storeUrl={url}
              nextPage={() => setPage('third')}
              prevPage={() => setPage('first')}
              endPage={() => props.history.push('/end')} />}
          {page === 'third' && <ThirdPage nextPage={() => props.history.push('/end')} />}
        </div>
      </Col>
    </Row>
  )
}

WelcomeScreen.propTypes = {
  history: PropTypes.object
}

export default WelcomeScreen