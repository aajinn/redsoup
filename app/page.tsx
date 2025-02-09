"use client";
import Extra from "@/components/layout/Chat";
import GoogleSignIn from "@/components/auth/GoogleSignIn";
import Main from "@/components/layout/Main";
import Side from "@/components/layout/Side";
import { useAuth } from "@/context/AuthContext";


export default function Home() {
  const { user } = useAuth();

  return (
  <div className="flex ">
    <div>
      {user ? (
        <div>
      
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
