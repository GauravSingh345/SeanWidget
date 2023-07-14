import $ from 'jquery';
export const COM_Disabled = ()=>{
    document.querySelector('#com_lease_term_1').disabled = false;
    document.querySelector('#com_lease_term_2').disabled = false;
    document.querySelector('#com_lease_rate_1').disabled = false;
    document.querySelector('#com_lease_rate_2').disabled = false;
    document.querySelector('#com_lease_residual_per_1').disabled = false;
    document.querySelector('#com_lease_residual_per_2').disabled = false;
    document.querySelector('#com_lease_sec_dep_1').disabled = false;
    document.querySelector('#com_lease_sec_dep_2').disabled = false;
    
}
// ComLease Price
export const ComLease_Price = ()=>{
    var com_lease_price = parseFloat(document.getElementById("invoice").value ) - parseFloat(document.getElementById("hb").value ) + parseFloat(document.getElementById("dmup").value ) + parseFloat(document.getElementById("lcmup").value ) + parseFloat(document.getElementById("pdi").value ) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("broker_fee").value)+ parseFloat(document.getElementById("delivery_fee").value) - parseFloat(document.getElementById("delivery_allowance").value) - parseFloat(document.getElementById("fals_amount").value) - parseFloat(document.getElementById("employee_pricing_amount").value) - (parseFloat(document.getElementById("after_tax_rebate").value)/1.13 )  ;
    var com_lease_price_round = com_lease_price.toFixed(2);
    document.getElementById("com_lease_price").value=com_lease_price_round;

 // ComLease Down Payment

    var five_perc = 10 / 100;
    var five_perc1 = parseFloat(document.getElementById("com_lease_price").value ) * parseFloat(five_perc);
    document.getElementById("com_lease_per").value =five_perc1;

    // ComLease Net Cap

    var c_l_n_c = (parseFloat(document.getElementById("com_lease_price").value ) - parseFloat(document.getElementById("trade_val").value ) - parseFloat(document.getElementById("leasetrade").value )) + parseFloat(document.getElementById("lienamount").value ) - parseFloat(document.getElementById("com_lease_per").value );
    var c_l_n_c_round = c_l_n_c.toFixed(2);
    document.getElementById("com_lease_net_cap").value =c_l_n_c_round;
    // ComLease Saving

    var com_le_discount_a = ( parseFloat(document.getElementById("Dealer_Cost").value ) + parseFloat(document.getElementById("dmup").value ) + parseFloat(document.getElementById("lcmup").value ) + parseFloat(document.getElementById("broker_fee").value )  ) - parseFloat(document.getElementById("com_lease_price").value ) ;
    var com_le_discount_b =  com_le_discount_a.toFixed(2);
    document.getElementById("com_save").value=com_le_discount_b;

    // ComLease Residual
    var c_l_residual = parseFloat(document.getElementById("com_lease_residual_per_1").value ) / 100;
    var c_l_residual_1 = parseFloat(c_l_residual) * parseFloat(document.getElementById("msrp").value );
    var c_l_residual_round = c_l_residual_1.toFixed(2);
    document.getElementById("com_lease_residual_1").value=c_l_residual_round;

    var c_l_residual_2 = parseFloat(document.getElementById("com_lease_residual_per_2").value ) / 100;
    var c_l_residual_1_2 = parseFloat(c_l_residual_2) * parseFloat(document.getElementById("msrp").value );
    var c_l_residual_round_2 = c_l_residual_1_2.toFixed(2);
    document.getElementById("com_lease_residual_2").value=c_l_residual_round_2;

    // ComLease HST 
    var c_l_hst1 = parseFloat( document.getElementById("com_lease_payment_1").value) * 0.13;
    var c_l_hst1_round = c_l_hst1.toFixed(2);
    document.getElementById("com_lease_hst_1").value=c_l_hst1_round;

    var c_l_hst2 = parseFloat(document.getElementById("com_lease_payment_2").value) * 0.13;
    var c_l_hst2_round = c_l_hst2.toFixed(2);
    document.getElementById("com_lease_hst_2").value=c_l_hst2_round;

    // ComLease Security Deposit
    var fl_le_sec_dep_101 = parseFloat(document.getElementById("com_lease_total_1").value )/25;
    var fl_le_sec_dep_1 = (Math.ceil(fl_le_sec_dep_101)) * 25;
    var pl_com_lease_sec_dep_1_1 = fl_le_sec_dep_1.toFixed(2);
    document.getElementById("com_lease_sec_dep_1").value=pl_com_lease_sec_dep_1_1;

    var fl_le_sec_dep_12 = parseFloat(document.getElementById("com_lease_total_2").value )/25;
    var fl_le_sec_dep_10 = (Math.ceil(fl_le_sec_dep_12)) * 25;
    var pl_com_lease_sec_dep_1_12 = fl_le_sec_dep_10.toFixed(2);
    document.getElementById("com_lease_sec_dep_2").value=pl_com_lease_sec_dep_1_12;
    // ComLease Down Payment and Fees
    var c_l_d_pay_fee1 = parseFloat(document.getElementById("com_lease_per").value ) + parseFloat(document.getElementById("dealer_fee_admin").value ) + parseFloat(document.getElementById("dealer_fee_env_recovery").value ) + parseFloat(document.getElementById("dealer_fee_omvic").value ) + parseFloat(document.getElementById("dealer_fee_wheel_locks").value ) + parseFloat(document.getElementById("dealer_fee_floor_mats").value );
    var c_l_d_pay_fee01 = c_l_d_pay_fee1.toFixed(2);
    document.getElementById("com_lease_down_pay_1").value=c_l_d_pay_fee01;

    var c_l_d_pay_fee2 = parseFloat(document.getElementById("com_lease_per").value ) + parseFloat(document.getElementById("dealer_fee_admin").value ) + parseFloat(document.getElementById("dealer_fee_env_recovery").value ) + parseFloat(document.getElementById("dealer_fee_omvic").value ) + parseFloat(document.getElementById("dealer_fee_wheel_locks").value ) + parseFloat(document.getElementById("dealer_fee_floor_mats").value );
    var c_l_d_pay_fee02 = c_l_d_pay_fee2.toFixed(2);
    document.getElementById("com_lease_down_pay_2").value=c_l_d_pay_fee02;

    //  ComLease Down hst
    var C_L_hst = parseFloat(document.getElementById("com_lease_down_pay_1").value ) * 0.13;
    var C_L_hst_round = C_L_hst.toFixed(2);
    document.getElementById("com_lease_hst_3").value=C_L_hst_round;

    var C_L_hst2 = parseFloat(document.getElementById("com_lease_down_pay_2").value ) * 0.13;
    var C_L_hst2_round = C_L_hst2.toFixed(2);
    document.getElementById("com_lease_hst_4").value=C_L_hst2_round;

    // ComLease 1st Payment
    var c_l_fst_pay = parseFloat(document.getElementById("com_lease_total_1").value );
    document.getElementById("com_lease_1st_pay_1").value=c_l_fst_pay;

    var c_l_2_pay = parseFloat(document.getElementById("com_lease_total_2").value );
    document.getElementById("com_lease_1st_pay_2").value=c_l_2_pay;

    // ComLease License Fee
    var C_L_d_fee = parseFloat(document.getElementById("dealer_fee_licensing").value );
    var C_L_d_fee_round = C_L_d_fee.toFixed(2);
    document.getElementById("com_lease_lic_fee_1").value=C_L_d_fee_round;

    var C_L_d_fee2 = parseFloat(document.getElementById("dealer_fee_licensing").value );
    var C_L_d_fee2_round = C_L_d_fee2.toFixed(2);
    document.getElementById("com_lease_lic_fee_2").value=C_L_d_fee2_round;

    // ComLease Fuel

    var C_L_d_fuel = parseFloat(document.getElementById("dealer_fee_fuel").value );
    var C_L_d_fuel_round = C_L_d_fuel.toFixed(2);
    document.getElementById("com_lease_fuel_1").value=C_L_d_fuel_round;
    document.getElementById("com_lease_fuel_2").value=C_L_d_fuel_round;

