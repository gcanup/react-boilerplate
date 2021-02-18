import React from 'react'
import { Card, CardTitle, CardText, Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import users from '../helpers/users'
import '../styles/start.scss'

const StartScreen = (props) => {
  return (
    <div className="start-screen w-75 align-self-center">
      <h2 className='mb-5'>Littledata Welcome Flow Test</h2>
      <Row>
        {users.map(user => {
          return (
            <Col sm='4' key={user.id} className='d-flex align-items-stretch'>
              <Card>
                <FontAwesomeIcon icon={user.icon} size='lg' />
                <CardTitle tag="h5" className='mt-3'>{user.name}</CardTitle>
                <CardText className='d-table-cell'>{user.desc}</CardText>
                <Button
                  className='screen-btn mt-5'
                  onClick={() => props.history.push('/welcome')}>
                  Enter {user.name}
                </Button>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div >
  )
}

StartScreen.propTypes = {
  history: PropTypes.object
}

export default StartScreen