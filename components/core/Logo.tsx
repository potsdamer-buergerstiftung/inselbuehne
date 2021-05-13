import { HTMLChakraProps, useToken } from "@chakra-ui/react";
import { chakra, useColorModeValue } from "@chakra-ui/system";

const Logo = (
  props: HTMLChakraProps<"svg"> & { iconColor?: string; slugColor?: string }
) => {
  const { iconColor = useColorModeValue("gray.900", "white"), slugColor = "green.500", ...rest } = props;

  const iconC = useToken("colors", iconColor);
  const slugC = useToken("colors", slugColor);

  return (
    <chakra.svg {...rest} viewBox="0 0 367.38 300.06">
      <g color={slugC}>
        <path fill="currentColor" d="M53.67,269.73q11.92,0,11.92,8.71a9,9,0,0,1-3.77,7.6q-3.78,2.81-10.12,2.8H46.83V297c0,1.22,1.08,2,3.23,2.22v.21H37.79v-.21c2.15-.25,3.23-1,3.21-2.22V272.16c0-1.22-1.07-2-3.21-2.2v-.23Zm-.35,18.43c2.35,0,4-.52,5-1.56s1.52-3.1,1.52-6.17a18.1,18.1,0,0,0-.34-3.64,11,11,0,0,0-1.22-3.14,5.9,5.9,0,0,0-2.63-2.39,10.1,10.1,0,0,0-4.35-.85h-4.5v16.73A23.14,23.14,0,0,0,53.32,288.16Z" />
        <path fill="currentColor" d="M81.91,273.37a16.81,16.81,0,0,1,11.74-4.22,16.7,16.7,0,0,1,11.71,4.22,15.93,15.93,0,0,1,0,22.46,16.67,16.67,0,0,1-11.71,4.23,16.78,16.78,0,0,1-11.74-4.23,15.86,15.86,0,0,1,0-22.46Zm13.52,25.92a7.11,7.11,0,0,0,6.11-3.29,14.78,14.78,0,0,0,2.29-8.61,23.19,23.19,0,0,0-1.5-8.23A17.32,17.32,0,0,0,98,272.55a8.87,8.87,0,0,0-6.18-2.63,7.14,7.14,0,0,0-6.12,3.26,14.62,14.62,0,0,0-2.3,8.57A23.14,23.14,0,0,0,84.92,290a17.42,17.42,0,0,0,4.31,6.62A8.85,8.85,0,0,0,95.43,299.29Z" />
        <path fill="currentColor" d="M150,269.73l-2.74,8.75h-.16c.25-2.78-.3-4.82-1.64-6.14a7.94,7.94,0,0,0-5.78-2h-1.62v26.25a2,2,0,0,0,1,1.92,8,8,0,0,0,3.11.71v.21h-14v-.21a7.76,7.76,0,0,0,3.09-.72,2,2,0,0,0,1-1.91V270.37q-4.57,0-7,1.85a14.72,14.72,0,0,0-4.28,6.26h-.19l1.41-8.75Z" />
        <path fill="currentColor" d="M173.22,281.71q10,2.31,10,9.17a8.16,8.16,0,0,1-3.16,6.59c-2.11,1.73-5,2.59-8.63,2.59a19.05,19.05,0,0,1-6.65-1.11,13.57,13.57,0,0,1-4.82-2.89l3.9-6.2a7.87,7.87,0,0,0,2.51,6.84,9.63,9.63,0,0,0,6.76,2.68,7.15,7.15,0,0,0,3-.59,4.2,4.2,0,0,0,1.87-1.56,7.57,7.57,0,0,0,.85-1.88,6.88,6.88,0,0,0,.26-1.88,4.24,4.24,0,0,0-1.81-3.82,21.44,21.44,0,0,0-6.09-2.22q-5.64-1.31-8.06-4a8.52,8.52,0,0,1-2.43-5.86,7.26,7.26,0,0,1,3.08-6.17,13.56,13.56,0,0,1,8.22-2.27q6.68,0,10.7,3.86l-4.05,6.19a7.49,7.49,0,0,0-2.15-6.77,9,9,0,0,0-6.51-2.66,4.63,4.63,0,0,0-3.92,1.52,5.77,5.77,0,0,0-1.16,3.62,5.92,5.92,0,0,0,.61,2.79,4.86,4.86,0,0,0,1.89,1.93,14.72,14.72,0,0,0,2.55,1.21A23.59,23.59,0,0,0,173.22,281.71Z" />
        <path fill="currentColor" d="M207.65,269.73q8.19,0,12.5,3.68t4.31,10.42q0,7.34-4.9,11.48t-12.76,4.15H194.07v-.21c2.15-.79,3.23-1.81,3.21-3.07v-24c0-1.22-1.07-2-3.21-2.2v-.23Zm1.32,29a8.6,8.6,0,0,0,6.94-2.82q2.39-2.82,2.39-9.66,0-7.33-3.08-11.57T206,270.41h-2.84v27.1A14.47,14.47,0,0,0,209,298.69Z" />
        <path fill="currentColor" d="M260.79,294.11a16.36,16.36,0,0,0,2,4,3.23,3.23,0,0,0,2.24,1.19v.17H251.59v-.17a6.59,6.59,0,0,0,2.46-.55,2.48,2.48,0,0,0,1.2-1.49,4,4,0,0,0-.49-2.89l-.85-2.12H237.7l-.93,2.12a7.14,7.14,0,0,0-.63,2.23,1.86,1.86,0,0,0,.41,1.43,3.28,3.28,0,0,0,1.09.79,8.53,8.53,0,0,0,1.63.48v.17h-7.81v-.17a4.93,4.93,0,0,0,2.36-1.4,12.8,12.8,0,0,0,2-3.57l9.29-21.44-.08-1.22.81-.48,5-2.67a12.58,12.58,0,0,0,1,3ZM238,291.48h15.63l-7.5-18.72Z" />
        <path fill="currentColor" d="M311.66,270c-2.16.25-3.24,1-3.24,2.2V297q0,1.83,3.24,2.22v.21H299.39v-.21q3.23-.37,3.21-2.22V272l-11.84,28-12.15-24.26V292c0,2.67.29,4.53.85,5.57a3,3,0,0,0,2.39,1.73v.21h-7.3v-.21a3.89,3.89,0,0,0,1.28-.3,2.92,2.92,0,0,0,1-.83,4.22,4.22,0,0,0,.74-1.93,20.94,20.94,0,0,0,.22-3.41V274a12.22,12.22,0,0,0-3.44-4.25h7.49l11.3,22.56,9.49-22.56h9.06Z" />
      </g>
      <g color={iconC}>
        <path fill="currentColor" d="M215.11,230.65c0-15.32.11-30.65-.06-46-.05-4.81-.16-9.21,6.12-10H196.25c5.85,1.91,6.08,2.21,6.08,8.35v22.72H171.26c0-8.19,0-16.12,0-24.06,0-4.35.56-5.1,4.65-6.27.5-.15,1-.25,1.52-.37,0-.14,0-.27-.07-.41h-25c6,2.34,6,2.34,6,8.75q0,23.11,0,46.25c0,6.24-.05,6.23-5.95,8.17-.11,0-.17.28-.29.49h25.2a2,2,0,0,0-1.22-.79c-4.6-1.36-4.91-1.77-4.92-6.62q0-10.2,0-20.4c0-.82.11-1.64.17-2.47h30.76c.05,1.13.14,2.06.14,3,0,6.32,0,12.64,0,19,0,6.1,0,6.1-6,7.82-.12,0-.18.27-.37.57h25.22c.05-.15.09-.31.14-.47-.32-.12-.63-.26-1-.35C215.33,236.09,215.11,235.81,215.11,230.65Z" />
        <path fill="currentColor" d="M49.36,203.19c-2.17-.72-4.41-1.23-6-1.68,2.67-1.94,5.88-3.61,8.22-6.09,6.18-6.56,3.43-16.26-5.23-18.61a58.49,58.49,0,0,0-13.25-2.17c-10.23-.36-20.48-.21-30.72-.25a15.42,15.42,0,0,0-2.17.39c6.59,2.13,6.63,2.18,6.63,8.61,0,15.41-.07,30.82,0,46.23,0,3.57-1.43,5.8-4.53,7.21C1.62,237.14,1,237.5,0,238c.51.32.65.49.8.49,11.58,0,23.16.15,34.73-.22a30.06,30.06,0,0,0,18.14-6.36c5.39-4.3,8-9.89,6.87-16.9C59.49,208.55,55.18,205.11,49.36,203.19Zm-29.63-27c5.36-.08,10.57-.6,15.55,1.79,7.07,3.4,8.55,14.15,5.75,19.29a7.14,7.14,0,0,1-4.91,3.3c-5.38.43-10.82.16-16.39.16Zm27.62,52.28A8.42,8.42,0,0,1,39,236.24c-5.77.24-11.58-.4-17.35-.87a3,3,0,0,1-1.95-2.15c-.11-9.84-.05-19.69,0-29.54,0-.17.14-.33.21-.5s.19-.62.29-.92c6,.67,12.12,1,18.09,2.11a10.56,10.56,0,0,1,8.82,9.13A60.32,60.32,0,0,1,47.35,228.51Z" />
        <path fill="currentColor" d="M247.24,155.34c5.6.25,11.4-1.44,16.87,1.75,1.78-7.05,3.48-13.82,5.19-20.58l-.9-.94c-7.2,16.27-20.08,20.31-36.07,17.68V123.81c5.33.36,10.4.47,15.41,1.11s7.67,4.16,9.51,8.51V112.15c-1.7,4-3.13,7.16-6.69,8.52-6,2.28-12.14,1.6-18.33,1.55V92.87c3.19,0,6.24.17,9.26,0,9.39-.61,16.53,3,21.49,11,.45.73,1,1.4,1.43,2.15a12.87,12.87,0,0,1,.72,1.71l.9-.75c-.9-4.39-1.93-8.75-2.65-13.17C263,91.6,262,91.07,260,91.08c-14.84.08-29.68,0-44.52.06-.75,0-1.5.07-2.24.11,0,.18,0,.36,0,.53,1,.31,2,.6,2.93.94a4,4,0,0,1,2.95,4.08c0,17,.06,34.08-.13,51.12,0,1.58-1.49,3.33-2.67,4.66-.9,1-2.4,1.5-3.63,2.22,5.9.48,11.63.47,17.37.48S241.5,155.08,247.24,155.34Z" />
        <path fill="currentColor" d="M187.56,153.46a17.1,17.1,0,0,0,10.76-14.54c.78-7.14-1.94-12.94-8.06-16.55a60.6,60.6,0,0,0-12.65-5.18c-5.19-1.63-10.71-2.4-14.91-6.25-3.81-3.51-4.27-8-3-12.69,1.07-4,4-5.89,7.86-6.6,6.92-1.27,15.87,2.92,18.87,9.3,1.41,3,1.89,6.42,2.84,9.83l8.13-12.55c-7.22-6.46-15.52-8.7-24.62-8.4-6,.2-11.87,1.4-16.68,5.27-8.65,7-8.42,19.57.28,27,5.12,4.38,11.37,6.1,17.67,7.84a60.88,60.88,0,0,1,10.23,3.61c4,1.91,5.36,5.56,5,9.83-.38,4.69-2.16,8.75-6.87,10.38-11.64,4-25.45-4.25-25.64-16.56a18,18,0,0,0-.45-2.36l-8.21,13a26,26,0,0,0,2.3,2C162.16,157.64,174.69,158.83,187.56,153.46Z" />
        <path fill="currentColor" d="M366.56,218.68c-7.21,16.47-20.23,20.37-36.34,17.58V207.62c4.35,0,8.47-.22,12.56,0,5.52.37,10,2.59,11.86,8.32.08.25.48.4.82.66V195.32c-.72,1.51-1.08,2.23-1.41,3-1.31,2.81-3.25,5-6.26,6-5.75,1.78-11.66,1.43-17.8,1.24,0-9.44,0-18.61.09-27.77,0-.54,1.31-1.47,2.05-1.51,3-.2,5.93-.15,8.9-.13,6.56,0,12.55,1.5,16.84,7,1.87,2.4,3.7,4.83,5.55,7.25l.65-.18c-.89-4.28-1.95-8.53-2.6-12.84-.37-2.45-1.41-3-3.75-3-14.65.11-29.3.05-44,.06-.91,0-1.81.08-3.36.16,8,3.05,6.72,2.79,6.76,9.74.07,14.18-.19,28.35.13,42.52.11,5.3-1,9.2-6.36,11-.08,0-.07.31-.15.74h2.83c13.5,0,27,0,40.5.06a70.37,70.37,0,0,1,8.22,1c1.57-6.24,3.3-13.16,5-20.07Z" />
        <path fill="currentColor" d="M289.5,184.44c.37,10.52.38,21,.53,31.57,0,.81-.09,1.62-.15,2.85a21.67,21.67,0,0,1-1.72-1.61Q274,200.62,260,184c-2.65-3.12-4.69-7.49-8-9.08s-8.06-.46-12.17-.51c-1.63,0-3.25,0-5.3,0,2.5,2.35,4.52,4.1,6.34,6a4.42,4.42,0,0,1,1.16,2.75c0,14.74.1,29.49-.08,44.23,0,4.55-.41,9.32-6.06,10.89h14.6c-3.76-1.45-4.89-4.59-5.52-8a35.52,35.52,0,0,1-.62-6.26c-.06-12.16,0-24.32,0-36.48,0-.81.08-1.62.17-3l23.8,28.24c7.83,9.29,15.64,18.59,23.81,28.29,0-7.08,0-13.38,0-19.68,0-12.34,0-24.69.19-37,.07-4.17.92-8.26,5.87-9.78H283.71C288.13,176.52,289.35,180.4,289.5,184.44Z" />
        <path fill="currentColor" d="M331.36,156.25l4.92-19.4-.61-.34c-.78,1-1.47,2.12-2.34,3.05-3.22,3.38-6.16,7.12-9.82,9.95-5.69,4.4-12.68,4.22-19.52,4.28-2.41,0-3.05-.69-3-3.08.1-16.66.05-33.32.05-50,0-7.21,0-7.21,6.93-9.37H282.16a6.67,6.67,0,0,0,2.56,1.24A4.16,4.16,0,0,1,288,97c0,16.08,0,32.16,0,48.25,0,3.77-1.86,6.53-5,8.53-.5.32-1,.68-1.9,1.33,1.14.08,1.69.15,2.24.15,12.54,0,25.08-.05,37.62,0C324.28,155.35,327.59,155.89,331.36,156.25Z" />
        <path fill="currentColor" d="M37.89,101.14q0,22.55,0,45.08c0,6.45,0,6.45-6,8.38-.09,0-.1.29-.18.55H56.89c-6.2-2.53-6.2-2.53-6.2-9.24q0-23,0-45.94c0-6.33,0-6.33,6-8.14.08,0,.09-.3.14-.5H31.29C38.5,94.26,37.88,93.55,37.89,101.14Z" />
        <path fill="currentColor" d="M245.33,0c-71.8,44.87-133,0-133,0V56.83h133Z" />
        <rect fill="currentColor" x="68.69" width="30.4" height="56.83" />
        <rect fill="currentColor" x="258.82" width="30.4" height="56.83" />
        <path fill="currentColor" d="M129,195.75c0,10.68,0,18.7,0,21.27a20,20,0,0,1-3.87,11.52c-6.06,8.63-19.81,8.56-24.57,3.8-4.57-4.56-6.1-10.06-6.19-16.11,0-3-.06-12.4-.07-24.63h0c0-2.67,2.36-4.28,7.1-4.83v-.5H74.41v.5c4.7.55,7.06,2.16,7.06,4.83h0c0,11.21,0,19.68,0,22.31.16,14.66,7,23.11,21.21,25.54,16.28,2.78,29.54-6.23,30-23.39.06-2.09.1-8.07.12-16.27.24-6.25-1.23-11,6-13.52H122.67C128.42,188.19,128.14,190.61,129,195.75Z" />
        <path fill="currentColor" d="M88.4,175.63a6,6,0,0,0-.27-11.93H88c-3.31.09-6.25,2.95-6.17,6a6,6,0,0,0,2,4.16,6.43,6.43,0,0,0,4.32,1.75Z" />
        <path fill="currentColor" d="M132,175.64a5.92,5.92,0,0,0,4.18-1.69,6,6,0,0,0,1.79-4.31,5.87,5.87,0,0,0-5.8-5.93,6.45,6.45,0,0,0-4.59,1.85,5.6,5.6,0,0,0-1.78,4,6.32,6.32,0,0,0,6.08,6.12Z" />
        <path fill="currentColor" d="M130.32,99.92a23,23,0,0,1,.34,3.7c0,3.42,0,16.43,0,32.52l-1-1.27Q112.13,114,94.56,93.16c-.64-.77-1.49-1.89-2.28-1.92-5.49-.16-11-.08-16.48-.08l-.18.3-.51,0,.41.18c-.09.16-.19.32-.29.48a4.63,4.63,0,0,1,1.15.31l5.1,5.18c0,.86,0,1.9,0,3.21,0,4.73,0,28.23,0,52.67a19.18,19.18,0,0,1,6.63-1.4,17.5,17.5,0,0,1,6.14.93c0-15.57,0-30.65,0-40.86,12.07,14.34,24,28.53,36.23,43H133V138.76l0,0c0-17.24,0-31.45.08-34.92.09-4.95-.34-10.32,5.85-12.46h-15C128.09,92.78,129.66,96,130.32,99.92Z" />
      </g>
    </chakra.svg>
  );
};

export default Logo;
