"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function RegisterForm() {
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    try {
      const response = await fetch("/api/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        toast({
          description: "User registered successfuly",
        });
      } else {
        toast({
          variant: "destructive",
          description: "User not registered",
        });
      }
    } catch (error) {
      toast({
        variant: "destructive",
        description:
          "An error occoured while registering the user. Please try again.",
      });
      console.log("error", error);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-2 mx-auto max-w-md mt-10"
    >
      <Input type="email" name="email" placeholder="Your email address" />
      <Input type="password" name="password" placeholder="Your password" />
      <Button type="submit" variant="secondary">
        Register
      </Button>
    </form>
  );
}
