import NextAuth, { NextAuthOptions, Session } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { mongooseConnect } from "@/lib/mongoose";
import UserModel from "@/models/user";

export const authOptions: NextAuthOptions = {
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials) => {
        if (!credentials) return;

        await mongooseConnect();

        const user = await UserModel.findOne({
          email: credentials.email,
        }).select("+password");

        if (!user) {
          throw new Error("No user with a matching email was found.");
        }

        const pwValid = await user.comparePassword(credentials.password);

        if (!pwValid) {
          throw new Error("Your password is invalid");
        }

        return user;
      },
    }),
  ],
  callbacks: {
    async jwt({ user, token }) {
      if (user) {
        // Include only the necessary data in the token
        token.user = { email: user.email };
      }
      return token;
    },
    async session({ session, token }) {
      if (token?.user) {
        // Store the user data from the token in session.user
        session.user = token.user;
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET,
};

export default NextAuth(authOptions);
