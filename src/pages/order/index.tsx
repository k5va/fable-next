import { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import { ErrorBoundary } from "react-error-boundary";
import {
  ErrorFallback,
  Footer,
  Header,
  Container,
  ProductOrderList,
  ProductOrderSummary,
  PromocodeForm,
  OrderForm,
} from "~/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Order: NextPage = () => {
  return (
    <>
      <Head>
        <title>Fable store</title>
        <meta name="description" content="Fable store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO: Nprmilize? box-sizing: border-box;? */}
      <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
        <Header />
        <main>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Container>
              <section className="grid grid-cols-2 gap-8">
                <div className="order-1 grid grid-cols-[163px,2fr] grid-rows-[auto,auto,1fr] gap-4">
                  <div className="col-span-2 mb-12">
                    <ProductOrderList />
                  </div>
                  <div className="col-start-2">
                    <ProductOrderSummary />
                  </div>
                  <div className="col-start-2 self-start">
                    <PromocodeForm />
                  </div>
                </div>
                <div className="mb-4">
                  <OrderForm />
                </div>
              </section>
            </Container>
          </ErrorBoundary>
        </main>
        <Footer />
      </div>
    </>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale ?? "en")),
    },
  };
};

export default Order;
