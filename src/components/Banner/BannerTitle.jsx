export const BannerTitle = ({ children }) => {
  const defaultStyle = "text-3xl font-bold";

  return <h3 className={`${defaultStyle}`}>{children}</h3>;
};
