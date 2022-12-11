import React, { useState } from "react";
import { Stack, Flex, Center, Heading, HStack, Container } from "@chakra-ui/react";
import Resume from './pages/Resume';
import AboutMe from './pages/AboutMe';
import ContactMe from './pages/ContactMe';
import Projects from './pages/Projects';
import Navigation from "./Navigation";
import Home from './pages/Home'
import Header from './Header';
import Footer from '../components/Footer';

export default function PortfolioContainer() {
    const [currentPage, setCurrentPage] = useState('Home');

    const handlePageChange = (page) => {
        console.log(page);
        setCurrentPage(page);
    };

    const renderPage = () => {
        console.log(currentPage);
        console.log(typeof (currentPage))
        if (currentPage === 'Resume') {
            console.log(currentPage);
            return <Resume />
        }
        if (currentPage === 'AboutMe') {
            console.log(currentPage);
            return <AboutMe />
        }
        if (currentPage === 'ContactMe') {
            console.log(currentPage);
            return <ContactMe />
        }
        if (currentPage === 'Projects') {
            console.log(currentPage);

            return <Projects />
        }
        console.log(currentPage);
        return <Home />;

    };




    return (
        <>
            <Flex
                w="100%">
                <Stack
                    w="100%"
                    align="start"
                >
                    <Center>
                        <HStack
                            w='100%'
                            background='#132C33'
                        >
                            <Header />
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

