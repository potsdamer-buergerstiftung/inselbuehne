import { useColorModeValue } from "@chakra-ui/react";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { MotionPageTransition } from "@components/motion";

const PageNotFound = () => {
  const bg = useColorModeValue("red.100", "purple.800");

  return (
    <MotionPageTransition>
      <PageTitle title="Seite nicht gefunden" bg={bg} heading="404">
        Es tut uns leid, aber Deine gesuchte Seite konnte nicht gefunden werden.
      </PageTitle>
    </MotionPageTransition>
  );
};

PageNotFound.Layout = Default;

export default PageNotFound;
