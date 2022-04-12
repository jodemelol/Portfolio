import { Heading, Text, VStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

export function Name() {
  const MotionText = motion(Text);
  const MotionHeading = motion(Heading);

  return (
    <VStack justifyContent="center" pt={48} spacing={4}>
      <MotionText
        fontSize="70px"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 1,
          default: { duration: 2.5 },
        }}
      >
        Hola, Soy
      </MotionText>
      <MotionHeading
        textTransform="uppercase"
        fontSize="70px"
        textAlign="center"
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 1,
          default: { duration: 2.5 },
        }}
      >
        Jhon Chivata
      </MotionHeading>
      <MotionText
        textTransform="uppercase"
        letterSpacing={4}
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{
          delay: 1,
          default: { duration: 2.5 },
        }}
      >
        frontend developer
      </MotionText>
    </VStack>
  );
}
