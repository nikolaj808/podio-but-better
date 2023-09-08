import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

export const UserAvatar = () => {
  return (
    <Avatar className="h-9 w-9">
      <AvatarImage
        src="https://avatars.githubusercontent.com/u/124599?v=4"
        alt="@shadcn"
      />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  );
};
