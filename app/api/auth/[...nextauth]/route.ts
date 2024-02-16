import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials, req) => {
        // TODO: Add our own logic here
        const user = { id: "1", email: "ricardo@example.com" };
        return user;
      },
    }),
  ],
});

export { handler as GET, handler as POST };
