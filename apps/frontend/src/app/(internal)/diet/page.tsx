import Link from "next/link";

export default function Diet() {
    return (
        <div>
            <nav className="flex flex-row justify-around">
                <Link href={"/"}>Home Page</Link>
            </nav>
            <h1>This is the Diet Page</h1>
        </div>
    )
}