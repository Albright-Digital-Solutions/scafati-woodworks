import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/src/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded text-sm font-medium ring-offset-stone-950 transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 cursor-pointer",
  {
    variants: {
      variant: {
        default: "bg-gradient-to-r from-gold-700 via-gold-600 to-gold-700 text-stone-950 font-semibold hover:from-gold-600 hover:via-gold-500 hover:to-gold-600 shadow-lg shadow-gold-900/20 hover:shadow-gold-800/30",
        destructive:
          "bg-red-500 text-stone-50 hover:bg-red-500/90",
        outline:
          "border border-gold-700/50 text-gold-500 hover:bg-gold-950/30 hover:text-gold-400 hover:border-gold-600/50",
        secondary:
          "bg-stone-800 text-stone-100 hover:bg-stone-700",
        ghost: "hover:bg-stone-800 hover:text-stone-50",
        link: "text-gold-600 underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-5 py-2",
        sm: "h-9 rounded px-3",
        lg: "h-12 rounded px-8 text-sm tracking-wide",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
