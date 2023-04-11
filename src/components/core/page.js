import 'stylesheets/components/core/page.scss';

const Page = ({
  label,
  children,
}) => {
  return (
    <div className="page-wrap">
      <div className='page-card-wrap'>
        <div className='page-label-text'>{label}</div>
        {children}
      </div>
    </div>
  );
};

export default Page;
