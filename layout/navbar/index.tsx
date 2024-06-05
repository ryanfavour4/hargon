import { LogoIcon, MenuIcon } from "@/public/svg";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Navbar() {
    return (
        <nav className="relative shadow-sm py-4">
            <div className="wrapper flex items-center justify-between">
                <Link href={"/"}>
                    <LogoIcon />
                </Link>

                <ul className="md:flex hidden items-center gap-8">
                    <li>
                        <Link
                            className="block text-secondary hover:primary hover:font-semibold"
                            href={"/"}
                        >
                            Shop
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block text-secondary hover:primary hover:font-semibold"
                            href={"/"}
                        >
                            Partnership
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block text-secondary hover:primary hover:font-semibold"
                            href={"/"}
                        >
                            Auction
                        </Link>
                    </li>
                    <li>
                        <Link
                            className="block text-secondary hover:primary hover:font-semibold"
                            href={"/"}
                        >
                            Company
                        </Link>
                    </li>
                </ul>

                <button className="btn-primary hidden md:inline-block w-fit">
                    Get Started
                </button>

                <MenuIcon className="h-10 w-10 md:hidden cursor-pointer" />
            </div>
        </nav>
    );
}
