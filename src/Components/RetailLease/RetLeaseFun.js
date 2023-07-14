import $ from 'jquery';

// RETAIL fIELD Disabled
export const RetaiLease_Disabled = ()=>{
    setInterval(() => {
    document.querySelector('#term111').disabled = false;
    document.querySelector('#term222').disabled = false;
    document.querySelector('#rate111').disabled = false;
    document.querySelector('#rate222').disabled = false;
    document.querySelector('#rate1111').disabled = false;
    document.querySelector('#rate2222').disabled = false;
    document.querySelector('#security_deposit1').disabled = false;
    document.querySelector('#security_deposit2').disabled = false;
    document.querySelector('#excess_kms').disabled = false;
    document.querySelector('#excess_kms2').disabled = false;
    document.querySelector('#twenty_four').disabled = false;
    document.querySelector('#twenty_four1').disabled = false;
    document.querySelector('#cents_per_km1').disabled = false;
    document.querySelector('#cents_per_km2').disabled = false;
  
}, 2000);
}


// Retail lease price 

export const ReatiLeasePrice = ()=>{
    setTimeout(() => {
    var calculate_price7 = parseFloat(document.getElementById("invoice").value ) - parseFloat(document.getElementById("hb").value ) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value ) + parseFloat(document.getElementById("pdi").value ) + parseFloat(document.getElementById("truck_body_price").value ) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value )  + parseFloat(document.getElementById("broker_fee").value ) + parseFloat(document.getElementById("delivery_fee").value) - parseFloat(document.getElementById("delivery_allowance").value ) - parseFloat(document.getElementById("retail_lease").value )- parseFloat(document.getElementById("employee_pricing_amount").value ) -   (parseFloat(document.getElementById("after_tax_rebate").value )/1.13 );
    var round_price7 = calculate_price7.toFixed(2);
    document.getElementById("price7").value = round_price7;

    var re_le_fi_net_cap = (parseFloat(document.getElementById("price7").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value)) + parseFloat(document.getElementById("lienamount").value) - parseFloat( document.getElementById("per7").value);
    var round_re_le = re_le_fi_net_cap.toFixed(2);
    document.getElementById("net_cap_7").value = round_re_le;

       var ret_le_discount_a = ( parseFloat(document.getElementById("Dealer_Cost").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("broker_fee").value)  ) - parseFloat(document.getElementById("price7").value) ;
       var ret_le_discount_b =  ret_le_discount_a.toFixed(2);
     document.getElementById("Savings").value = ret_le_discount_b;


     //......RESIDUE CODE..............//
    let make = document.getElementById("make").value;
    if( make == "Ford"  || make == "Lincoln" || make == "GMC" || make == "Chevrolet" || make == "Cadillac"  || make == "Buick" || make == "Chrysler" || make == "Ram" || make == "Dodge" || make == "Jeep" || make == "Fiat" || make == "FORD" || make == "LINCOLN" || make == "Gmc" || make == "CHEVROLET" || make == "CADILLAC"  || make == "BUICK"  || make == "CHRYSLER"  || make == "RAM"  || make == "DODGE"  || make == "JEEP"  || make == "FIAT"  )
    {
    var residual01 = parseFloat(document.getElementById("msrp").value) * (parseFloat(document.getElementById("rate1111").value) / 100);
    var residual02 = (((parseFloat(document.getElementById("twenty_four").value)/12) *(parseFloat(document.getElementById("term111").value)))* (parseFloat(document.getElementById("cents_per_km1").value)/100));
    var residual03 = parseFloat(residual01) - parseFloat(residual02) ;
    var residual04 = residual03.toFixed(2) ;
    document.getElementById("residual1").value = residual04;

    var res_2_0 = parseFloat(document.getElementById("rate2222").value) / 100;
    var res_2_1 = (parseFloat(document.getElementById("msrp").value) * parseFloat(res_2_0)) - (((parseFloat(document.getElementById("twenty_four1").value) / 12) * parseFloat(document.getElementById("term222").value)) * (parseFloat(document.getElementById("cents_per_km2").value)/100)     );
    var final_res2 = res_2_1.toFixed(2);
    document.getElementById("residual2").value = final_res2;

    }
    else
    {
        var residual01 = (parseFloat(document.getElementById("msrp").value) - parseFloat(document.getElementById("freight_and_air_tax").value)) * ( parseFloat(document.getElementById("rate1111").value) /100 ) - (((parseFloat(document.getElementById("twenty_four").value)/12) *(parseFloat(document.getElementById("term111").value)))* (parseFloat(document.getElementById("cents_per_km1").value)/100)) ;
        var residual04 = residual01.toFixed(2) ;
        document.getElementById("residual1").value = residual04;

        var res_2_0 =  (parseFloat(document.getElementById("msrp").value) - parseFloat(document.getElementById("freight_and_air_tax").value)) *(parseFloat(document.getElementById("rate2222").value) / 100 ) - (((parseFloat(document.getElementById("twenty_four1").value)/12) *(parseFloat(document.getElementById("term222").value)))* (parseFloat(document.getElementById("cents_per_km2").value)/100)); 
        var res_2_1 = res_2_0.toFixed(2) ;
        document.getElementById("residual2").value = res_2_1;
            
    }

       
    // //Total KM2 Code 
    var total_km19 = (parseFloat(document.getElementById("excess_kms").value) + parseFloat(document.getElementById("twenty_four").value)) ;
    document.getElementById("total_km1").value = total_km19;

    var total_km18 = (parseFloat(document.getElementById("excess_kms2").value) + parseFloat(document.getElementById("twenty_four1").value)) ;
    document.getElementById("total_km2").value = total_km18 ;
    //..........payment code .....//
    var payment_of_retails_lease = (parseFloat(document.getElementById("net_cap_7").value) - parseFloat(document.getElementById("residual1").value)) / parseFloat(document.getElementById("term111").value);
    var p_r_l_2 = parseFloat(document.getElementById("net_cap_7").value) + parseFloat(document.getElementById("residual1").value);
    var p_r_l_3 = (parseFloat(document.getElementById("rate111").value)/ 2400) * parseFloat(document.getElementById("term111").value);
    var p_r_l_4 = parseFloat(document.getElementById("term111").value);
    var p_r_l_5 = parseFloat(payment_of_retails_lease) + ((parseFloat(p_r_l_2) * parseFloat(p_r_l_3)) / parseFloat(p_r_l_4));
    var p_r_l_6 = parseFloat(p_r_l_5);
    var p_r_l_7 = p_r_l_6.toFixed(2);
    document.getElementById("payment11").value = p_r_l_7;

     var payment_of_retails_lease_2nd = (parseFloat(document.getElementById("net_cap_7").value) - parseFloat(document.getElementById("residual2").value)) / parseFloat(document.getElementById("term222").value);
    var p_r_l_2_2nd = parseFloat(document.getElementById("net_cap_7").value) + parseFloat(document.getElementById("residual2").value);
    var p_r_l_3_2nd = (parseFloat(document.getElementById("rate222").value)/ 2400) * parseFloat(document.getElementById("term222").value);
    var p_r_l_4_2nd = parseFloat(document.getElementById("term222").value);
    var p_r_l_5_2nd = parseFloat(payment_of_retails_lease_2nd) + ((parseFloat(p_r_l_2_2nd) * parseFloat(p_r_l_3_2nd)) / parseFloat(p_r_l_4_2nd));
    var p_r_l_6_2nd = parseFloat(p_r_l_5_2nd);
    var p_r_l_7_2nd = p_r_l_6_2nd.toFixed(2);
    document.getElementById("payment12").value = p_r_l_7_2nd;

    //..Hst Code Goes here ..
        var hst_fleet = parseFloat(document.getElementById("payment11").value) * 0.13;
        var hst_fleet_round_off = hst_fleet.toFixed(2);
        document.getElementById("hst1").value = hst_fleet_round_off;

        var hst_fleet_2nd = parseFloat(document.getElementById("payment12").value) * 0.13;
        var hst_fleet_round_off_2nd = hst_fleet_2nd.toFixed(2);
        document.getElementById("hst2").value = hst_fleet_round_off_2nd;

    //     // Total Code
        var total_am1 = parseFloat( document.getElementById("payment11").value) + parseFloat(document.getElementById("hst1").value);
        var total_am1_rouns = total_am1.toFixed(2);
        document.getElementById("total1").value = total_am1_rouns;

      var total_2nd = parseFloat(document.getElementById("payment12").value) + parseFloat(document.getElementById("hst2").value);
      var total_2nd_rouns = total_2nd.toFixed(2);
      document.getElementById("total2").value = total_2nd_rouns;

    //   // Deposit Code Goes here
      var sec_dep_com_lease11 = parseFloat(document.getElementById("total1").value)/25;
      var sec_dep_com_lease = (Math.ceil(sec_dep_com_lease11)) * 25;
      document.getElementById("security_deposit1").value = sec_dep_com_lease;


    var sec_dep_com_lease10 = parseFloat(document.getElementById("total2").value)/25;
    var sec_dep_com_lease00 = (Math.ceil(sec_dep_com_lease10)) * 25;
    document.getElementById("security_deposit2").value = sec_dep_com_lease00;


    // // Down Payment and Fee COde
    var down_payment_and_fees1 = parseFloat(document.getElementById("per7").value) + parseFloat(document.getElementById("dealer_fee_admin").value) + parseFloat(document.getElementById("dealer_fee_env_recovery").value) + parseFloat(document.getElementById("dealer_fee_omvic").value) + parseFloat(document.getElementById("dealer_fee_wheel_locks").value) + parseFloat(document.getElementById("dealer_fee_floor_mats").value);
    var down_payment_and_fees02 = down_payment_and_fees1.toFixed(2);
    document.getElementById("down_payment_and_fees").value = down_payment_and_fees02
    document.getElementById("down_payment_and_fees2").value = down_payment_and_fees02;

    // // Hst Code 
    var hst_amt111 = parseFloat(document.getElementById("down_payment_and_fees").value) * 0.13;
    var hst_amt111_round = hst_amt111.toFixed(2);
    document.getElementById("hst3").value = hst_amt111_round;

    var hst_amt222 = parseFloat(document.getElementById("down_payment_and_fees2").value) * 0.13;
    var hst_amt222_round = hst_amt222.toFixed(2);
    document.getElementById("hst4").value = hst_amt222_round;

    // // St_Payment
    var fst_Payment_0 = parseFloat(document.getElementById("total1").value);
    var fst_Payment_rnd = fst_Payment_0.toFixed(2);
    document.getElementById("st_Payment_1").value =total_am1_rouns;

    var second_Payment_0 = parseFloat(document.getElementById("total2").value);
    var second_Payment_rnd = second_Payment_0.toFixed(2);
    document.getElementById("st_Payment_11").value = total_2nd_rouns;

    // // Lic_Fee Code 
    var pl_lic_fee = parseFloat(document.getElementById("dealer_fee_licensing").value);
    var pl_lic_fee_1 = pl_lic_fee.toFixed(2);
    document.getElementById("lic_fee").value = pl_lic_fee_1;

    var pl_lic_fee1 = parseFloat(document.getElementById("dealer_fee_licensing").value);
    var pl_lic_fee1_1 = pl_lic_fee1.toFixed(2);
    document.getElementById("lic_fee1").value = pl_lic_fee1_1;

    // // Fuel Code 
    var pl_fuel33 = parseFloat(document.getElementById("dealer_fee_fuel").value);
    var pl_fuel33_1 = pl_fuel33.toFixed(2);
    document.getElementById("fuel33").value = pl_fuel33_1;

    var pl_fuel44 = parseFloat( document.getElementById("dealer_fee_fuel").value);
    var pl_fuel44_1 = pl_fuel44.toFixed(2);
    document.getElementById("fuel44").value = pl_fuel44_1;

    // //PPSA Code Here
    var pl_ppsa = (parseFloat(document.getElementById("term111").value) * 8) / 12;
    var pl_ppsa_1 = pl_ppsa.toFixed(2);
    document.getElementById("ppsa").value = pl_ppsa_1

    var pl_ppsa1 = (parseFloat(document.getElementById("term222").value) * 8) / 12;
    var pl_ppsa1_1 = pl_ppsa1.toFixed(2);
    document.getElementById("ppsa1").value = pl_ppsa1_1;

    // Deposit Code 
    var deposit_1_9 =parseFloat($('#deposit').val()) ;
    var rnd_ret_dep1 = deposit_1_9.toFixed(2);
    var deposit_1_99 = $('#deposit_1_').val(rnd_ret_dep1);

    var deposit_1_92 =parseFloat($('#deposit').val()) ;
    var rnd_ret_dep2 = deposit_1_92.toFixed(2);
    var deposit_1_99 = $('#deposit_1_1').val(rnd_ret_dep2);
    
    // Total Code Here
    
    var total_due = (parseFloat($('#down_payment_and_fees').val()) + parseFloat($('#hst3').val()) + parseFloat($('#st_Payment_1').val()) + parseFloat($('#lic_fee').val()) + parseFloat($('#fuel33').val()) + parseFloat($('#ppsa').val()) + parseFloat($('#security_deposit1').val() )) - parseFloat($('#deposit_1_').val());
    var total_due_round = total_due.toFixed(2);
    var total_due_final = $('#total_due').val(total_due_round);

    var total_due2 = parseFloat($('#down_payment_and_fees2').val()) + parseFloat($('#hst4').val()) + parseFloat($('#st_Payment_11').val());
    var total_due2_1 = parseFloat($('#lic_fee1').val()) + parseFloat($('#fuel44').val()) + parseFloat($('#ppsa1').val())  + parseFloat($('#security_deposit2').val());
    var total_due2_2 = parseFloat($('#deposit_1_1').val());
    var total_due2_3 = (parseFloat(total_due2) + parseFloat(total_due2_1)) - parseFloat(total_due2_2) ;
    var total_due_round2 = total_due2_3.toFixed(2);
    // alert(total_due_round2);
    // var total_due_final2 = $('#total_due2').val(total_due_round2);
    document.getElementById("total_due2").value = total_due_round2;
    console.log(total_due_round2);


}, 2000);

}






