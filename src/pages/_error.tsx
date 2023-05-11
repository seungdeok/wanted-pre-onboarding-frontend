import { NextPageContext } from 'next';
import Error, { ErrorProps } from 'next/error';

interface Props extends ErrorProps {
  statusCode: number;
}

const ErrorPage = ({ statusCode }: Props) => {
  return <Error statusCode={statusCode} />;
};

ErrorPage.getInitialProps = ({ res, err }: NextPageContext) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default ErrorPage;
