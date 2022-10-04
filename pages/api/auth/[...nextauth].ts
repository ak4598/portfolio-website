import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GITHUB_ID as string,
      clientSecret: process.env.GITHUB_SECRET as string,
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {
    //@ts-ignore
    async signIn({ user }) {
      const isAllowedToSignIn =
        user.email === process.env.GITHUB_ID_EMAIL &&
        user.id === process.env.GITHUB_ID_ID;
      console.log(isAllowedToSignIn);
      if (isAllowedToSignIn) {
        return true;
      } else {
        return false;
      }
    },
  },
};
export default NextAuth(authOptions);
