import React from 'react';
import ProjectBox from './ProjectBox';
import tOF from '../Images/techOverflow.PNG'
import jate from '../Images/textEditor.png'
import { Stack, Flex, Center, Heading, HStack } from "@chakra-ui/react";
import Footer from '../components/Footer';



import { FaReact, FaNodeJs, } from 'react-icons/fa'
import { SiApollographql, SiMongodb, SiExpress, SiHeroku, SiJavascript, SiCss3, SiHtml5, SiChakraui, SiNodemon, SiNpm, SiWebpack, SiBabel, } from 'react-icons/si'


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
        },
        {
            title: 'JATE',
            description: 'I created a mini text editor. It highlights in similar style to a text editor like visual studio. This is a Progressive Web App because I wanted to tinker with new things. This web app can be downloaded and used without internet successfully.',
            imageAlt: 'Jate',
            image: jate,
            liveLink: 'https://obscure-refuge-11279.herokuapp.com/',
            skills: [
                {
                    badge: SiExpress,
                    title: 'ExpressJs'
                },
                {
                    badge: SiJavascript,
                    title: 'Javascript'
                },
                {
                    badge: SiWebpack,
                    title: 'WebPacks'
                },
                {
                    badge: SiNpm,
                    title: 'Npm'
                },
                {
                    badge: SiHtml5,
                    title: 'Html'
                },
                {
                    badge: SiCss3,
                    title: 'CSS'
                },
                {
                    badge: SiNodemon,
                    title: 'Nodemon'
                },
                {
                    badge: SiBabel,
                    title: 'Babel'
                }
            ]
        },
        {
            title: 'N/A',
            description: 'Temporary description',
            imageAlt: 'Javascript quiz',
            image: 'n/a',
            liveLink: 'https://google.com',
            skills: [
                {
                    badge: SiApollographql,
                    title: 'ApolloGraphQL'
                }
            ]
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