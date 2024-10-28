import Link from "next/link";

export default function Workout() {
    return (
        <div>
            <nav className="flex flex-row justify-around">
                <Link href={"/"}>Home Page</Link>
            </nav>
            <h1>This is the Workout Page</h1>
            <p>This page is for setting up your workout plan</p>
        </div>
    )
}