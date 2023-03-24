import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { AppRoute } from "~/const";

export function PersonalMenu(): JSX.Element | null {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <Link
      href={AppRoute.PERSONAL}
      className="flex items-center justify-center gap-1 transition hover:-translate-y-[1px] hover:scale-110"
    >
      {session.user.image ? (
        <Image
          width="20"
          height="20"
          src={session.user.image}
          alt="user's avatar"
        />
      ) : (
        <BiUser className="text-2xl" />
      )}
    </Link>
  );
}
