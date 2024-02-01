import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import EmailProvider from "next-auth/providers/email";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "./mongodbprovider";

export const authOptions = {
  providers: [
    EmailProvider({
      server: {
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        auth: {
          user: process.env.SMTP_USER,
          pass: process.env.SMTP_PASSWORD,
        },
      },
      from: process.env.SMTP_FROM,
    }),

    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ],

  adapter: MongoDBAdapter(clientPromise),

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  callbacks: {
    async session({ token, session }) {
      if (token) {
        session.accessToken = token.accessToken;
        session.user.id = token.id;
      }
      return session;
    },
    async jwt({ token, account, user }) {
      if (account) {
        token.id = user.id;
        token.accessToken = account.access_token;
      }
      return token;
    },
  },
};

// import CredentialsProvider from "next-auth/providers/credentials";
// import User from "@/models/User";
// import bcrypt from "bcryptjs";
// import connect from "./db";

// callbacks: {
//   async signIn({ user, account }) {
//     if (account?.provider === "credentials") {
//       return true;
//     } else {
//       try {
//         await connect();
//         const existingUser = await User.findOne({ email: user.email });
//         if (!existingUser) {
//           const newUser = new User({
//             email: user.email,
//             username: user.name,
//             image: user.image,
//             provider: account?.provider,
//           });
//           await newUser.save();
//         }
//       } catch (error) {
//         console.log(error);
//         return true;
//       } finally {
//         return true;
//       }
//     }
//   },
// },

// CredentialsProvider({
//   id: "credentials",
//   name: "Credentials",
//   credentials: {
//     email: { label: "Email", type: "email" },
//     password: { label: "Password", type: "password" },
//   },
//   async authorize(credentials) {
//     try {
//       const user = await login(credentials);
//       return user;
//     } catch (error) {
//       console.log(error);
//       return null;
//     }
//   },
// }),

// async function login(credentials) {
//   try {
//     await connect();
//     const user = await User.findOne({ email: credentials.email });
//     if (!user) throw new Error("invalid email");
//     const isCorrect = await bcrypt.compare(credentials.password, user.password);
//     if (!isCorrect) throw new Error("invalid password");
//     return user;
//   } catch (error) {
//     throw error;
//   }
// }
