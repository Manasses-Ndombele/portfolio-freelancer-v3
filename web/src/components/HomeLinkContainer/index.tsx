import Link from "next/link";
import { IoHomeSharp } from "react-icons/io5";
import "@/styles/components/home-link-container.scss";

export default function HomeLinkContainer() {
  return (
    <div id="home-link-container">
      <Link href="/">
        <span className="icon-container">
          <IoHomeSharp />
        </span>
        <span>
          Início
        </span>
      </Link>
    </div>
  );
}
