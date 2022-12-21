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
        <Card
            key={index}
            direction={{ base: 'column', sm: 'row' }}
            overfolow='hidden'
            variant='outline'>


            <Link
                as='a'
                href={liveLink}>
                <Image
                    size='sm'
                    src={image}
                    alt={imageAlt}
                    borderRadius='lg' />
            </Link>
            <Stack
                justify='start'>
                <CardHeader>
                    <Heading size='sm'>{title}</Heading>
                </CardHeader>     <CardBody size='sm'>
                    <Text>
                        {description}
                    </Text>
                    <Divider />


                </CardBody>
                <Heading
                    justify='start'
                >Skils Used: </Heading>
                <Wrap
                    justify='space-evenly'
                >
                    {skills.map(({ badge, title }, index) => (
                        <Box
                            key={index}
                            className={index}
                            size='sm'
                        >
                            <Text>{title}</Text>
                            <Icon as={badge} />
                        </Box>
                    ))}
                </Wrap>

            </Stack>

        </Card>
    )
}