// FleetLease disabled
export const fleet_Disabled = ()=>{
    document.querySelector('#fleet_lease_term_1').disabled = false;
    document.querySelector('#fleet_lease_term_2').disabled = false;
    document.querySelector('#fleet_lease_rate_1').disabled = false;
    document.querySelector('#fleet_lease_rate_2').disabled = false;
    document.querySelector('#fleet_lease_residual_per_1').disabled = false;
    document.querySelector('#fleet_lease_residual_per_2').disabled = false;
    document.querySelector('#fleet_lease_sec_dep_1').disabled = false;
    document.querySelector('#fleet_lease_sec_dep_2').disabled = false;
    
}
// FleetLease Residual   
export const FleetLeasePrice = () =>{
    var fleetvl =   parseFloat(document.getElementById("fleet").value);
                        var cnlaval =  parseFloat(document.getElementById("CNLA").value);
                        if(fleetvl > cnlaval )
                        {
                            var fleetorcnlaval = parseFloat(document.getElementById("fleet").value);
                        }
                        else if( fleetvl < cnlaval )
                        {
                            var fleetorcnlaval = parseFloat(document.getElementById("CNLA").value);
                        }
                        else if( fleetvl === cnlaval )
                        {
                            var fleetorcnlaval = parseFloat(document.getElementById("CNLA").value);
                        }

                        var f_l_p_01 = parseFloat(document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value);
                        var f_l_p_02 = parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("truck_body_price").value);
                        var f_l_p_03 = parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("broker_fee").value)+ parseFloat(document.getElementById("delivery_fee").value);
                        var f_l_p_04 = (parseFloat(f_l_p_01) + parseFloat(f_l_p_02) + parseFloat(f_l_p_03)) - parseFloat(fleetorcnlaval) - ( parseFloat(document.getElementById("up_fitter_rebate").value)/1.13 )   ;
                        var round_f_l_p = f_l_p_04.toFixed(2);
                        // alert(round_f_l_p
                        document.getElementById("fleet_lease_price").value = round_f_l_p;

                        // FleetLease Residual
                        var f_l_res = parseFloat(document.getElementById("fleet_lease_residual_per_1").value) / 100;
                        var f_l_r2 = parseFloat(document.getElementById("fleet_lease_price").value) * parseFloat(f_l_res);
                        var f_l_r_3 = f_l_r2.toFixed(2);
                        document.getElementById("fleet_lease_residual_1").value = f_l_r_3;
                        // FleetLease Residual2
                        var f_l_res2 = parseFloat(document.getElementById("fleet_lease_residual_per_2").value) / 100;
                        var f_l_r22 = parseFloat(document.getElementById("fleet_lease_price").value) * parseFloat(f_l_res2);
                        var f_l_r_32 = f_l_r22.toFixed(2);
                        document.getElementById("fleet_lease_residual_2").value = f_l_r_32;

                        // // FleetLease Lease Down Payment
                        // var cal5 = document.getElementById("fleet_lease_price").value * (5 / 100);
                        // var round_cal5 = cal5.toFixed(2);
                        // document.getElementById("fleet_lease_per").value=round_cal5;
                       
                        // FleetLease Net Cap
                        var F_L_N_P = (parseFloat(document.getElementById("fleet_lease_price").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value)) + parseFloat(document.getElementById("lienamount").value) - parseFloat(document.getElementById("fleet_lease_per").value);
                        var round_F_L_N_P = F_L_N_P.toFixed(2);
                        document.getElementById("fleet_lease_net_cap").value=round_F_L_N_P;

                        // FleetLease Savings
                        var fleet_le_discount_a = ( parseFloat(document.getElementById("Dealer_Cost").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("broker_fee").value)) - parseFloat(document.getElementById("fleet_lease_price").value) ;
                        var fleet_le_discount_b =  fleet_le_discount_a.toFixed(2);
                        // alert(fleet_le_discount_b);
                        document.getElementById("fleet_save").value=fleet_le_discount_b;
                        // FleetLease Payment

                        var F_L_pay = (parseFloat(document.getElementById("fleet_lease_net_cap").value) - parseFloat(document.getElementById("fleet_lease_residual_1").value)) / parseFloat(document.getElementById("fleet_lease_term_1").value);
                        var F_L_pay_2 = parseFloat(document.getElementById("fleet_lease_net_cap").value) + parseFloat(document.getElementById("fleet_lease_residual_1").value);
                        var F_L_pay_3 = (parseFloat(document.getElementById("fleet_lease_rate_1").value) / 2400) * parseFloat(document.getElementById("fleet_lease_term_1").value);
                        var F_L_pay_4 = parseFloat(document.getElementById("fleet_lease_term_1").value);
                        var F_L_pay_5 = (F_L_pay + ((F_L_pay_2 * F_L_pay_3) / F_L_pay_4));
                        var F_L_pay_6 = F_L_pay_5.toFixed(2);
                        document.getElementById("fleet_lease_payment_1").value= F_L_pay_6;

                        // Fleetlease Payment 2
                        var F_L_pay_002 = (parseFloat(document.getElementById("fleet_lease_net_cap").value) - parseFloat(document.getElementById("fleet_lease_residual_2").value)) / parseFloat(document.getElementById("fleet_lease_term_2").value);
                        var F_L_pay_2_002 = parseFloat(document.getElementById("fleet_lease_net_cap").value) + parseFloat(document.getElementById("fleet_lease_residual_2").value);
                        var F_L_pay_3_002 = (parseFloat(document.getElementById("fleet_lease_rate_2").value) / 2400)  * parseFloat(document.getElementById("fleet_lease_term_2").value);
                        var F_L_pay_4_002 = parseFloat(document.getElementById("fleet_lease_term_2").value);
                        var F_L_pay_5_002 = (parseFloat(F_L_pay_002) + ((parseFloat(F_L_pay_2_002) * parseFloat(F_L_pay_3_002)) / parseFloat(F_L_pay_4_002)) );
                        var F_L_pay_6_002 = F_L_pay_5_002.toFixed(2);
                        document.getElementById("fleet_lease_payment_2").value= F_L_pay_6_002;

                        // FleetLease HST 

                        var f_l_hst = parseFloat(document.getElementById("fleet_lease_payment_1").value) * 0.13;
                        var f_l_hst1 = f_l_hst.toFixed(2);
                        document.getElementById("fleet_lease_hst_1").value= f_l_hst1;

                        var f_l_hst0 = parseFloat(document.getElementById("fleet_lease_payment_2").value) * 0.13;
                        var f_l_hst10 = f_l_hst0.toFixed(2);
                        document.getElementById("fleet_lease_hst_2").value= f_l_hst10;

                        // FleetLease Total 

                        var fleet_lease_total_10 = parseFloat(document.getElementById("fleet_lease_payment_1").value) + parseFloat(document.getElementById("fleet_lease_hst_1").value);
                        var fleet_lease_total_2 = fleet_lease_total_10.toFixed(2);
                        document.getElementById("fleet_lease_total_1").value= fleet_lease_total_2;

                        var fleet_lease_total_10 = parseFloat(document.getElementById("fleet_lease_payment_2").value) + parseFloat(document.getElementById("fleet_lease_hst_2").value);
                        var fleet_lease_total_2 = fleet_lease_total_10.toFixed(2);
                        document.getElementById("fleet_lease_total_2").value= fleet_lease_total_2;

                        // FleetLease Security Deposit 

                        var fl_le_sec_dep_101 = parseFloat(document.getElementById("fleet_lease_total_1").value)/25;
                        var fl_le_sec_dep_1 = (Math.ceil(fl_le_sec_dep_101)) * 25;
                        var fl_le_sec_dep_1111 = fl_le_sec_dep_1.toFixed(2);
                        document.getElementById("fleet_lease_sec_dep_1").value= fl_le_sec_dep_1111;


                        var fl_le_sec_dep_12 = parseFloat(document.getElementById("fleet_lease_total_2").value)/25;
                        var fl_le_sec_dep_10 = (Math.ceil(fl_le_sec_dep_12)) * 25;
                        var fl_le_sec_dep_1200 = fl_le_sec_dep_10.toFixed(2);
                        document.getElementById("fleet_lease_sec_dep_2").value= fl_le_sec_dep_1200;

                        //  FleetLeas Down payment 

                        var f_l_d_pay = parseFloat(document.getElementById("fleet_lease_per").value) + parseFloat(document.getElementById("dealer_fee_env_recovery").value) + parseFloat(document.getElementById("dealer_fee_admin").value) + parseFloat(document.getElementById("dealer_fee_omvic").value) + parseFloat(document.getElementById("dealer_fee_wheel_locks").value) + parseFloat(document.getElementById("dealer_fee_floor_mats").value);
                        var f_l_d_pay1 = f_l_d_pay.toFixed(2);
                        document.getElementById("fleet_lease_down_pay_1").value= f_l_d_pay1;
                        document.getElementById("fleet_lease_down_pay_2").value= f_l_d_pay1;

                        // FleetLease hst
                        var f_l1_hst3 = parseFloat(document.getElementById("fleet_lease_down_pay_1").value) * 0.13;
                        var f_l1_hst13 = f_l1_hst3.toFixed(2);
                        document.getElementById("f_l_hst1").value= f_l1_hst13;

                        var f_l1_hst30 = parseFloat(document.getElementById("fleet_lease_down_pay_2").value  ) * 0.13;
                        var f_l1_hst130 = f_l1_hst30.toFixed(2);
                        document.getElementById("f_l_hst2").value= f_l1_hst130;

                        // FleetLease 1st payment
                        var f_t_1st_pay = document.getElementById("fleet_lease_total_1").value ;
                        document.getElementById("fleet_lease_1st_pay_1").value= f_t_1st_pay;

                        var f_t_1st_pay_2 = document.getElementById("fleet_lease_total_2").value ;
                        document.getElementById("fleet_lease_1st_pay_2").value= f_t_1st_pay_2;

                        // FleetLease Licence Fee 

                        var der_fe_fue0 = document.getElementById("dealer_fee_licensing").value ;
                        document.getElementById("fleet_lease_lic_fee_1").value= der_fe_fue0;
                        document.getElementById("fleet_lease_lic_fee_2").value= der_fe_fue0;

                        var der_fe_fuel = document.getElementById("dealer_fee_fuel").value ;
                        document.getElementById("fleet_lease_fuel_1").value= der_fe_fuel;
                        document.getElementById("fleet_lease_fuel_2").value= der_fe_fuel;
                        // FleetLease PPS
                        var f_l_ppsa = (document.getElementById("fleet_lease_term_1").value * document.getElementById("dealer_fee_ppsa").value ) / 12;
                        var f_l_ppsa_fix = f_l_ppsa.toFixed(2);
                        document.getElementById("fleet_lease_PPSA_1").value= f_l_ppsa_fix;

                        var f_l_ppsa2 = (document.getElementById("fleet_lease_term_2").value  * document.getElementById("dealer_fee_ppsa").value ) / 12;
                        var f_l_ppsa2_fix = f_l_ppsa2.toFixed(2);
                        document.getElementById("fleet_lease_PPSA_2").value= f_l_ppsa2_fix;

                        // FleetLease Deposit
                        var fleet_deposit_1_9 =parseFloat(document.getElementById("deposit").value ) ;
                        var fleet_rnd_ret_dep1 = fleet_deposit_1_9.toFixed(2);
                        document.getElementById("fleet_lease_dep_1").value= fleet_rnd_ret_dep1;

                        var fleet_deposit_1_92 =parseFloat(document.getElementById("deposit").value ) ;
                        var fleet_rnd_ret_dep2 = fleet_deposit_1_92.toFixed(2);
                        document.getElementById("fleet_lease_dep_2").value= fleet_rnd_ret_dep2;

                        //..Fleet Total 

                        var f_l_total_due = (parseFloat(document.getElementById("fleet_lease_down_pay_1").value ) + parseFloat(document.getElementById("fleet_lease_1st_pay_1").value ) + parseFloat(document.getElementById("fleet_lease_lic_fee_1").value ) + parseFloat(document.getElementById("fleet_lease_fuel_1").value) + parseFloat(document.getElementById("fleet_lease_PPSA_1").value )  + parseFloat(document.getElementById("f_l_hst1").value ) + parseFloat(document.getElementById("fleet_lease_sec_dep_1").value ) ) - parseFloat(document.getElementById("fleet_lease_dep_1").value );
                        var f_l_tttl_due_round1 = f_l_total_due.toFixed(2);
                        document.getElementById("fleet_lease_total_due_1").value  = f_l_tttl_due_round1;
                    
                        var f_l_total_due_2 = (parseFloat(document.getElementById("fleet_lease_down_pay_2").value ) + parseFloat(document.getElementById("fleet_lease_1st_pay_2").value ) + parseFloat(document.getElementById("fleet_lease_lic_fee_2").value ) + parseFloat(document.getElementById("fleet_lease_fuel_2").value ) + parseFloat(document.getElementById("fleet_lease_PPSA_2").value )  + parseFloat(document.getElementById("f_l_hst2").value) + parseFloat(document.getElementById("fleet_lease_sec_dep_2").value) ) - parseFloat(document.getElementById("fleet_lease_dep_2").value ) ;
                        var f_l_tttl_due_round = f_l_total_due_2.toFixed(2);
                        document.getElementById("fleet_lease_total_due_2").value  = f_l_tttl_due_round;
}

