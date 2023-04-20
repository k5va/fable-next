import React from "react";
import { useSession } from "next-auth/react";
import { motion, useAnimate } from "framer-motion";
import { BiHeart } from "react-icons/bi";
import { Product } from "~/types";
import { useIsFavoriteProduct, useAddToFavorites } from "~/hooks";

type AddToFavoritesButtonProps = {
  product: Product;
};

export const AddToFavoritesButton = ({
  product,
}: AddToFavoritesButtonProps): JSX.Element | null => {
  const { data: session } = useSession();
  const { data: favoriteProduct } = useIsFavoriteProduct(product.id);
  const { addToFavorites } = useAddToFavorites(product.id);
  const [scope, animate] = useAnimate();

  const handleAddToFavoritesClick = async () => {
    const animation = animate(
      scope.current,
      { opacity: 0 },
      { duration: 0.5, repeat: Infinity }
    );
    await addToFavorites({
      productId: product.id,
      isFavorite: !favoriteProduct?.isFavorite,
    });
    animation.cancel();
  };

  return session && favoriteProduct ? (
    <motion.button
      ref={scope}
      initial={{ opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 1.2 }}
      onClick={handleAddToFavoritesClick}
    >
      <BiHeart
        className="text-xl small:text-xs"
        color={favoriteProduct.isFavorite ? "red" : "black"}
      />
    </motion.button>
  ) : null;
};
