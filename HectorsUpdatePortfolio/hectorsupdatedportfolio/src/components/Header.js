import React from "react";
import { Center, Flex, Stack, Text, Heading, HStack } from "@chakra-ui/react";
import Navigation from '../components/Navigation'
export default function Header() {
    return (
        <Flex
            justify='space-between'
            padding={'0.5rem'}
            textalign="center"
            w="100%"        >

            <Text
                align="left"
                textColor="#D8E3E7"
                fontSize="5x1"
                fontWeight='extrabold'
            >
                Hector  De La Cruz Sandoval
            </Text>
            <HStack
                justify='space-between'
            >
                <Center>
                    <Stack>
                        <Heading as="h1" size="3xl" textColor="white">
                            Welcome to my portoflio site
                        </Heading>
                    </Stack>

                </Center>

            </HStack>
        </Flex>


    )
}