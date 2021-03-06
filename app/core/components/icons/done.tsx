import { Icon, IconProps } from "@chakra-ui/react"
import { FC } from "react"

const DoneIcon: FC<IconProps> = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <circle fill="currentColor" opacity=".3" cx="12" cy="12" r="10"></circle>
    <path
      d="M16.769 7.818a1 1 0 011.462 1.364l-7 7.5a1 1 0 01-1.382.077l-3.5-3a1 1 0 011.302-1.518l2.772 2.376 6.346-6.8z"
      fill="currentColor"
    ></path>
  </Icon>
)

export default DoneIcon
