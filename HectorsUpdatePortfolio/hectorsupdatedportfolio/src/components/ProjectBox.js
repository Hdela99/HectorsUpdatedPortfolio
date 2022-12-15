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
    Link
} from '@chakra-ui/react'

export default function ProjectBox(projectInfo) {
    const {
        index,
        image,
        imageAlt,
        title,
        description,
        liveLink
    } = projectInfo
    return (
        <Card key={index} w={['100%', '50%', '30%']}>
            <CardHeader>
                <Heading size='sm'>{title}</Heading>
            </CardHeader>

            <Link
                to={liveLink}>
                <Image
                    size='sm'
                    src={image}
                    alt={imageAlt}
                    borderRadius='lg' />
            </Link>
            <Divider />
            <CardBody size='sm'>
                <Text>
                    {description}
                </Text>
            </CardBody>
        </Card>
    )
}