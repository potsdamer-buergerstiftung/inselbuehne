import { HTMLChakraProps, Icon, IconProps, useToken } from "@chakra-ui/react";
import { chakra } from "@chakra-ui/system";

const PBSLogo = (
  props: HTMLChakraProps<"svg"> & { iconColor?: string; slugColor?: string }
) => {
  const { iconColor = "green.500", slugColor = "black", ...rest } = props;

  const iconC = useToken("colors", iconColor);
  const slugC = useToken("colors", slugColor);

  return (
    <chakra.svg {...rest} viewBox="0 0 515.79 99.12">
      <g color={slugC}>
        <path
          d="M2.6,125.9v10H.82V111.14H7.19c2.91,0,5.09.63,6.57,1.9A6.8,6.8,0,0,1,16,118.48a7.28,7.28,0,0,1-.6,3,6.87,6.87,0,0,1-1.74,2.36,8.14,8.14,0,0,1-2.77,1.53,11.28,11.28,0,0,1-3.67.55Zm0-1.43H7.19a8.9,8.9,0,0,0,2.94-.45,6.69,6.69,0,0,0,2.19-1.26,5.5,5.5,0,0,0,1.38-1.9,5.86,5.86,0,0,0,.49-2.38,5.52,5.52,0,0,0-1.76-4.39,7.73,7.73,0,0,0-5.24-1.54H2.6Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M43.09,123.49a15,15,0,0,1-.85,5.2,11.69,11.69,0,0,1-2.42,4,10.55,10.55,0,0,1-3.72,2.55,13.2,13.2,0,0,1-9.58,0,10.74,10.74,0,0,1-3.72-2.55,11.69,11.69,0,0,1-2.42-4,16.09,16.09,0,0,1,0-10.38,11.55,11.55,0,0,1,2.42-4,10.79,10.79,0,0,1,3.72-2.57,13.2,13.2,0,0,1,9.58,0,10.45,10.45,0,0,1,3.72,2.56,11.6,11.6,0,0,1,2.42,4A15,15,0,0,1,43.09,123.49Zm-1.85,0a14.1,14.1,0,0,0-.72-4.65,10,10,0,0,0-2-3.49,8.59,8.59,0,0,0-3.13-2.2,10.7,10.7,0,0,0-4.08-.76,10.47,10.47,0,0,0-4,.76,8.84,8.84,0,0,0-3.15,2.2,9.87,9.87,0,0,0-2,3.49,15.21,15.21,0,0,0,0,9.31,10,10,0,0,0,2,3.49,8.79,8.79,0,0,0,3.15,2.18,10.47,10.47,0,0,0,4,.75,10.7,10.7,0,0,0,4.08-.75,8.54,8.54,0,0,0,3.13-2.18,10.08,10.08,0,0,0,2-3.49A14,14,0,0,0,41.24,123.49Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M63,111.14v1.52H54.31v23.21H52.53V112.66H43.79v-1.52Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M79.25,114.14a.49.49,0,0,1-.45.3,1,1,0,0,1-.59-.32,7.63,7.63,0,0,0-1-.72,7.93,7.93,0,0,0-1.54-.73,7.7,7.7,0,0,0-4.65.06,4.87,4.87,0,0,0-1.71,1,4.48,4.48,0,0,0-1.06,1.54,4.82,4.82,0,0,0-.35,1.84,3.72,3.72,0,0,0,.53,2.08,4.57,4.57,0,0,0,1.41,1.39,9.14,9.14,0,0,0,2,1c.75.26,1.51.52,2.29.77s1.54.54,2.28.85a8.45,8.45,0,0,1,2,1.16,5.49,5.49,0,0,1,1.41,1.72,5.57,5.57,0,0,1,.53,2.55,8.09,8.09,0,0,1-.53,2.92A6.76,6.76,0,0,1,78.27,134a7.12,7.12,0,0,1-2.48,1.6,9,9,0,0,1-3.36.58,9.44,9.44,0,0,1-4.21-.86,10,10,0,0,1-3.09-2.37l.49-.77a.62.62,0,0,1,.49-.26.7.7,0,0,1,.4.21l.59.52c.24.2.52.42.85.66a6.35,6.35,0,0,0,1.13.66,7.62,7.62,0,0,0,1.49.52,7.92,7.92,0,0,0,1.91.21,7.16,7.16,0,0,0,2.62-.45,5.65,5.65,0,0,0,2-1.21,5,5,0,0,0,1.22-1.83,6.05,6.05,0,0,0,.42-2.26,4.07,4.07,0,0,0-.53-2.16,4.77,4.77,0,0,0-1.41-1.42,9.91,9.91,0,0,0-2-1l-2.28-.75c-.78-.24-1.55-.52-2.29-.82a7.75,7.75,0,0,1-2-1.16,5.12,5.12,0,0,1-1.41-1.77,5.77,5.77,0,0,1-.54-2.64,6.19,6.19,0,0,1,.48-2.4,5.85,5.85,0,0,1,1.38-2,6.9,6.9,0,0,1,2.25-1.41,8.1,8.1,0,0,1,3-.53,9.2,9.2,0,0,1,3.46.61,8.3,8.3,0,0,1,2.79,1.87Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M106.36,123.49a14.7,14.7,0,0,1-.86,5.16,11.08,11.08,0,0,1-2.41,3.89A10.41,10.41,0,0,1,99.37,135a13,13,0,0,1-4.81.86h-9V111.14h9a13,13,0,0,1,4.81.85,10.41,10.41,0,0,1,3.72,2.47,11.08,11.08,0,0,1,2.41,3.89A14.62,14.62,0,0,1,106.36,123.49Zm-1.86,0a13.73,13.73,0,0,0-.71-4.61,9.71,9.71,0,0,0-2-3.43,8.58,8.58,0,0,0-3.14-2.13,10.84,10.84,0,0,0-4.07-.73H87.34v21.82h7.22a10.84,10.84,0,0,0,4.07-.73,8.58,8.58,0,0,0,3.14-2.13,9.71,9.71,0,0,0,2-3.43A13.77,13.77,0,0,0,104.5,123.49Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M130.2,135.87h-1.39a.61.61,0,0,1-.4-.14.87.87,0,0,1-.24-.34l-2.92-7.18H113.1l-2.9,7.18a.88.88,0,0,1-.24.34.68.68,0,0,1-.42.14h-1.37l10.12-24.73h1.79Zm-16.56-9h11.08l-5-12.49c-.08-.2-.16-.43-.24-.68l-.25-.79c-.08.28-.16.54-.24.79s-.16.48-.24.69Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M146.45,129.71c.07-.18.14-.37.22-.55a4,4,0,0,1,.25-.51l9.72-17.18a.57.57,0,0,1,.28-.28,1,1,0,0,1,.38,0h1.24v24.73H157V114.79c0-.3,0-.63.05-1l-9.73,17.28a.78.78,0,0,1-.7.46h-.28a.8.8,0,0,1-.7-.46l-10-17.3a8.25,8.25,0,0,1,0,1v21.08h-1.55V111.14h1.22a1.11,1.11,0,0,1,.4,0,.62.62,0,0,1,.28.28l10,17.19A7.09,7.09,0,0,1,146.45,129.71Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M180.7,111.14v1.48h-13v10h10.84v1.45H167.68v10.31h13v1.49H165.88V111.14Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M188.85,124.68v11.19h-1.79V111.14h6.31q4.29,0,6.4,1.65a5.77,5.77,0,0,1,2.11,4.85,6.55,6.55,0,0,1-.49,2.58,6,6,0,0,1-1.4,2.06,7.5,7.5,0,0,1-2.21,1.45,10,10,0,0,1-2.92.74,2.91,2.91,0,0,1,.75.7l8.51,10.7h-1.55a1,1,0,0,1-.48-.11,1.27,1.27,0,0,1-.4-.35l-7.92-10a1.65,1.65,0,0,0-.63-.54,2.58,2.58,0,0,0-1.06-.16Zm0-1.33h4.3a10.26,10.26,0,0,0,2.94-.39,6.27,6.27,0,0,0,2.2-1.13,4.86,4.86,0,0,0,1.37-1.76,5.48,5.48,0,0,0,.48-2.33,4.54,4.54,0,0,0-1.73-3.91,8.44,8.44,0,0,0-5-1.28h-4.52Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M214.68,135.87V110.82h8a15,15,0,0,1,4,.46,7.58,7.58,0,0,1,2.74,1.29,5,5,0,0,1,1.59,2.05,6.83,6.83,0,0,1,.52,2.74,5.63,5.63,0,0,1-.29,1.78,5.16,5.16,0,0,1-.87,1.59,6,6,0,0,1-1.47,1.31,7.89,7.89,0,0,1-2.07.94,7.74,7.74,0,0,1,4.14,2,5.17,5.17,0,0,1,1.4,3.77,7.1,7.1,0,0,1-.59,2.91,6.25,6.25,0,0,1-1.71,2.25,7.89,7.89,0,0,1-2.76,1.46,12.49,12.49,0,0,1-3.73.52ZM218.07,122h4.47a8.66,8.66,0,0,0,2.48-.31,4.91,4.91,0,0,0,1.74-.88,3.37,3.37,0,0,0,1-1.35,4.32,4.32,0,0,0,.34-1.74,3.83,3.83,0,0,0-1.33-3.23,6.71,6.71,0,0,0-4.13-1h-4.59Zm0,2.41v8.72h5.41a8.37,8.37,0,0,0,2.5-.33,4.67,4.67,0,0,0,1.71-.93,3.65,3.65,0,0,0,1-1.44,5.08,5.08,0,0,0,.31-1.82,3.77,3.77,0,0,0-1.37-3.07,6.46,6.46,0,0,0-4.15-1.13Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M247,133.17a7,7,0,0,0,2.77-.52,5.87,5.87,0,0,0,2.08-1.47,6.56,6.56,0,0,0,1.29-2.25,8.89,8.89,0,0,0,.44-2.89V110.82H257V126a11.39,11.39,0,0,1-.69,4,9.23,9.23,0,0,1-2,3.21,9,9,0,0,1-3.13,2.12,11.62,11.62,0,0,1-8.32,0,9.07,9.07,0,0,1-3.15-2.12,9.23,9.23,0,0,1-2-3.21,11.39,11.39,0,0,1-.69-4V110.82h3.37V126a8.83,8.83,0,0,0,.45,2.88,6.17,6.17,0,0,0,1.29,2.25,5.8,5.8,0,0,0,2.08,1.48A6.87,6.87,0,0,0,247,133.17Zm-1.8-26.42a1.76,1.76,0,0,1-.16.72,2.37,2.37,0,0,1-.42.61,2,2,0,0,1-.62.41,1.94,1.94,0,0,1-.76.15,1.74,1.74,0,0,1-.71-.15,1.94,1.94,0,0,1-.6-.41,2,2,0,0,1-.42-.61,1.61,1.61,0,0,1-.16-.72,2,2,0,0,1,.58-1.38,1.81,1.81,0,0,1,.6-.42,1.6,1.6,0,0,1,.71-.16,1.79,1.79,0,0,1,.76.16,1.89,1.89,0,0,1,.62.42,2.12,2.12,0,0,1,.42.62A2,2,0,0,1,245.23,106.75Zm7.44,0a1.61,1.61,0,0,1-.16.72,2,2,0,0,1-.42.61,1.87,1.87,0,0,1-.61.41,1.83,1.83,0,0,1-.73.15,1.91,1.91,0,0,1-1.36-.56,2,2,0,0,1-.42-.61,1.92,1.92,0,0,1-.14-.72A2.14,2.14,0,0,1,249,106a1.79,1.79,0,0,1,.42-.62A1.75,1.75,0,0,1,250,105a1.71,1.71,0,0,1,.75-.16,1.69,1.69,0,0,1,.73.16,1.75,1.75,0,0,1,.61.42,2,2,0,0,1,.58,1.38Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M266.53,125.41v10.46h-3.37V110.82h7.08a15.43,15.43,0,0,1,4.1.48,7.72,7.72,0,0,1,2.86,1.39,5.63,5.63,0,0,1,1.67,2.19,7.39,7.39,0,0,1,.54,2.88,7.22,7.22,0,0,1-.42,2.48,6.52,6.52,0,0,1-1.21,2.07,7.35,7.35,0,0,1-1.94,1.57,9.67,9.67,0,0,1-2.6,1,3.77,3.77,0,0,1,1.12,1.07l7.31,10h-3a1.47,1.47,0,0,1-1.36-.72l-6.51-9a1.8,1.8,0,0,0-.64-.6,2.34,2.34,0,0,0-1-.19Zm0-2.46h3.55a8.57,8.57,0,0,0,2.61-.36,5.5,5.5,0,0,0,1.89-1,4.21,4.21,0,0,0,1.14-1.57,5,5,0,0,0,.39-2,4,4,0,0,0-1.48-3.37,7.11,7.11,0,0,0-4.39-1.13h-3.71Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M295.68,133.4a15.13,15.13,0,0,0,1.86-.1,12.36,12.36,0,0,0,1.6-.28,11.81,11.81,0,0,0,1.42-.47,14.32,14.32,0,0,0,1.33-.62v-5.52H298a.74.74,0,0,1-.54-.19.65.65,0,0,1-.2-.47v-1.93H305v9.62a13.59,13.59,0,0,1-2,1.18,12.76,12.76,0,0,1-2.19.85,15.22,15.22,0,0,1-2.49.51,23.58,23.58,0,0,1-2.88.16,13.06,13.06,0,0,1-5-.93,11.54,11.54,0,0,1-3.92-2.62,12.11,12.11,0,0,1-2.56-4.05,14.22,14.22,0,0,1-.91-5.19,14.52,14.52,0,0,1,.9-5.22,11.16,11.16,0,0,1,6.6-6.66,14.43,14.43,0,0,1,5.31-.93,15.92,15.92,0,0,1,2.76.22,13.67,13.67,0,0,1,2.37.63,11.39,11.39,0,0,1,2,1,12.54,12.54,0,0,1,1.73,1.32l-1,1.54a.86.86,0,0,1-.77.47,1.22,1.22,0,0,1-.61-.19c-.29-.16-.62-.36-1-.59a8.92,8.92,0,0,0-1.32-.68,11.83,11.83,0,0,0-1.83-.55,12.26,12.26,0,0,0-2.51-.22,10.2,10.2,0,0,0-3.83.69,8.24,8.24,0,0,0-2.92,2,8.87,8.87,0,0,0-1.85,3.11,13.6,13.6,0,0,0,0,8.34,8.88,8.88,0,0,0,1.9,3.15,8.1,8.1,0,0,0,2.9,2A9.79,9.79,0,0,0,295.68,133.4Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M325.6,110.82v2.76h-12v8.32h9.73v2.66h-9.73v8.54h12v2.77H310.17V110.82Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M334.2,125.41v10.46h-3.37V110.82h7.08a15.43,15.43,0,0,1,4.1.48,7.72,7.72,0,0,1,2.86,1.39,5.63,5.63,0,0,1,1.67,2.19,7.39,7.39,0,0,1,.54,2.88,7.22,7.22,0,0,1-.42,2.48,6.52,6.52,0,0,1-1.21,2.07,7.35,7.35,0,0,1-1.94,1.57,9.67,9.67,0,0,1-2.6,1,3.77,3.77,0,0,1,1.12,1.07l7.3,10h-3a1.47,1.47,0,0,1-1.36-.72l-6.51-9a1.8,1.8,0,0,0-.64-.6,2.37,2.37,0,0,0-1.05-.19Zm0-2.46h3.55a8.57,8.57,0,0,0,2.61-.36,5.5,5.5,0,0,0,1.89-1,4.21,4.21,0,0,0,1.14-1.57,5,5,0,0,0,.39-2,4,4,0,0,0-1.48-3.37,7.11,7.11,0,0,0-4.39-1.13H334.2Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M365.82,114.74a1.49,1.49,0,0,1-.34.39.71.71,0,0,1-.45.13,1.19,1.19,0,0,1-.69-.3,11,11,0,0,0-1-.65,7.91,7.91,0,0,0-1.45-.66,7.13,7.13,0,0,0-4.06,0,4.39,4.39,0,0,0-1.46.83,3.32,3.32,0,0,0-.88,1.23,3.94,3.94,0,0,0-.3,1.53,2.79,2.79,0,0,0,.52,1.74,4.38,4.38,0,0,0,1.36,1.18A10,10,0,0,0,359,121l2.2.74c.75.26,1.49.55,2.2.87a7.77,7.77,0,0,1,1.93,1.21,5.56,5.56,0,0,1,1.36,1.8,6.05,6.05,0,0,1,.52,2.62,8.52,8.52,0,0,1-.56,3.09,7.28,7.28,0,0,1-1.64,2.51,7.55,7.55,0,0,1-2.64,1.67,9.61,9.61,0,0,1-3.55.61,10.82,10.82,0,0,1-4.43-.88,10.35,10.35,0,0,1-3.42-2.38l1-1.61a1.15,1.15,0,0,1,.34-.32.77.77,0,0,1,.45-.14,1.4,1.4,0,0,1,.83.4c.32.26.71.55,1.18.86a8.89,8.89,0,0,0,1.72.87,6.77,6.77,0,0,0,2.45.39,6.47,6.47,0,0,0,2.15-.33,4.46,4.46,0,0,0,1.6-.94,4.08,4.08,0,0,0,1-1.44,4.87,4.87,0,0,0,.35-1.87,3.17,3.17,0,0,0-.52-1.86,4.27,4.27,0,0,0-1.35-1.21,8.89,8.89,0,0,0-1.92-.83l-2.2-.7a23.16,23.16,0,0,1-2.2-.83,7.33,7.33,0,0,1-1.92-1.23,5.46,5.46,0,0,1-1.35-1.88,6.86,6.86,0,0,1,1.49-7.55,7.27,7.27,0,0,1,2.42-1.54,8.82,8.82,0,0,1,3.32-.58,10.43,10.43,0,0,1,3.82.67,8.79,8.79,0,0,1,3,1.92Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M388.57,110.82v2.85h-8.09v22.2h-3.39v-22.2H369v-2.85Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M396.16,135.87h-3.4V110.82h3.4Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M418.3,110.82v2.76h-12v8.76h10.28v2.76H406.27v10.77h-3.4V110.82Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M439.71,110.82v2.85h-8.09v22.2h-3.4v-22.2H420.1v-2.85Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M453,133.17a7,7,0,0,0,2.78-.52,5.92,5.92,0,0,0,2.07-1.47,6.56,6.56,0,0,0,1.29-2.25,8.89,8.89,0,0,0,.44-2.89V110.82H463V126a11.39,11.39,0,0,1-.69,4,9.23,9.23,0,0,1-2,3.21,9,9,0,0,1-3.13,2.12,11.62,11.62,0,0,1-8.32,0,9.07,9.07,0,0,1-3.15-2.12,9.23,9.23,0,0,1-2-3.21,11.39,11.39,0,0,1-.69-4V110.82h3.37V126a8.83,8.83,0,0,0,.45,2.88,6.17,6.17,0,0,0,1.29,2.25,5.8,5.8,0,0,0,2.08,1.48A6.87,6.87,0,0,0,453,133.17Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M471.21,110.93a1.87,1.87,0,0,1,.5.47l14.5,18.87c0-.3-.06-.59-.07-.88s0-.56,0-.83V110.82h3v25.05h-1.72a1.51,1.51,0,0,1-.67-.14,1.79,1.79,0,0,1-.53-.48L471.69,116.4c0,.29,0,.57.05.85s0,.54,0,.77v17.85h-3V110.82h1.75A1.63,1.63,0,0,1,471.21,110.93Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
        <path
          d="M506.38,133.4a15.13,15.13,0,0,0,1.86-.1,12.36,12.36,0,0,0,1.6-.28,11.81,11.81,0,0,0,1.42-.47,13.06,13.06,0,0,0,1.32-.62v-5.52h-3.87a.74.74,0,0,1-.54-.19.65.65,0,0,1-.2-.47v-1.93h7.69v9.62a13.16,13.16,0,0,1-2,1.18,12.34,12.34,0,0,1-2.18.85A15.22,15.22,0,0,1,509,136a23.58,23.58,0,0,1-2.88.16,13.06,13.06,0,0,1-5-.93,11.54,11.54,0,0,1-3.92-2.62,12,12,0,0,1-2.56-4.05,14.22,14.22,0,0,1-.91-5.19,14.52,14.52,0,0,1,.89-5.22,11.68,11.68,0,0,1,2.57-4,11.5,11.5,0,0,1,4-2.61,14.43,14.43,0,0,1,5.31-.93,15.92,15.92,0,0,1,2.76.22,13.32,13.32,0,0,1,2.36.63,11.15,11.15,0,0,1,2,1,12.54,12.54,0,0,1,1.73,1.32l-1,1.54a.87.87,0,0,1-.77.47,1.22,1.22,0,0,1-.61-.19c-.29-.16-.62-.36-1-.59a8.92,8.92,0,0,0-1.32-.68,10.85,10.85,0,0,0-4.34-.77,10.17,10.17,0,0,0-3.83.69,8.24,8.24,0,0,0-2.92,2,8.87,8.87,0,0,0-1.85,3.11,13.6,13.6,0,0,0,0,8.34,9,9,0,0,0,1.89,3.15,8.23,8.23,0,0,0,2.91,2A9.79,9.79,0,0,0,506.38,133.4Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
      </g>
      <g color={iconC}>
        <path
          d="M514.18,95l-51.66-.82-61.21.45,0-1.32,31.21-.23,10.92,0,.11.2.17-.2,70.41.36,0-3.09-7.22,0,.25-.26-9.71-9c.32.06.65.13.95.17,4.28.7,13.22,2,15.64,2.35l0-3.12c-3-.43-11.09-1.62-15.09-2.27s-10.41-2.55-14.67-3.8l-2.5-.73c-3.45-1-15.11-4.74-19.85-6.77-1.82-.77-5-2.18-8.45-3.73-5.88-2.63-12.56-5.61-15.61-6.8-4.71-1.84-37.66-18.86-38-19l-.71-.36-15.92,8.18c-.1.05-10.67,5-16.69,7.71s-19.7,7.94-19.82,8c-7.86,2.91-10.49,3.66-13.26,4.45-1.68.47-3.42,1-6.37,2A136.6,136.6,0,0,1,302,73l-3.4.45c-6.78.9-10.18,1.35-13.6,1.66-5.23.46-11.59.69-11.62.69-3.7.06-10.14.15-16.37.19s-12.68-.13-16.37-.19c0,0-6.4-.23-11.63-.69-3.42-.31-6.82-.76-13.59-1.66L212.05,73a136.6,136.6,0,0,1-25-5.64c-3-1-4.68-1.49-6.36-2-2.78-.79-5.4-1.54-13.27-4.45-.12,0-13.82-5.28-19.82-8S131,45.28,130.91,45.23L115,37.05l-.7.36c-.34.17-33.29,17.19-38,19-3.05,1.19-9.72,4.17-15.61,6.8-3.48,1.55-6.63,3-8.45,3.73-4.74,2-16.4,5.79-19.85,6.77l-2.5.73c-4.26,1.25-10.69,3.14-14.66,3.8S3.09,80.11.12,80.54l0,3.12C2.5,83.31,11.43,82,15.72,81.31c.29,0,.62-.11.94-.17L7,90.11l.25.26L0,90.41l0,3.09,70.41-.36.16.2.11-.2,10.92,0,31.21.23,0,1.32-61.21-.45L-.09,95l0,3.1,51.72-.83,150.58,1.1H311.92l150.59-1.1,51.71.83Zm-11.33-4.66L483,90.25l11-8ZM483.34,77.44c2.47.72,5.65,1.65,8.7,2.45l-10,7.23,0-10.06,1.3.38M479,76.14,479,87.81,464.56,71.34C469.2,73,475.34,75,479,76.14M477,90.22l-12.65-.06V75.81Zm-15.74-.08-14.94-.07,14.94-17.73ZM445.41,63.06l6.74,3,7.55,3.35-14.32,17ZM11.24,90.35,20,82.23l11,8ZM32,87.12l-9.95-7.23c3.06-.8,6.24-1.73,8.7-2.45l1.3-.38Zm3.14-11c3.61-1.1,9.76-3.1,14.4-4.8L35.08,87.81Zm14.58,14-12.64.06L49.73,75.81Zm3.09,0V72.34L67.75,90.07Zm1.58-20.73,7.55-3.35,6.74-3,0,23.35ZM71.77,61.7c2.33-1,4.34-1.87,5.65-2.38,1.65-.65,6.48-3,12.17-5.85L71.8,84.81ZM90,90.06,81.55,90l-9.17,0L90.6,58Zm3.09,0,.61-32.59,18.87,32.73Zm19.79-5.52L93.74,51.38c7.79-3.93,16.12-8.21,19.91-10.16ZM384.54,48l12.82-6.58.74,41.38L379.79,50.22,384.54,48m-7.3,42.4-17,.13,16.77-33Zm-9.48-34.65c2.51-1.13,5.79-2.64,8.8-4L359.63,85l-.06-25.8c3-1.22,6.06-2.47,8.19-3.44m-20,8.07c.3-.11,4.21-1.61,8.72-3.39l.07,26.2L339.31,66.81c2-.65,4.61-1.56,8.45-3m8.11,26.74-16.33.12-.27-19.21Zm-19.42.14-14.37.1,14.1-19ZM328,70.27c2.88-1,4.58-1.45,6.22-1.92l.86-.25L320.83,87.31l-.12-14.86c2.55-.68,5-1.4,7.32-2.18m-10.4,3,.12,15.13L304.24,75.78c4.54-.65,9.07-1.52,13.39-2.56M315.9,90.85l-11.79.09-.23-11.27ZM301,91l-12.84.09L300.79,79.5Zm-2-14.47.54-.07L286.3,88.58l-.1-10.5c3.21-.31,6.6-.76,12.84-1.59m-25.55,2.38c.06,0,4.88-.17,9.63-.53l.09,10.44L271.12,78.9l2.37,0m7.67,12.23h-9.57l0-7.84ZM255.27,79v0h3.55v0l10-.11-11.8,9-11.81-9,10,.11m3.38,11.57,9.82-7.5,0,8h-9.85Zm-3.2.49h-9.86l0-8,9.82,7.5ZM231,78.34c4.74.36,9.57.53,9.62.53l2.38,0-12.1,9.88Zm11.55,4.92,0,7.84h-9.57Zm-27.48-6.77c6.24.83,9.64,1.28,12.84,1.59l-.09,10.5L214.52,76.42Zm-1.75,3,12.62,11.55L213.07,91Zm-16.83-6.28c4.32,1,8.84,1.91,13.38,2.56l-13.5,12.57Zm13.74,6.45L210,90.94l-11.78-.09ZM179.84,68.35c1.65.47,3.35,1,6.23,1.92,2.3.78,4.76,1.5,7.31,2.18l-.11,14.86L179,68.1l.86.25m-1.93,3.49L192,90.8l-14.38-.1ZM157.62,60.43c4.5,1.78,8.42,3.28,8.72,3.39,3.84,1.43,6.45,2.34,8.44,3L157.55,86.63Zm17.21,11-.28,19.21-16.32-.12Zm-28.5-15.72c2.13,1,5.15,2.22,8.2,3.44L154.46,85,137.54,51.72c3,1.39,6.29,2.9,8.79,4M137,57.56l16.77,33-16.95-.13Zm-20.3-16.14L129.55,48l4.76,2.22L116,82.8Zm-1,48.09L134,57.15l-.19,33.23-18-.13Zm282.46,5.15-86.31.63H202.18l-86.31-.63,0-1.32,39.55.29.06.12.11-.12,38.77.28.23.32.34-.32,37.64.28h49l37.64-.28.34.32.23-.32,38.77-.28.11.12.06-.12,39.55-.29Zm.1-4.41-18,.13-.19-33.23,18.19,32.36Zm38.36-30.93c1.3.51,3.32,1.37,5.64,2.38l0,23.11L424.5,53.47c5.69,2.85,10.52,5.2,12.18,5.85m5,30.72-9.17,0-8.43.06L423.5,58Zm-20.69,0-19.49.14L420.4,57.49ZM400.44,41.22c3.79,2,12.12,6.23,19.91,10.16L401.22,84.56Z"
          transform="translate(0.13 -37.05)"
          fill="currentColor"
        />
      </g>
    </chakra.svg>
  );
};

export default PBSLogo;