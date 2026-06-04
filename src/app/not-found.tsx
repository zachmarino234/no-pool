import Button from "@/components/ui/Button";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-white flex items-center justify-center px-4">
      <div className="text-center space-y-4">
        <h1 className="text-2xl md:text-3xl">
          THIS PAGE CAN&apos;T BE FOUND
        </h1>
        <p className="mb-10">&quot;What century are you from?&quot;</p>
        <Button href="/">
            Back to Home
        </Button>
      </div>
    </main>
  );
}