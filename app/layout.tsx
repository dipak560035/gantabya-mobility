
// import "./globals.css"

// export default function RootLayout({
//   children,
// }: {
//   children: React.ReactNode
// }) {
//   return (
//     <html lang="en" suppressHydrationWarning>
//       <body>
      
//           {children}
       
//       </body>
//     </html>
//   )
// }



import type { Metadata } from "next";
import "./globals.css";
import Navbar from "./Features/Navbar/page";



export const metadata: Metadata = {
  title: "Gantabya Mobility",
  description: "EV Mobility Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex min-h-screen flex-col">
        {/* Navbar */}
        <Navbar />  

        {/* Main Content */}
        <main className="flex-1">
          {children}
        </main>

        {/* Footer */}
        
      </body>
    </html>
  );
}