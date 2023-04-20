import React from "react";
import "./styles/_globalStyle.css";
import ProductPreviewCard from "./components/productpreviewcard";
import { testdata } from "./api/testdata";

const App: React.FC = () => {
	return (
		<main
			className="App 
			bg-cream
			h-full
			flex
			justify-center
			items-center
			"
		>
			<ProductPreviewCard
				productCategory={testdata.productCategory}
				productName={testdata.productName}
				productDesc={testdata.productDesc}
				productPrice={testdata.productPrice}
				productPriceDiscount={testdata.productPriceDiscount}
				productPriceCurrency={testdata.productPriceCurrency}
			/>
		</main>
	);
};

export default App;
