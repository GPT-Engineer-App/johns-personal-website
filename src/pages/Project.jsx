import React from "react";
import { Box, Heading, Text, Image, Link, Icon } from "@chakra-ui/react";
import { FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <Box padding="2rem">
      <Heading as="h1" size="2xl" mb={4}>
        Project Title
      </Heading>
      <Image src="https://via.placeholder.com/1200x600" alt="Project Image" mb={8} />
      <Text fontSize="xl" mb={4}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus tempus dui nec euismod commodo. Sed auctor libero vel urna bibendum, vel bibendum sapien malesuada. Nulla facilisi. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl. Sed euismod, nulla sit amet aliquam lacinia, nisl nisl aliquam nisl, nec aliquam nisl nisl sit amet nisl.
      </Text>
      <Link href="https://example.com" isExternal>
        <Icon as={FaExternalLinkAlt} mr={2} />
        View Project
      </Link>
    </Box>
  );
};

export default Project;
