import {
  Box,
  Flex,
  IconButton,
  Link,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
} from "@chakra-ui/react";
import { GiHamburgerMenu } from "react-icons/gi";

export function Navbar({ scrollDown, aboutSec, projectsSec, contactSec }) {
  
  return (
    <>
      <Flex display={["none", "none", "none", "flex"]}>
        <Box bg="blackAlpha.600" position="fixed" w="full" zIndex="99999">
          <Stack direction="row" justifyContent="center">
            <Stack direction="row" spacing={24} textTransform="uppercase" p={2}>
              <Link
                _hover={{
                  textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff",
                }}
                onClick={() => scrollDown(aboutSec)}
                onSubmit={(e) => e.preventDefault()}
              >
                Sobre mí
              </Link>
              <Link
                _hover={{
                  textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff",
                }}
                onClick={() => scrollDown(projectsSec)}
                onSubmit={(e) => e.preventDefault()}
              >
                Proyectos
              </Link>
              <Link
                _hover={{
                  textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff",
                }}
                onClick={() => scrollDown(contactSec)}
                onSubmit={(e) => e.preventDefault()}
              >
                Contacto
              </Link>
            </Stack>
          </Stack>
        </Box>
      </Flex>
      <Flex display={["flex", "flex", "flex", "none"]}>
        <Box bg="blackAlpha.600" position="fixed" w="full" align="right">
          <Menu>
            <MenuButton as={IconButton} bg="none" pl={3}>
              <GiHamburgerMenu />
            </MenuButton>
            <MenuList>
              <MenuItem color="black" onClick={() => scrollDown(aboutSec)} >
                <Link
                  _hover={{
                    textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff",
                  }}
                  
                  onSubmit={(e) => e.preventDefault()}
                >
                  About
                </Link>
              </MenuItem>
              <MenuItem color="black" onClick={() => scrollDown(projectsSec)}>
                <Link
                  _hover={{
                    textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff",
                  }}
                  
                  onSubmit={(e) => e.preventDefault()}
                >
                  Projects
                </Link>
              </MenuItem>
              <MenuItem color="black" onClick={() => scrollDown(contactSec)} >
                <Link
                  _hover={{
                    textShadow: "0 0 10px #fff, 0 0 20px #fff, 0 0 40px #fff",
                  }}
                  
                  onSubmit={(e) => e.preventDefault()}
                >
                  Contact
                </Link>
              </MenuItem>
            </MenuList>
          </Menu>
        </Box>
      </Flex>
    </>
  );
}
