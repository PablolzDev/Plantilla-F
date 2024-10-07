import NextAuth from "next-auth"; // eslint-disable-line @typescript-eslint/no-unused-vars
declare module "next-auth" {
  interface Session {
    user: {
      accessToken: unknown;
      id: string;
      name: string;
      email: string;
      language: string;
      tokenJWT: string;
    };
  }
}