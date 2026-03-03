import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function Home() {
  return (
    <main className="mx-auto max-w-4xl py-12 space-y-12">
      <h1 className="text-3xl font-semibold">UI Playground</h1>

      {/* Button */}
      <section className="space-y-6">
        <h2 className="text-xl font-medium">Button</h2>

        <div className="rounded-lg border bg-card p-6 space-y-8">
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">
              Variants
            </h3>
            <div className="flex flex-wrap gap-3">
              <Button>Default</Button>
              <Button variant="outline">Outline</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="destructive">Destructive</Button>
              <Button variant="link">Link</Button>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-muted-foreground">Sizes</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button size="default">Default</Button>
              <Button size="xs">XS</Button>
              <Button size="sm">SM</Button>
              <Button size="lg">LG</Button>
              <Button size="icon">+</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Input */}
      <section className="space-y-6">
        <h2 className="text-xl font-medium">Input</h2>

        <div className="rounded-lg border bg-card p-6 space-y-4">
          <Input placeholder="Default input" />
        </div>
      </section>
    </main>
  );
}
