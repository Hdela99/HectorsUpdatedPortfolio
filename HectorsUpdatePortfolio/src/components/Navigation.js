import React from "react";
import { Flex, Spacer, Tabs, Tab, TabList, Link, Text, Heading } from "@chakra-ui/react";
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects'
import Home from './pages/Home';

function Navigation({ currentPage, handlePageChange }) {

    return (
        <>

            <Flex
                minWidth='max-content'
                alignItems="center"
                justify='space-between'
                h='100%'
                gap='2'
                w='100vw'
                overflow-x='hidden'
            >
                <Heading
                    align="left"
                    textColor="#D8E3E7"
                    fontSize={['0.5rem', '0.75rem', '1rem', '1.5rem', '1.75rem']}
                    fontWeight='extrabold'
                >
                    Hector DLC
                </Heading>


                <Tabs variant='solid-rounded'>
                    <TabList

                    >
                        <Tab
                            onClick={() => handlePageChange('Home')}
                            color='white'
                            _selected={currentPage === 'Home' ? { bg: 'white', color: 'black', variant: 'solid-rounded' } : { bg: 'gray', color: 'white', variant: 'solid-rounded' }}
                        >
                            <Link to='Home' elemet={<Home />}>Home</Link>
                        </Tab>
                        <Tab
                            onClick={() => handlePageChange('AboutMe')}
                            color='white'
                            _selected={currentPage === 'AboutMe' ? { bg: 'white', color: 'black', variant: 'solid-rounded' } : { bg: 'gray', color: 'white', variant: 'solid-rounded' }}
                        >
                            <Link to='AboutMe' elemet={<AboutMe />}>About Me</Link>
                        </Tab>
                        <Tab
                            onClick={() => handlePageChange('Projects')}
                            color='white'
                            _selected={currentPage === 'Projects' ? { bg: 'white', color: 'black', variant: 'solid-rounded' } : { bg: 'gray', color: 'white', variant: 'solid-rounded' }}
                        >
                            <Link to='Projects' elemet={<Projects />}>Projects</Link>

                        </Tab>
                        <Tab
                            onClick={() => handlePageChange('ContactMe')}
                            color='white'
                            _selected={currentPage === 'ContactMe' ? { bg: 'white', color: 'black', variant: 'solid-rounded' } : { bg: 'gray', color: 'white', variant: 'solid-rounded' }}>
                            <Link to='ContactMe' elemet={<ContactMe />}>ContactMe</Link>
                        </Tab>
                        <Tab
                            onClick={() => handlePageChange('Resume')}
                            color='white'
                            _selected={currentPage === 'Resume' ? { bg: 'white', color: 'black', variant: 'solid-rounded' } : { bg: 'gray', color: 'white', variant: 'solid-rounded' }}>
                            <Link to='Resume' elemet={<Resume />}>Resume</Link>
                        </Tab>
                    </TabList>
                </Tabs>

            </Flex>

        </>
    )
}
export default Navigation;