import React from 'react';
import { Flex, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Textarea, Spacer } from '@chakra-ui/react'


export default function ContactMe() {
    return (
        <Flex
            w='50%'
            h='84vh'
            ml='15rem'
            justify='center'
            align='center'
            className='formContainer'
        >
            <FormControl as='fieldset'>
                <FormLabel for='firstName'>First name:</FormLabel>
                <Input type='text' id='firstName' name='firstName' placeholder='Enter First Name' />
                <FormLabel for='lastName'>Last name:</FormLabel>
                <Input type='text' id='lastName' name='lastName' placeholder='Enter Last Name' />
                <FormLabel for='message'> Enter your Question/Comment/Concern below</FormLabel>
                <Textarea type='text' id='message' name='message' placeholder='Enter your comment/question/concern.' /><br />
                <Input type='submit' value='submit' bg='teal' color='black' />
            </FormControl>

        </Flex>

    );
};