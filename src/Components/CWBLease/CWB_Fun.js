var cwb_l_pay2_round ,cwb_hst2_round;

        


export const CWB_Disabled = () => {

    document.querySelector('#CWB_lease_term_1').disabled = false;
    document.querySelector('#CWB_lease_term_2').disabled = false;
    document.querySelector('#CWB_lease_rate_1').disabled = false;
    document.querySelector('#CWB_lease_rate_2').disabled = false;
    document.querySelector('#CWB_lease_residual_per_1').disabled = false;
    document.querySelector('#CWB_lease_residual_per_2').disabled = false;
    // document.querySelector('#com_lease_sec_dep_1').disabled = false;
    // document.querySelector('#com_lease_sec_dep_2').disabled = false;

}
export const CWBleaseprice = () => {
    setInterval(() => {

    let fleetvl = parseFloat(document.getElementById("fleet").value);
    let cnlaval = parseFloat(document.getElementById("CNLA").value);
    let fleetorcnlaval;
    if (fleetvl > cnlaval) {
        fleetorcnlaval = parseFloat(document.getElementById("fleet").value);
    }
    else if (fleetvl < cnlaval) {
        fleetorcnlaval = parseFloat(document.getElementById("CNLA").value);
    }
    else if (fleetvl == cnlaval) {
        fleetorcnlaval = parseFloat(document.getElementById("CNLA").value);
    }

    var cwb_lease_price = parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("delivery_fee").value) + parseFloat(document.getElementById("broker_fee").value) - parseFloat(fleetorcnlaval) - (parseFloat(document.getElementById("up_fitter_rebate").value) / 1.13);
    var cwb_lease_price_round = cwb_lease_price.toFixed(2);
    document.getElementById("CWB_lease_price").value = cwb_lease_price_round;
}, 2000);
}
export const CWBleaseper = () => {
    setInterval(() => {
    var cwb_lease_price_perc = parseFloat(document.getElementById("lease_down").value);
    var cwb_lease_price_perc_round = cwb_lease_price_perc.toFixed(2);
    document.getElementById("CWB_lease_per").value = cwb_lease_price_perc_round;
}, 2000);
}



export const CWBleasenetcap = () => {
    setInterval(() => {
    var cwb_l_p_n_c = (parseFloat(document.getElementById("CWB_lease_price").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value)) + parseFloat(document.getElementById("lienamount").value) - parseFloat(document.getElementById("CWB_lease_per").value);
    var cwb_l_p_n_c_round = cwb_l_p_n_c.toFixed(2);
    document.getElementById("CWB_lease_net_cap").value = cwb_l_p_n_c_round;
}, 2000);
}

export const CWBleasesaving = () => {
    setInterval(() => {
    var cwb_le_discount_a = (parseFloat(document.getElementById("Dealer_Cost").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("broker_fee").value)) - parseFloat(document.getElementById("CWB_lease_price").value);
    var cwb_le_discount_b = cwb_le_discount_a.toFixed(2);
    document.getElementById("cwb_save").value = cwb_le_discount_b;
}, 2000);
}

export const CWBleaseresidual = () => {
    setInterval(() => {
    var cwb_l_p_n_c = parseFloat(document.getElementById("CWB_lease_price").value) * (parseFloat(document.getElementById("CWB_lease_residual_per_1").value) / 100);
    var cwb_l_p_n_c_round = cwb_l_p_n_c.toFixed(2);
    document.getElementById("CWB_lease_residual_1").value = cwb_l_p_n_c_round;

    var cwb_l_p_n_c = parseFloat(document.getElementById("CWB_lease_price").value) * (parseFloat(document.getElementById("CWB_lease_residual_per_2").value) / 100);
    var cwb_l_p_n_c_round = cwb_l_p_n_c.toFixed(2);
    document.getElementById("CWB_lease_residual_2").value = cwb_l_p_n_c_round;
}, 2000);
}

