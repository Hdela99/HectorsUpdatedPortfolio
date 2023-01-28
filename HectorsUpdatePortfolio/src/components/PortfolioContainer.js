import React, { useState } from "react";
import { Stack, Flex, Center, Heading, HStack, Container, Spacer } from "@chakra-ui/react";
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import ProjectsPage from './pages/Projects';
import Navigation from "./Navigation";
import Home from './pages/Home'
import Header from './Header';
import Footer from '../components/Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const handlePageChange = (page) => {
        setCurrentPage(page);
    };

    const renderPage = () => {
        if (currentPage === 'Resume') {
            return (
                <Stack>
                    <Resume />
                </Stack>
            )
        }
        if (currentPage === 'AboutMe') {
            return (
                <Stack>
                    <AboutMe />
                </Stack>
            )
        }
        if (currentPage === 'ContactMe') {
            return (
                <Stack w='100%'>
                    <ContactMe />
                </Stack>
            )
        }
        if (currentPage === 'Projects') {

            return (
                <Stack>
                    <ProjectsPage />
                </Stack>
            )
        }
        return (
            <Stack>
                <Home />
            </Stack>
        )

    };




    return (
        <>
            <Flex
                className='portfolioContainer'
                w="100%"
                h='100%'>
                <Stack
                    className='portfolioContainerStack'
                    w="100%"
                    align="start"
                    h="100%"
                >

                    <HStack
                        w='100%'
                        h='15%'
                        background='#132C33'
                    >
                        {/* <Header /> */}
                        <Navigation handlePageChange={handlePageChange} currentPage={currentPage} />

                    </HStack>
                    {renderPage()}
                </Stack>
            </Flex>
            <Footer />
        </>
    );
};

