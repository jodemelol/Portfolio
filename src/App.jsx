import { Box } from "@chakra-ui/react";
import { useRef } from "react";
import { About } from "./components/About";
import { Footer } from "./components/Footer";
import { Name } from "./components/Name";
import { Navbar } from "./components/Navbar";
import { Projects } from "./components/Projects";
import image from "./images/sky.jpg";

export function App() {
  const aboutSec = useRef(null);
  const projectsSec = useRef(null);
  const contactSec = useRef(null);
  const scrollDown = (ref) => {
    window.scrollTo({
      top: ref.current.offsetTop,
      left: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <>
      <Box
        bgImage={image}
        bgPosition="center"
        bgRepeat="no-repeat"
        bgSize="cover"
        w="full"
        h="650px"
        
      >
        <Navbar
          scrollDown={scrollDown}
          aboutSec={aboutSec}
          projectsSec={projectsSec}
          contactSec={contactSec}
        />
        <Name/>
      </Box>
      <Box bg="second" w="full" h="auto">
        <About aboutSec={aboutSec} />
        <Projects projectsSec={projectsSec} />
        <Footer contactSec={contactSec} />
      </Box>
    </>
  );
}
