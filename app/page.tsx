import Button from "./components/Button";
import Counter from "./components/counter";
import Footer from "./components/Footer";
import Menu from "./components/Menu";
import Navbar from "./components/Navbar";
import styles from "./styles.module.css";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow p-3">
        <Button className="p-2">Hazme click</Button>
      </main>
      {/* 
      <h1 className={styles.title}>Este es un titulo</h1>
      <h2 className="text-red-600 text-xl">Este es un titulo estilado con Tailwind</h2>
      <Counter />
      <Image src="/3.jpg" alt="logo de next" width="100" height={100} /> */}
      <Footer/>
    </div>
  );
}
