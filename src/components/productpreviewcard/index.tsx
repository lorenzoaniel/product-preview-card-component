import React, { useEffect, useState } from "react";
import productimgmobile from "/assets/images/image-product-mobile.jpg";
import productimgdesktop from "/assets/images/image-product-desktop.jpg";
import { def_theme } from "../../styles/themes/def_theme";
import CartButton from "../button/CartButton";

interface Props {
	productCategory: string;
	productName: string;
	productDesc: string;
	productPrice: number; //current price
	productPriceDiscount?: number; //before discount
	productPriceCurrency: string;
}

const ProductPreviewCard: React.FC<Props> = ({
	productCategory,
	productName,
	productDesc,
	productPrice,
	productPriceDiscount,
	productPriceCurrency,
}) => {
	const [data, setData] = useState({
		productCategory,
		productName,
		productDesc,
		productPrice,
		productPriceDiscount,
		productPriceCurrency,
	});

	//watches for prop change can be substituted with a subscription, redux global state change for this particular data
	useEffect(() => {
		setData({
			productCategory,
			productName,
			productDesc,
			productPrice,
			productPriceDiscount,
			productPriceCurrency,
		});
	}, [
		productCategory,
		productName,
		productDesc,
		productPrice,
		productPriceDiscount,
		productPriceCurrency,
	]);

	return (
		<article
			className="product-preview-card
      transition-animation
      h-[61.1rem]
      w-[34.3rem]
      rounded-[1rem]
      bg-purewhite
      flex
      flex-col
      opacity-0
      transition-opacity 
      duration-500
      sm:opacity-100 
      lg:opacity-100 
      lg:h-[45rem]
      lg:w-[60rem]
      lg:flex-row
      "
		>
			<picture
				className="product-preview-card-productimg-wrapper
        w-fit
        h-fit
        "
			>
				<source media="(min-width: 1440px)" srcSet={productimgdesktop} />
				<img
					className="product-preview-card-productimg
          w-full
          h-[24rem]
          rounded-tr-[1rem]
          rounded-tl-[1rem]
          lg:h-[45rem]
          lg:w-[30rem]
          lg:rounded-tr-[0rem]
          lg:rounded-bl-[1rem]
          "
					src={productimgmobile}
					alt={data.productName}
				/>
			</picture>
			<div
				className="product-preview-card-infowrapper
        h-[61.1rem]
        w-full
        p-[2.4rem]
        lg:w-[30rem]
        lg:p-[3.2rem]
        lg:h-[45rem]
        "
			>
				<h2
					className={`product-preview-card-productcategory
          ${def_theme.textVariant.overline}
          text-aurometalsaurus
          `}
				>
					{data.productCategory}
				</h2>
				<h1
					className={`product-preview-card-productname
          ${def_theme.textVariant.display}
          text-gunmetal
          h-fit
          mt-[1.2rem]
          lg:mt-[2rem]
          `}
				>
					{data.productName}
				</h1>
				<p
					className={`product-preview-card-productdesc
          ${def_theme.textVariant.body}
         text-aurometalsaurus
          mt-[1.6rem]
          lg:mt-[2.4rem]
          `}
					aria-describedby={data.productDesc}
				>
					{data.productDesc}
				</p>
				<div
					className="product-preview-card-pricewrapper
          w-full
          h-fit
          flex
          gap-x-[1.9rem]
          mt-[2.4rem]
          mb-[2rem]
          lg:mb-[3rem]
          "
				>
					<span
						className={`product-preview-card-finalprice
            ${def_theme.textVariant.display}
            text-deepaquamarine
            `}
					>
						{data.productPriceCurrency + data.productPrice}
					</span>
					<span
						className={`product-preview-card-discountedoriginalprice
            ${data.productPriceDiscount ? "inline" : "hidden"}
            ${def_theme.textVariant.discount}
          text-aurometalsaurus
            self-center
            `}
					>
						{data.productPriceCurrency + data.productPriceDiscount}
					</span>
				</div>
				<CartButton />
			</div>
		</article>
	);
};

export default ProductPreviewCard;
