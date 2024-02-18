import { getServerSession } from "next-auth";
import LoginForm from "./login-form";
import { redirect } from "next/navigation";

export default async function LoginPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="mx-auto">
      <h1 className="text-2xl text-center mt-20<">Login Page</h1>
      <LoginForm />
    </div>
  );
}
