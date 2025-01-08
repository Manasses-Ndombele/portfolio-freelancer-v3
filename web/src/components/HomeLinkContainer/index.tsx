import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";

export default function HomeLinkContainer() {
  return (
    <div id="home-link-area">
      <Link href="/">
        <IoHomeSharp />
      </Link>
    </div>
  );
}
