export type Event = {
  id: number;
  ownerId: string;
  name: string;
  description: string;
  start: string;
  end: string;
  rsvp: string;
};

export async function getEvents() {
  const response = await fetch("http://localhost:3000/events");

  const json = await response.json();

  return json as Event[];
}

export async function getEventById(id: number) {
  const response = await fetch("http://localhost:3000/events/" + id);

  const json = await response.json();

  return json as Event;
}
