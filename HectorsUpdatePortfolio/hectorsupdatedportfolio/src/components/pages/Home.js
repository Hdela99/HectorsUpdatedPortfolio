import React from 'react';
import { Image, Center, Flex, Container, Box, Text, Heading, Stack, Spacer } from '@chakra-ui/react'
import selfie from '../../Images/Selfie.PNG';

export default function Home() {
    return (
        <Flex
            minWidth='100%'
            alignItems='center'>
            <Spacer />
            <Stack>
                <Center >
                    <Heading> Hi, I am Hector De La Cruz.</Heading>
                </Center>
                <Center
                    px='3rem'
                    py='1rem'
                >
                    <Text fontSize='1.5rem' fontStyle='center'> I am a full stack developer who is passionate in building functional applications with amazing user experience and refactoring older code because there is always something new to learn. </Text>
                </Center>
                <Center>
                    <Box boxSize='sm' >
                        <Image
                            borderRadius='80'
                            shadow='xl'
                            src={selfie} alt='Hector De La Cruz' />
                    </Box>
                </Center>

            </Stack>
            <Spacer />
        </Flex>
    );
};