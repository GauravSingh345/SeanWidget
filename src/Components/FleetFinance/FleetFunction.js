import "../../Resources/GlobalVariable";
import $ from 'jquery';


//................price Field...................................//
export const  FleetFinancePrice1 = ()=>{
    setTimeout(() => {
    // Fleet Finance Price 
    
   let  fleetvl =   parseFloat(document.getElementById("fleet").value);
   let cnlaval =  parseFloat(document.getElementById("CNLA").value);
   var  fleetorcnlaval;
    if(fleetvl > cnlaval )
    {
         fleetorcnlaval =  parseFloat(document.getElementById("fleet").value);
    }
    else if( fleetvl < cnlaval )
    {
          fleetorcnlaval =  parseFloat(document.getElementById("CNLA").value);
    }
    else if( fleetvl === cnlaval )
    {
         fleetorcnlaval =  parseFloat(document.getElementById("CNLA").value);
    }

    var calculate_price11 = parseFloat(document.getElementById("invoice").value) - parseFloat( document.getElementById("hb").value) + parseFloat(document.getElementById("dmup").value) + parseFloat( document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat( document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("broker_fee").value) + parseFloat( document.getElementById("delivery_fee").value) - parseFloat(fleetorcnlaval)  - ( parseFloat(document.getElementById("up_fitter_rebate").value)/1.13 )  ;
    var prices0 = calculate_price11.toFixed(2);
    document.getElementById("price1").value = prices0;

    // var fleet_fin_discount_a = ( parseFloat(document.getElementById("Dealer_Cost").value) + parseFloat(document.getElementById("dmup").value) + parseFloat(document.getElementById("lcmup").value) + parseFloat(document.getElementById("broker_fee").value)  ) - parseFloat(document.getElementById("price1").value) ;

    // var fleet_fin_discount_a = (parseFloat($('#msrp').val()) +parseFloat($('#truck_body_price').val())+parseFloat($('#Aftermarket_1').val())+parseFloat($('#Aftermarket_2').val()))  - (parseFloat($('#invoice').val()) +  parseFloat($('#dmup').val()) + parseFloat($('#lcmup').val())  - parseFloat(fleetorcnlaval)  - ( parseFloat($('#up_fitter_rebate').val())/1.13 ));

    //   var fleet_fin_discount_b =  fleet_fin_discount_a.toFixed(2);
    var fleet_fin_discount_a = (parseFloat($('#msrp').val()) +parseFloat($('#truck_body_price').val())+parseFloat($('#Aftermarket_1').val())+parseFloat($('#Aftermarket_2').val()))  - (parseFloat($('#invoice').val())-  parseFloat($('#hb').val()) +  parseFloat($('#dmup').val()) +  parseFloat($('#truck_body_price').val()) + parseFloat($('#Aftermarket_1').val()) + parseFloat($('#Aftermarket_2').val()) + parseFloat($('#lcmup').val())  - parseFloat(fleetorcnlaval)  - ( parseFloat($('#up_fitter_rebate').val())/1.13 ));
    var fleet_fin_discount_b =  fleet_fin_discount_a.toFixed(2);
    //   alert(fleet_fin_discount_b);
      document.getElementById("Fleet_Fin_Discount").value = fleet_fin_discount_b;

      var fin_amount14 = ((parseFloat($('#invoice').val()) - parseFloat($('#hb').val())+parseFloat($('#dmup').val())+parseFloat($('#lcmup').val())+parseFloat($('#pdi').val())+parseFloat($('#truck_body_price').val())+parseFloat($('#Aftermarket_1').val())+parseFloat($('#Aftermarket_2').val()) + parseFloat($('#delivery_fee').val()) + parseFloat($('#broker_fee').val())-parseFloat($('#fleet').val()) + parseFloat($('#dealer_fee_admin').val()) +parseFloat($('#dealer_fee_env_recovery').val()) +parseFloat($('#dealer_fee_omvic').val()) -parseFloat($('#trade_val').val()) - parseFloat($('#leasetrade').val()) )*1.13) + parseFloat($('#lienamount').val())  - parseFloat($('#after_tax_rebate').val()) + parseFloat($('#dealer_fee_fuel').val())+ parseFloat($('#dealer_fee_licensing').val())  + ((parseFloat($('#term11').val()) / 12) * parseFloat($('#dealer_fee_ppsa').val())) -  parseFloat($('#per5').val());
      var round_value = fin_amount14.toFixed(2);
      var final_fin_amount23 = $('#net_cap').val(round_value);
    //    alert(round_value);
      var fin_amount140 = ((parseFloat($('#invoice').val()) - parseFloat($('#hb').val())+parseFloat($('#dmup').val())+parseFloat($('#lcmup').val())+parseFloat($('#pdi').val())+parseFloat($('#truck_body_price').val())+parseFloat($('#Aftermarket_1').val())+parseFloat($('#Aftermarket_2').val()) + parseFloat($('#delivery_fee').val()) + parseFloat($('#broker_fee').val())-parseFloat($('#fleet').val()) + parseFloat($('#dealer_fee_admin').val()) +parseFloat($('#dealer_fee_env_recovery').val()) +parseFloat($('#dealer_fee_omvic').val()) -parseFloat($('#trade_val').val()) - parseFloat($('#leasetrade').val()) )*1.13) + parseFloat($('#lienamount').val())  - parseFloat($('#after_tax_rebate').val()) + parseFloat($('#dealer_fee_fuel').val())+ parseFloat($('#dealer_fee_licensing').val())  + ((parseFloat($('#term11').val()) / 12) * parseFloat($('#dealer_fee_ppsa').val())) -  parseFloat($('#per5').val());
      var round_value0 = fin_amount140.toFixed(2);
      var final_fin_amount23 = $('#net_cap_02').val(round_value0);

      var interestRate = parseFloat(document.getElementById("rate11").value) / 1200;
      var monthlyPayment = parseFloat(document.getElementById("net_cap").value) * interestRate / (1 - Math.pow(1 + interestRate, - parseFloat(document.getElementById("term11").value)));
      var final_result18 = parseFloat(monthlyPayment);
      var final_result1 = final_result18.toFixed(2);
      document.getElementById("payment1").value = final_result1;

      var interestRate = parseFloat(document.getElementById("rate12").value) / 1200;
      var monthlyPayment = document.getElementById("net_cap_02").value * interestRate / (1 - Math.pow(1 + interestRate, - document.getElementById("term12").value));
      var final_result17 = parseFloat(monthlyPayment);
      var final_result1 = final_result17.toFixed(2);
      // alert("Payment FleetFun");
      document.getElementById("payment2").value = final_result1;



 }, 2000);
}
//.......................Fleet payment Field Cal ..........................//
export const FleetFinPay1 = ()=>{
    setTimeout(() => {
    // var interestRate = parseFloat(document.getElementById("rate11").value) / 1200;
    // var monthlyPayment = parseFloat(document.getElementById("net_cap").value) * interestRate / (1 - Math.pow(1 + interestRate, - parseFloat(document.getElementById("term11").value)));
    // var final_result18 = parseFloat(monthlyPayment);
    // var final_result1 = final_result18.toFixed(2);
    // document.getElementById("payment1").value = final_result1;
}, 2000);
}

export const FleetFinPay2 = ()=>{
    setTimeout(() => {
    // var interestRate = parseFloat(document.getElementById("rate12").value) / 1200;
    // var monthlyPayment = document.getElementById("net_cap_02").value * interestRate / (1 - Math.pow(1 + interestRate, - document.getElementById("term12").value));
    // var final_result17 = parseFloat(monthlyPayment);
    // var final_result1 = final_result17.toFixed(2);
    // // alert("Payment FleetFun");
    // document.getElementById("payment2").value = final_result1;
}, 2000);
}

//.......................Fleet Finance OnLoad ................................//
export const  FF_Onload = ()=>{
    document.querySelector('#payment1').disabled = true;
    document.querySelector('#payment2').disabled = true;
}
//........................5per Function..............................//
export const  per5 = ()=>{

}

//................Fleet Finance Account ..........................//
export const  Fleet_Fin_Discountfun = ()=>{

}