import { ResponseUser, getUser } from "@/services/getUsers";
import type { AuthOptions, User } from "next-auth";
import Credentials from "next-auth/providers/credentials";

export const authConfig: AuthOptions = {
  providers: [
    Credentials({
      credentials: {
        email: { label: "email", type: "email", required: true },
        password: { label: "password", type: "password", required: true },
        token: { label: "token", type: "text", required: true },
        id: { label: "id", type: "text", required: true },
      },
      async authorize(credentials) {
        if (
          !credentials?.email ||
          !credentials.password ||
          !credentials.token ||
          !credentials.id
        ) {
          return null;
        }

        const currentUser: ResponseUser = await getUser({
          id: Number(credentials?.id),
          token: credentials?.token,
        });

        if (currentUser && currentUser.email === credentials.email) {
          const { password, ...userWithoutPass } = currentUser;
          const respWithoutPassword = {
            email: userWithoutPass.email,
            id: String(userWithoutPass.id),
          };

          return respWithoutPassword as User;
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: "/signin",
  },
};
