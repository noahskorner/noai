export default async function ChatPage() {
  return (
    <section className="flex h-full w-full flex-col items-stretch gap-4">
      <div className="grow"></div>
      <div className="grow-0">
        <div className="bg-sidebar h-16 w-full rounded-full px-8 text-sm">
          <input
            placeholder="Message"
            className="bg-sidebar h-full w-full placeholder-primary outline-none"
          ></input>
        </div>
      </div>
    </section>
  );
}
