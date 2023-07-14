import React from 'react'
import { useState } from 'react';
import { useEffect } from 'react';
import Submit from "../Components/Submit.js/Submit";
// import Rebates from '../Components/Rebates/Rebates';
// import { CWBleasefeefuel} from "../Components/CWBLease/CWB_Fun";

const ZOHO =  window.ZOHO;
const GetRecords = () => {
  const[curValue,SetCurvalue]=useState();
   // ...................Get CRM Data................................// 
   useEffect(()=>{
      ZOHO.embeddedApp.on("PageLoad", async function (data) {
      console.log(`Page load event triggered..`)
      const recordId = data.EntityId; 
      console.log(`Record Id: ${recordId}`);
      SetCurvalue(recordId);
      ZOHO.CRM.API.getRecord({
      Entity: "Deals",
      RecordID: recordId,
        }).then(function (data) {
        var getData = data["data"];
          getData.forEach(element => {
             console.log(element);
          
             var AccountName = element["Account_Name"]["name"];
             var AccountId = element["Account_Name"]["id"];
             var CompanyName = element["Contact_Name"];
             var Closing_Date = element["Closing_Date"];
             var Type_of_Deal = element["Type_of_Deal"];
             var VIN_Number = element["VIN_Number"];
             var Make_of_Vehicle = element["Make_of_Vehicle"];
             var Year =  element["Year"];
             var Financial_Institution =  element["Financial_Institution"];
             var Fleet_Manager =  element["Fleet_Manager"];
             document.getElementById("companyname").value = AccountName?AccountName:"";
             document.getElementById("contact_name").value = CompanyName?CompanyName["name"]:"";
             document.getElementById("closing_date").value = Closing_Date;
             document.getElementById("type_of_deal").value = Type_of_Deal;
             document.getElementById("vin_number").value = VIN_Number;
             document.getElementById("year").value = Year;
             document.getElementById("make").value = Make_of_Vehicle;
             document.getElementById("financial_institution").value = Financial_Institution;
             document.getElementById("model").value = element["Model"];
             document.getElementById("client_types").value = element["Type"];
             document.getElementById("sell_rate").value = element["Finance_Rate"] !=null ? element["Finance_Rate"] :"9.50";
             document.getElementById("buy_rate").value = element["Finance_Rate_2"] !=null ?element["Finance_Rate_2"] :"8.99" ;
             if (Financial_Institution) { 
               document.getElementById("fleet_mngr").value =Fleet_Manager?Fleet_Manager["name"]:"";
          
             }
             document.getElementById("trim").value = element["Pkg_or_Trim_Level"];
             //............................Price Seaction  gagan code...................................//

               //.....................get Account Records......................//
               ZOHO.CRM.API.getRecord({Entity:"Accounts",RecordID:AccountId})
               .then(function(data){
                 var getAccData = data["data"];
                 getAccData.forEach(element => {
                   var shipps1 = element["Shipping_Code"] ;
                   var subbb = shipps1.substring(0, 1);
                    if(subbb === "M" || subbb === "L")
                    {
                        document.getElementById("delivery_fee").value= "300";
                    }
                    else{
                     document.getElementById("delivery_fee").value= "600";
                   }
                 });
               });
              

         //......................End Code here.................................//


            //  var price_MSRP =  element["MSRP"];
            //  document.getElementById("msrp").value= price_MSRP != null ? price_MSRP : "60000";
              var price_MSRP = element["MSRP"];
              document.getElementById("msrp").value = price_MSRP != null ? parseFloat(price_MSRP).toFixed(2) : "65000";
            
              var price_inv = element["Invoice"];
              document.getElementById("invoice").value=price_inv;
          
              var price_hb = element["HB"];
              document.getElementById("hb").value=price_hb != null ?price_hb.toFixed(2) : "0.00";
         
              var price_dmup = element["DMUP"];
              document.getElementById("dmup").value=price_dmup != null ? price_dmup.toFixed(2) :"0.00";
              var price_lcmup = element["LCMUP"];
              
              document.getElementById("lcmup").value=price_lcmup != null ?price_lcmup.toFixed(2) :"0.00";
              var price_pdi = element["PDI"];
              
              document.getElementById("pdi").value=price_pdi != null ? price_pdi:"0.00";
              
              var price_Truck_b_des = element["Truck_Body_Desription"];
              document.getElementById("truck_body_desc").value= price_Truck_b_des != null ? price_Truck_b_des:"0.00";
              
              var price_Aftermrk1_Des = element["Aftermarket_1_Desc"];
            
              document.getElementById("Aftermarket1desc").value=price_Aftermrk1_Des != null ?price_Aftermrk1_Des:"0.00";

              var price_Aftermrk2_Des = element["Aftermarket_2_Desc"];
              document.getElementById("Aftermarket2desc").value=price_Aftermrk2_Des != null ? price_Aftermrk2_Des:"0.00";
             
              var price_truck_body_p = element["Truck_Body"];
              document.getElementById("truck_body_price").value=price_truck_body_p != null ? price_truck_body_p.toFixed(2) : "0.00";          
              var price_Aftermarket1 = element["Aftermarket_1"];
              document.getElementById("Aftermarket_1").value=price_Aftermarket1  != null ?price_Aftermarket1.toFixed(2) : "0.00";
              var price_Aftermarket2 = element["Aftermarket_2"];
              document.getElementById("Aftermarket_2").value=price_Aftermarket2 != null ?price_Aftermarket2.toFixed(2) :"0.00";
             
              var price_broker_f =element["Broker_Fee"];
              // document.getElementById("broker_fee_per").value=price_broker_f;
              var price_broker =element["Broker_Fee"];
              document.getElementById("broker_fee").value=price_broker != null ?price_broker:"0.00";
             
              var price_Financial_Inst =element["Financial_Institution"];
              document.getElementById("financial_institution").value=price_Financial_Inst;
              var price_gvwr_f_p =element["GVWR_for_Plates"];
              document.getElementById("gvwr_for_plates").value=price_gvwr_f_p;
              var price_delivery_f = element["Delivery_Fee"];
              document.getElementById("delivery_fee").value=price_delivery_f;
              var price_broker_drp = element["How_are_the_Broker_Fees_Paid"];
             
              document.getElementById ("broker_drp_dwn").value=price_broker_drp;
              var price_full_msrp =element["Full_Vehicle_MSRP"];
              document.getElementById("full_msrp").value=price_full_msrp != null ?price_full_msrp :"0.00";
              var price_dealer_cost = element["Dealer_Cost"];
           
              document.getElementById ("Dealer_Cost").value=price_dealer_cost;
              // var price_fleet_manager = element["Fleet_Manager"];
              // document.getElementById("fleet_mngr").value=price_fleet_manager;
             //............................Price Seaction  gagan code end...................................//
            //...................................Rebates section start......................................//  

            var Delivery_Allowance = element["Delivery_Allowance"];
            document.getElementById ("delivery_allowance").value=Delivery_Allowance != null ?Delivery_Allowance:"0.00";
            var Alternate_Cash_Back = element["Alternate_Cash_Back"];
            document.getElementById("alternatecashback").value=Alternate_Cash_Back  != null ?Alternate_Cash_Back:"0.00";
            var Retail_Lease_Rebate = element["Retail_Lease_Only_Rebate"];
            document.getElementById ("retail_lease").value=Retail_Lease_Rebate != null ?Retail_Lease_Rebate:"0.00" ;
            var Fleet = element["Fleet"];
            document.getElementById ("fleet").value=Fleet.toFixed(2) != null ?Fleet.toFixed(2):"0.00";
          
            var cnla = element["CNLA"];
            document.getElementById ("CNLA").value=cnla.toFixed(2) != null ?cnla.toFixed(2) : "0.00";
            var up_fitter_rebate = element["Up_fitter_Rebate"];
            document.getElementById ("up_fitter_rebate").value=up_fitter_rebate.toFixed(2) != null ?up_fitter_rebate.toFixed(2) :"0.00";
            var after_tax_rebt =element["After_Tax_Rebate"];
            document.getElementById("after_tax_rebate").value=after_tax_rebt.toFixed(2) != null ? after_tax_rebt.toFixed(2):"0.00";
           
            var fals_rebate = element["FALS"];
            document.getElementById ("fals").value=fals_rebate.toFixed(2) != null ?fals_rebate.toFixed(2) :"0.00";
            var employee_pricing = element["Employee_Pricing"];
            document.getElementById ("emp_price_disc").value=employee_pricing.toFixed(2) != null ? employee_pricing.toFixed(2) : "0.00";
            var freight_airtax = element["Freight_Air_Tax"];
            document.getElementById ("freight_and_air_tax").value=freight_airtax.toFixed(2) !=null?freight_airtax.toFixed(2) :"0.00";
            var fals_amt = element["FALS_Amount"];
            document.getElementById ("fals_amount").value=fals_amt.toFixed(2) !=null?fals_amt.toFixed(2) :"0.00";
            var emp_pricing_amt = element["Employee_Pricing_Disc"];
            document.getElementById ("employee_pricing_amount").value=emp_pricing_amt.toFixed(2) != null ?emp_pricing_amt.toFixed(2) : "0.00";
          
          //   //...................................Rebates section end.............................................//

            //...................................Down Payment and Trades start...................................// 
            var Percentage = element["Down_Payment_Percent"];
            document.getElementById ("percentof").value=Percentage != null ?Percentage:"05";
            var down_paymt = element["Down_Payment"];
            document.getElementById ("down_payments").value=down_paymt.toFixed(2) != null?down_paymt.toFixed(2):"5";
            var lease_down_P = element["Lease_Down_Payment"];
            document.getElementById ("lease_down").value=lease_down_P != null ?lease_down_P : "0.00";
   
            var Deposit = element["Client_Deposit"];

            document.getElementById("deposit").value=Deposit != null ? Deposit : "2500";
            alert(Deposit);
            var trade_value_P = element["Cash_Trade_In"];
            document.getElementById ("trade_val").value=trade_value_P != null?trade_value_P:"0.00";
            var lien_amt = element["Cash_Lien"];
            document.getElementById("lienamount").value=lien_amt !=null ?lien_amt:"0.00" ;
            var lease_trade = element["Lease_Trade"];
            document.getElementById ("leasetrade").value=lease_trade !=null ?lease_trade :"0.00";
         
          //   //...................................Down Payment and Trades end.....................................// 

          //  //.......................................Retail Finance start.........................................// 
          document.getElementById ("per1_5").value=down_paymt != null ? down_paymt : "0.00";
           var retail_f_price = element["Finance_Selling_Price"];
           document.getElementById("price2").value = retail_f_price != null ? retail_f_price :"0.00";
          
          // //  var retail_down_pay = element["Finance_Selling_Price"];
          // //  document.getElementById = element("per1").value=retail_down_pay;
          var retail_fiance_disc = element["Finance_Discount"];
          document.getElementById("Finance_Discount").value=retail_fiance_disc != null ? retail_fiance_disc : "0.00";
          // var retail_fiance_term1 = element["Finance_Term_1"]; 
          // document.getElementById("term1").value=retail_fiance_term1;
          // var retail_fiance_term2 = element["Finance_Term_2"];
          // document.getElementById ("term2").value=retail_fiance_term2;
          // var retail_rate = element["Finance_Rate"];
          // document.getElementById ("rate1").value=retail_rate;
          // var retail_rate2 = element["Finance_Rate_2"];
          // document.getElementById ("rate2").value=retail_rate2;
          var retail_payment = element["Finance_PMT_1"];
          document.getElementById ("payment01").value=retail_payment != null ?retail_payment :"0.00";
          var retail_payment2 = element["Finance_PMT_2"];
          document.getElementById ("payment02").value=retail_payment2 != null ? retail_payment2:"0.00";
          var reatil_fianced_amt = element["Finance_Amount"];
          document.getElementById ("finacanced_amount1").value=reatil_fianced_amt != null ? reatil_fianced_amt:"0.00";
          // var reatil_fianced_amt2 = element["Retail Financed Amount 2"];
          // document.getElementById("finacanced_amount").value=reatil_fianced_amt2;

          //  //.......................................Retail Finance end.........................................// 

          //   //.......................................Fleet Finance start.........................................// 
            var fleet_price = element["Fleet_Fin_Price"];
            document.getElementById ("price1").value=fleet_price != null ?fleet_price :"0.00";
            var fleet_down_pay = element["Down_Payment"];
            document.getElementById ("per5").value=fleet_down_pay != null ? fleet_down_pay: "0.00";
            var fleet_finance_disc = element["Fleet_Fin_Discount"];
            document.getElementById ("Fleet_Fin_Discount").value=fleet_finance_disc != null ? fleet_finance_disc : "0.00";
            // var fleet_term1 = element["Fleet_Finance_Term_1"];
            // document.getElementById ("term11").value=fleet_term1;
            // var fleet_term2 = element["Fleet_Finance_Term_2"];
            // document.getElementById ("term12").value=fleet_term2;
            // var fleet_rate = element["Fleet_Fin_Rate_1"];
            // document.getElementById("rate11").value=fleet_rate;
            // var fleet_rate2 = element["Fleet_Fin_Rate_2"];
            // document.getElementById ("rate12").value=fleet_rate2;
            var fleet_payment1 = element["Fleet_Fin_Payment_1"];
            document.getElementById ("payment1").value=fleet_payment1 != null ? fleet_payment1:"0.00";
            var fleet_payment2 = element["Fleet_Fin_Payment_2"];
            document.getElementById ("payment2").value=fleet_payment2 != null ? fleet_payment2 : "0.00";
          //   var fleet_financed_amt1 = element["Finance_Amount"];
          //   document.getElementById("Fleet_Financed_Amount_1").value=fleet_financed_amt1;
            var fleet_financed_amt2 = element["Fleet_Fin_Amount"];
            document.getElementById("net_cap").value=fleet_financed_amt2 != null ? fleet_financed_amt2 : "0.00";
           
          //   //.......................................Fleet Finance end...........................................// 
          //   //.......................................Retail Lease start...........................................// 
            // var Retail_term1 = element["Retail_Lease_Term_1"];
            // document.getElementById("term111").value=Retail_term1;
            // var Retail_term2 = element["Retail_Lease_Term_2"];
            // document.getElementById ("term222").value=Retail_term2;
            // var Retail_rate1 = element["Retail_Lease_1"];
            // document.getElementById ("rate111").value=Retail_rate1;
            // var Retail_rate2 = element["Retail_Lease_2"];
            // document.getElementById ("rate222").value=Retail_rate2;
            // var Retail_Residual = element["Retail_Lease_Res_1"];
            // document.getElementById ("rate1111").value=Retail_Residual;
            // var Retail_Residua2 = element["Retail_Lease_Res_2"];
            // document.getElementById ("rate2222").value=Retail_Residua2;
            // var Retail_security = element["Lease_Sec_Dep_1"];
            // document.getElementById("security_deposit1").value=Retail_security;
            // var Retail_security2 = element["Lease_Sec_Dep_2"];
            // document.getElementById ("security_deposit2").value=Retail_security2;
            // var Retail_total_km_y = element["Total_km_per_year"];
            // document.getElementById ("excess_kms").value=Retail_total_km_y;
            // var Retail_total_km_y2 = element["Total_km_per_year"];
            // document.getElementById ("excess_kms2").value=Retail_total_km_y2;
            // var Retail_Excess_km = element["Excess_km_per_yr"];
            // document.getElementById ("twenty_four").value=Retail_Excess_km;
            // var Retail_Excess_km2 = element["Excess_km_per_yr"];
            // document.getElementById ("twenty_four1").value=Retail_Excess_km2;
            // var Retail_cents_km = element["Cents_per_km"];
            // document.getElementById("cents_per_km1").value=Retail_cents_km;
            // var Retail_cents_km2 = element["Cents_per_km"];
            // document.getElementById ("cents_per_km2").value=Retail_cents_km2;
                  // Gaurav Code Gor OnLoad 
            var Lease_Retail_Cap_Cost	 = element["Lease_Retail_Cap_Cost"];    
            document.getElementById("price7").value=Lease_Retail_Cap_Cost != null ? Lease_Retail_Cap_Cost : "0.00";
            document.getElementById ("per7").value=lease_down_P != null ? lease_down_P : "0.00";
            var Net_Cap_Cost	 = element["Net_Cap_Cost"];   
            document.getElementById ("net_cap_7").value=Net_Cap_Cost != null ? Net_Cap_Cost : "0.00";
            var Retail_Lease_Savings= element["Retail_Lease_Savings"];   
            document.getElementById ("Savings").value= Retail_Lease_Savings != null ? Retail_Lease_Savings : "0.00";
            var Retail_Lease_PMT_1 = element["Retail_Lease_PMT_1"]; 
            document.getElementById ("payment11").value= Retail_Lease_PMT_1 != null ? Retail_Lease_PMT_1 : "0.00";
            var Retail_Lease_PMT_2 = element["Retail_Lease_PMT_2"]; 
           
            document.getElementById ("payment12").value= Retail_Lease_PMT_2 != null ? Retail_Lease_PMT_2 : "0.00";
           
            var Retail_Lease_HST_1 =  element["Retail_Lease_HST_1"];
            
            document.getElementById ("hst1").value= Retail_Lease_HST_1 != null ? Retail_Lease_HST_1 : "0.00";
            var Retail_Lease_HST_2 = element["Retail_Lease_HST_2"];
            document.getElementById ("hst2").value= Retail_Lease_HST_2 != null ? Retail_Lease_HST_2 : "0.00";
            var Retail_Lease_Total_1 = element["Retail_Lease_Total_1"];
            document.getElementById ("total1").value= Retail_Lease_Total_1 != null ? Retail_Lease_Total_1 : "0.00";
            var Retail_Lease_Total_2 = element["Retail_Lease_Total_1"];
            document.getElementById ("total2").value= Retail_Lease_Total_2 != null ? Retail_Lease_Total_2 : "0.00";
            var Retail_Res_1 = element["Retail_Res_1"];
            document.getElementById ("residual1").value= Retail_Res_1 != null ? Retail_Res_1 : "0.00";
            var Retail_Res_2 = element["Retail_Res_2"];
            document.getElementById ("residual2").value= Retail_Res_2 != null ? Retail_Res_2 : "0.00";
            var Total_km_per_year	 =  element["Total_km_per_year"];
            document.getElementById ("total_km1").value= Total_km_per_year != null ? Total_km_per_year : "0.00";
            document.getElementById ("total_km2").value= Total_km_per_year != null ? Total_km_per_year : "0.00";
            var Lease_Sub_Total = element["Lease_Sub_Total"];
            document.getElementById ("down_payment_and_fees").value= Lease_Sub_Total != null ? Lease_Sub_Total : "0.00";
            var Lease_Sub_Total_2 = element["Lease_Sub_Total_2"];
            document.getElementById ("down_payment_and_fees2").value= Lease_Sub_Total_2 != null ? Lease_Sub_Total_2 : "0.00";
            var Lease_HST_No_1 = element["Lease_HST_No_1"];
            document.getElementById ("hst3").value= Lease_HST_No_1 != null ? Lease_HST_No_1 : "0.00";
            var Lease_HST_No_2 = element["Lease_HST_No_2"];
            document.getElementById ("hst4").value= Lease_HST_No_2 != null ? Lease_HST_No_2 : "0.00";
            var Licensing = element["Licensing"];
            document.getElementById ("lic_fee").value= Licensing != null ? Licensing : "0.00";
            document.getElementById ("lic_fee1").value= Licensing != null ? Licensing : "0.00";
            var Fuel = element["Fuel"];
            document.getElementById ("fuel33").value= Fuel != null ? Fuel : "0.00";
            document.getElementById ("fuel44").value= Fuel != null ? Fuel : "0.00";
            var Lease_PPSA_1 = element["Lease_PPSA_1"];
            document.getElementById ("ppsa").value= Lease_PPSA_1 != null ? Lease_PPSA_1 : "0.00";
            var Lease_PPSA_2 = element["Lease_PPSA_2"];
            document.getElementById ("ppsa1").value= Lease_PPSA_2 != null ? Lease_PPSA_2 : "0.00";
           
            document.getElementById ("deposit_1_").value= Deposit != null ? Deposit : "0.00";
            document.getElementById ("deposit_1_1").value= Deposit != null ? Deposit : "0.00";
            var Lease_Due_at_Signing_1 =  element["Lease_Due_at_Signing_1"];
            document.getElementById ("total_due").value= Lease_Due_at_Signing_1 != null ? Lease_Due_at_Signing_1 : "0.00";
            var Lease_Due_at_Signing_2 =  element["Lease_Due_at_Signing_2"];
            document.getElementById ("total_due2").value= Lease_Due_at_Signing_2 != null ? Lease_Due_at_Signing_2 : "0.00";
          //.......................................Retail Lease end.............................................// 
          //.......................................fleet Lease start.............................................// 
          // var fleet_term1 = element["Fleet_Finance_Term_1"];
          // document.getElementById ("fleet_lease_term_1").value=fleet_term1 != null ? fleet_term1 : "0.00";
          // var fleet_term2 = element["Fleet_Finance_Term_2"];
          // document.getElementById ("fleet_lease_term_2").value=fleet_term2;
          // var fleet_rate1 = element["Fleet_Fin_Rate_1"];
          // document.getElementById ("fleet_lease_rate_1").value=fleet_rate1;
          // var fleet_rate2 = element["Fleet_Fin_Rate_2"];
          // document.getElementById ("fleet_lease_rate_2").value=fleet_rate2;
          // var fleet_Residual = element["Fleet_Lease_Res_1_Percent"];
          // document.getElementById ("fleet_lease_residual_per_1").value=fleet_Residual;
          // var fleet_Residua2 = element["Fleet_Lease_Res_2_Percent"];
          // document.getElementById ("fleet_lease_residual_per_2").value=fleet_Residua2;
          // var fleet_security1 = element["Fleet_Lease_Sec_Dep_1"];
          // document.getElementById ("fleet_lease_sec_dep_1").value=fleet_security1;
          // var fleet_security2 = element["Fleet_Lease_Sec_Dep_2"];
          // document.getElementById ("fleet_lease_sec_dep_2").value=fleet_security2;
          //  gaurav Code here 
        
          var Fleet_Price = element["Fleet_Price"];
          // document.getElementById ("fleet_lease_price").value=Fleet_Price != null ? Fleet_Price : "0.00";
          document.getElementById ("fleet_lease_per").value=lease_down_P != null ?lease_down_P : "0.00";
          var Fleet_Net_Cap_Cost = element["Fleet_Net_Cap_Cost"];
          document.getElementById ("fleet_lease_net_cap").value=Fleet_Net_Cap_Cost != null ?Fleet_Net_Cap_Cost : "0.00";
          var Fleet_Lease_PMT_1	 =  element["Fleet_Lease_PMT_1"];
          document.getElementById ("fleet_lease_payment_1").value=Fleet_Lease_PMT_1 != null ?Fleet_Lease_PMT_1 : "0.00";
          var Fleet_Lease_PMT_2 = element["Fleet_Lease_PMT_2"];
          document.getElementById ("fleet_lease_payment_2").value=Fleet_Lease_PMT_2 != null ?Fleet_Lease_PMT_2 : "0.00";
          var Fleet_Lease_1_HST =  element["Fleet_Lease_1_HST"];
          document.getElementById ("fleet_lease_hst_1").value=Fleet_Lease_1_HST != null ?Fleet_Lease_1_HST : "0.00";
          var Fleet_Lease_2_HST = element["Fleet_Lease_2_HST"];
          document.getElementById ("fleet_lease_hst_2").value=Fleet_Lease_2_HST != null ?Fleet_Lease_2_HST : "0.00";
          var Fleet_Lease_1_Total = element["Fleet_Lease_1_Total"];
          document.getElementById ("fleet_lease_total_1").value=Fleet_Lease_1_Total != null ?Fleet_Lease_1_Total : "0.00";
          var Fleet_Lease_2_Total = element["Fleet_Lease_2_Total"];
          document.getElementById ("fleet_lease_total_2").value=Fleet_Lease_2_Total != null ?Fleet_Lease_2_Total : "0.00";
          var Fleet_Lease_Res_1 =  element["Fleet_Lease_Res_1"];
          document.getElementById ("fleet_lease_residual_1").value=Fleet_Lease_Res_1 != null ?Fleet_Lease_Res_1 : "0.00";
          var Fleet_Lease_Res_2 = element["Fleet_Lease_Res_2"];
          document.getElementById ("fleet_lease_residual_2").value=Fleet_Lease_Res_2 != null ?Fleet_Lease_Res_2 : "0.00";
          var Fleet_Lease_Sub_Total_2	 = element["Fleet_Lease_Sub_Total_2"];
          document.getElementById ("fleet_lease_down_pay_1").value=Fleet_Lease_Sub_Total_2 != null ?Fleet_Lease_Sub_Total_2 : "0.00";
          var Fleet_Lease_Sub_Total = element["Fleet_Lease_Sub_Total"];
          document.getElementById ("fleet_lease_down_pay_2").value=Fleet_Lease_Sub_Total != null ?Fleet_Lease_Sub_Total : "0.00";
          var Fleet_Lease_Due_1_HST = element["Fleet_Lease_Due_1_HST"];
          document.getElementById ("f_l_hst1").value=Fleet_Lease_Due_1_HST != null ?Fleet_Lease_Due_1_HST : "0.00";
          var Fleet_Lease_HST_2 = element["Fleet_Lease_HST_2"];
          document.getElementById ("f_l_hst2").value=Fleet_Lease_HST_2 != null ? Fleet_Lease_HST_2 : "0.00";
          var Fleet_Lease_PMT_1 = element["Fleet_Lease_PMT_1"];
          document.getElementById ("fleet_lease_1st_pay_1").value=Fleet_Lease_PMT_1 != null ? Fleet_Lease_PMT_1 : "0.00";
          var Fleet_Lease_PMT_2 = element["Fleet_Lease_PMT_2"];
          document.getElementById ("fleet_lease_1st_pay_2").value=Fleet_Lease_PMT_2 != null ? Fleet_Lease_PMT_2 : "0.00";

          document.getElementById("fleet_lease_lic_fee_1").value = Licensing != null ? Licensing :"0.00";
          document.getElementById("fleet_lease_lic_fee_2").value = Licensing != null ? Licensing :"0.00";
       
          document.getElementById("fleet_lease_fuel_1").value = Fuel != null ? Fuel :"0.00";
          document.getElementById("fleet_lease_fuel_2").value = Fuel != null ? Fuel :"0.00";

          var Fleet_Lease_PPSA_1 = element["Fleet_Lease_PPSA_1"];
          document.getElementById("fleet_lease_PPSA_1").value = Fleet_Lease_PPSA_1 != null ? Fleet_Lease_PPSA_1 :"0.00";
          var Fleet_Lease_PPSA_2 = element["Fleet_Lease_PPSA_2"];
          document.getElementById("fleet_lease_PPSA_2").value = Fleet_Lease_PPSA_2 != null ? Fleet_Lease_PPSA_2 :"0.00";
       
          document.getElementById("fleet_lease_dep_1").value = Deposit != null ? Deposit :"0.00";
          document.getElementById("fleet_lease_dep_2").value = Deposit != null ? Deposit :"0.00";
         
          var Fleet_Lease_Due_at_Signing_1	 =  element["Fleet_Lease_Due_at_Signing_1"];
          document.getElementById("fleet_lease_total_due_1").value = Fleet_Lease_Due_at_Signing_1 != null ? Fleet_Lease_Due_at_Signing_1 :"0.00";

          var Fleet_Lease_Due_at_Signing_2 =  element["Fleet_Lease_Due_at_Signing_2"];
          document.getElementById("fleet_lease_total_due_2").value = Fleet_Lease_Due_at_Signing_2 != null ? Fleet_Lease_Due_at_Signing_2 :"0.00";
          //.......................................fleet Lease end...............................................// 
          //.......................................COM Lease start...............................................// 
          // var com_term1 = element["Com_Lease_Term_1"];
          // document.getElementById ("com_lease_term_1").value=com_term1;
          // var com_term2 = element["Com_Lease_Term_2"];
          // document.getElementById ("com_lease_term_2").value=com_term2;
          // var com_rate1 = element["Com_Lease_1"];
          // document.getElementById ("com_lease_rate_1").value=com_rate1;
          // var com_rate2 = element["Com_Lease_2"];
          // document.getElementById ("com_lease_rate_2").value=com_rate2;
          // var com_Residual = element["Com_Lease_Res_Percent_1"];
          // document.getElementById ("com_lease_residual_per_1").value=com_Residual;
          // var com_Residual2 = element["Com_Lease_Res_Percent_2"];
          // document.getElementById ("com_lease_residual_per_1").value=com_Residual2;
          // var com_security1 = element["Com_Lease_Sec_1"];
          // document.getElementById ("com_lease_sec_dep_1").value=com_security1;
          // var com_security2 = element["Com_Lease_Sec_2"];
          // document.getElementById ("com_lease_sec_dep_2").value=com_security2;
             // Gagn Code ...
             var Com_Lease_Cap = element["Com_Lease_Cap"];
             document.getElementById("com_lease_price").value = Com_Lease_Cap != null ? Com_Lease_Cap :"0.00";
          
             document.getElementById("com_lease_per").value = lease_down_P != null ? lease_down_P :"0.00";
             var Com_Net_Cap = element["Com_Net_Cap"];
             document.getElementById("com_lease_net_cap").value = Com_Net_Cap != null ? Com_Net_Cap :"0.00";
             var Com_Lease_Disc = element["Com_Lease_Disc"];
             document.getElementById("com_save").value = Com_Lease_Disc != null ? Com_Lease_Disc :"0.00";
             var Com_Lease_PMT_1 = element["Com_Lease_PMT_1"];
             document.getElementById("com_lease_payment_1").value = Com_Lease_PMT_1 != null ? Com_Lease_PMT_1	:"0.00";
             var Com_Lease_PMT_2 = element["Com_Lease_PMT_2"];
             document.getElementById("com_lease_payment_2").value = Com_Lease_PMT_2 != null ? Com_Lease_PMT_2	:"0.00";
             var Com_Lease_HST_1 = element["Com_Lease_HST_1"];
             document.getElementById("com_lease_hst_1").value = Com_Lease_HST_1 != null ? Com_Lease_HST_1	:"0.00";
             var Com_Lease_HST_2 = element["Com_Lease_HST_2"];
             document.getElementById("com_lease_hst_2").value = 	Com_Lease_HST_2 != null ? Com_Lease_HST_2	:"0.00";
             var Com_Lease_Total_1 = element["Com_Lease_Total_1"];
             document.getElementById("com_lease_total_1").value = Com_Lease_Total_1 != null ? Com_Lease_Total_1	:"0.00";
             var Com_Lease_Total_2 = element["Com_Lease_Total_2"];
             document.getElementById("com_lease_total_2").value = 	Com_Lease_Total_2 != null ? Com_Lease_Total_2	:"0.00";
             var Com_Lease_Res_1 = element["Com_Lease_Res_1"];
             document.getElementById("com_lease_residual_1").value = Com_Lease_Res_1 != null ? Com_Lease_Res_1	:"0.00";
             var Com_Lease_Res_2 = element["Com_Lease_Res_2"];
             document.getElementById("com_lease_residual_2").value = 	Com_Lease_Res_2 != null ? Com_Lease_Res_2	:"0.00";
             var Com_Lease_1_Sub = element["Com_Lease_1_Sub"];
             document.getElementById("com_lease_down_pay_1").value = Com_Lease_1_Sub != null ? Com_Lease_1_Sub	:"0.00";
             var Com_Lease_2_Sub = element["Com_Lease_2_Sub"];
             document.getElementById("com_lease_down_pay_2").value = 	Com_Lease_2_Sub != null ? Com_Lease_2_Sub	:"0.00";
             var Com_Lease_HST_1_Due = element["Com_Lease_HST_1_Due"];
             document.getElementById("com_lease_hst_3").value = Com_Lease_HST_1_Due != null ? Com_Lease_HST_1_Due	:"0.00";
             var Com_Lease_HST_2_Due = element["Com_Lease_HST_2_Due"];
             document.getElementById("com_lease_hst_4").value = 	Com_Lease_HST_2_Due != null ? Com_Lease_HST_2_Due	:"0.00";
             var Com_Lease_1_PPM = element["Com_Lease_1_PPM"];
             document.getElementById("com_lease_1st_pay_1").value = Com_Lease_1_PPM != null ? Com_Lease_1_PPM	:"0.00";
             var Com_Lease_2_PPM = element["Com_Lease_2_PPM"];
             document.getElementById("com_lease_1st_pay_2").value = Com_Lease_2_PPM != null ? Com_Lease_2_PPM	:"0.00";
             document.getElementById("com_lease_lic_fee_1").value = Licensing != null ? Licensing :"0.00";
             document.getElementById("com_lease_lic_fee_2").value = Licensing != null ? Licensing :"0.00";
             document.getElementById("com_lease_fuel_1").value = Fuel != null ? Fuel :"0.00";
             document.getElementById("com_lease_fuel_2").value = Fuel != null ? Fuel :"0.00";
             var Com_Lease_PPSA_1 = element["Com_Lease_PPSA_1"];
             document.getElementById("com_lease_PPSA_1").value = Com_Lease_PPSA_1 != null ? Com_Lease_PPSA_1 :"0.00";
             var Com_Lease_PPSA_2 = element["Com_Lease_PPSA_2"];
             document.getElementById("com_lease_PPSA_2").value = Com_Lease_PPSA_2 != null ? Com_Lease_PPSA_2 :"0.00";
   
             document.getElementById("com_lease_dep_1").value = Deposit != null ? Deposit :"0.00";
             document.getElementById("com_lease_dep_2").value = Deposit != null ? Deposit :"0.00";
   
             var Com_Lease_Due_1 = element["Com_Lease_Due_1"];
             document.getElementById("com_lease_total_due_1").value = Com_Lease_Due_1 != null ? Com_Lease_Due_1 :"0.00";
             var Com_Lease_Due_2 = element["Com_Lease_Due_2"];
             document.getElementById("com_lease_total_due_2").value = Com_Lease_Due_2 != null ? Com_Lease_Due_2 :"0.00";
          //.......................................COM Lease end...............................................// 
          //.......................................CWB Lease start...............................................// 
          // var cwb_term1 = element["CWB_Lease_Term_1"];
          // document.getElementById ("CWB_lease_term_1").value=cwb_term1;
          
          //.......................................CWB Lease end...............................................// 

            //.......................................Reatil cash start...............................................// 
            var Cash_Discounts = element["Cash_Discounts"];
            document.getElementById("Cash_Discounts").value = Cash_Discounts != null ? Cash_Discounts :"0.00";
            var Cash_Sub_Total = element["Cash_Sub_Total"];
            document.getElementById("Cash_Sub_Total").value = Cash_Sub_Total != null ? Cash_Sub_Total :"0.00";
            var Cash_Tax_Sub_Total = element["Cash_Tax_Sub_Total"];
            document.getElementById("Cash_Tax_Sub_Total").value = Cash_Tax_Sub_Total != null ? Cash_Tax_Sub_Total :"0.00";
            var Cash_Deal_HST = element["Cash_Deal_HST"];
            document.getElementById("Cash_Deal_HST").value = Cash_Deal_HST != null ? Cash_Deal_HST :"0.00";
            var Cash_Total = element["Cash_Total"];
            document.getElementById("Cash_Total").value = Cash_Total != null ? Cash_Total :"0.00";
            var Cash_After_Tax_Rebates = element["Cash_After_Tax_Rebates"];
            document.getElementById("CashAfterTaxRebate").value = Cash_After_Tax_Rebates != null ? Cash_After_Tax_Rebates :"0.00";
            var Cash_Due_on_Delivery = element["Cash_Due_on_Delivery"];
            document.getElementById("Cash_Due_on_Delivery").value = Cash_Due_on_Delivery != null ? Cash_Due_on_Delivery :"0.00";
            var Cash_Selling_Price = element["Cash_Selling_Price"];
            document.getElementById("Cash_Selling_Price").value = Cash_Selling_Price != null ? Cash_Selling_Price :"0.00";
            var Total_Cash_Savings = element["Total_Cash_Savings"];
            document.getElementById("Total_Cash_Savings").value = Total_Cash_Savings != null ? Total_Cash_Savings :"0.00";
            //.......................................Reatil cash end...............................................// 

             //.......................................Fleet cash start...............................................// 
             var Fleet_Discount = element["Fleet_Discount"];
             document.getElementById("Fleet_Discounts").value = Fleet_Discount != null ? Fleet_Discount :"0.00";
             var Fleet_Sub_Total = element["Fleet_Sub_Total"];
             document.getElementById("Fleet_Sub_Total").value = Fleet_Sub_Total != null ? Fleet_Sub_Total :"0.00";
             var Fleet_Tax_Sub_Total = element["Fleet_Tax_Sub_Total"];
             document.getElementById("Fleet_Tax_Sub_Total").value = Fleet_Tax_Sub_Total != null ? Fleet_Tax_Sub_Total :"0.00";
             var Fleet_HST = element["Fleet_HST"];
             document.getElementById("Fleet_Deal_HST").value = Fleet_HST != null ? Fleet_HST :"0.00";
             var Fleet_Total = element["Fleet_Total"];
             document.getElementById("Fleet_Total").value = Fleet_Total != null ? Fleet_Total :"0.00";
             var 	Fleet_After_Tax_Rebates	 = element["Fleet_After_Tax_Rebates"];
             document.getElementById("FleetAfterTaxRebate").value = Fleet_After_Tax_Rebates != null ? Fleet_After_Tax_Rebates :"0.00";
             var 	Fleet_Due_on_Delivery	 = element["Fleet_Due_on_Delivery"];
             document.getElementById("Fleet_Due_on_Delivery").value = Fleet_Due_on_Delivery != null ? Fleet_Due_on_Delivery :"0.00";
             var 	Fleet_Price	 = element["Fleet_Price"];
             document.getElementById("Fleet_Selling_Price").value = Fleet_Price != null ? Fleet_Price:"0.00";
             var 	Fleet_Total_Savings	 = element["Fleet_Total_Savings"];
             document.getElementById("Total_Fleet_Savingss").value = Fleet_Total_Savings != null ? Fleet_Total_Savings :"0.00";
            //.......................................Fleet cash end...............................................// 
          //.......................................Dealer fee start..............................................// 
          var Dealer_fee = element["Admin_Fee"];
          document.getElementById ("dealer_fee_admin").value=Dealer_fee != null ?Dealer_fee :"395.00";
          var Dealer_PPSA = element["PPSA"];
          document.getElementById ("dealer_fee_ppsa").value=Dealer_PPSA != null ?Dealer_PPSA:"8";
          var Dealer_Fuel = element["Fuel"];
          document.getElementById ("dealer_fee_fuel").value=Dealer_Fuel != null ? Dealer_Fuel :"150";
          var Dealer_Licensing = element["Licensing"];
          document.getElementById ("dealer_fee_licensing").value=Dealer_Licensing != null ?Dealer_Licensing :"59";
          var Dealer_EnvRecovery = element["Environment_Fee"];
          document.getElementById ("dealer_fee_env_recovery").value=Dealer_EnvRecovery != null ?Dealer_EnvRecovery :"34.50";
          var Dealer_OMVIC = element["OMVIC"];
          document.getElementById ("dealer_fee_omvic").value=Dealer_OMVIC != null ?Dealer_OMVIC :"10.00";
          var Dealer_WheelLocks = element["Wheel_Locks"];
          document.getElementById ("dealer_fee_wheel_locks").value=Dealer_WheelLocks != null ?Dealer_WheelLocks :"0.00" ;
          var Dealer_floormats = element["Floor_Mats"];
          document.getElementById ("dealer_fee_floor_mats").value=Dealer_floormats != null ? Dealer_floormats :"0.0";
 
          //.......................................Dealer fee end...............................................// 
              
           
          });
        });
      });
      /*
      * initializing the widget for Zoho CRM user 3.
      */
      ZOHO.embeddedApp.init();
      },[])
    return (
       <div>
         <Submit CRMId = {curValue}/>
       </div>
)
}

export default GetRecords
