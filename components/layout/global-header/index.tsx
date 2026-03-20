import { HeaderLeft } from "./header-left";
import { HeaderRight } from "./header-right";

export function GlobalHeader() {
  return (
    <header className="h-14 border-b bg-background px-4 flex items-center">
      <HeaderLeft />
      <div className="flex-1" />
      <HeaderRight />
    </header>
  );
}
