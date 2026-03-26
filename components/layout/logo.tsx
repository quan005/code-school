import Link from "next/link";

export function Logo() {
  return (
    <Link className="logo-mark" href="/">
      <span aria-hidden="true" className="logo-mark-orb" />
      <span>Code School</span>
    </Link>
  );
}
