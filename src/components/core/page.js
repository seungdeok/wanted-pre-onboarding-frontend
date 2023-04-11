

const Page = ({
  label,
  children,
}) => {
  return (
    <div>
      <div>{label}</div>
      {children}
    </div>
  );
};

export default Page;
