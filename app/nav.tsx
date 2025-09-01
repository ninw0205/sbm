import { SquareLibraryIcon } from "lucide-react";
import Link from "next/link";
import ThemeChanger from "@/components/theme-changer";

export default function Nav() {
  return (
    <div className="flex items-center gap-5">
      <Link
        href="/bookcase"
        className="btn-icon [&>svg:hover]:stroke-blue-800 [&>svg]:stroke-blue-500"
      >
        <SquareLibraryIcon />
      </Link>
      <ThemeChanger />
      <Link href="/my" className="font-semibold">
        My
      </Link>
      <Link href="/sign" className="font-semibold">
        Login
      </Link>
    </div>
  );
}
