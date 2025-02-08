import { signInWithGoogle } from "@/lib/auth";

const GoogleSignIn = () => {
  const handleSignIn = async () => {
    try {
      const user = await signInWithGoogle();
      console.log("Signed in user:", user);
      // Redirect or update state as needed
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <button onClick={handleSignIn} style={{ padding: "10px 20px", fontSize: "16px" }}>
      Sign in with Google
    </button>
  );
};

export default GoogleSignIn;