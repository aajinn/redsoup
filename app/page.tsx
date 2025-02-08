"use client";
import Extra from "@/components/Chat";
import GoogleSignIn from "@/components/auth/GoogleSignIn";
import Main from "@/components/Main";
import Side from "@/components/Side";
import { useAuth } from "@/context/AuthContext";
import GoogleSignOut from "@/components/auth/GoogleSigInOut";


export default function Home() {
  const { user } = useAuth();

  return (
  <div className="flex ">
    <div>
      {user ? (
        <div>
          <h1>Welcome, {user.displayName}</h1>
          <p>Email: {user.email}</p>
          <GoogleSignOut/>
        </div>
      ) : (
        <div>
        <p>Please sign in.</p>
        <GoogleSignIn/>
        </div>
      )}
    </div>
<Side/>
<Main/>
<Extra/>

  </div>
  );
}
