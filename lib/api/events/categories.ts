import axios from "axios";
import { token } from ".";

interface EventCategory {
  name: string;
}

export async function getEventCategories(): Promise<EventCategory[]> {
  return axios
    .get("https://www.eventbriteapi.com/v3/categories", {
      headers: { Authorization: `Bearer ${token}` },
      params: {
        locale: "de_DE",
      },
    })
    .then((res) => res.data.categories)
    .then((categories) =>
      categories.map((category) => ({
        id: category.id,
        name: category.name_localized,
      }))
    );
}
