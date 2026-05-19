
import { ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function PremiumButtonRef({
  href = "/",
  children,
  icon: Icon = ArrowRight,
  variant = "primary",
  className = "",
}) {
  return (
    <Link href={href}>
      <span
        className={`
          group
          inline-flex items-center gap-3
          rounded-full
          border border-[#c7dde2]
          bg-white
          px-6 py-3
          text-sm font-medium
          text-[#2b7b8c]
          shadow-[0_4px_20px_rgba(43,123,140,0.08)]
          transition-all duration-300
          hover:bg-[#2b7b8c]
          hover:text-white
          hover:border-[#2b7b8c]
          hover:shadow-[0_10px_30px_rgba(43,123,140,0.18)]
          hover:-translate-y-0.5
          ${className}
        `}
      >
        <span>{children}</span>

        <span
          className="
            flex h-8 w-8 items-center justify-center
            rounded-full
            bg-[#2b7b8c]
            transition-all duration-300
            group-hover:bg-white
          "
        >
          <Icon
            className="
              h-4 w-4
              text-white
              transition-colors duration-300
              group-hover:text-[#2b7b8c]
            "
          />
        </span>
      </span>
    </Link>
  );
}
