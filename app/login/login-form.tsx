import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function LoginForm() {
  return (
    <form className="flex flex-col gap-2 mx-auto max-w-md mt-10">
      <Input type="email" placeholder="Your email address" />
      <Input type="password" placeholder="Your password" />
      <Button type="submit" variant="secondary">
        Login
      </Button>
    </form>
  );
}
