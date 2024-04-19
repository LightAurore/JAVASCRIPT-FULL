
import { Inter, Abhaya_Libre } from "next/font/google";

// Gestion de fonts
const inter = Inter({ subsets: ["latin"] });
const long = Abhaya_Libre({ subsets: ["latin"], weight: "800" });

export default function Home() {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <h1 className={`${long.className}`}>Demo NextJS - Page Router</h1>
    </main>
  );
}
