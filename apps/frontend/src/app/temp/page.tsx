import Link from "next/link";

export default function Practice() {
    return (
        <div>
            <nav className="flex justify-around">
                <Link href={"/"}>Home Page</Link>
            </nav>
            <h1>THis is the Practice Page</h1>
            <p>This page will be used to practice React, Nextjs, Tailwind and so on concepts before applying them across the app</p>
        </div>
    )
}