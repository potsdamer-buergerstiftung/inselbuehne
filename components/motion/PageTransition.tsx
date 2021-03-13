import { useColorModeValue } from "@chakra-ui/react";
import { MotionBox } from ".";

const transition = {
  duration: 0.4,
  ease: [0.43, 0.13, 0.23, 0.96],
  delay: 0.25,
};

const backVariants = {
  exit: { x: 25, opacity: 0, transition },
  enter: { x: 0, opacity: 1, transition: { delay: 0, ...transition } },
};

const MotionPageTransition = ({ children }) => (
  <MotionBox initial="exit" animate="enter" exit="exit" overflow="hidden">
    <MotionBox variants={backVariants}>{children}</MotionBox>
  </MotionBox>
);

export default MotionPageTransition;
