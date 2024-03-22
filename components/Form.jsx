import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import {
  User,
  MailIcon,
  ArrowRightIcon,
  MessageSquare,
  Mail,
} from "lucide-react";

const Form = () => {
  return (
    <form className="flex flex-col gap-y-4">
      {/* input */}
      <div className="relative flex items-center">
        <Input type="name" id="name" placeholder="Email" />
        <User className="absolute right-6" size={20} />
      </div>

      {/* input */}
      <div className="relative flex items-center">
        <Input type="email" id="email" placeholder="Name" />
        <MailIcon className="absolute right-6" size={20} />
      </div>

      {/* input */}
      <div className="relative flex items-center">
        <Textarea type="name" id="name" placeholder="Type you Message Here" />
        <MessageSquare className="absolute top-4 right-6" size={20} />
      </div>

      <Button className="flex items-center gap-x-1 xl:max-w-[166px]">
        Let's Talk
        <ArrowRightIcon size={20} />
      </Button>
    </form>
  );
};

export default Form;
