import React from 'react';
import { Link, IconButton, Flex } from '@chakra-ui/react'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

export default function Footer() {
    return (
        <Flex
            w='100%'
            alignItems='center'
        >
            <Link
                to='https://github.com/Hdela99'>
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='Github'
                    icon={<AiFillGithub />} />
            </Link>
            <Link
                to='www.linkedin.com/in/HectorDeLaCruzSandoval'>
                <IconButton
                    variant='outline'
                    colorScheme='teal'
                    aria-label='LinkedIn'
                    icon={<AiFillLinkedin />}
                />
            </Link>
        </Flex>
    )
}