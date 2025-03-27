import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faApple } from "@fortawesome/free-brands-svg-icons";
import { LangSelect } from "@/components/molocules/LangSelect/LangSelect";
import Masonry from "@/components/molocules/MasonryGrid/MasonryGrid";

export default function Home() {
  const images = [
    {
      id: 1,
      src: "https://picsum.photos/id/237/2000/3000",
      width: 2000,
      height: 3000,
      alt: "Image 1",
    },
    {
      id: 2,
      src: "https://picsum.photos/id/238/3000/2000",
      width: 3000,
      height: 2000,
      alt: "Image 1",
    },
    {
      id: 3,
      src: "https://picsum.photos/id/236/4000/1500",
      width: 4000,
      height: 1500,
      alt: "Image 1",
    },
    {
      id: 4,
      src: "https://picsum.photos/id/235/2000/2000",
      width: 2000,
      height: 2000,
      alt: "Image 1",
    },
    {
      id: 5,
      src: "https://picsum.photos/id/233/3000/2000",
      width: 3000,
      height: 2000,
      alt: "Image 1",
    },
    {
      id: 6,
      src: "https://picsum.photos/id/234/4000/1500",
      width: 4000,
      height: 1500,
      alt: "Image 1",
    },
    {
      id: 7,
      src: "https://picsum.photos/id/232/2000/2000",
      width: 2000,
      height: 2000,
      alt: "Image 1",
    },
    {
      id: 8,
      src: "https://picsum.photos/id/231/3000/2000",
      width: 3000,
      height: 2000,
      alt: "Image 1",
    },
    {
      id: 9,
      src: "https://picsum.photos/id/230/2000/3000",
      width: 2000,
      height: 3000,
      alt: "Image 1",
    },
    {
      id: 10,
      src: "https://picsum.photos/id/239/2000/2000",
      width: 2000,
      height: 2000,
      alt: "Image 1",
    },

    // Add more images as needed
  ];

  return (
    <main style={{ padding: 20 }}>
      {/* <MasonryGrid items={items} /> */}
      <Masonry images={images} />
      {/* <MosaicLayout images={images} /> */}
    </main>
  );

  // return (
  // <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
  //   <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
  //     <Image
  //       className="dark:invert"
  //       src="/next.svg"
  //       alt="Next.js logo"
  //       width={180}
  //       height={38}
  //       priority
  //     />
  //     <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
  //       <li className="mb-2 tracking-[-.01em]">
  //         Get started by editing{" "}
  //         <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-[family-name:var(--font-geist-mono)] font-semibold">
  //           src/app/page.tsx
  //         </code>
  //         .
  //       </li>
  //       <li className="tracking-[-.01em]">
  //         Save and see your changes instantly.
  //       </li>
  //     </ol>

  //     <LangSelect onLangSelect={() => {}} />

  //     <div className="flex gap-4 items-center flex-col sm:flex-row">
  //       <a
  //         className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 sm:w-auto"
  //         href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         <FontAwesomeIcon icon={faApple} />
  //         <Image
  //           className="dark:invert"
  //           src="/vercel.svg"
  //           alt="Vercel logomark"
  //           width={20}
  //           height={20}
  //         />
  //         Deploy now
  //       </a>
  //       <a
  //         className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent font-medium text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5 w-full sm:w-auto md:w-[158px]"
  //         href="https://nextjs.org/docs?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Read our docs
  //       </a>
  //     </div>
  //   </main>
  //   <footer className="row-start-3 flex gap-[24px] flex-wrap items-center justify-center">
  //     <a
  //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //       href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <Image
  //         aria-hidden
  //         src="/file.svg"
  //         alt="File icon"
  //         width={16}
  //         height={16}
  //       />
  //       Learn
  //     </a>
  //     <a
  //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //       href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <Image
  //         aria-hidden
  //         src="/window.svg"
  //         alt="Window icon"
  //         width={16}
  //         height={16}
  //       />
  //       Examples
  //     </a>
  //     <a
  //       className="flex items-center gap-2 hover:underline hover:underline-offset-4"
  //       href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
  //       target="_blank"
  //       rel="noopener noreferrer"
  //     >
  //       <Image
  //         aria-hidden
  //         src="/globe.svg"
  //         alt="Globe icon"
  //         width={16}
  //         height={16}
  //       />
  //       Go to nextjs.org →
  //     </a>
  //   </footer>
  // </div>
  // );
}
