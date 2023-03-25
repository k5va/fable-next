import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "next-i18next";
import {
  Container,
  ErrorFallback,
  Footer,
  Header,
  ProductOrder,
} from "~/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { getServerSession } from "next-auth";
import { authOptions } from "~/server";
import { useLoadOrders } from "~/hooks";
import { AppRoute } from "~/const";

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
        <ErrorBoundary FallbackComponent={ErrorFallback}>
          <Container>
            <h1 className="mb-3 text-center text-2xl font-medium">
              Мои заказы
            </h1>
            <ul className="flex flex-col gap-4">
              {orders.map(({ id, createdAt, email, productOrders }) => (
                <li key={id} className="grid grid-cols-2 gap-2">
                  <div>
                    <p>{createdAt}</p>
                    <p>{email}</p>
                  </div>
                  <ul className="flex flex-col gap-2">
                    {productOrders.map((productOrder) => (
                      <li key={productOrder.productId}>
                        <ProductOrder productOrder={productOrder} readonly />
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
        destination: AppRoute.ROOT,
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
