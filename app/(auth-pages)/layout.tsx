export default async function Layout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-7xl flex flex-col gap-12 items-start">
      <div className="w-full flex items-center justify-center">{children}</div>
    </div>
  )
}
