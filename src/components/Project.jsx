import { Badge, Box, Button, HStack, Stack, Text } from "@chakra-ui/react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import { motion } from "framer-motion";

export function Project({ projects }) {
  const MotionButton = motion(Button);

  return (
    <>
      {projects.map((project) => (
        <Box
          bgImage="linear-gradient(163deg, #00ff75 0%, #3700ff 100%)"
          w={{ base: "370px", md: "260px", xl: "320px" }}
          h="320px"
          borderRadius="10px"
          _hover={{ boxShadow: "0px 0px 30px 1px rgba(0, 255, 117, 0.30)" }}
          transition="all .3s"
        >
          <Box
            bg="gray.700"
            w={{ base: "370px", md: "260px", xl: "320px" }}
            h="320px"
            borderRadius="10px"
            _hover={{
              transform: "scale(0.98)",
              bordeRadius: "20px",
            }}
            transition="all .2s"
          >
            <Box
              bgImage={project.img}
              w="full"
              h="320px"
              bgSize="cover"
              borderRadius="10px"
            >
              <Box
                w="full"
                h="320px"
                _hover={{ bgColor: "rgba(34,32,79,.55)" }}
              >
                <Box
                  p={5}
                  opacity="0"
                  h="320px"
                  _hover={{ opacity: 1, zIndex: 999 }}
                  transition="all .3s"
                >
                  <Text
                    as="h2"
                    my={2}
                    fontWeight="semibold"
                    fontSize="xl"
                    textAlign="center"
                    textDecorationLine="underline"
                  >
                    {project.title}
                  </Text>

                  <Text
                    as="h2"
                    my={2}
                    fontWeight="semibold"
                    fontSize="xl"
                    textAlign="center"
                    mt={10}
                  >
                    {project.resume}
                  </Text>

                  <HStack justifyContent="center" mt={10}>
                    <MotionButton
                      whileTap={{ scale: 0.9 }}
                      onClick={() => window.open(project.github)}
                      colorScheme="teal"
                      outline="none"
                      aria-label="github"
                      leftIcon={<FaGithub />}
                    >
                      Github
                    </MotionButton>
                    <MotionButton
                      whileTap={{ scale: 0.7 }}
                      onClick={() => window.open(project.link)}
                      colorScheme="teal"
                      aria-label="external"
                      leftIcon={<FaExternalLinkAlt />}
                    >
                      Web
                    </MotionButton>
                  </HStack>
                  <Stack direction="row" justify="center" py={8}>
                    {project.technologies.map((tech, index) => (
                      <Badge key={index} variant="solid" colorScheme="green">
                        {tech}
                      </Badge>
                    ))}
                  </Stack>
                </Box>
              </Box>
            </Box>
          </Box>
        </Box>
      ))}
    </>
  );
}
