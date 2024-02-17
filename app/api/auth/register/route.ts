import { NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
import { hash } from "bcrypt";

export async function POST(request: Request) {
  try {
    const { email, password } = await request.json();

    //TODO: Add validation for email and password

    const hashedPassword = await hash(password, 10);

    const dbResult = await sql`
      INSERT INTO users (email, password)
      VALUES (${email}, ${hashedPassword})
    `;
    if (!dbResult.rowCount || dbResult.rowCount === 0) {
      return NextResponse.json(
        { message: "User not registered to database" },
        { status: 500 }
      );
    }
    return NextResponse.json({ message: "User registered successfuly" });
  } catch (error) {
    console.log("error", error);
    return NextResponse.json(
      { message: "User not registered", error },
      { status: 500 }
    );
  }
}
