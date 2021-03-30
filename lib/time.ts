export function formatDate(date: Date): string {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };

  return Intl.DateTimeFormat("de-DE", options).format(date)
}
