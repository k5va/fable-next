import { useSession, signIn, signOut } from "next-auth/react";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { motion } from "framer-motion";

export function LoginButton(): JSX.Element {
  const { data: session } = useSession();

  const onLoginClick = async () => {
    if (session) {
      return await signOut();
    }
    return await signIn();
  };

  return (
    <motion.button
      className="flex items-center gap-1"
      onClick={onLoginClick}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.2 }}
    >
      {session ? (
        <BiLogOut className="text-2xl" />
      ) : (
        <BiLogIn className="text-2xl" />
      )}
    </motion.button>
  );
}
