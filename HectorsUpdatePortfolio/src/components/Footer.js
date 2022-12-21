import React from 'react';
import { Link, IconButton, Flex, Center } from '@chakra-ui/react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import MailTo from '../components/MailTo';
export default function Footer() {
    return (
        <Flex
            w='100%'
            alignItems='center'
            h='30%'
            justify='center'
        >
            <Center
            >
                <Link
                    isExternal
                    href='https://github.com/Hdela99'>
                    <IconButton
                        variant='outline'
                        colorScheme='teal'
                        aria-label='Github'
                        icon={<AiFillGithub />}
                        boxSize='6rem'
                        fontSize='6rem'
                    />
                </Link>
                <Link
                    isExternal
                    href='https://www.linkedin.com/in/HectorDeLaCruzSandoval'>
                    <IconButton
                        variant='outline'
                        colorScheme='teal'
                        aria-label='LinkedIn'
                        icon={<AiFillLinkedin />}
                        boxSize='6rem'
                        fontSize='6rem'
                    />
                </Link>
                <MailTo email={"Hdelacruz1999@gmail.com"} />
            </Center>
        </Flex>
    )
}