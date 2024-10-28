import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav className="flex flex-row gap-5 justify-around">
        <Link href={"/login"}>Login Page</Link>
        <Link href={"/register"}>Register Page</Link>
        <Link href={"/diet"}>Diet Page</Link>
        <Link href={"/workout"}>Workout Page</Link>
        <Link href={"/macrotracker"}>Macro Tracker Page</Link>
        <Link href={"/macrocalculator"}>Macro Calculator Page</Link>
        <Link href={"/temp"}>Temp Page</Link>
      </nav>
      <p>This is the beginning of my application</p>
    </div>
  );
}
