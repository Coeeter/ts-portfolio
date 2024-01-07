import { TypeWriterBio } from '@/components/type-writer';

export default function Home() {
  return (
    <main className="relative h-full w-full">
      <div className="container mx-auto flex h-full flex-col items-center justify-center">
        <h1 className="text-center text-5xl font-bold">N. Nasrullah</h1>
        <p className="mt-4 w-fit text-center text-2xl text-muted-foreground backdrop-blur-sm">
          <TypeWriterBio />
        </p>
      </div>
    </main>
  );
}