// ComLease PPSA
    var C_L_ppsa = (parseFloat(document.getElementById("com_lease_term_1").value) * parseFloat(document.getElementById("dealer_fee_ppsa").value )) / 12;
    var C_L_ppsa_round = C_L_ppsa.toFixed(2);
    document.getElementById("com_lease_PPSA_1").value=C_L_ppsa_round;

    var C_L_ppsa2 = (parseFloat(document.getElementById("com_lease_term_2").value ) * parseFloat(document.getElementById("dealer_fee_ppsa").value )) / 12;
    var C_L_ppsa2_round = C_L_ppsa2.toFixed(2);
    document.getElementById("com_lease_PPSA_2").value=C_L_ppsa2_round;

    // ComLease Deposit
    var c_l_dep = document.getElementById("deposit").value ;
    document.getElementById("com_lease_dep_1").value=c_l_dep;

    var c_l_dep2 = document.getElementById("deposit").value ;
    document.getElementById("com_lease_dep_2").value=c_l_dep2;

    // ComLease Payment

    var c_l_pay_1 = ((parseFloat(document.getElementById("com_lease_net_cap").value) - parseFloat(document.getElementById("com_lease_residual_1").value)) / parseFloat(document.getElementById("com_lease_term_1").value)) + ((((parseFloat(document.getElementById("com_lease_net_cap").value) + parseFloat(document.getElementById("com_lease_residual_1").value))) * ((parseFloat(document.getElementById("com_lease_rate_1").value) / 2400) * parseFloat(document.getElementById("com_lease_term_1").value))) / parseFloat(document.getElementById("com_lease_term_1").value));
    var c_l_pay_1_round_29 = parseFloat(c_l_pay_1);
    var c_l_pay_1_round_2 = c_l_pay_1_round_29.toFixed(2);
    document.getElementById("com_lease_payment_1").value = c_l_pay_1_round_2;
    
    var c_l_pay_2 = ((parseFloat(document.getElementById("com_lease_net_cap").value) - parseFloat(document.getElementById("com_lease_residual_2").value)) / parseFloat(document.getElementById("com_lease_term_2").value)) + ((((parseFloat(document.getElementById("com_lease_net_cap").value) + parseFloat(document.getElementById("com_lease_residual_2").value))) * ((parseFloat(document.getElementById("com_lease_rate_2").value) / 2400) * parseFloat(document.getElementById("com_lease_term_2").value))) / parseFloat(document.getElementById("com_lease_term_2").value));
    var c_l_pay_2_round_28 = parseFloat(c_l_pay_2);
    var c_l_pay_2_round_2 = c_l_pay_2_round_28.toFixed(2);
    document.getElementById("com_lease_payment_2").value = c_l_pay_2_round_2;

    // ComLease Total

    var c_l_total1 = parseFloat(document.getElementById("com_lease_payment_1").value) + parseFloat(document.getElementById("com_lease_hst_1").value);
    var c_l_total1_round = c_l_total1.toFixed(2);
    document.getElementById("com_lease_total_1").value = c_l_total1_round;
    
    var c_l_total2 = parseFloat(document.getElementById("com_lease_payment_2").value) + parseFloat(document.getElementById("com_lease_hst_2").value);
    var c_l_total2_round = c_l_total2.toFixed(2);
    document.getElementById("com_lease_total_2").value = c_l_total2_round;
}
// ComLease Down Payment
export const ComLease_DownPayment = () =>{

}
// ComLease Net Cap
export const ComLease_NetCap = () =>{

}
// ComLease Saving
export const ComLease_Saving =() =>{
    
}
// ComLease HST 
export const ComLease_hst_1 = () =>{
 
}
export const ComLease_hst_2 = () =>{

}
// ComLease Residual
export const ComLease_Residual_1 =() =>{

}
export const ComLease_Residual_2 =() =>{
   
}
// ComLease Security Deposit
export const ComLease_Sec_dep_1 =() =>{

}
export const ComLease_Sec_dep_2 =() =>{

}
// ComLease Down Payment and Fees
export const ComLease_DownPayment_Fees_1 =() =>{
   
}
export const ComLease_DownPayment_Fees_2 =() =>{
    
}
//  ComLease Down hst
export const ComLease_hst_3 =() =>{
  
}
export const ComLease_hst_4 =() =>{

}
// ComLease 1st Payment
export const ComLease_1stPayment1 =() =>{
   
}
export const ComLease_1stPayment2 =() =>{
  
}
// ComLease License Fee
export const ComLease_LicenceFee1 =() =>{
  
}
export const ComLease_LicenceFee2 =() =>{

}
// ComLease Fuel
export const ComLease_Fuel =() =>{

}
// ComLease PPSA
export const ComLease_PPSA1 =() =>{
    
}
export const ComLease_PPSA2 =() =>{
  
}
// ComLease Deposit
export const ComLease_Deposit1 =() =>{
   
}
export const ComLease_Deposit2 =() =>{
  
}
// ComLease Payment

export const ComLease_Payment = ()=>{
 
}

// ComLease Total
// document.getElementById("com_lease_total_2").value
export const ComLease_Total = ()=>{

}
