'use client';

import { usePathname } from "next/navigation";
import { useMemo } from "react";
import { HiHome } from "react-icons/hi";
import { BiSearch } from "react-icons/bi";
import Box from "./Box";

export default function Sidebar({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();

    const routes = useMemo(() => [
        {
            icon: HiHome,
            label: 'Home',
            active: pathname !== '/search', // active when pathname is not '/search'
            href: '/',
        },
        {
            icon: BiSearch,
            label: 'Search',
            active: pathname === '/search', // active when pathname is '/search'
            href: '/search',
        }
    ], [pathname]); // dependency array should contain 'pathname'

    return (
        <div className="flex h-full">
            <div
                className="
                    hidden
                    md:flex
                    flex-col
                    gap-y-2
                    bg-black
                    h-full
                    w-[300px]
                    p-2
                ">
                <Box>
                    <div className>

                    </div>
                </Box>
                <Box className="oveflow-y-auto h-full">
                   Song library
                </Box>
            </div>
        </div>
    );
}
