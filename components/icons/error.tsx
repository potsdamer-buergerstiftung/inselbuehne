import { Icon } from "@chakra-ui/react";

const ErrorIcon = (props) => (
  <Icon viewBox="0 0 24 24" {...props}>
    <g fill="none" fill-rule="evenodd">
      <circle fill="currentColor" opacity=".3" cx="12" cy="12" r="10"></circle>
      <path
        d="M12.036 10.621l2.828-2.828a1 1 0 011.414 1.414l-2.828 2.829 2.828 2.828a1 1 0 01-1.414 1.414l-2.828-2.828-2.829 2.828a1 1 0 11-1.414-1.414l2.828-2.828-2.828-2.829a1 1 0 011.414-1.414l2.829 2.828z"
        fill="currentColor"
      ></path>
    </g>
  </Icon>
);

export default ErrorIcon;
