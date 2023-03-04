import Head from 'next/head';
import Button from '../components/Button';

export default function Home() {
  return (
    <>
      <Head>
        <title>N.Nasrullah</title>
      </Head>
      <main className="container mx-auto">
        <header className="flex flex-col justify-center min-h-screen p-6 md:p-48 gap-10">
          <div>
            <h1 className="text-xl font-semibold md:text-3xl text-slate-300 font-mono">
              Hi, I am
            </h1>
            <h2 className="text-5xl font-extrabold bg-gradient-to-r from-violet-700 to-red-600 w-fit bg-clip-text text-transparent md:text-6xl lg:text-7xl">
              N. Nasrullah
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-5xl">
              An aspiring Software Developer
            </h3>
          </div>
          <Button href='/contact'>Contact Me</Button>
        </header>
      </main>
    </>
  );
}
