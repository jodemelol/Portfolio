import {
  Box,
  Button,
  FormControl,
  Heading,
  HStack,
  IconButton,
  Input,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "@formspree/react";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import image2 from "../images/sky1.jpg";



export function Footer({ contactSec }) {
  const [submit, setSubmit] = useForm("meqnlyer"); 
  
  return (
    <Box
      bgImage={image2}
      bgPosition="center"
      bgRepeat="no-repeat"
      bgSize="cover"
      w="full"
      h="auto"
      ref={contactSec}
    >
      <Box align="center" mx={["100px", "300px", "300px", "500px"]}>
        <Heading
          textTransform="uppercase"
          fontSize="2xl"
          textAlign="center"
          py={16}
        >
          Contacto
        </Heading>
        <form onSubmit={setSubmit}>
          <FormControl isRequired>
            <Input
              placeholder="Name"
              id="name"
              type="text"
              name="name"
              variant="flushed"
              autoComplete="off"
              
            />
          </FormControl>
          <FormControl isRequired>
            <Input
              placeholder="Email"
              id="email"
              type="email"
              name="email"
              variant="flushed"
              autoComplete="off"
            />
          </FormControl>
          <FormControl isRequired>
            <Textarea
              placeholder="Message..."
              id="message"
              name="message"
              variant="flushed"
              autoComplete="off"
            />
          </FormControl>

          <Box align="start" py={8}>
            <Button type="submit" value="Send" colorScheme="teal">
              Submit
            </Button>
          </Box>
        </form>
      </Box>

      <HStack justifyContent="center" spacing={8} py={16}>
        <IconButton
          colorScheme="blue"
          aria-label="linkedin"
          icon={<FaLinkedin />}
          onClick={() =>
            window.open(
              "https://www.linkedin.com/in/jhon-alexander-chivata-parra-551454192/"
            )
          }
        />
        <IconButton
          colorScheme="blackAlpha"
          aria-label="mail"
          size="lg"
          icon={<FaGithub />}
          onClick={() => window.open("https://github.com/jodemelol")}
        />

        <IconButton
          bgGradient="linear(to-l, #7928CA, #FF0080)"
          _hover={{
            bgGradient: "linear(to-l, #7928CA, #FF0070)",
            opacity: 0.9,
          }}
          aria-label="telegram"
          icon={<FaInstagram />}
          onClick={() =>
            window.open("https://www.instagram.com/jalexchivata/?hl=es-la")
          }
        />
      </HStack>
    </Box>
  );
}
