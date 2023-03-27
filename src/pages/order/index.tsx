import { createContext } from "react";
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
  Spinner,
} from "~/components";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { ProductOrder } from "~/types";
import { useEnrichedProductOrders } from "./hooks/use-enriched-product-orders";

type OrderContextType = {
  productOrders: ProductOrder[];
};
export const OrderContext = createContext<OrderContextType>({
  productOrders: [],
});

const Order: NextPage = () => {
  const { data: productOrders = [], isLoading } = useEnrichedProductOrders(); // TODO: move to separate component inside error boundary

  if (isLoading) {
    return <Spinner />;
  }

  return (
    <OrderContext.Provider value={{ productOrders }}>
      <Head>
        <title>Fable store</title>
        <meta name="description" content="Fable store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* TODO: Normalize? box-sizing: border-box;? */}
      <div className="grid min-h-screen grid-rows-[auto,1fr,auto]">
        <Header />
        <main>
          <ErrorBoundary FallbackComponent={ErrorFallback}>
            <Container>
              <section
                className="
                  grid grid-cols-2 gap-8 
                  medium:grid-cols-1"
              >
                <div
                  className="
                    order-1 grid grid-cols-[163px,2fr] grid-rows-[auto,auto,1fr] gap-4
                    medium:order-none
                    "
                >
                  <div className="col-span-2 mb-12">
                    <ProductOrderList />
                  </div>
                  <div
                    className="
                      col-start-2 
                      medium:col-span-2 medium:col-start-auto"
                  >
                    <ProductOrderSummary />
                  </div>
                  <div
                    className="
                      col-start-2 self-start 
                      medium:col-span-2 medium:col-start-auto"
                  >
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
    </OrderContext.Provider>
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
