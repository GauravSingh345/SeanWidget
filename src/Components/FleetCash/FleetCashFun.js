// document.getElementById("Fleet_Sub_Total").value
// import "../../Resources/GLobalVariable";

export const Fleetcashdiscount = () => {
	setTimeout(() => {
	var Fleet_Discount_a = parseFloat(document.getElementById("msrp").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) - (parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) - parseFloat(document.getElementById("fleet").value) - parseFloat(document.getElementById("employee_pricing_amount").value)) + (parseFloat(document.getElementById("up_fitter_rebate").value) / 1.13);
	var Fleet_Discount_b = Fleet_Discount_a.toFixed(2);
	
	document.getElementById("Fleet_Discounts").value = Fleet_Discount_b;
}, 2000);
}
export const Fleetcashsubtotal = () => {
	setTimeout(() => {
	var Fleet_Sub_Total_a = parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("delivery_fee").value) + parseFloat(document.getElementById("broker_fee").value) - parseFloat(document.getElementById("fleet").value) + parseFloat(document.getElementById("dealer_fee_admin").value) + parseFloat(document.getElementById("dealer_fee_env_recovery").value) + parseFloat(document.getElementById("dealer_fee_omvic").value);
	var Fleet_Sub_Total_b = Fleet_Sub_Total_a.toFixed(2);
	document.getElementById("Fleet_Sub_Total").value = Fleet_Sub_Total_b;
}, 2000);
}

export const Fleetcashtaxsubtotal = () => {
	setTimeout(() => {
	var Fleet_Tax_Sub_Total_a = parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("delivery_fee").value) + parseFloat(document.getElementById("broker_fee").value) - parseFloat(document.getElementById("fleet").value
	) + parseFloat(document.getElementById("dealer_fee_admin").value) + parseFloat(document.getElementById("dealer_fee_env_recovery").value) + parseFloat(document.getElementById("dealer_fee_omvic").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value);
	var Fleet_Tax_Sub_Total_b = Fleet_Tax_Sub_Total_a.toFixed(2);
	document.getElementById("Fleet_Tax_Sub_Total").value = Fleet_Tax_Sub_Total_b;
}, 2000);
}

export const Fleetcashdealhst = () => {
	setTimeout(() => {
	var Fleet_Deal_HST_a = (parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("delivery_fee").value) + parseFloat(document.getElementById("broker_fee").value) - parseFloat(document.getElementById("fleet").value) + parseFloat(document.getElementById("dealer_fee_admin").value) + parseFloat(document.getElementById("dealer_fee_env_recovery").value) + parseFloat(document.getElementById("dealer_fee_omvic").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value)) * 0.13;
	var Fleet_Deal_HST_b = Math.round((Fleet_Deal_HST_a + Number.EPSILON) * 100) / 100;
	document.getElementById("Fleet_Deal_HST").value = Fleet_Deal_HST_b;
}, 2000);
}


export const Fleetcashtotal = () => {
	setTimeout(() => {
	var Fleet_Total_a = ((parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("delivery_fee").value) + parseFloat(document.getElementById("broker_fee").value) - parseFloat(document.getElementById("fleet").value) + parseFloat(document.getElementById("dealer_fee_admin").value) + parseFloat(document.getElementById("dealer_fee_env_recovery").value) + parseFloat(document.getElementById("dealer_fee_omvic").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value)) * 1.13) + parseFloat(document.getElementById("lienamount").value);
	var Fleet_Total_b = Math.round((Fleet_Total_a + Number.EPSILON) * 100) / 100;
	document.getElementById("Fleet_Total").value = Fleet_Total_b;
}, 2000);

}

// Fleet Due on Delivery
export const Fleetdueondelivery = () => {
	setTimeout(() => {
	var Fleet_Due_on_Delivery_a = ((parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("delivery_fee").value) + parseFloat(document.getElementById("broker_fee").value) - parseFloat(document.getElementById("fleet").value) + parseFloat(document.getElementById("dealer_fee_admin").value) + parseFloat(document.getElementById("dealer_fee_env_recovery").value) + parseFloat(document.getElementById("dealer_fee_omvic").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value)) * 1.13) + parseFloat(document.getElementById("lienamount").value) - parseFloat(document.getElementById("FleetAfterTaxRebate").value) + parseFloat(document.getElementById("dealer_fee_fuel").value) + parseFloat(document.getElementById("dealer_fee_licensing").value) - parseFloat(document.getElementById("deposit").value);

	var Fleet_Due_on_Delivery_b = Math.round((Fleet_Due_on_Delivery_a + Number.EPSILON) * 100) / 100;
	document.getElementById("Fleet_Due_on_Delivery").value = Fleet_Due_on_Delivery_b;
}, 2000);

}
// Fleet Selling Price

