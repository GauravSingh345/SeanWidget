import $ from 'jquery';
export const finacanced_amount1 = ()=>{
    
    setTimeout(() => {
        // let finacanced_amount1 = document.getElementById("finacanced_amount1").value;
        // if ( finacanced_amount1 !== "" || finacanced_amount1 !== "0.00" || finacanced_amount1 !== "0"  || finacanced_amount1 !== null) {
        //     console.log("null");
        // }else{
            //.............................finacanced_amount1........................//
            // var fin_amount11 = ((parseFloat(document.getElementById("price2").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(  document.getElementById("leasetrade").value)) * 1.13) + parseFloat(  document.getElementById("lienamount").value) - parseFloat(  document.getElementById("per1_5").value) + (( document.getElementById("term1").value / 12) * document.getElementById("dealer_fee_ppsa").value);
            // var fin_amount100 = fin_amount11.toFixed(2);
            // document.getElementById("finacanced_amount1").value = fin_amount100;
        // }
            }, 2000);
}

export const finacanced_amount = ()=>{
    setTimeout(() => {
        // let finacanced_amount = document.getElementById("finacanced_amount").value;
        // if ( finacanced_amount !== "" || finacanced_amount !== "0") {
        //     console.log("null");
        // }else{
            //.................................finacanced_amount..........................................................//
            // var fin_amount111 = ((parseFloat(document.getElementById("price2").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value)) * 1.13) + parseFloat( document.getElementById("lienamount").value) - parseFloat(document.getElementById("per1_5").value) + ( document.getElementById("term2").value / 12 *document.getElementById("dealer_fee_ppsa").value);
            // var fin_amount2_round = fin_amount111.toFixed(2);
            // document.getElementById("finacanced_amount").value = fin_amount2_round;
        // }
 
}, 2000);
}

//.....................Retail Finance Payment 01 .......................//
export const Payment_01=()=>{
    setTimeout(() => {
        // let payment01 = document.getElementById("payment01").value;
        // if ( payment01 !== "" || payment01 !== null) {
        //     console.log("null");
        // }else{
            // var interestRate = parseFloat( document.getElementById("rate1").value) / 1200;
            // var monthlyPayment = parseFloat(document.getElementById("finacanced_amount1").value) * interestRate / (1 - Math.pow(1 + interestRate, - parseFloat(document.getElementById("term1").value)));
            // var final_result19 = parseFloat(monthlyPayment);
            // var final_result1 = final_result19.toFixed(2);
            // document.getElementById("payment01").value  = final_result1;
        // }
  
}, 2000);

}
   
