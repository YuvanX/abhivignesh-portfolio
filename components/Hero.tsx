import Image from "next/image";

export default function Hero() {
  return (
    <div className="text-center mx-4 pt-44">
      <div>
        <div className="mb-10 flex justify-center">
            <Image width={100} height={100} alt="icon" className="rounded-full" src="/JOIN.png" quality={100}/>
        </div>
        <h1 className="text-5xl font-bold font-custom">Hi, I&apos;m Abhi Vignesh</h1>
        <p className="mx-2 my-6 text-lg font-thin">
        Full Stack Web Developer building scalable and high-performance web applications. I specialize in both frontend and backend development, creating seamless user experiences. Passionate about solving real-world challenges through clean and efficient code.
        </p>
      </div>
    </div>
  );
}
