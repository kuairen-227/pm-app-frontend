type PageHeaderProps = {
  title: string;
  description?: string;
  actions?: React.ReactNode;
};

export function PageHeader({ title, description, actions }: PageHeaderProps) {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
      <div className="space-y-1">
        {/* タイトル */}
        <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>

        {/* 説明文 */}
        {description && (
          <p className="text-muted-foreground max-w-2xl text-sm">
            {description}
          </p>
        )}
      </div>

      {/* アクション */}
      {actions && (
        <div className="flex shrink-0 items-center gap-2">{actions}</div>
      )}
    </header>
  );
}
