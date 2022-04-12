import {
  Box,
  Container,
  Heading,
  HStack,
  Image,
  SimpleGrid,
  Text,
  Badge,
  Button,
} from "@chakra-ui/react";
import image from "../images/sky.jpg";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export function Projects({ projectsSec }) {
  const MotionButton = motion(Button);

  return (
    <Container maxW={{ base: "sm", md: "lg", xl: "5xl" }} py={8}>
      <Heading
        textTransform="uppercase"
        fontSize="2xl"
        textAlign="center"
        py={16}
        ref={projectsSec}
      >
        Proyectos
      </Heading>

      <SimpleGrid
        columns={{ base: 1, md: 2, xl: 3 }}
        justifyItems="center"
        spacing={16}
      >
        <Box
          bg="gray.700"
          w={{ base: "370px", md: "260px", xl: "320px" }}
          h="320px"
          borderRadius="10px"
        >
          <Image
            src={image}
            alt="a"
            w="full"
            h="180px"
            borderTopRadius="10px"
          />
          <Box p={5}>
            <HStack spacing={2}>
              <Badge variant="outline" colorScheme="cyan" rounded="full">
                javascript
              </Badge>
              <Badge variant="outline" colorScheme="cyan" rounded="full">
                React
              </Badge>
              <Badge variant="outline" colorScheme="cyan" rounded="full">
                Chakra ui
              </Badge>
            </HStack>

            <Text as="h2" my={2} fontWeight="semibold" fontSize="xl">
              Holix
            </Text>
            <HStack justifyContent="center">
              <MotionButton
                whileTap={{ scale: 0.9 }}
                colorScheme="teal"
                outline="none"
                aria-label="github"
                leftIcon={<FaGithub />}
              >
                Github
              </MotionButton>
              <MotionButton
                whileTap={{ scale: 0.7 }}
                onClick={() =>
                  window.open(
                    "https://react-icons.github.io/react-icons/search?q=external"
                  )
                }
                colorScheme="teal"
                aria-label="external"
                leftIcon={<FaExternalLinkAlt />}
              >
                Web
              </MotionButton>
            </HStack>
          </Box>
        </Box>
        <Box
          bg="gray.700"
          w={{ base: "370px", md: "260px", xl: "320px" }}
          h="320px"
          borderRadius="10px"
        >
          <Image
            src={image}
            alt="a"
            w="full"
            h="180px"
            borderTopRadius="10px"
          />
          <Box p={5}>
            <HStack spacing={2}>
              <Badge variant="outline" colorScheme="cyan" rounded="full">
                javascript
              </Badge>
              <Badge variant="outline" colorScheme="cyan" rounded="full">
                React
              </Badge>
              <Badge variant="outline" colorScheme="cyan" rounded="full">
                Chakra ui
              </Badge>
            </HStack>

            <Text as="h2" my={2} fontWeight="semibold" fontSize="xl">
              Holix
            </Text>
            <HStack justifyContent="center">
              <MotionButton
                whileTap={{ scale: 0.7 }}
                colorScheme="teal"
                aria-label="github"
                leftIcon={<FaGithub />}
              >
                Github
              </MotionButton>
              <MotionButton
                whileTap={{ scale: 0.7 }}
                onClick={() =>
                  window.open(
                    "https://react-icons.github.io/react-icons/search?q=external"
                  )
                }
                colorScheme="teal"
                aria-label="external"
                leftIcon={<FaExternalLinkAlt />}
              >
                Web
              </MotionButton>
            </HStack>
          </Box>
        </Box>
        <Box
          bg="gray.700"
          w={{ base: "370px", md: "260px", xl: "320px" }}
          h="320px"
          borderRadius="10px"
        >
          <Image
            src={image}
            alt="a"
            w="full"
            h="180px"
            borderTopRadius="10px"
          />
          <Box p={5}>
            <HStack spacing={2}>
              <Badge variant="outline" colorScheme="cyan" rounded="full">
                javascript
              </Badge>
              <Badge variant="outline" colorScheme="cyan" rounded="full">
                React
              </Badge>
              <Badge variant="outline" colorScheme="cyan" rounded="full">
                Chakra ui
              </Badge>
            </HStack>

            <Text as="h2" my={2} fontWeight="semibold" fontSize="xl">
              Holix
            </Text>
            <HStack justifyContent="center">
              <MotionButton
                whileTap={{ scale: 0.7 }}
                colorScheme="teal"
                aria-label="github"
                leftIcon={<FaGithub />}
              >
                Github
              </MotionButton>
              <MotionButton
                whileTap={{ scale: 0.7 }}
                onClick={() =>
                  window.open(
                    "https://react-icons.github.io/react-icons/search?q=external"
                  )
                }
                colorScheme="teal"
                aria-label="external"
                leftIcon={<FaExternalLinkAlt />}
              >
                Web
              </MotionButton>
            </HStack>
          </Box>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
