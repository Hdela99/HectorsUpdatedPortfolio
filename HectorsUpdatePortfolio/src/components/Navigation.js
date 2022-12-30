import React from "react";
import { Flex, Spacer, Tabs, Tab, TabList, Link } from "@chakra-ui/react";
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
                gap='2'
                w='75vw'
                overflow-x='hidden'
            >
                <Spacer />
                <Tabs variant='solid-rounded'>
                    <TabList>
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