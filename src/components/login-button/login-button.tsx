import { useSession, signIn, signOut } from "next-auth/react";

export function LoginButton(): JSX.Element {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        Signed in as {session.user.email}
        <button
          className="rounded-full bg-orange-500 px-2 text-white"
          onClick={() => void signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <button
      className="rounded-full bg-orange-500 px-2 text-white"
      onClick={() => void signIn()}
    >
      Sign in
    </button>
  );
}
