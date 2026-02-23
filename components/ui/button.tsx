import * as React from "react"
import { cn } from "@/lib/utils"

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "default", size = "default", ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#D4AF37] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 font-tech uppercase tracking-widest cursor-pointer",
          {
            "bg-[#D4AF37] text-black hover:bg-[#D4AF37]/90 shadow-[0_0_15px_rgba(212,175,55,0.3)]": variant === "default",
            "border border-[#D4AF37] text-[#D4AF37] hover:bg-[#D4AF37]/10": variant === "outline",
            "hover:bg-[#1A1A1A] text-[#FAFAFA]": variant === "ghost",
            "text-[#D4AF37] underline-offset-4 hover:underline": variant === "link",
            "h-10 px-4 py-2": size === "default",
            "h-9 rounded-md px-3": size === "sm",
            "h-14 rounded-md px-10 text-lg": size === "lg",
            "h-10 w-10": size === "icon",
          },
          className
        )}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button }
