import axios from "axios";
import { token } from ".";

const organizationId = "528149989473";

interface Event {
  id: string;
  category: Record<any, any>;
  status: string;
}

interface GetEventOptions {
  showPrivate?: boolean;
}

export async function getEvents(
  options: GetEventOptions = {}
): Promise<Event[]> {
  const { showPrivate = false } = options;

  return axios
    .get(
      `https://www.eventbriteapi.com/v3/organizations/${organizationId}/events`,
      {
        headers: { Authorization: `Bearer ${token}` },
        params: {
          expand: "category,subcategory",
          locale: "de_DE",
          status: "live,started,ended,completed,canceled",
        },
      }
    )
    .then((res) => res.data.events)
    .then((res) => res.filter((event) => (showPrivate ? true : event.listed)));
}

export async function getEvent(id: string): Promise<Event> {
  const event = await axios
    .get(`https://www.eventbriteapi.com/v3/events/${id}`, {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        expand: "category,subcategory",
        locale: "de_DE",
      },
    })
    .then((res) => res.data);

  const eventDescription = await axios
    .get(`https://www.eventbriteapi.com/v3/events/${id}/description`, {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        expand: "category,subcategory",
        locale: "de_DE",
      },
    })
    .then((res) => res.data?.description);

  event.description = eventDescription;

  return event;
}
