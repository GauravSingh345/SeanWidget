import  "../../Resources/GlobalVariable";



export const Function2 = ()=>{   
       
    //......................Differnet Code for DMUP or LCMUP..................//
    document.getElementById("dmup").value= (document.getElementById("msrp").value - (document.getElementById("invoice").value-document.getElementById("hb").value)) /2;
    document.getElementById("lcmup").value= (document.getElementById("msrp").value - (document.getElementById("invoice").value-document.getElementById("hb").value)) /2;
   //.......................................Retail Finance......................//
    var calculate_price12 = parseFloat( document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat( document.getElementById("dmup").value) + parseFloat( document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat( document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("broker_fee").value)+ parseFloat(document.getElementById("delivery_fee").value) - parseFloat(document.getElementById("delivery_allowance").value)- parseFloat(document.getElementById("employee_pricing_amount").value) -  ( parseFloat( document.getElementById("after_tax_rebate").value)/1.13   )      ;
    var price_round = calculate_price12.toFixed(2);
    document.getElementById("price2").value = price_round;

}
export const HBDumbLsmp_fun = ()=>{
    setTimeout(() => {
    var make =  document.getElementById("make").value ;
    if (make === "Ford") {
         var hbvalue = (  global.msrp - document.getElementById("freight_and_air_tax").value) * 0.02;
        document.getElementById("hb").value = hbvalue.toFixed(2);
        document.getElementById("dmup").value = ( global.msrp -  global.Hb) /2 ;   // ternary opertor
        document.getElementById("lcmup").value = ( global.msrp -  global.Hb)/2 ;
    
    }else{
        document.getElementById("dmup").value = ((global.msrp - global.Hb) /2).toFixed(2) ;   // ternary opertor
        document.getElementById("lcmup").value = (( global.msrp -  global.Hb)/2).toFixed(2) ;
    }
    console.log("hello Workl");
}, 1000);
}

export const Price_dealerCost = ()=>{
    setTimeout(() => { 
    document.getElementById("Dealer_Cost").value = parseFloat(document.getElementById("invoice").value) + parseFloat(document.getElementById("truck_body_price").value)+
    parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value)+ parseFloat(document.getElementById("pdi").value) + parseFloat(document.getElementById("delivery_fee").value);
 }, 2000);
}

export const PriceBrokenDown = (e)=>{
    setTimeout(() => {
        if (e.target.value === "No Broker Fee" || e.target.value === "None") {
            document.getElementById("broker_fee_per").value = "0";
            document.getElementById("broker_fee").value = "0";    
        }else if(e.target.value === "Broker Fee in the Price"){
           document.getElementById("broker_fee_per").value = "2.5";
           document.getElementById("broker_fee").value = document.getElementById("full_msrp").value * (document.getElementById("broker_fee_per").value / 100);
        }else if(e.target.value === "Broker Fee Paid Up Front"){
           document.getElementById("broker_fee_per").value = "2.5";
           document.getElementById("broker_fee").value = document.getElementById("full_msrp").value * (document.getElementById("broker_fee_per").value / 100);
           var bfinp = ((parseFloat(document.getElementById("full_msrp").value)*( parseFloat(document.getElementById("percentof").value)  /100 ) ) +parseFloat(document.getElementById("broker_fee").value) ) * 1.13;
   
           document.getElementById("down_payments").value = bfinp.toFixed(2);
           document.getElementById("lease_down").value =( parseFloat(document.getElementById("down_payments").value) / 1.13).toFixed(2);
           
        }
    }, 100);
}

export const PriceFleetMangerShowHide = (e)=>{
    setTimeout(() => {
    var F_inst = document.getElementById("financial_institution").value ; 

    if (F_inst !== null || F_inst !== "" || F_inst !== "-None-") {
            // document.getElementById("hideshowdiv").style.visibility = "visible";
            var F_inst2 = document.getElementById("fleet_mngr").value ;
            if (F_inst2 ==="" || F_inst2 === null) {
                document.getElementById("hideshowdiv").style.visibility = "hidden";
            }else{
                document.getElementById("hideshowdiv").style.visibility = "visible";
            }
        }else if (F_inst === "-None-"){
            // var F_inst2 = document.getElementById("fleet_mngr").value ;
            // if (F_inst2 ==="" || F_inst2 === null) {
                document.getElementById("hideshowdiv").style.visibility = "hidden";
            // }else{
                // document.getElementById("hideshowdiv").style.visibility = "visible";
            // }
            

        }     

}, 1000);
}




