import React from 'react';
import { Flex, Stack, Heading, Text, HStack, Divider, Box } from "@chakra-ui/react";

export default function AboutMe() {
    return (
        <Flex
            alignItems='center'
            w='100%'
            h='80vh'
            textAlign='center'
        >
            <Stack
                className='AboutMeStack'
                textAlign='center'
                h='100%'
                w='100%'

            >
                <Heading as='h1' size='2xl' mt='2rem' mb='3rem'>About Me</Heading>
                <Divider orientation='horizontal' colorScheme='alphaWhite' size='5rem' variant='solid' />
                <HStack
                    w='100%'
                >
                    <Heading as='h3' size='md' w='100%'>Who am I?</Heading>
                    <Divider orientation='vertical' />
                    <Text fontSize='1rem' > I am an upcoming full-stack developer that is passionate in learning as much as possible whether it be new frameworks, programming/markup languages, unit testing, or industry standard practices. While my current stack consists of the generic MERN stack I aspire to become more flexible and am always learning new things to make my coding more efficient while also being accessible to improve SEO performance. A developer is only as good as their ability to learn and adapt and I am proud to say that I consider myself an expert at adapting to work environments and requirements. </Text>
                </HStack>
                <Divider orientation='horizontal' />
                <HStack
                    w='100%'>
                    <Heading as='h3' size='md' w='28rem'>My educational background</Heading>
                    <Divider orientation='vertical' />
                    <Text fontSize='1rem'>I graduated from the University of California: San Diego in June of 2021 with a Bachelors of Science in Microbiology. Then going on to attend the UCSD coding bootcamp to further my skills in web development and programming to help automate tasks as a lab technician.</Text>
                </HStack>
                <HStack
                    w='100%'
                >
                    <Heading as='h3' size='md' w='50rem'>What are my goals</Heading>
                    <Divider orientation='vertical' />
                    <Text> Currently(early 2023) I understand I am lacking a bit on experience. I would be happy with any entry level role as a web developer where my skillset can be of help and would also help me learn new things. I would like to be able to stay at a company for a minimum of 3 years to truly master the craft but that means it would need to be an environment where improvement is a part of the job. Eventually I would hope to work in either database management or as a part of the SaaS services. </Text>
                </HStack>
                <Divider orientation='horizontal' />
            </Stack>






        </Flex >
    );
};