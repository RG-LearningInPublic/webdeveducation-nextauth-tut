import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();
    console.log("register", { email, password });

    //TODO: Implement database logic here

    return NextResponse.json({ message: "User registered successfuly" });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json({ message: "User not registered", error });
  }
}