export const CWBleasepayment = () => {
    setInterval(() => {
    var cwb_l_pay1 = ((parseFloat(document.getElementById("CWB_lease_net_cap").value) - parseFloat(document.getElementById("CWB_lease_residual_1").value) + ((parseFloat(document.getElementById("CWB_lease_net_cap").value) + parseFloat(document.getElementById("CWB_lease_residual_1").value)) * (parseFloat(document.getElementById("CWB_lease_rate_1").value / 2400)) * parseFloat(document.getElementById("CWB_lease_term_1").value)) / parseFloat(document.getElementById("CWB_lease_term_1").value)) / parseFloat(document.getElementById("CWB_lease_term_1").value)) + (((parseFloat(document.getElementById("CWB_lease_net_cap").value) + parseFloat(document.getElementById("CWB_lease_residual_1").value)) * (parseFloat(document.getElementById("CWB_lease_rate_1").value / 2400)) * parseFloat(document.getElementById("CWB_lease_term_1").value)) / parseFloat(document.getElementById("CWB_lease_term_1").value));
    var cwb_l_pay1_round0 = parseFloat(cwb_l_pay1);
    var cwb_l_pay1_round = cwb_l_pay1_round0.toFixed(2);
    document.getElementById("CWB_lease_payment_1").value = cwb_l_pay1_round;


    var cwb_l_pay2 = ((parseFloat(document.getElementById("CWB_lease_net_cap").value) - parseFloat(document.getElementById("CWB_lease_residual_2").value) + ((parseFloat(document.getElementById("CWB_lease_net_cap").value) + parseFloat(document.getElementById("CWB_lease_residual_2").value)) * (parseFloat(document.getElementById("CWB_lease_rate_2").value / 2400)) * parseFloat(document.getElementById("CWB_lease_term_2").value)) / parseFloat(document.getElementById("CWB_lease_term_2").value)) / parseFloat(document.getElementById("CWB_lease_term_2").value)) + (((parseFloat(document.getElementById("CWB_lease_net_cap").value) + parseFloat(document.getElementById("CWB_lease_residual_2").value)) * (parseFloat(document.getElementById("CWB_lease_rate_2").value / 2400)) * parseFloat(document.getElementById("CWB_lease_term_2").value)) / parseFloat(document.getElementById("CWB_lease_term_2").value));
    var cwb_l_pay2_round89 = parseFloat(cwb_l_pay2);
     cwb_l_pay2_round = cwb_l_pay2_round89.toFixed(2);
    document.getElementById("CWB_lease_payment_2").value = cwb_l_pay2_round;
}, 2000);
}


export const CWBleasehst = () => {
    setInterval(() => {
    var cwb_hst1 = parseFloat(document.getElementById("CWB_lease_payment_1").value) * 0.13;
    var cwb_hst1_round = cwb_hst1.toFixed(2);
    document.getElementById("CWB_lease_hst_1").value = cwb_hst1_round;

    var cwb_hst2 = parseFloat(document.getElementById("CWB_lease_payment_2").value) * 0.13;
     cwb_hst2_round = cwb_hst2.toFixed(2);
    document.getElementById("CWB_lease_hst_2").value = cwb_hst2_round;
}, 2000);
}

