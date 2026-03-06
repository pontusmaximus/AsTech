const TICKET_NUMBER = 3;
const TICKET_PREFIX = `#${TICKET_NUMBER}`;

export const withTicketNumber = (subject?: string) => {
  const trimmed = subject?.trim();
  if (!trimmed) {
    return TICKET_PREFIX;
  }
  return `${TICKET_PREFIX} - ${trimmed}`;
};

export const buildMailto = (to: string, subject?: string, body?: string) => {
  const params = new URLSearchParams();
  params.set('subject', withTicketNumber(subject));
  if (body?.trim()) {
    params.set('body', body);
  }
  return `mailto:${to}?${params.toString()}`;
};
