import NextAuth from 'next-auth'
import GoogleProvider from 'next-auth/providers/google'
import { MongoDBAdapter } from "@auth/mongodb-adapter"
import clientPromise from "../../../lib/mongodb"

export default NextAuth({
    providers: [
        GoogleProvider({
            clientId: "243859095126-0ei46b7ntk92e9fke0q1v0fli96epkld.apps.googleusercontent.com",
            clientSecret: "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" ,
        }),
    ],
    adapter : MongoDBAdapter(clientPromise),
});