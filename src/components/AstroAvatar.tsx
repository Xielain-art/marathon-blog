import * as React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

interface AstroAvatarProps {
  src?: string;
  fallback: string;
  className?: string;
  fallbackClassName?: string;
}

export function AstroAvatar({
  src,
  fallback,
  className,
  fallbackClassName,
}: AstroAvatarProps) {
  return (
    <Avatar className={className}>
      {src && <AvatarImage src={src} />}
      <AvatarFallback className={fallbackClassName}>{fallback}</AvatarFallback>
    </Avatar>
  );
}
