type PageBodyProps = {
  children: React.ReactNode;
};

export function PageBody({ children }: PageBodyProps) {
  return <div className="flex-1 overflow-auto">{children}</div>;
}
