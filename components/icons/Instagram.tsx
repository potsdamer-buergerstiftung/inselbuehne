import { Icon, IconProps } from "@chakra-ui/react";
import { FC } from "react";

const InstagramIcon: FC<IconProps> = (props) => (
  <Icon viewBox="0 0 256 256" {...props}>
    <g opacity=".3">
      <path
        d="M172,36H84A47.99987,47.99987,0,0,0,36,84v88a47.99988,47.99988,0,0,0,48,48h88a47.99988,47.99988,0,0,0,48-48V84A47.99987,47.99987,0,0,0,172,36ZM128,168a40,40,0,1,1,40-40A40.0001,40.0001,0,0,1,128,168Z"
        fill="currentColor"
      />
    </g>
    <g>
      <path
        d="M128,80a48,48,0,1,0,48,48A48.05436,48.05436,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32.03667,32.03667,0,0,1,128,160Z"
        fill="currentColor"
      />
      <circle cx="180" cy="76" r="12" fill="currentColor" />
    </g>
  </Icon>
);

export default InstagramIcon;
