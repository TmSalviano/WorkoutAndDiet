import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex flex-row gap-5 justify-around">
        <Link href={"/login"}>Login Page</Link>
        <Link href={"/register"}>Register Page</Link>
        <Link href={"/practice"}>Practice Page</Link>
        <Link href={"/workout"}>Workout Page</Link>
      </nav>
      <p>This is the beginning of my application</p>
    </div>
  );
}
