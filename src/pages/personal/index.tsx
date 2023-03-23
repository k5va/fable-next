import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "next-i18next";
import { Container, ErrorFallback, Footer, Header } from "~/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server";
import { useLoadOrders } from "~/hooks";

const Home: NextPage = () => {
  const { t } = useTranslation();
  const { data: orders = [] } = useLoadOrders(); // TODO: move to child component inside error boundary

  return (
    <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
      <Head>
        <title>Fable store</title>
        <meta name="description" content="Fable store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <h1 className="sr-only">{t("fable")}</h1>
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Container>
            <ul>
              {orders.map(({ id, email, productOrders }) => (
                <li key={id} className="grid grid-cols-2">
                  <div>
                    <p>{id}</p>
                    <p>{email}</p>
                  </div>
                  <ul>
                    {productOrders.map(({ product, color, size, count }) => (
                      <li key={product.id}>
                        <p>{product.name}</p>
                        <p>{color}</p>
                        <p>{size}</p>
                        <p>{count}</p>
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ul>
          </Container>
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async ({
  locale,
  req,
  res,
}) => {
  const session = await getServerSession(req, res, authOptions);

  if (!session) {
    return {
      redirect: {
        destination: "/login",
        permanent: false,
      },
      props: {},
    };
  }

  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en")),
      session,
    },
  };
};

export default Home;
