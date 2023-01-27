import React from "react";
import { Center, Flex, Stack, Text, Heading, HStack } from "@chakra-ui/react";
export default function Header() {
    return (
        <Flex
            justify='space-between'
            padding={'0.5rem'}
            w='100%'
            className='HeaderHolder'      >

            <Text
                align="left"
                textColor="#D8E3E7"
                fontSize={['0.5rem', '0.75rem', '1rem', '1.5rem', '1.75rem']}
                fontWeight='extrabold'
            >
                Hector DLC
            </Text>

            <Heading as="h4" textColor="white" w='fit-content' fontSize={['auto', '.5rem', '.75rem', '1rem', '1.25rem', '1.5rem']} >
                Welcome to my portoflio site
            </Heading>


        </Flex>


    )
}