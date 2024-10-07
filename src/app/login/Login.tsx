"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signIn, useSession } from "next-auth/react";
import Cookies from "js-cookie";
import FormContainer from '../../components/container/Form';
import InputField from '../../components/UI/InputField';
import Button from '../../components/UI/Button';

interface User {
  id: string;
  name: string;
  email: string;
  language: string;
  tokenJWT: string;
}

export default function LoginPage() {
  const router = useRouter();
  const { status, data: session } = useSession();

  const [username, setUsername] = useState("test@example.com");
  const [password, setPassword] = useState("password123");
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    console.log({ status, session });
    if (status === "authenticated") {
      const { user }: { user: User } = session;
      Cookies.set("locale", user.language);
      console.log("Sign in successful");
      router.push("/");
      router.refresh();
    }
  }, [status, session]);

  const handleSignIn = async () => {
    const result = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (result?.error) {
      setError(result.error);
    } else {
        router.push("/");
      console.log("Sign in successful");
    }
  };

  return (
    <div>
      {status === "loading" && <p>Loading...</p>}

      {status === "unauthenticated" && (
        <FormContainer>
          <h3>Login</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleSignIn();
            }}
          >
            <div>
              <label htmlFor="username">User Name:</label>
              <InputField
                id="username"
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
            <div>
              <label htmlFor="password">Password:</label>
              <InputField
                id="password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            <Button type="submit">Sign In</Button>
          </form>

          {error && <p style={{ color: "red" }}>{error}</p>}
        </FormContainer>
      )}
    </div>
  );
}