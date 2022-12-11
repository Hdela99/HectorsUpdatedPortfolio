import React from 'react';
import { Image, Center, Flex, Card, CardBody, Text, Heading, Stack, Spacer } from '@chakra-ui/react'
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
                    <Text align='center' fontSize='1.5rem' fontStyle='center'> I am a full stack developer who is passionate in building functional applications with amazing user experience and refactoring older code because there is always something new to learn. </Text>
                </Center>
                <Center>
                    <Card border='none' borderRadius='50' >
                        <CardBody borderRadius="50" boxSize='sm' bg='slateGray' >
                            <Image
                                borderRadius='80'
                                shadow='xl'
                                src={selfie} alt='Hector De La Cruz' />
                            <Text align='center' fontSize='1.5rem'>That's me</Text>
                        </CardBody>
                    </Card>
                </Center>

            </Stack>
            <Spacer />
        </Flex>
    );
};