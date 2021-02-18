import React , {useContext} from 'react'
import { Card, CardTitle, CardText, Row, Col, Button } from 'reactstrap';
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import users from '../helpers/users'
import { Context } from "../helpers/context";
import '../styles/start.scss'

const StartScreen = (props) => {
  const [context, setContext] = useContext(Context)

  const clickHandler = (user) => {
    console.log(context)
    props.history.push(user.path)
    setContext(user.landingPage)
  }

  return (
    <div className="start-screen w-75 align-self-center mt-2 mb-2">
      <h2 className='mb-5'>Littledata Welcome Flow Test</h2>
      <Row>
        {users.map(user => {
          return (
            <Col md='4' key={user.id} className='d-flex align-items-stretch users'>
              <Card>
                <FontAwesomeIcon icon={user.icon} size='lg' />
                <CardTitle tag="h5" className='mt-3'>{user.name}</CardTitle>
                <CardText className='d-table-cell'>{user.desc}</CardText>
                <Button
                  className='screen-btn w-50 mb-3 mt-2'
                  onClick={() => clickHandler(user)}>
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