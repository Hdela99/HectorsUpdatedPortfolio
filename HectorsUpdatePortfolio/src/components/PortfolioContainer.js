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
            return <Resume />
        }
        if (currentPage === 'AboutMe') {
            return <AboutMe />
        }
        if (currentPage === 'ContactMe') {
            return <ContactMe />
        }
        if (currentPage === 'Projects') {

            return <ProjectsPage />
        }
        return <Home />;

    };




    return (
        <>
            <Flex
                w="100%"
                h='100%'>
                <Stack
                    w="100%"
                    align="start"
                    h="100%"
                >
                    <Center>
                        <HStack
                            w='100%'
                            background='#132C33'
                        >
                            <Header />
                            <Spacer />
                            <Navigation handlePageChange={handlePageChange} currentPage={currentPage} />

                        </HStack>
                    </Center>
                    {renderPage()}
                    <Footer />
                </Stack>
            </Flex>
        </>
    );
};

