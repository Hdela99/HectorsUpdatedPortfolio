import React from "react";
import { Center, Flex, Stack, Text, Heading, HStack } from "@chakra-ui/react";
export default function Header() {
    return (
        <Flex
            justify='space-between'
            padding={'0.5rem'}
            textalign="center"
            w={['10%', '25%', '45%']}
            className='HeaderHolder'      >

            <Text
                align="left"
                textColor="#D8E3E7"
                fontSize={['0.5rem', '0.75rem', '1rem', '1.5rem', '1.75rem']}
                fontWeight='extrabold'
            >
                Hector  De La Cruz Sandoval
            </Text>

            <Heading as="h1" fontSize={['0.75rem', '1rem', '1.5rem', '1.75rem']} textColor="white">
                Welcome to my portoflio site
            </Heading>


        </Flex>


    )
}