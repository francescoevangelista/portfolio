"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
    const pathname = usePathname();
    const [time, setTime] = useState("");
    const [temp, setTemp] = useState<string | null>(null);

    useEffect(() => {
        // Clock
        const updateClock = () => {
            const now = new Date();
            setTime(now.toLocaleTimeString("it-IT", { hour: "2-digit", minute: "2-digit", hour12: false }));
        };
        updateClock();
        const clockInterval = setInterval(updateClock, 10000);

        // Weather
        const fetchWeather = async () => {
            try {
                const res = await fetch("https://api.open-meteo.com/v1/forecast?latitude=41.9028&longitude=12.4964&current_weather=true");
                if (!res.ok) throw new Error("Weather fetch failed");
                const data = await res.json();
                const t = Math.round(data.current_weather.temperature);
                setTemp(`${t}`);
            } catch (err) {
                setTemp("—");
            }
        };
        fetchWeather();
        const weatherInterval = setInterval(fetchWeather, 600000);

        return () => {
            clearInterval(clockInterval);
            clearInterval(weatherInterval);
        };
    }, []);

    const navLinks = [
        { name: "Works", href: "/" },
        { name: "About", href: "/about" },
    ];

    return (
        <header className="fixed top-0 left-0 w-full h-[28px] bg-bg border-b border-rule z-[100] flex items-center justify-between px-8">
            <div className="flex-1 text-micro text-muted">
                {time ? `${time} · Roma · ${temp}°C` : "— · Roma · —°C"}
            </div>

            <div className="flex-1 text-center text-micro text-muted">
                F.E.™ © 2026. All rights reserved
            </div>

            <nav className="flex-1 flex justify-end gap-6 text-micro">
                {navLinks.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.name}
                            href={link.href}
                            data-cursor="link"
                            className={`text-ink hover:text-muted transition-none pb-[2px] border-b ${isActive ? 'border-ink' : 'border-transparent'}`}
                        >
                            {link.name}
                        </Link>
                    );
                })}
            </nav>
        </header>
    );
}
