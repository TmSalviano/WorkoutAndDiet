import Link from "next/link";

export default function MacroTracker() {
    return (
        <div>
            <nav className="flex flex-row gap-5 justify-around">
                <Link href={"/"}>Home Page</Link>
            </nav>
            <h1>This is the Macro Tracker Page</h1>
            <p>This page is for tracking your macros daily storing information about the amount of protein, fat, carbohydartes and fiber optionally that you ate and comparing it to your daily macros</p>
        </div>
    )
}