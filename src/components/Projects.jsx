import { Container, Heading, SimpleGrid } from "@chakra-ui/react";
import projects from "../projects.json";
import { Project } from "./Project";

export function Projects({ projectsSec }) {
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
        <Project projects={projects} key={projects.id} />
      </SimpleGrid>
    </Container>
  );
}
