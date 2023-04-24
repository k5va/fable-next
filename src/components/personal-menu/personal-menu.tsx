import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import { AppRoute } from "~/const";
import { Dropdown } from "~/components";

export function PersonalMenu(): JSX.Element | null {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <Dropdown>
      <Dropdown.Button aria-label="Personal menu">
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
      </Dropdown.Button>
      <Dropdown.Menu>
        <Dropdown.MenuItem>
          <Link href={AppRoute.PERSONAL}>Orders</Link>
        </Dropdown.MenuItem>
        <Dropdown.MenuItem>
          <Link href={AppRoute.FAVORITES}>Favorites</Link>
        </Dropdown.MenuItem>
      </Dropdown.Menu>
    </Dropdown>
  );
}
