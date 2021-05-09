import { FC, useState, useEffect } from "react";
import { CloseButton, Box } from "@chakra-ui/react";
import {
  Alert,
  AlertIcon,
  AlertDescription,
  AlertTitle,
} from "@chakra-ui/alert";

const id = "donation_error_alert";

const Banner: FC = () => {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const pop_status = localStorage.getItem(id);
    if (!pop_status) {
      setVisible(true);
      localStorage.setItem(id, "1");
    }
  }, []);
  if (!visible) return null;

  return (
    <Alert status="info">
      <AlertIcon />
      <Box flex="1">
        <AlertTitle>Information zu Spenden seit März 2021</AlertTitle>
        <AlertDescription display="block">
          Wegen eines technischen Problems wurden Spenden, die im Zeitraum vom
          3. März bis 8. Mai 2021 durchgeführt nicht bearbeitet. Wollten Sie das
          Projekt in diesem Zeitraum unterstützen, bitten wir Sie, Ihre Spende
          erneut durchzuführen. Ihr Zahlungskonto blieb in dieser Zeit
          unberührt. Vielen Dank!
        </AlertDescription>
      </Box>
      <CloseButton
        position="absolute"
        right="8px"
        top="8px"
        onClick={() => setVisible(false)}
      />
    </Alert>
  );
};

export default Banner;
