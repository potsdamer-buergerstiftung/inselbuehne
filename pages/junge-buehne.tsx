import { Box, Container, Text } from "@chakra-ui/react";
import { PageTitle } from "@components/core";
import { Default } from "@components/layouts";
import { MotionPageTransition } from "@components/motion";
import { useColorModeValue as mode } from "@chakra-ui/color-mode";
import { JungeBuehne as Layout } from "@components/layouts";

export default function JungeBuehne() {
  return (
    <MotionPageTransition>
      <PageTitle
        title="Dürfen wir vorstellen: Die „Junge Bühne“"
        heading="Junge Bühne"
        bg={mode("blue.100", "blue.900")}
      >
        <Text mb="5">
          Die Temperaturen steigen, die Corona-Beschränkungen werden lockerer.
          Schöne Musik, Tanz, Performance von Kindern und Jugendlichen für alle
          unter dem freien Himmel, mit einem Getränk in der Hand und natürlich
          unter Beachtung aller Hygiene-Regeln den Sommer genießen - das bietet
          die Junge Bühne an.
        </Text>
        <Text mb="5">
          Bei diesem Projekt geht es darum, dass junge, kreative Köpfe ihr
          Können der Familie, Freunden und anderen Potsdamer*innen auf der
          Inselbühne im Herzen Potsdams vorstellen können. Der Ausführung sind
          dabei keine Grenzen gesetzt – es kann sich um ein künstlerisches,
          musikalisches, theatralisches oder sportliches Werk handeln, als Solo,
          in einer kleinen oder auch großen Gruppe. Es sind auch noch Termine
          frei - falls ihr selber eine Idee habt, die ihr gerne präsentieren
          wollt!
        </Text>
        <Text mb="5">
          Unser Programm (einsehbar unter dem Menüpunkt "Veranstaltungen") ist
          vielfältig: Theaterschul-AGs führen ihr Stück auf, Musikschulen geben
          ein kleines Konzert, Jugendliche präsentieren ihr eigenes Werk und
          viel weiteres. Stöbert gerne in den Veranstaltungen, die Tickets sind
          mit wenigen Ausnahmen kostenlos.
        </Text>
      </PageTitle>
    </MotionPageTransition>
  );
}

JungeBuehne.Layout = Layout;
