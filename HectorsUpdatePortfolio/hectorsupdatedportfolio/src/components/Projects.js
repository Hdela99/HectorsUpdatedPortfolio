import React from 'react';
import ProjectBox from './ProjectBox';
import tOF from '../Images/techOverflow.PNG'
import { Stack, Flex, Center, Heading, HStack } from "@chakra-ui/react";


export default function Projects() {
    const projectArray = [
        {
            title: 'TechOverFlow',
            description: 'This was a team project. I cooperated with 3 other web developers to create this fullstack MERN application. The origin of this project ',
            imageAlt: 'TechOverFlow',
            image: tOF,
            liveLink: 'https://techoverflow1.herokuapp.com/'
        }
    ]
    return (
        <>
            <Flex pt='5vh'>
                <Stack textAlign='center'>
                    {projectArray.map(({ title, description, imageAlt, image, liveLink }, index) => (
                        <ProjectBox
                            key={index}
                            title={title}
                            description={description}
                            imageAlt={imageAlt}
                            image={image}
                            liveLink={liveLink} />
                    ))}
                </Stack>
            </Flex>
        </>

    )

}