export const CWBleasehsdownpay = () => {
    setInterval(() => {
        
        var cwb_d_pay_fee1 = parseFloat(document.getElementById("CWB_lease_per").value) + parseFloat(document.getElementById("dealer_fee_admin").value) + parseFloat(document.getElementById("dealer_fee_env_recovery").value) + parseFloat(document.getElementById("dealer_fee_omvic").value) + parseFloat(document.getElementById("dealer_fee_wheel_locks").value) + parseFloat(document.getElementById("dealer_fee_floor_mats").value);

        var cwb_d_pay_fee01 = cwb_d_pay_fee1.toFixed(2);
        document.getElementById("CWB_lease_down_pay_1").value = cwb_d_pay_fee01;

        var cwb_d_pay_fee2 = parseFloat(document.getElementById("CWB_lease_per").value) + parseFloat(document.getElementById("dealer_fee_admin").value) + parseFloat(document.getElementById("dealer_fee_env_recovery").value) + parseFloat(document.getElementById("dealer_fee_omvic").value) + parseFloat(document.getElementById("dealer_fee_wheel_locks").value) + parseFloat(document.getElementById("dealer_fee_floor_mats").value);
        var cwb_d_pay_fee201 = cwb_d_pay_fee2.toFixed(2);
        document.getElementById("CWB_lease_down_pay_2").value = cwb_d_pay_fee201;


    }, 2000);

}
export const CWBleasehst2 = () => {
    setInterval(() => {
        var cwb_le_hst3 = parseFloat(document.getElementById("CWB_lease_down_pay_1").value) * 0.13;
        var cwb_le_hst3_1 = cwb_le_hst3.toFixed(2);
        document.getElementById("CWB_lease_hst_3").value = cwb_le_hst3_1;
    
        var cwb_le_hst4 = parseFloat(document.getElementById("CWB_lease_down_pay_2").value) * 0.13;
        var cwb_le_hst4_1 = cwb_le_hst4.toFixed(2);
        document.getElementById("CWB_lease_hst_4").value = cwb_le_hst4_1;
        
    }, 2000);
    }
    
    export const CWBleaseistpayment = () => {
        setInterval(() => {
        var cwb_le_Ist_pay11 = parseFloat(document.getElementById("CWB_lease_down_pay_1").value) + parseFloat(document.getElementById("CWB_lease_hst_3").value);
        var cwb_le_Ist_pay1_11 = cwb_le_Ist_pay11.toFixed(2);
        document.getElementById("CWB_lease_Ist_pay_1").value = cwb_le_Ist_pay1_11;
    
        var cwb_le_Ist_pay1 = parseFloat(document.getElementById("CWB_lease_down_pay_2").value) + parseFloat(document.getElementById("CWB_lease_hst_4").value);
        var cwb_le_Ist_pay1_1 = cwb_le_Ist_pay1.toFixed(2);
        document.getElementById("CWB_lease_Ist_pay_2").value = cwb_le_Ist_pay1_1;
            
    }, 2000);
    }
    export const CWBleaselicfee = () => {
        setInterval(() => {
    var f_l_lic =  document.getElementById("dealer_fee_licensing").value
    document.getElementById("CWB_lease_lic_fee_1").value= f_l_lic;
   document.getElementById("CWB_lease_lic_fee_2").value=f_l_lic;
}, 2000);
    }
    
    export const CWBleasefeefuel = () => {
        setInterval(() => {
        var C_L_d_fuel = parseFloat(document.getElementById("dealer_fee_fuel").value);
        var C_L_d_fuel_round1 = C_L_d_fuel.toFixed(2);
        document.getElementById("CWB_lease_fuel_1").value = C_L_d_fuel_round1;
        var C_L_d_fuel_round2 = C_L_d_fuel.toFixed(2);
        document.getElementById("CWB_lease_fuel_2").value = C_L_d_fuel_round2;
       }, 2000);
    }
    
  
    export const CWBleasedeposit = () => {
        setInterval(() => {
        var f_l_dep2 = parseFloat(document.getElementById("deposit").value);
        var rnd_cwb_sec1 = f_l_dep2.toFixed(2);
        document.getElementById("CWB_lease_dep_1").value = rnd_cwb_sec1;
  
        var f_l_dep21 = parseFloat(document.getElementById("deposit").value);
        var rnd_cwb_sec2 = f_l_dep21.toFixed(2);
        document.getElementById("CWB_lease_dep_2").value = rnd_cwb_sec2;
    }, 2000);
   
    }
   
    export const CWBleasetotaldue = () => {
        setInterval(() => {
        var f_l_dep21 = (parseFloat(document.getElementById("CWB_lease_fuel_1").value) + parseFloat(document.getElementById("CWB_lease_lic_fee_1").value) + parseFloat(document.getElementById("CWB_lease_Ist_pay_1").value)) - parseFloat( document.getElementById("CWB_lease_dep_1").value) ;
    var f_l_dep_resp21_rnd = f_l_dep21.toFixed(2);
 
    document.getElementById("CWB_lease_total_due_1").value= f_l_dep_resp21_rnd;
    
    var f_l_dep2 = (parseFloat(document.getElementById("CWB_lease_fuel_2").value) + parseFloat( document.getElementById("CWB_lease_lic_fee_2").value) + parseFloat(document.getElementById("CWB_lease_Ist_pay_2").value)) - parseFloat(document.getElementById("CWB_lease_dep_2").value);
    var f_l_dep2_resp2_rnd = f_l_dep2.toFixed(2);
    document.getElementById("CWB_lease_total_due_2").value=f_l_dep2_resp2_rnd;
}, 2000);

    }
   // document.getElementById("CWB_lease_total_2").value
   
   export const CWBleasetotalvalue = () => {
    setInterval(() => {

    var cwb_totals = parseFloat(document.getElementById("CWB_lease_payment_1").value) + parseFloat(document.getElementById("CWB_lease_hst_1").value);
    var cwb_totals_round = cwb_totals.toFixed(2);
    document.getElementById("CWB_lease_total_1").value = cwb_totals_round;


    var cwb_totals2 = parseFloat(cwb_l_pay2_round) + parseFloat(cwb_hst2_round);
    var cwb_totals2_rnd = cwb_totals2.toFixed(2);
    document.getElementById("CWB_lease_total_2").value= cwb_totals2_rnd ;

}, 2000);
}
