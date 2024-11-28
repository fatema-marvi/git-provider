import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";
//import Google from "next-auth/providers/google";

export const {handlers, signIn, signOut, auth} = NextAuth({
    providers:[                                            //providers is a property of an array
        GithubProvider ({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        // GoogleProvider ({
        //     clientId=
        //     clientSectret=
        // })
    ]
})