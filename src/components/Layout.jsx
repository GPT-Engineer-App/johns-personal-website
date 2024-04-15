import React from "react";
import { Box, Heading, Text, Stack, Flex, Link } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <Box>
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          John Marshall
        </Heading>
        <Stack direction="row" spacing={6}>
          <Link href="/">Home</Link>
          <Link href="/#about">About</Link>
          <Link href="/#projects">Projects</Link>
          <Link href="/#contact">Contact</Link>
        </Stack>
      </Flex>

      {children}

      <Box as="footer" padding="2rem" bg="teal.500" color="white" textAlign="center">
        <Text>© {new Date().getFullYear()} John Marshall. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Layout;
