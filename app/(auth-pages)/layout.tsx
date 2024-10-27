export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex w-full max-w-7xl flex-col items-start gap-12">
      <div className="flex w-full items-center justify-center">{children}</div>
    </div>
  );
}
