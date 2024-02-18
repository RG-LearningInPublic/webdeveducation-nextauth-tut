import { getServerSession } from "next-auth";
import RegisterForm from "./register-form";
import { redirect } from "next/navigation";

export default async function RegisterPage() {
  const session = await getServerSession();
  if (session) {
    redirect("/");
  }
  return (
    <div className="mx-auto">
      <h1 className="text-2xl text-center mt-20<">Register Page</h1>
      <RegisterForm />
    </div>
  );
}
