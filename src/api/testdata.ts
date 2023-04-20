interface TestDataType {
	productCategory: string;
	productName: string;
	productDesc: string;
	productPrice: number; //current price
	productPriceDiscount?: number; //before discount
	productPriceCurrency: string; //for test purposes this will be static but in production environment this will be set by server
}

export const testdata: TestDataType = {
	productCategory: "PERFUME",
	productName: "Gabrielle Essence Eau De Parfum",
	productDesc:
		"A floral, solar and voluptuous interpretation composed by Olivier Polge, Perfumer-Creator for the House of CHANEL.",
	productPrice: 149.99,
	productPriceDiscount: 169.99, //can be undefined or have a value
	productPriceCurrency: "$",
};
