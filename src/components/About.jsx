import {
  Box,
  Heading,
  VStack,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import image1 from "../images/html5.svg";
import image2 from "../images/css.svg";
import image3 from "../images/js.svg";
import image4 from "../images/react.svg";
import image5 from "../images/chakra.svg";
export function About({ aboutSec }) {
  return (
    <VStack justifyContent="center" ref={aboutSec}>
      <Heading
        fontSize="2xl"
        textTransform="uppercase"
        textAlign="center"
        pt={20}
      >
        Sobre mí
      </Heading>
      <Box maxW={{ base: "sm", md: "lg", xl: "5xl" }}>
        <Text py={8} textAlign="justify" lineHeight={8} fontSize={20}>
          Soy Jhon Chivata ingeniero electronico actualmente estudiando
          desarrollo frontend de manera autodidacta, trabajando con html, css,
          javascript, react y chakra ui. Busco una empresa en donde pueda
          desempeñar mis conocimientos como frontend y adquirir nuevas
          habilidades junto a un equipo de trabajo.
        </Text>
        <Heading
          fontSize="2xl"
          textTransform="uppercase"
          textAlign="center"
          py={10}
        >
          Skills
        </Heading>
        <SimpleGrid
          pb={24}
          columns={{ base: 3, md: 5 }}
          spacing={4}
          justifyItems="center"
        >
          <Box w={24} h={28} bg="gray.700" p={4}>
            <Image src={image1} alt="html5" />
            <Text textAlign="center" fontSize={12} my={2}>
              Html5
            </Text>
          </Box>
          <Box w={24} h={28} bg="gray.700" p={4}>
            <Image src={image2} alt="css" />
            <Text textAlign="center" fontSize={12} my={2}>
              Css
            </Text>
          </Box>
          <Box w={24} h={28} bg="gray.700" p={4}>
            <Image src={image3} alt="" />
            <Text textAlign="center" fontSize={12} my={2}>
              Javascript
            </Text>
          </Box>
          <Box w={24} h={28} bg="gray.700" p={4}>
            <Image src={image4} alt="" />
            <Text textAlign="center" fontSize={12} my={2}>
              React
            </Text>
          </Box>
          <Box w={24} h={28} bg="gray.700" p={4}>
            <Image src={image5} alt="chakra" />
            <Text textAlign="center" fontSize={12} my={2}>
              Chakra ui
            </Text>
          </Box>
        </SimpleGrid>
      </Box>
    </VStack>
  );
}