// FleetLease PPS
export const FleetLeas_PPSA_1= () =>{
  

}
export const FleetLeas_PPSA_2= () =>{
   
}
// FleetLease Deposit
export const FleetLeas_Deposit1= () =>{

}
export const FleetLeas_Deposit2= () =>{
   
}
// document.getElementById("fleet_lease_total_due_2").value 
//..Fleet Total 

export const FleetLeaseTotal = ()=>{
 
}


// FleetLease Residual
export const FleetLeaseResidual_1 = ()=>{
   
}

export const FleetLeaseResidual_2 = ()=>{

}
// FleetLease Lease Down Payment
export const FleetLeaseDownPayment = () =>{
    
}
// FleetLease Net Cap
export const FleetLeaseNetcap =() =>{

}
// FleetLease Savings
export const FleetLeaseSaving = () =>{
  
}
// FleetLease Payment
export const FleetLeasePayment1 = () =>{
  
}
export const FleetLeasePayment2 = ()=>{
 
}
// FleetLease HST 
export const FleetLeaseHst1 = () =>{
 

}
export const FleetLeaseHst2 = () =>{
   

}
// FleetLease Total 
export const FleetLeaseTotal1 = ()=>{
   
}
export const FleetLeaseTotal2 = ()=>{
  
}
// FleetLease Security Deposit 
export const FleetLease_sec_dep_1 = () =>{
  
}
export const FleetLease_sec_dep_2 = () =>{
   
}
//  FleetLeas Down payment 
export const FleetLease_DownPayment_1_2 = () =>{

}
// FleetLease hst
export const FleetLeas_hst1 = () =>{
  
}
export const FleetLeas_hst2 = () =>{
   
}
// FleetLease 1st payment
export const FleetLease_1st_pay_1 = () =>{
 
}
export const FleetLease_1st_pay_2 = () =>{

} 
// FleetLease Licence Fee 
export const FleetLeas_lic_fee_1_2 = () =>{

}
// FleetLease Fuel
export const FleetLeas_Fuel1 = () =>{
  
}