import { useSession } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { BiUser } from "react-icons/bi";
import * as DropdownMenu from "@radix-ui/react-dropdown-menu";
import { AppRoute } from "~/const";

export function PersonalMenu(): JSX.Element | null {
  const { data: session } = useSession();

  if (!session) {
    return null;
  }

  return (
    <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button aria-label="Personal menu">
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
        </button>
      </DropdownMenu.Trigger>
      <DropdownMenu.Portal>
        <DropdownMenu.Content className="min-w-[120px] rounded-md bg-slate-50 p-1">
          <DropdownMenu.Item className="data-[highlighted]:bg-violet-50">
            <Link href={AppRoute.PERSONAL}>Orders</Link>
          </DropdownMenu.Item>
          <DropdownMenu.Item className="data-[highlighted]:bg-violet-50">
            <Link href={AppRoute.PERSONAL}>Favorites</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
  );
}