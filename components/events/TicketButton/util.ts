export function createScriptElement(url: string): HTMLScriptElement {
  const newScript: HTMLScriptElement = document.createElement("script");
  newScript.src = url;
  return newScript;
}

declare global {
  interface Window { EBWidgets: any; }
}

window.EBWidgets = window.EBWidgets || {};

export function createWidget(eventId: string) {
  window.EBWidgets.createWidget({
    widgetType: 'checkout',
    eventId: '154129717133',
    modal: true,
    modalTriggerElementId: `eventbrite-${eventId}`,
  })
}
