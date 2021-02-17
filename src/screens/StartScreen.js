import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'
import { Card, CardTitle, CardText, Row, Col } from 'reactstrap';
import users from '../helpers/users'
import '../styles/start.scss'

const StartScreen = () => {
  return (
    <div className="start-screen w-75 align-self-center">
      <Row>
        {users.map(user => {
          return (
            <Col sm='4' key={user.id}>
              <Card>
                <FontAwesomeIcon icon={user.icon} />
                <CardTitle tag="h5">{user.name}</CardTitle>
                <CardText>{user.desc}</CardText>
              </Card>
            </Col>
          )
        })}
      </Row>
    </div >
  );
}

export default StartScreen