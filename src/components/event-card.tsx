import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Calendar, Pencil, Trash, UserPlus } from "lucide-react";

type EventCardProps = {
  title: string;
  description: string;
  startTime: Date;
  endTime: Date;
  rsvp: Date;
};

export const EventCard = ({
  title,
  startTime,
  endTime,
  rsvp,
}: EventCardProps) => {
  return (
    <a href="/event" className="flex items-center border-2 rounded-lg p-4">
      <Avatar className="h-9 w-9">
        <AvatarImage src="/avatars/01.png" alt="Avatar" />
        <AvatarFallback>OM</AvatarFallback>
      </Avatar>
      <div className="ml-4 space-y-1">
        <p className="text-sm font-medium leading-none">{title}</p>
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
            {rsvp.toLocaleDateString()}
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
