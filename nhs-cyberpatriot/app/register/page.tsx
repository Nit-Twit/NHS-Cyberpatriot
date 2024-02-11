import Image from "next/image";

export default function Page() {
  return (
    <div className="flex flex-col w-screen h-screen items-center justify-center">
      <Image
      alt="bg"
        fill
        src="/login-bg.jpg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="z-0 blur-lg"
      />
      <div className="bg-zinc-700 opacity-75 w-full h-full absolute left-0 top-0"></div>
      <div className="w-[30vw] h-[90vh] opacity-100 rounded-2xl z-10 bg-blue-50 border-zinc-800 border-1 shadow-inner">

      </div>
    </div>
  );
}
