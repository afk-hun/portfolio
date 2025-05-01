import { ReactNode } from 'react';
import '../globals.css';
// /workspaces/portfolio/src/app/(test)/layout.tsx


export const metadata = {
    title: 'My Portfolio',
    description: 'A portfolio built with Next.js',
};

export default function RootLayout({ children }: { children: ReactNode }) {
    return (
        <html lang="en">
            <body>
                {children}
            </body>
        </html>
    );
}