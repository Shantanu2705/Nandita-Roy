import Link from "next/link";
import Image from "next/image";
import { Home, MessageSquare } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center bg-[#FFF9ED] px-4 py-20 text-center">
      <div className="max-w-lg mx-auto space-y-6">
        <div className="relative w-56 h-14 mx-auto">
          <Image
            src="/images/logo.svg"
            alt="Nandita Speaks Logo"
            fill
            className="object-contain"
            priority
          />
        </div>

        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#EFAE32]">
            Error 404
          </span>
          <h1 className="font-serif text-3xl sm:text-4xl font-bold text-[#29251F]">
            Page Not Found
          </h1>
          <p className="text-sm text-[#29251F]/70 leading-relaxed font-sans max-w-sm mx-auto">
            The page you are looking for may have been moved or is currently undergoing an editorial update.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-4">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-gradient-to-r from-[#EFAE32] to-[#E99A38] text-white shadow-card hover:shadow-cardHover transition-all"
          >
            <Home className="w-4 h-4" />
            <span>Return to Home</span>
          </Link>

          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold tracking-wider uppercase bg-[#FFF3DC] text-[#29251F] border border-[#EAD6B5] hover:bg-[#F8E8C8] transition-all"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Contact Desk</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
