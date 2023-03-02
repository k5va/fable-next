import { getRandomNumber } from "~/utils/get-random-number";
import { prisma } from "../src/server/db";

const CATEGORIES_COUNT = 5;
const COLLECTIONS_COUNT = 3;
const PRODUCTS_COUNT = 10;
const PRODUCT_GALLERY_COUNT = 5;

async function main() {
  for (let i = 0; i < CATEGORIES_COUNT; i++) {
    const categoryId = String(i);
    await prisma.category.upsert({
      where: {
        id: categoryId,
      },
      create: {
        id: categoryId,
        name: `Category ${i}`,
      },
      update: {},
    });
  }

  for (let i = 0; i < COLLECTIONS_COUNT; i++) {
    const collectionId = String(i);

    await prisma.collection.upsert({
      where: {
        id: collectionId,
      },
      create: {
        id: collectionId,
        name: `Collection ${i}`,
      },
      update: {},
    });
  }

  for (let i = 0; i < PRODUCTS_COUNT; i++) {
    const dataId = String(i);

    await prisma.productImage.upsert({
      where: {
        id: dataId,
      },
      create: {
        id: dataId,
        source: "/img/item_big.png",
        productId: dataId,
      },
      update: {},
    });

    await prisma.product.upsert({
      where: {
        id: dataId,
      },
      create: {
        id: dataId,
        name: `Product ${i}`,
        article: `XXX-XX-${i}`,
        price: getRandomNumber(0, 100),
        categoryId: String(getRandomNumber(0, CATEGORIES_COUNT)),
        imageId: dataId,
        collectionId: String(getRandomNumber(0, COLLECTIONS_COUNT)),
        registerDate: new Date(),
        details: "Some details",
        images: {
          createMany: {
            data: Array.from(Array(PRODUCT_GALLERY_COUNT).keys(), () => ({
              source: "/img/item_big.png",
            })),
          },
        },
      },
      update: {},
    });
  }
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
