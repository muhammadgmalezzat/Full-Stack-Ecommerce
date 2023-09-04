import { useSession, signIn, signOut } from "next-auth/react"

export default function Home() {
    const { data: session } = useSession()
console.log(process.env.NEXTAUTH_CLIENT_ID)
  if (!session) {
    return (
      <div className="bg-blue-900 w-screen h-screen flex items-center">
        <div className="text-center w-full">
          <button onClick={()=> signIn("google")} className="bg-white p-2 rounded-lg px-4">
            Login With Google
          </button>
        </div>
      </div>
    )
  } else {
      return <>
    Signed in as {session.user.email} <br/>
      <button onClick={() => signOut()}>Sign out</button>
  </>
  }

};
