import { twMerge } from "tailwind-merge";

export const BannerText = ({ children, ...rest }) => {
  const defaultStyle = "text-sm md:text-lg font-medium";

  return (
    <p className={`${twMerge(defaultStyle, rest.className)}`}>{children}</p>
  );
};
