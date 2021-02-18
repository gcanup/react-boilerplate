import React from 'react'
import { Label, Input, Button } from 'reactstrap'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import PropTypes from 'prop-types'

const FirstPage = (props) => {
    return (
        <div className="first-page text-left">
            <Label style={{ marginBottom: '16px' }}>Store name</Label>
            <Input type='name' className='mb-2' name='name' placeholder='Your store name' />
            <Label style={{ marginTop: '24px', marginBottom: '16px' }}>Store URL</Label>
            <Input style={{ marginBottom: '48px' }} type='store' name='store' placeholder='yourstore.myshopify.com' onChange={props.setUrl} />
            <div className='email-section p-4'>
                <h4>Email Notifications</h4>
                <Input type='store' name='store' placeholder='jane@yourstore.com' />
                <Label check> <Input type="checkbox" />{' '}Send me all the important app notifications on this email</Label>
            </div>
            <Button
                className='screen-btn next-btn'
                color='success'
                onClick={props.nextPage}
            >
                Next &nbsp;&nbsp; <FontAwesomeIcon icon={faArrowRight} />
            </Button>
        </div >
    );
}

FirstPage.propTypes = {
    nextPage: PropTypes.func,
    setUrl: PropTypes.func
}

export default FirstPage