import { twMerge } from "tailwind-merge";
export const SectionImage = ({ src, maskImageFileName, alt, ...rest }) => {
  const maskImageUrl = `url("svgs/${maskImageFileName}.svg")`;

  return (
    <div className="relative">
      <img
        style={
          maskImageFileName
            ? {
                maskImage: maskImageUrl,
                WebkitMaskImage: maskImageUrl,
                maskSize: "cover",
                WebkitMaskSize: "cover",
              }
            : {}
        }
        className={twMerge("w-full h-auto object-cover", rest.className)}
        src={src}
        alt={alt || "Imagem"}
      />
    </div>
  );
};
