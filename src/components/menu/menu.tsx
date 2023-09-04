"use client";

import Link from "next/link";
import { Button } from "../ui/button";

export default function Menu() {
  return (
    <div className="w-full bg-zinc-800">
      <div className="container mx-auto">
        <div className="flex justify-between h-14 items-center">
          <div className="text-zinc-400 font-semibold flex items-center">
            NeedToKnow
          </div>
          <nav className="text-zinc-300">
            <div className="flex gap-2">
              <Link href="/">
                <Button>Home</Button>
              </Link>
              <Link href="/getbyid">
                <Button>GetById</Button>
              </Link>
              <Link href="/get">
                <Button>Get</Button>
              </Link>
              <Link href="/update">
                <Button>Update</Button>
              </Link>
              <Link href="/delete">
                <Button>Delete</Button>
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </div>
  );
}
