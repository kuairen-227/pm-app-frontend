"use client";

import type React from "react";
import { PageHeader } from "@/components/layout/page-header";
import { Empty } from "@/components/state/empty";
import { ErrorMessage } from "@/components/state/error-message";
import { Loading } from "@/components/state/loading";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ThemeToggle } from "../../(authenticated)/_components/theme-toggle";

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
        <SubSection title="Variants">
          <div className="flex flex-wrap gap-3">
            <Button>Default</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
            <Button variant="link">Link</Button>
          </div>
        </SubSection>

        <SubSection title="Sizes">
          <Button size="default">Default</Button>
          <Button size="xs">XS</Button>
          <Button size="sm">SM</Button>
          <Button size="lg">LG</Button>
          <Button size="icon">+</Button>
        </SubSection>
      </Section>

      {/* Input */}
      <Section title="Input">
        <Input placeholder="Default input" />
      </Section>

      {/* Loading */}
      <Section title="Loading">
        <Loading />
      </Section>

      {/* Empty */}
      <Section title="Empty">
        <Empty
          description="Emptyコンポーネントの説明"
          action={
            <>
              <p>ここに詳細やアクションを促す内容を要素として配置</p>
              <Button variant="link">プロジェクト一覧へ戻る</Button>
            </>
          }
        />
      </Section>

      {/* ErrorMessage */}
      <Section title="ErrorMessage">
        <SubSection title="Variants">
          <ErrorMessage
            title="エラーが発生しました（inline）"
            message="inlineモードのエラーメッセージ"
            variant="inline"
            onRetry={() => console.log("inline")}
          />
          <ErrorMessage
            title="エラーが発生しました（page）"
            message="pageモードのエラーメッセージ"
            variant="page"
            onRetry={() => console.log("page")}
          />
        </SubSection>
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

function SubSection({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="space-y-3">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
      </div>
      {children}
    </>
  );
}
