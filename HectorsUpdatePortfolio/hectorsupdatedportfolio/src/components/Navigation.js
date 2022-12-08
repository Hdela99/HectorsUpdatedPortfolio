import React from "react";
import { Flex, Spacer, Tabs, Tab, TabList, Link } from "@chakra-ui/react";

function Navigation({ currentPage, handlePageChange }) {

    return (
        <>

            <Flex
                minWidth='max-content'
                alignItems="center"
                gap='2'
                w={[300, 400, 500, 600, 700, 800, 1000, 1100]}
            >
                <Spacer />
                <Tabs variant='solid-rounded'>
                    <TabList>
                        <Tab
                            as='a'
                            href='/'
                            onClick={() => handlePageChange('Home')}
                            _selected={currentPage === 'Home' ? { bg: 'white', color: 'black', variant: 'solid-rounded' } : { bg: 'gray', color: 'white', variant: 'solid-rounded' }}
                        >
                            Home</Tab>
                        <Tab
                            as='a'
                            href='/AboutMe'
                            onClick={() => handlePageChange('AboutMe')}
                            _selected={currentPage === 'AboutMe' ? { bg: 'white', color: 'black', variant: 'solid-rounded' } : { bg: 'gray', color: 'white', variant: 'solid-rounded' }}
                        >
                            About Me</Tab>
                        <Tab
                            as='a'
                            href='/Projects'
                            onClick={() => handlePageChange('Projects')}
                            _selected={currentPage === 'Projects' ? { bg: 'white', color: 'black', variant: 'solid-rounded' } : { bg: 'gray', color: 'white', variant: 'solid-rounded' }}
                        >Projects</Tab>
                        <Tab
                            as='a'
                            href='/ContactMe'
                            onClick={() => handlePageChange('ContactMe')}
                            _selected={currentPage === 'ContactMe' ? { bg: 'white', color: 'black', variant: 'solid-rounded' } : { bg: 'gray', color: 'white', variant: 'solid-rounded' }}>Contact Me</Tab>
                        <Tab
                            as='a'
                            href='/Resume'
                            onClick={() => handlePageChange('Resume')}
                            _selected={currentPage === 'Resume' ? { bg: 'white', color: 'black', variant: 'solid-rounded' } : { bg: 'gray', color: 'white', variant: 'solid-rounded' }}>Resume</Tab>
                    </TabList>
                </Tabs>

            </Flex>

        </>
    )
}
export default Navigation;