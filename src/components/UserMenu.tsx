"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function UserMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="font-mono text-sm tracking-widest text-primary border border-primary/50 bg-secondary/20 hover:bg-primary/10 hover:border-primary px-3 py-1.5 transition-colors uppercase outline-none focus:ring-1 focus:ring-primary flex items-center gap-2">
        <span>[ M-4927A ]</span>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        align="end"
        className="w-48 rounded-none border border-primary bg-background font-mono uppercase text-sm"
      >
        <DropdownMenuItem
          asChild
          className="rounded-none hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none cursor-pointer"
        >
          <a href="/about" className="w-full">
            Personnel File
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="rounded-none hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none cursor-pointer"
        >
          <a href="/create" className="w-full">
            New Dispatch
          </a>
        </DropdownMenuItem>
        <DropdownMenuItem
          asChild
          className="rounded-none hover:bg-primary hover:text-primary-foreground focus:bg-primary focus:text-primary-foreground focus:outline-none cursor-pointer"
        >
          <a href="/settings" className="w-full text-foreground/80">
            Configuration
          </a>
        </DropdownMenuItem>

        <DropdownMenuSeparator className="bg-border/50" />

        <DropdownMenuItem
          asChild
          className="rounded-none hover:bg-destructive hover:text-destructive-foreground focus:bg-destructive focus:text-destructive-foreground focus:outline-none cursor-pointer"
        >
          <a href="/login" className="w-full text-destructive font-bold">
            Terminate Link
          </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