export const ReatiLeaseHst= ()=>{

}

export const ReatiLeaseSt_Payment= ()=>{

}


export const ReatiLeaseLic_fee= ()=>{

}

export const ReatiLeaseFuel= ()=>{

}

export const ReatiLeasePPSA= ()=>{

}

export const ReatiLeaseDeposit_1_= ()=>{

}

export const ReatiLeaseTotal_due_ = ()=>{

}
//.......Not Used .........//
export const ReatiLeaseLDP= ()=>{
    setTimeout(() => {
    // var cal8 = parseFloat(document.getElementById("price7").value) * (5 / 100);

}, 2000);
}

export const ReatiLeaseNetCap= ()=>{
    setTimeout(() => {
    
}, 2000);
}
// document.getElementById("make").value
export const ReatiLeaseSavings= ()=>{
    setTimeout(() => {
 
}, 2000);
}

//...........................Residual Cal ....................................//

export const ReatiLeaseResidual= ()=>{
    setTimeout(() => {

}, 2000);
}

export const ReatiLeasePayment1= ()=>{
    setTimeout(() => {

}, 2000);
}

export const ReatiLeasePayment22= ()=>{
    setTimeout(() => {

}, 2000);
}

export const ReatiLeasehst1= ()=>{
    setTimeout(() => {
   
}, 2000);
}
export const ReatiLeasehst2= ()=>{
    setTimeout(() => {
    
}, 2000);
}

export const ReatiLeaseTotal1= ()=>{

}

export const ReatiLeaseTotal2= ()=>{
  
}


export const ReatiLeaseSecurity_deposit1= ()=>{

}


export const ReatiLeaseSecurity_deposit2= ()=>{

}
export const ReatiLeaseTotal_km= ()=>{

}

export const ReatiLeaseDPFee2= ()=>{

}