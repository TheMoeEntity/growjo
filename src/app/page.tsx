import AppLayout from "@/components/layout/AppLayout";
import Hero from "@/components/sections/homepage/hero";
import Updates from "@/components/sections/homepage/updates";

export default function Home() {
  return (
    <AppLayout>
      <main className="min-h-screen w-full">
        <Hero />
        <div className="mx-auto flex flex-col gap-8 p-24 max-w-screen-xl">
          <Updates />
          <hr className="bg-gray-400" />
        </div>
      </main>
    </AppLayout>
  );
}
