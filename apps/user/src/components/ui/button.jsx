'use client';

import * as React from "react";
import { cva } from "class-variance-authority";
import { Slot } from "radix-ui";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-lg border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default:
          "bg-pm-accent text-white hover:-translate-y-px hover:shadow-[0_10px_30px_var(--acc-glow)] transition-all",
        destructive: "bg-pm-rose text-white hover:opacity-90",
        outline:
          "border border-pm-l3 bg-transparent text-pm-t1 hover:bg-pm-l1 hover:border-pm-l4",
        secondary: "bg-pm-s3 text-pm-t2 hover:bg-pm-s4",
        ghost: "text-pm-t2 hover:bg-pm-l1 hover:text-pm-t1",
        link: "text-pm-accent underline-offset-4 hover:underline",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "lg",
    },
  },
);

function Button({
  className,
  variant = "default",
  size = "lg",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";

  return (
    <Comp
      data-slot="button"
      data-variant={variant}
      data-size={size}
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants };
