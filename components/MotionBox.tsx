import { Box, forwardRef } from "@chakra-ui/react";
import { isValidMotionProp, motion } from "framer-motion";

export default motion.custom(
  forwardRef((props, ref) => {
    const chakraProps = Object.fromEntries(
      Object.entries(props).filter(([key]) => !isValidMotionProp(key))
    );
    return <Box ref={ref} {...chakraProps} />;
  })
);
