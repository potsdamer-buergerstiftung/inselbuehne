import { Box, Heading, HeadingProps, HTMLChakraProps } from "@chakra-ui/react";
import { motion, HTMLMotionProps } from "framer-motion";
import { FC } from "react";

import MotionPageTransition from "./PageTransition";
export { MotionPageTransition };

type Merge<P, T> = Omit<P, keyof T> & T;

type MotionBoxProps = Merge<HTMLChakraProps<"div">, HTMLMotionProps<"div">>;
export const MotionBox: FC<MotionBoxProps> = motion(Box);

type MotionHeadingProps = Merge<
  HeadingProps,
  HTMLMotionProps<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">
>;
export const MotionHeading: FC<MotionHeadingProps> = motion(Heading);
