import Image from "next/image";
import { MapPin, Mail } from "lucide-react";
import { ThemeToggle } from "../components/theme-toggle";
import { siteConfig } from "../config/site-config";
export default function Home() {
  return (
    <main className="flex flex-1 w-full h-full gap-10 ">
      {/* Left Side */}
      <div className="flex-1 p-8 h-full max-w-md">
        <div className="flex flex-col h-full rounded-md space-y-6">
          {/* Avatar */}
          <Image
            alt="avatar"
            src="/avatar.png"
            width="120"
            height="120"
            priority
            loading="eager"
          />
          {/* Content Container*/}
          <div>
            {/* Title corregir color*/}
            {/* corregir color*/}
            <div className="text-xl font-semibold text-blue-500">
              {siteConfig.title}
            </div>

            {/* FullName */}
            <h1 className="text-4xl font-bold mt-2">{siteConfig.creator}</h1>
            {/* Bio */}
            <p className="text-2xl font-light text-neutral-500">
              {siteConfig.bio}
            </p>
          </div>
          {/* Buttons Container*/}
          <div className="flex items-center justify-between gap-6 text-sm">
            <a
              className="flex items-center w-full gap-2 px-3 py-2 border rounded-md border-neutral-200 dark:border-neutral-800"
              href={siteConfig.locationLink}
            >
              <MapPin size="16" />
              {siteConfig.location}
            </a>
            <a
              className="flex items-center w-full gap-2 px-3 py-2 border rounded-md border-neutral-200 dark:border-neutral-800"
              href={`mailito:${siteConfig.email}`}
            >
              <Mail size="16" />
              Contáctame
            </a>
          </div>
          {/* Footer */}
          <div className="border-t border-neutral-200 dark:border-neutral-800 pt-6 text-xs  flex items-center justify-between">
            <div className="text-neutral-500">
              Creado por Pablo | 2024. Todos los derechos reservados
            </div>
            <ThemeToggle />
          </div>
        </div>
      </div>
      {/* Right Side */}
      <div className="flex-1 p-6 h-full">
        <div className="flex items-center h-full justify-center rounded-md dark:bg-emerald-700 ">
          Right Side
        </div>
      </div>
    </main>
  );
}
