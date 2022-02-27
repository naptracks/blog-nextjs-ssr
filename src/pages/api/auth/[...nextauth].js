import NextAuth from "next-auth"
import GitHubProvider from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials"


// providers for external authentications

export default NextAuth({
    providers: [
        // CredentialsProvider({
        //     // The name to display on the sign in form (e.g. 'Sign in with...')
        //     name: 'Credentials',
        //
        //     credentials: {
        //         username: { label: "Username", type: "text", placeholder: "jsmith" },
        //         password: {  label: "Password", type: "password" }
        //     },
        //     async authorize(credentials, req) {
        //
        //         const res = await fetch("http://localhost:3000/api/fakeAuth", {
        //             method: 'POST',
        //             body: JSON.stringify(credentials),
        //             headers: { "Content-Type": "application/json" }
        //         })
        //         const user = await res.json()
        //
        //         // If no error and we have user data, return it
        //         if (res.ok && user) {
        //             return user
        //         }
        //         // Return null if user data could not be retrieved
        //         return null
        //     }
        // }),
        GitHubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),

    ],
    jwt: {
        signingKey: process.env.JWT_SIGNING_PRIVATE_KEY,
    },
    callbacks: {
        async jwt({ token, account }) {
            // Persist the OAuth access_token to the token right after signin
            if (account) {
                token.accessToken = account.access_token
            }
            return token
        },
        async session({ session, token }) {
            // Send properties to the client, like an access_token from a provider.
            session.accessToken = token.accessToken
            return session
        },
        async redirect({url, baseUrl}) {
            return baseUrl
        }
    }
})

