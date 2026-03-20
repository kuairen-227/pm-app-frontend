type PageLayoutProps = {
  children: React.ReactNode;
};

export function PageLayout({ children }: PageLayoutProps) {
  return <section className="flex h-full flex-col">{children}</section>;
}
