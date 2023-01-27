import React from 'react';
import {
    Card,
    CardHeader,
    CardBody,
    Heading,
    Divider,
    Text,
    Flex,
    Image,
    Link,
    Stack,
    Box,
    Wrap,
    WrapItem
} from '@chakra-ui/react'
import { Icon } from '@chakra-ui/react'


export default function ProjectBox(projectInfo) {
    const {
        index,
        image,
        imageAlt,
        title,
        description,
        liveLink,
        skills
    } = projectInfo
    return (
        <Flex
            h='fit-content'
            w='98%'
            className='cardContainer'
        >  <Card
            key={index}
            direction={{ base: 'column', sm: 'row' }}
            variant='outline'
            m='0'
            p='0'

        >


                <Link
                    as='a'
                    href={liveLink}>
                    <Image
                        filter='grayscale(0)'
                        _hover={{ filter: 'grayscale(1)' }}
                        w='45vw'
                        src={image}
                        alt={imageAlt}
                    />
                </Link>
                <Stack
                    className='projectCard'
                    m='0'
                    p='0'
                    pl='10px'
                    boxSize='55vw'
                    h='fit-content'
                // This will fix the card vertical spacing issue^^
                >
                    <CardHeader mt='10px' p='0'>
                        <Heading size='sm' m='0' p='0'>{title}</Heading>
                    </CardHeader>
                    <Text m='0' p='0'>
                        {description}
                    </Text>
                    <Divider m='0' p='0' />
                    <Heading
                        m='0' p='0'
                    >Skils Used: </Heading>
                    <Wrap
                        justify='space-evenly'
                    >
                        {skills.map(({ badge, title }, index) => (
                            <Box
                                key={index}
                                className={index}
                                w='20%'
                                h='20%'
                                _hover={{ animation: '' }}
                            >
                                <Text
                                    fontSize='1.25rem'
                                >{title}</Text>
                                <Icon boxSize='2rem' as={badge} />
                            </Box>
                        ))}
                    </Wrap>

                </Stack>

            </Card></Flex>

    )
}