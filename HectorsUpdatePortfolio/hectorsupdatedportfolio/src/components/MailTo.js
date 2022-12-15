import React from 'react';
import { IconButton } from '@chakra-ui/react'
import { HiOutlineMail } from 'react-icons/hi';

const MailTo = ({ email }) => {
    return (
        <IconButton
            icon={<HiOutlineMail />}
            boxSize='6rem'
            fontSize='6rem'
            colorScheme='teal'
            aria-label='Email me'
            to='#'
            onClick={(e) => {
                e.preventDefault()
                window.open(`mailto:${email}`, '_blank')
            }
            } />
    )
}
export default MailTo;