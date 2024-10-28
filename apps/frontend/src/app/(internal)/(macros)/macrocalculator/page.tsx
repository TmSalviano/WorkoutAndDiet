import Link from "next/link";

export default function MacroCalculator() {
    return (
        <div>
            <nav className="flex flex-row justify-around">
                <Link href={"/"}>Home Page</Link>
            </nav>
            <h1>This is the Macro Calculator Page</h1>
        </div>
    )
}