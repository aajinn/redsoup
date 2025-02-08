import { GooglesignOut } from "@/lib/auth";

const GoogleSignOut = () => {
  const handleSignOut = async () => {
    try {
      const user = await GooglesignOut();
      console.log("Signed in user:", user);
      // Redirect or update state as needed
    } catch (error) {
      console.error("Error during sign-in:", error);
    }
  };

  return (
    <button onClick={handleSignOut} style={{ padding: "10px 20px", fontSize: "16px" , color:"red"}}>
      Sign out
    </button>
  );
};

export default GoogleSignOut;