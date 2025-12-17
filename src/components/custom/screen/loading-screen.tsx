import { Loader2 } from "lucide-react";

export function LoadingScreen({open}: {open:boolean}) {
  if (!open) return null;
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40">
      <div className="flex flex-col items-center gap-3 p-6 bg-white rounded-2xl shadow-xl">
        <Loader2 size={48} className="animate-spin text-amber-500" />
      </div>
    </div>
  );
}
