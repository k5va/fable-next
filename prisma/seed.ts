import { prisma } from "../src/server/db";

const CATEGORIES_COUNT = 5;
const COLLECTIONS_COUNT = 3;
const PRODUCTS_COUNT = 10;
const PRODUCT_GALLERY_COUNT = 5;

async function main() {
  for (let i = 0; i < CATEGORIES_COUNT; i++) {
    await prisma.category.upsert({
      where: {
        id: String(i),
      },
      create: {
        id: String(i),
        name: `Category ${i}`,
      },
      update: {},
    });
  }

  for (let i = 0; i < COLLECTIONS_COUNT; i++) {
    await prisma.collection.upsert({
      where: {
        id: String(i),
      },
      create: {
        id: String(i),
        name: `Collection ${i}`,
      },
      update: {},
    });
  }

  for (let i = 0; i < PRODUCTS_COUNT; i++) {
    await prisma.productImage.upsert({
      where: {
        id: String(i),
      },
      create: {
        id: String(i),
        source: "/img/item_big.png",
        productId: String(i),
      },
      update: {},
    });

    await prisma.product.upsert({
      where: {
        id: String(i),
      },
      create: {
        id: String(i),
        name: `Product ${i}`,
        article: `XXX-XX-${i}`,
        price: 100,
        categoryId: "1", // TODO: pick random
        imageId: String(i),
        collectionId: "2", // TODO: pick random
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
