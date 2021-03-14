import { format, parseISO } from "date-fns";
import { de } from "date-fns/locale";

export function formatDate(date: string): string {
  return format(parseISO(date), "d. LLLL yyyy", { locale: de });
}
