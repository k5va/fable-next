import { useSession, signIn, signOut } from "next-auth/react";
import { BiLogIn, BiLogOut } from "react-icons/bi";

export function LoginButton(): JSX.Element {
  const { data: session } = useSession();

  const onLoginClick = async () => {
    if (session) {
      return await signOut();
    }
    return await signIn();
  };

  return (
    <button
      className="flex items-center gap-1 hover:animate-scale"
      onClick={onLoginClick}
    >
      {session ? (
        <BiLogOut className="text-2xl" />
      ) : (
        <BiLogIn className="text-2xl" />
      )}
    </button>
  );
}
