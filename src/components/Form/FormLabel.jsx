const FormLabel = ({ children, id }) => {
  const defaultStyle = "capitalize text-sm text-black font-medium";
  return (
    <label className={`${defaultStyle}`} htmlFor={id}>
      {children}
    </label>
  );
};

export default FormLabel;
