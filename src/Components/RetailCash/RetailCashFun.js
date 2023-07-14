

// document.getElementById("ash_Tax_Sub_Total").value
export const RetaiLeaseCDs = () => {
	var cash_discount_a = (parseFloat(document.getElementById("msrp").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value)) - (parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) - parseFloat(document.getElementById("alternatecashback").value) - parseFloat((document.getElementById("employee_pricing_amount").value))) + (parseFloat(document.getElementById("CashAfterTaxRebate").value) / 1.13);
	var cash_discount_b = cash_discount_a.toFixed(2);
	document.getElementById("Cash_Discounts").value = cash_discount_b;
}


export const RetaiLeasesubT = () => {
	var Cash_Sub_Total_a = parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("broker_fee").value) + parseFloat(document.getElementById("delivery_fee").value) + parseFloat(document.getElementById("dealer_fee_admin").value) + parseFloat(document.getElementById("dealer_fee_env_recovery").value) + parseFloat(document.getElementById("dealer_fee_omvic").value) - parseFloat(document.getElementById("alternatecashback").value) - parseFloat(document.getElementById("employee_pricing_amount").value) + (parseFloat(document.getElementById("CashAfterTaxRebate").value) / 1.13);
	var Cash_Sub_Total_b = Cash_Sub_Total_a.toFixed(2);
	document.getElementById("Cash_Sub_Total").value = Cash_Sub_Total_b;

}

export const RetailLeaseSubTotal = () => {
	var Cash_Tax_Sub_Total_a = parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("delivery_fee").value) + parseFloat(document.getElementById("broker_fee").value) - parseFloat(document.getElementById("alternatecashback").value) - parseFloat(document.getElementById("employee_pricing_amount").value) + parseFloat(document.getElementById("dealer_fee_admin").value) + parseFloat(document.getElementById("dealer_fee_env_recovery").value) + parseFloat(document.getElementById("dealer_fee_omvic").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value);

	var Cash_Tax_Sub_Total_b = Cash_Tax_Sub_Total_a.toFixed(2);
	document.getElementById("Cash_Tax_Sub_Total").value = Cash_Tax_Sub_Total_b;
	}
export const RetailLeasecashdeal =()=>{

	var Cash_Deal_HST_a = ( parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value)+parseFloat(document.getElementById("dmup").value)+parseFloat(document.getElementById("lcmup").value)+parseFloat(document.getElementById("pdi").value)+parseFloat(document.getElementById("truck_body_price").value)+parseFloat(document.getElementById("Aftermarket_1").value)+parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat( document.getElementById("delivery_fee").value) + parseFloat(document.getElementById("broker_fee").value)-parseFloat(document.getElementById("alternatecashback").value) -parseFloat( document.getElementById("employee_pricing_amount").value) + parseFloat( document.getElementById("dealer_fee_admin").value) +parseFloat(document.getElementById("dealer_fee_env_recovery").value) +parseFloat( document.getElementById("dealer_fee_omvic").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value) ) *0.13 ;
var Cash_Deal_HST_b = Math.round((Cash_Deal_HST_a + Number.EPSILON) * 100) / 100;
 document.getElementById("Cash_Deal_HST").value=Cash_Deal_HST_b;

}

