import { format, parseISO } from "date-fns";
import { de } from "date-fns/locale";

export function formatDate(date: Date): string {
  return format(date, "d. LLLL yyyy", { locale: de });
}
