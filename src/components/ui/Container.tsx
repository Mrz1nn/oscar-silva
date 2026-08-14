import { ReactNode } from "react";
import clsx from "clsx";

export function Container({
  children,
  className,
  wide = false,
}: {
  children: ReactNode;
  className?: string;
  wide?: boolean;
}) {
  return (
    <div
      className={clsx(
        "mx-auto w-full px-6 sm:px-8 lg:px-12",
        wide ? "max-w-[1400px]" : "max-w-[1140px]",
        className
      )}
    >
      {children}
    </div>
  );
}
