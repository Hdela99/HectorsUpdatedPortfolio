import React from 'react';
import ProjectBox from './ProjectBox';
import tOF from '../Images/techOverflow.PNG'
import { Stack, Flex, Center, Heading, HStack } from "@chakra-ui/react";

import { FaReact, FaNodeJs, } from 'react-icons/fa'
import { SiApollographql, SiMongodb, SiExpress, SiHeroku, SiJavascript, SiCss3, SiHtml5, SiChakraui } from 'react-icons/si'


export default function Projects() {
    const projectArray = [
        {
            title: 'TechOverFlow',
            description: 'This was a team project. I cooperated with 3 other web developers to create this fullstack MERN application. The origin of this project ',
            imageAlt: 'TechOverFlow',
            image: tOF,
            liveLink: 'https://techoverflow1.herokuapp.com/',
            skills: [
                {
                    badge: SiApollographql,
                    title: 'Apollo'
                },
                {
                    badge: SiMongodb,
                    title: 'MongoDb'
                },
                {
                    badge: SiExpress,
                    title: 'ExpresJs'
                },
                {
                    badge: SiHeroku,
                    title: 'Heroku'
                },
                {
                    badge: SiJavascript,
                    title: 'Javascript'
                },
                {
                    badge: SiCss3,
                    title: 'CSS'
                },
                {
                    badge: SiHtml5,
                    title: 'HTML'
                },
                {
                    badge: SiChakraui,
                    title: 'ChakraUI'
                },
                {
                    badge: FaReact,
                    title: 'ReactJs'
                },
                {
                    badge: FaNodeJs,
                    title: 'NodeJs'
                }]
        }
    ]
    return (
        <>
            <Flex pt='5vh'>
                <Stack textAlign='center'>
                    {projectArray.map(({ title, description, imageAlt, image, liveLink, skills }, index) => (
                        <ProjectBox
                            key={index}
                            title={title}
                            description={description}
                            imageAlt={imageAlt}
                            image={image}
                            liveLink={liveLink}
                            skills={skills}
                        />
                    ))}
                </Stack>
            </Flex>
        </>

    )

}