export const Fleetsellingprice = () => {

//  let fleetorcnlaval;
// 	let  fleetvl = parseFloat(document.getElementById("fleet").value);
//  let cnlaval = parseFloat(document.getElementById("CNLA").value);
// if (fleetvl > cnlaval) {
// 	fleetorcnlaval = parseFloat(document.getElementById("fleet").value);
// }
// else if (fleetvl < cnlaval) {
// 	fleetorcnlaval = parseFloat(document.getElementById("CNLA").value);
// }
// else if (fleetvl == cnlaval) {
// 	fleetorcnlaval = parseFloat(document.getElementById("CNLA").value);
// }

// var Fleet_Selling_Price_a = parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("delivery_fee").value) + parseFloat(document.getElementById("broker_fee").value) - parseFloat(fleetorcnlaval) - (parseFloat(document.getElementById("up_fitter_rebate").value) / 1.13);
// var Fleet_Selling_Price_b = Fleet_Selling_Price_a.toFixed(2);
// document.getElementById("Fleet_Selling_Price").value = Fleet_Selling_Price_b;

}
// export const Fleettotalsavings = () => {
// 	var Total_Fleet_Savings_a = parseFloat( document.getElementById("msrp").value) +parseFloat(document.getElementById("truck_body_price").value)+parseFloat( document.getElementById("Aftermarket_1").value)+parseFloat(document.getElementById("Aftermarket_2").value) - (parseFloat(document.getElementById("invoice").value) -parseFloat( document.getElementById("hb").value) +parseFloat(document.getElementById("dmup").value)+parseFloat(document.getElementById("lcmup").value) +parseFloat( document.getElementById("truck_body_price").value)+parseFloat(document.getElementById("Aftermarket_1").value)+parseFloat(document.getElementById("Aftermarket_2").value)-parseFloat(document.getElementById("fleet").value) - parseFloat(document.getElementById("employee_pricing_amount").value)) +(  parseFloat( document.getElementById("up_fitter_rebate").value) /1.13  );

// var Total_Fleet_Savings_b = Total_Fleet_Savings_a.toFixed(2);

// document.getElementById("Total_Fleet_Savingss").value = Total_Fleet_Savings_b;

// }

//.............................Main Function Dupli................//
export const Fleettotalsavings = () => {
	setTimeout(() => {
		


	let fleetorcnlaval;
	let  fleetvl = parseFloat(document.getElementById("fleet").value);
	let cnlaval = parseFloat(document.getElementById("CNLA").value);
	if (fleetvl > cnlaval) {
		fleetorcnlaval = parseFloat(document.getElementById("fleet").value);
	}
	else if (fleetvl < cnlaval) {
		fleetorcnlaval = parseFloat(document.getElementById("CNLA").value);
	}
	else if (fleetvl == cnlaval) {
		fleetorcnlaval = parseFloat(document.getElementById("CNLA").value);
	}
	
	var Fleet_Selling_Price_a = parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("delivery_fee").value) + parseFloat(document.getElementById("broker_fee").value) - parseFloat(fleetorcnlaval) - (parseFloat(document.getElementById("up_fitter_rebate").value) / 1.13);
	var Fleet_Selling_Price_b = Fleet_Selling_Price_a.toFixed(2);
	document.getElementById("Fleet_Selling_Price").value = Fleet_Selling_Price_b;		
	
	var Total_Fleet_Savings_a = parseFloat( document.getElementById("msrp").value) +parseFloat(document.getElementById("truck_body_price").value)+parseFloat( document.getElementById("Aftermarket_1").value)+parseFloat(document.getElementById("Aftermarket_2").value) - (parseFloat(document.getElementById("invoice").value) -parseFloat( document.getElementById("hb").value) +parseFloat(document.getElementById("dmup").value)+parseFloat(document.getElementById("lcmup").value) +parseFloat( document.getElementById("truck_body_price").value)+parseFloat(document.getElementById("Aftermarket_1").value)+parseFloat(document.getElementById("Aftermarket_2").value)-parseFloat(document.getElementById("fleet").value) - parseFloat(document.getElementById("employee_pricing_amount").value)) +(  parseFloat( document.getElementById("up_fitter_rebate").value) /1.13  );

	var Total_Fleet_Savings_b = Total_Fleet_Savings_a.toFixed(2);

	document.getElementById("Total_Fleet_Savingss").value = Total_Fleet_Savings_b;
  }, 2000);
}