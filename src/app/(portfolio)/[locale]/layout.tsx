import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../../globals.css";
import {
  NavigationBar,
  Project,
} from "@/components/molocules/NavigationBar/NavigationBar";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { routing } from "@/i18n/routing";
import { notFound } from "next/navigation";
import { setRequestLocale } from "next-intl/server";
import configPromise from "@payload-config";
import { getPayload } from "payload";
import { cache } from "react";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function RootLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }
  const projects = await queryProject();

  setRequestLocale(locale);

  return (
    <html lang={locale}>
      <NextIntlClientProvider>
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <div id="myportal" />
          <div className="flex p-8 md:p-14 lg:p-20 justify-center">
            <div className="flex gap-4 w-full max-w-[1200px]">
              <NavigationBar projects={projects} socialMedia={[]} />
              {children}
            </div>
          </div>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}

const queryProject = cache(async () => {
  const payload = await getPayload({ config: configPromise });
  const projectsData = await payload.find({
    collection: "project",
    draft: false,
    limit: 1000,
    locale: "all",
    overrideAccess: false,
    pagination: false,
  });

  const projects = projectsData.docs.map((project) => {
    return {
      id: project.id,
      url: project.slug ?? {},
      name:
        typeof project.title === "object" && project.title !== null
          ? project.title
          : { en: "", se: "", hu: "" },
    } as Project;
  });

  return projects;
});
