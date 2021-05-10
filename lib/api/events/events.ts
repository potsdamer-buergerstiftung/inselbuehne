import axios from "axios";

const organizationId = "528149989473";

interface Event {
  category: Record<any, any>;
}

export async function getEvents(): Promise<Event[]> {
  return axios
    .get(
      `https://www.eventbriteapi.com/v3/organizations/${organizationId}/events`,
      {
        headers: { Authorization: `Bearer ${"FSXSKJNWHUJ4RMISG2IP"}` },
        params: {
          expand: "category,subcategory",
          locale: "de_DE",
        },
      }
    )
    .then((res) => res.data);
}
