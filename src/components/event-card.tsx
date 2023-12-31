import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Pencil, Trash, UserPlus } from "lucide-react";

type EventCardProps = {
  id: number;
  name: string;
  description: string;
  start: string;
  end: string;
  rsvp: string;
};

export const EventCard = ({ id, name, start, end, rsvp }: EventCardProps) => {
  const startTime = new Date(start);
  const endTime = new Date(end);
  const rsvpTime = new Date(rsvp);

  return (
    <a
      href={`/events/${id}`}
      className="flex items-center border-2 rounded-lg p-4"
    >
      <Avatar className="h-9 w-9">
        <AvatarImage src="/avatars/01.png" alt="Avatar" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{name}</p>
        <p className="flex space-x-2 text-sm text-muted-foreground">
          <span className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {startTime.toLocaleDateString()}
          </span>
          <span className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {endTime.toLocaleDateString()}
          </span>
          <span className="flex items-center">
            <Calendar className="mr-2 h-4 w-4" />
            {rsvpTime.toLocaleDateString()}
          </span>
        </p>
      </div>
      <div className="ml-auto space-x-2">
        <Button variant="ghost" size="icon">
          <UserPlus />
        </Button>
        <Button variant="ghost" size="icon">
          <Pencil />
        </Button>
        <Button variant="ghost" size="icon">
          <Trash />
        </Button>
      </div>
    </a>
  );
};
