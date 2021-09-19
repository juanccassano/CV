import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <>
      <div className="container">
        <div className="text-center pt-5">
          <img className="img-fluid" src="/fotoCv.PNG" alt="fotoCv" />
          <h1 className="mt-4">Juan Cruz Cassano</h1>{" "}
          <h2 className="mt-5">Full Stack Developer</h2>
          <h3 className="border-bottom w-50 mx-auto mt-5 pb-3">
            Soy expeditivo, atento a los detalles y creativo a la hora de
            encontrar soluciones.
          </h3>
        </div>
      </div>
    </>
  );
}
