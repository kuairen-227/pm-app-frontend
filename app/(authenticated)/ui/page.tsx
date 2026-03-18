import type React from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Loading } from "@/components/state/loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "../_components/theme-toggle";

export default function UIPage() {
  return (
    <main className="mx-auto max-w-4xl py-12 space-y-12">
      <PageHeader
        title="UI Playground"
        description="UIコンポーネントのストーリーブック"
        actions={<ThemeToggle />}
      />

      {/* Button */}
      <Section title="Button">
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
      </Section>

      {/* Input */}
      <Section title="Input">
        <Input placeholder="Default input" />
      </Section>

      {/* Loading */}
      <Section title="Loading">
        <Loading />
      </Section>
    </main>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="space-y-6">
      <h2 className="text-xl font-medium">{title}</h2>
      <div className="rounded-lg border bg-card p-6 space-y-4">{children}</div>
    </section>
  );
}
