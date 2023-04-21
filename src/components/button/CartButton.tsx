import React from "react";
import cartImg from "./../../assets/images/icon-cart.svg";
import { def_theme } from "../../styles/themes/def_theme";

const CartButton: React.FC = () => {
	return (
		<button
			className={`cart-button
      w-full
      h-[4.8rem]
    bg-deepaquamarine
      ${def_theme.textVariant.buttontext}
    text-purewhite
      flex
      justify-center
      items-center
      rounded-[0.8rem]
      gap-x-[1.16rem]
    hover:bg-deepaquamarinehover
      active:bg-deepaquamarine 
      `}
		>
			<img src={cartImg} alt={"cart img icon"} />
			Add to Cart
		</button>
	);
};

export default CartButton;
