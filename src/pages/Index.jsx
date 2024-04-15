import React from "react";
import { Box, Heading, Text, Image, Stack, Flex, Link, Icon } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Box>
      <Flex as="header" align="center" justify="space-between" wrap="wrap" padding="1.5rem" bg="teal.500" color="white">
        <Heading as="h1" size="lg" letterSpacing={"-.1rem"}>
          John Marshall
        </Heading>
        <Stack direction="row" spacing={6}>
          <Link href="#about">About</Link>
          <Link href="#projects">Projects</Link>
          <Link href="#contact">Contact</Link>
        </Stack>
      </Flex>

      <Box id="about" padding="2rem">
        <Heading as="h2" size="xl" mb={4}>
          About Me
        </Heading>
        <Flex>
          <Image src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBoZWFkc2hvdHxlbnwwfHx8fDE3MTMxNjkwODd8MA&ixlib=rb-4.0.3&q=80&w=1080" alt="John Marshall" mr={8} boxSize="200px" objectFit="cover" borderRadius="full" />
          <Text fontSize="xl">Hi, I'm John Marshall, a passionate software engineer with 5+ years of experience in web development. I specialize in building scalable and performant applications using modern technologies.</Text>
        </Flex>
      </Box>

      <Box id="projects" padding="2rem" bg="gray.100">
        <Heading as="h2" size="xl" mb={4}>
          Projects
        </Heading>
        <Stack spacing={8}>
          <Link href="/project">
            <Box>
              <Heading as="h3" size="lg" mb={2}>
                Project 1
              </Heading>
              <Text fontSize="xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus dui nec euismod commodo.</Text>
            </Box>
          </Link>
          <Link href="/project">
            <Box>
              <Heading as="h3" size="lg" mb={2}>
                Project 2
              </Heading>
              <Text fontSize="xl">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus dui nec euismod commodo.</Text>
            </Box>
          </Link>
          </Stack>
      </Box>

      <Box id="contact" padding="2rem">
        <Heading as="h2" size="xl" mb={4}>
          Get In Touch
        </Heading>
        <Stack direction="row" spacing={8}>
          <Link href="https://github.com/johnmarshall" isExternal>
            <Icon as={FaGithub} w={8} h={8} />
          </Link>
          <Link href="https://linkedin.com/in/johnmarshall" isExternal>
            <Icon as={FaLinkedin} w={8} h={8} />
          </Link>
          <Link href="mailto:john@marshall.com">
            <Icon as={FaEnvelope} w={8} h={8} />
          </Link>
        </Stack>
      </Box>

      <Box as="footer" padding="2rem" bg="teal.500" color="white" textAlign="center">
        <Text>© {new Date().getFullYear()} John Marshall. All rights reserved.</Text>
      </Box>
    </Box>
  );
};

export default Index;
