"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

export function PrioritySelect() {
  return (
    <Select defaultValue="routine">
      <SelectTrigger className="font-mono rounded-none border-border bg-background focus:ring-primary focus:border-primary uppercase h-10 px-3 outline-none text-foreground w-[200px]">
        <SelectValue placeholder="SELECT PRIORITY" />
      </SelectTrigger>
      <SelectContent className="rounded-none border-primary bg-background font-mono uppercase text-sm p-0">
        <SelectItem
          value="routine"
          className="rounded-none hover:bg-secondary/50 focus:bg-secondary/50 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="rounded-none text-[10px] text-muted-foreground border-muted px-1.5 h-4"
            >
              RTN
            </Badge>
            <span>ROUTINE</span>
          </div>
        </SelectItem>
        <SelectItem
          value="elevated"
          className="rounded-none hover:bg-yellow-500/10 focus:bg-yellow-500/10 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="rounded-none text-[10px] text-yellow-500 border-yellow-500/50 px-1.5 h-4"
            >
              ELV
            </Badge>
            <span className="text-yellow-500">ELEVATED</span>
          </div>
        </SelectItem>
        <SelectItem
          value="critical"
          className="rounded-none hover:bg-destructive/10 focus:bg-destructive/10 cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <Badge
              variant="outline"
              className="rounded-none text-[10px] text-destructive border-destructive/50 px-1.5 h-4"
            >
              CRT
            </Badge>
            <span className="text-destructive font-bold">CRITICAL</span>
          </div>
        </SelectItem>
      </SelectContent>
    </Select>
  );
}