//.....................Retail Finance Payment 02 .......................//
export const Payment_02=()=>{
    setTimeout(() => {
        // let payment02 = document.getElementById("payment02").value;
        // if ( payment02 !== "" || payment02 !== "0") {
        //     console.log("null");
        // }else{
            // var interestRate = parseFloat( document.getElementById("rate2").value) / 1200;
            // var monthlyPayment = parseFloat(document.getElementById("finacanced_amount").value) * interestRate / (1 - Math.pow(1 + interestRate, - parseFloat(document.getElementById("term2").value)));
            // var final_result19 = parseFloat(monthlyPayment);
            // var final_result1 = final_result19.toFixed(2);
            // document.getElementById("payment02").value  = final_result1;
        // }

}, 2000);
}
//..................Retail Finance Price 2 ....................//
export const RF_Price2 = ()=>{
    setTimeout(() => {
    // let Price2var = document.getElementById("price2").value;
    // if ( Price2var !== "" || Price2var !== "0") {
    //    console.log(Price2var);
    // }else{
        var calculate_price12 = parseFloat( document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat( document.getElementById("dmup").value) + parseFloat( document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat( document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("broker_fee").value)+ parseFloat(document.getElementById("delivery_fee").value) - parseFloat(document.getElementById("delivery_allowance").value)- parseFloat(document.getElementById("employee_pricing_amount").value) -  ( parseFloat( document.getElementById("after_tax_rebate").value)/1.13   )      ;
        var price_round = calculate_price12.toFixed(2);
        document.getElementById("price2").value = price_round;

        // var fin_discount_a = ( ( parseFloat( document.getElementById("Dealer_Cost").value) + parseFloat(document.getElementById("dmup").value ) + parseFloat( document.getElementById("lcmup").value ) + parseFloat(document.getElementById("broker_fee").value)  ) - parseFloat( document.getElementById("price2").value ) ) ;
        // var fin_discount_b =  fin_discount_a.toFixed(2);
        // document.getElementById("Finance_Discount").value = fin_discount_b;
        
            /*  Finance Discount Formula   */
            var fin_discount_a = ( ( parseFloat($('#Dealer_Cost').val())  + parseFloat($('#broker_fee').val())  ) - parseFloat($('#price2').val()) ) ;
            var fin_discount_b =  fin_discount_a.toFixed(2);
            var fin_discount_c = parseFloat($('#Finance_Discount').val(fin_discount_b));
            console.log(fin_discount_c);

            
        var fin_amount11 = ((parseFloat(document.getElementById("price2").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(  document.getElementById("leasetrade").value)) * 1.13) + parseFloat(  document.getElementById("lienamount").value) - parseFloat(  document.getElementById("per1_5").value) + (( document.getElementById("term1").value / 12) * document.getElementById("dealer_fee_ppsa").value);
        var fin_amount100 = fin_amount11.toFixed(2);
        document.getElementById("finacanced_amount1").value = fin_amount100;

        var fin_amount111 = ((parseFloat(document.getElementById("price2").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value)) * 1.13) + parseFloat( document.getElementById("lienamount").value) - parseFloat(document.getElementById("per1_5").value) + ( document.getElementById("term2").value / 12 *document.getElementById("dealer_fee_ppsa").value);
        var fin_amount2_round = fin_amount111.toFixed(2);
        document.getElementById("finacanced_amount").value = fin_amount2_round;

        var interestRate = parseFloat( document.getElementById("rate1").value) / 1200;
        var monthlyPayment = parseFloat(document.getElementById("finacanced_amount1").value) * interestRate / (1 - Math.pow(1 + interestRate, - parseFloat(document.getElementById("term1").value)));
        var final_result19 = parseFloat(monthlyPayment);
        var final_result1 = final_result19.toFixed(2);
        document.getElementById("payment01").value  = final_result1;

        var interestRate = parseFloat( document.getElementById("rate2").value) / 1200;
        var monthlyPayment = parseFloat(document.getElementById("finacanced_amount").value) * interestRate / (1 - Math.pow(1 + interestRate, - parseFloat(document.getElementById("term2").value)));
        var final_result19 = parseFloat(monthlyPayment);
        var final_result1 = final_result19.toFixed(2);
        document.getElementById("payment02").value  = final_result1;
    // }
  

}, 2000);
}
//..................Retail Finance Discount ....................//
export const RF_FinacDisc = ()=>{
    // setTimeout(() => {
    //     let Finance_Discount = document.getElementById("Finance_Discount").value;
    // if ( Finance_Discount !== "" || Finance_Discount !== "0") {
    //     console.log("null");
    // }else{
        // var fin_discount_a = ( ( parseFloat( document.getElementById("Dealer_Cost").value) + parseFloat(document.getElementById("dmup").value ) + parseFloat( document.getElementById("lcmup").value ) + parseFloat(document.getElementById("broker_fee").value)  ) - parseFloat( document.getElementById("price2").value ) ) ;
        // var fin_discount_b =  fin_discount_a.toFixed(2);
        // document.getElementById("Finance_Discount").value = fin_discount_b;
            // alert(fin_discount_b);
    // }

// }, 2000);
}
export const RF_ReatilDownPay = ()=>{
    setTimeout(() => {
        let per1_5 = document.getElementById("per1_5").value;
        if ( per1_5 !== "" || per1_5 !== "0") {
            console.log("null");
        }else{
            //............................5Per1...................//
            var cal6 = parseFloat(document.getElementById("price2").value) * (13 / 100);
            var five_per1 = cal6.toFixed(2);
            document.getElementById("per1_5").value = five_per1;
        }
      
    }, 2000);
}