import { Button } from "@chakra-ui/button";
import { FC, useEffect, useState } from "react";

const url = "https://www.eventbrite.de/static/widgets/eb_widgets.js";

interface TicketButtonProps {
  eventId: string;
}

const TicketButton: FC<TicketButtonProps> = ({ eventId }) => {
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchEBWidgets = () => new Promise((resolve, reject) => {
    if (window.EBWidgets) {
      return resolve(window.EBWidgets);
    }

    const script = document.createElement('script');
    script.async = true;
    script.src = url;
    script.addEventListener('load', () => resolve(window.EBWidgets));

    const handleErr = e => {
      console.error(`Failed to load Eventbrite script from ${url}`);
      reject(e);
    };

    script.addEventListener('error', handleErr);
    script.addEventListener('abort', handleErr);

    document.head.appendChild(script);
  });

  const onMount = async () => {
    try {
      const EBWidgets = await fetchEBWidgets() as any;

      EBWidgets.createWidget({
        widgetType: 'checkout',
        eventId: eventId,
        modal: true,
        modalTriggerElementId: `eb-${eventId}`,
        onOrderComplete: () => console.log("order complete")
      });
      setIsLoaded(true);
    } catch (e) {
      setIsLoaded(false);
    }
  }

  useEffect(() => {
    onMount()
  }, [])

  const handleClick = (e) => {
    if (isLoaded) return
    const url = `https://www.eventbrite.com/e/${eventId}`;
    window.open(url, '_blank');
  };

  return (
    <Button onClick={handleClick} colorScheme="green" size="lg" id={`eb-${eventId}`}>
      Tickets
    </Button>
  );
};

export default TicketButton;