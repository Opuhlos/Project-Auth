import { NextAuthConfig } from "next-auth";

export const authConfig: NextAuthConfig = {
    session: {
        strategy: "jwt",
    },
    providers: [],
    callbacks: {
        async jwt({ token, user }) {
          if (user) {
            token.id = user.id;
            token.username = user.username;
          }
          return token;
        },
        async session({ session, token }) {
          session.user = {
            id: token.id,
            username: token.username,
          };
          return session;
        },
      },
    };