export const RetailLeasecashtotal =()=>{
	var Cash_Total_a = (( parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value)+parseFloat(document.getElementById("dmup").value)+parseFloat(document.getElementById("lcmup").value)+parseFloat(document.getElementById("pdi").value)+parseFloat(document.getElementById("truck_body_price").value)+parseFloat(document.getElementById("Aftermarket_1").value)+parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("broker_fee").value) + parseFloat(document.getElementById("delivery_fee").value)-parseFloat(document.getElementById("alternatecashback").value) -parseFloat(document.getElementById("employee_pricing_amount").value) + parseFloat(document.getElementById("dealer_fee_admin").value) +parseFloat(document.getElementById("dealer_fee_env_recovery").value) +parseFloat(document.getElementById("dealer_fee_omvic").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value) ) *1.13) + parseFloat(document.getElementById("lienamount").value) ;

	var Cash_Total_b = Math.round((Cash_Total_a + Number.EPSILON) * 100) / 100;
 document.getElementById("Cash_Total").value= Cash_Total_b ;
}
export const RetailLeasecashrebates =()=>{

	var Cash_After_Tax_Rebates_a = parseFloat(document.getElementById("after_tax_rebate").value);
  document.getElementById("CashAfterTaxRebate").value=Cash_After_Tax_Rebates_a;
}
export const RetailLeasecashdelivery =()=>{
	var Cash_Due_on_Delivery_a = (( parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value)+parseFloat(document.getElementById("dmup").value)+parseFloat(document.getElementById("lcmup").value)+parseFloat(document.getElementById("pdi").value)+parseFloat(document.getElementById("truck_body_price").value)+parseFloat(document.getElementById("Aftermarket_1").value)+parseFloat( document.getElementById("Aftermarket_2").value) + parseFloat( document.getElementById("delivery_fee").value) + parseFloat(document.getElementById("broker_fee").value)+ parseFloat(document.getElementById("dealer_fee_admin").value) +parseFloat(document.getElementById("dealer_fee_env_recovery").value) +parseFloat(document.getElementById("dealer_fee_omvic").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value) ) *1.13) + parseFloat( document.getElementById("lienamount").value) + parseFloat(document.getElementById("dealer_fee_fuel").value)+ parseFloat(document.getElementById("dealer_fee_licensing").value) - parseFloat(document.getElementById("deposit").value) - parseFloat(document.getElementById("alternatecashback").value) -parseFloat(document.getElementById("employee_pricing_amount").value) -  (  parseFloat(document.getElementById("CashAfterTaxRebate").value) /1.13 );

	var Cash_Due_on_Delivery_b = Math.round((Cash_Due_on_Delivery_a + Number.EPSILON) * 100) / 100;
	 document.getElementById("Cash_Due_on_Delivery").value =Cash_Due_on_Delivery_b ;

		}
		// document.getElementById("Total_Cash_Savings").value

export const RetailLeasecashselling =()=>{
	var Cash_Selling_Price_a = parseFloat( document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value)+parseFloat(document.getElementById("dmup").value)+parseFloat(document.getElementById("lcmup").value)+parseFloat(document.getElementById("pdi").value)+parseFloat(document.getElementById("truck_body_price").value)+parseFloat(document.getElementById("Aftermarket_1").value)+parseFloat( document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("broker_fee").value) + parseFloat( document.getElementById("delivery_fee").value) - parseFloat(document.getElementById("alternatecashback").value) -parseFloat(document.getElementById("employee_pricing_amount").value) -  (  parseFloat(document.getElementById("CashAfterTaxRebate").value) /1.13 );
                var Cash_Selling_Price_b = Cash_Selling_Price_a.toFixed(2);
              document.getElementById("Cash_Selling_Price").value=Cash_Selling_Price_b;
}
export const RetailLeasecashsaving =()=>{

	var Total_Cash_Savingsa = (parseFloat( document.getElementById("msrp").value) +parseFloat(document.getElementById("truck_body_price").value)+parseFloat(document.getElementById("Aftermarket_1").value)+parseFloat(document.getElementById("Aftermarket_2").value)) - (parseFloat(document.getElementById("invoice").value) -parseFloat(document.getElementById("hb").value) +parseFloat(document.getElementById("dmup").value)+parseFloat(document.getElementById("lcmup").value) +parseFloat(document.getElementById("truck_body_price").value)+parseFloat(document.getElementById("Aftermarket_1").value)+parseFloat(document.getElementById("Aftermarket_2").value)-parseFloat(document.getElementById("alternatecashback").value) -parseFloat( document.getElementById("employee_pricing_amount").value))  +  (  parseFloat(document.getElementById("CashAfterTaxRebate").value) /1.13 )  ;
                var Total_Cash_Savingsb = Total_Cash_Savingsa.toFixed(2);
               document.getElementById("Total_Cash_Savings").value=Total_Cash_Savingsb;

}










