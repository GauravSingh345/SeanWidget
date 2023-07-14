const ZOHO =  window.ZOHO;
export const UpdateDataCRM = (id)=>{
 
    var config={
        Entity:"Deals",
        APIData:{
            "id": id.toString(),
            "Company_Name": document.getElementById("companyname").value,
            "VIN_Number": document.getElementById("vin_number").value,
            "Year": document.getElementById("year").value,
            "Make_of_Vehicle": document.getElementById("make").value,
            "Model": document.getElementById("model").value,
            "Pkg_or_Trim_Level": document.getElementById("trim").value ,
            "Closing_Date": document.getElementById("closing_date").value,
            "Type_of_Deal": document.getElementById("type_of_deal").value,

            /***********************Pricing and option**************************/

            "MSRP": document.getElementById("msrp").value ,
            "Invoice": document.getElementById("invoice").value ,
            "HB": document.getElementById("hb").value ,
            "DMUP": document.getElementById("dmup").value ,
            "LCMUP": document.getElementById("lcmup").value ,
            "PDI": document.getElementById("pdi").value ,
            "Truck_Body_Desription": document.getElementById("truck_body_desc").value ,
            "Aftermarket_1_Desc": document.getElementById("Aftermarket1desc").value ,
            "Aftermarket_2_Desc": document.getElementById("Aftermarket2desc").value ,
            "Truck_Body": document.getElementById("truck_body_price").value ,
            "Aftermarket_1": document.getElementById("Aftermarket_1").value ,
            "Aftermarket_2": document.getElementById("Aftermarket_2").value ,
            // "broker_fee_per": document.getElementById("broker_fee_per").value ,
            "Broker_Fee": document.getElementById("broker_fee").value ,
            "Financial_Institution": document.getElementById("financial_institution").value ,
            "GVWR_for_Plates": document.getElementById("gvwr_for_plates").value ,
            "Delivery_Fee": document.getElementById("delivery_fee").value ,
            "How_are_the_Broker_Fees_Paid": document.getElementById("broker_drp_dwn").value ,
            // "Fleet_Manager": document.getElementById("fleet_mngr").value ,
            "Dealer_Cost": document.getElementById("Dealer_Cost").value ,
            "Full_Vehicle_MSRP": document.getElementById("full_msrp").value ,

            /*********************************Rebates******************************/

            "Delivery_Allowance": parseFloat(document.getElementById("delivery_allowance").value) ,
            "Alternate_Cash_Back": parseFloat(document.getElementById("alternatecashback").value ),
            "Retail_Lease_Only_Rebate": parseFloat(document.getElementById("retail_lease").value ),
            "Fleet": parseFloat(document.getElementById("fleet").value ),
            "CNLA": parseFloat(document.getElementById("CNLA").value) ,
            "Up_fitter_Rebate": parseFloat(document.getElementById("up_fitter_rebate").value ),
            "After_Tax_Rebate":parseFloat( document.getElementById("after_tax_rebate").value) ,
            "FALS": parseFloat(document.getElementById("fals").value ),
            "Employee_Pricing_Disc": parseFloat(document.getElementById("emp_price_disc").value) ,
            "Freight_Air_Tax": parseFloat(document.getElementById("freight_and_air_tax").value) ,
            "FALS_Amount": parseFloat(document.getElementById("fals_amount").value ),
            "Employee_Pricing":parseFloat( document.getElementById("employee_pricing_amount").value ),

            // /***************************Down Payment and Trades**************************/
            "Down_Payment_Percent":parseFloat(document.getElementById("percentof").value).toFixed(2) ,
            "Down_Payment":parseFloat(document.getElementById("down_payments").value) ,
            "Lease_Down_Payment":parseFloat(document.getElementById("lease_down").value).toFixed(2) ,
            "Client_Deposit":parseFloat(document.getElementById("deposit").value).toFixed(2) ,
            "Cash_Trade_In":parseFloat(document.getElementById("trade_val").value),
            "Cash_Lien":parseFloat(document.getElementById("lienamount").value),
            "Lease_Trade":parseFloat(document.getElementById("leasetrade").value),
            // /************************************Retail Finance*************************/

            "Finance_Selling_Price": document.getElementById("price2").value ,
            // "Down_Payment": document.getElementById("per1_5").value ,
            "Finance_Discount": document.getElementById("Finance_Discount").value ,
             "Finance_Term_1": document.getElementById("term1").value ,
            "Finance_Term_2": document.getElementById("term2").value ,
            "Finance_Rate": document.getElementById("rate1").value ,
            "Finance_Rate_2": document.getElementById("rate2").value ,
            "Finance_PMT_1": document.getElementById("payment01").value ,
            "Finance_PMT_2": document.getElementById("payment02").value ,
            "Finance_Amount": document.getElementById("finacanced_amount1").value ,

            // /***********************************Fleet Finance***************************/
            "Fleet_Fin_Price": document.getElementById("price1").value ,
            "Fleet_Fin_Discount": document.getElementById("Fleet_Fin_Discount").value ,
            "Fleet_Finance_Term_1": document.getElementById("term11").value ,
            "Fleet_Finance_Term_2": document.getElementById("term12").value ,
            "Fleet_Fin_Rate_1": document.getElementById("rate11").value ,
            "Fleet_Fin_Rate_2": document.getElementById("rate12").value ,
            "Fleet_Fin_Payment_1": document.getElementById("payment1").value ,
            "Fleet_Fin_Payment_2": document.getElementById("payment2").value ,
            "Fleet_Fin_Amount": document.getElementById("net_cap").value ,
 
             /***********************************   RETAIL LEASE   ***************************/
            "Lease_Retail_Cap_Cost": document.getElementById("price7").value ,
            "Net_Cap_Cost": document.getElementById("net_cap_7").value ,
            "HST_Cap_Cost": document.getElementById("per7").value ,
            "Retail_Lease_Term_1": document.getElementById("term111").value ,
            "Retail_Lease_Term_2": document.getElementById("term222").value ,
            "Retail_Lease_1": document.getElementById("rate111").value ,
            "Retail_Lease_2": document.getElementById("rate222").value ,
            "Retail_Lease_Res_1": document.getElementById("rate1111").value ,
            "Retail_Lease_Res_2": document.getElementById("rate2222").value ,  
            
            

            "Retail_Lease_PMT_1": parseFloat(document.getElementById("payment11").value).toFixed(2) ,
            "Retail_Lease_PMT_2": parseFloat(document.getElementById("payment12").value).toFixed(2),
            
            "Retail_Lease_HST_1": parseFloat(document.getElementById("hst1").value).toFixed(2),
            "Retail_Lease_HST_2": parseFloat(document.getElementById("hst2").value).toFixed(2),
           
            "Retail_Lease_Total_1": parseFloat(document.getElementById("total1").value).toFixed(2) ,
            "Retail_Lease_Total_2": parseFloat(document.getElementById("total2").value).toFixed(2) ,
          
            "Retail_Res_1": parseFloat(document.getElementById("residual1").value).toFixed(2) ,
            "Retail_Res_2": parseFloat(document.getElementById("residual2").value).toFixed(2) ,
           
            "Lease_Sec_Dep_1": parseFloat(document.getElementById("security_deposit1").value).toFixed(2) ,
            "Lease_Sec_Dep_2": parseFloat(document.getElementById("security_deposit2").value).toFixed(2) ,
           
            "Kms_per_yr": parseFloat(document.getElementById("excess_kms").value),
            "Excess_km_per_yr": parseFloat(document.getElementById("twenty_four").value).toFixed(2),
            "Cents_per_km": parseFloat(document.getElementById("cents_per_km1").value).toFixed(2),
            "Total_km_per_year": parseFloat(document.getElementById("total_km1").value).toFixed(2),
         // 
//           "Down_Payment": document.getElementById("down_payment_and_fees").value ,

            "Lease_HST_No_1": document.getElementById("hst3").value ,
            "Lease_HST_No_2": document.getElementById("hst4").value ,

            // "Lease_HST_No_2": document.getElementById("st_Payment_1").value ,
            /*************************************************************** */
//             "Licensing": document.getElementById("lic_fee").value ,
//             "Licensing": document.getElementById("lic_fee1").value ,
// 
//             "Fuel": document.getElementById("fuel33").value ,
//             "Fuel": document.getElementById("fuel44").value ,
// 
//             "Lease_PPSA_1": document.getElementById("ppsa").value ,
//             "Lease_PPSA_2": document.getElementById("ppsa1").value ,
// 
//             "Client_Deposit	": document.getElementById("deposit_1_").value ,
//             "Client_Deposit	": document.getElementById("deposit_1_1").value ,

          /***************************************************************** */
          "Lease_Due_at_Signing_1": parseFloat(document.getElementById("total_due").value).toFixed(2) ,
          "Lease_Due_at_Signing_2": parseFloat(document.getElementById("total_due2").value).toFixed(2) ,

            // /***********************************   FLEET LEASE   ***************************/
            "Fleet_Lease_Cap": document.getElementById("fleet_lease_price").value ,
            "Fleet_HST_Cap_Cost": document.getElementById("fleet_lease_per").value ,
            "Fleet_Net_Cap_Cost": document.getElementById("fleet_lease_net_cap").value ,
            // "Savings": document.getElementById("fleet_save").value ,

            "Fleet_Lease_Term_1": document.getElementById("fleet_lease_term_1").value ,
            "Fleet_Lease_Term_2": document.getElementById("fleet_lease_term_2").value ,
            "Fleet_Lease_1": document.getElementById("fleet_lease_rate_1").value ,
            "Fleet_Lease_2": document.getElementById("fleet_lease_rate_2").value ,
            "Fleet_Lease_Res_1_Percent": document.getElementById("fleet_lease_residual_per_1").value ,
            "Fleet_Lease_Res_2_Percent": document.getElementById("fleet_lease_residual_per_2").value ,

            "Fleet_Lease_PMT_1": parseFloat(document.getElementById("fleet_lease_payment_1").value).toFixed(2) ,
            "Fleet_Lease_PMT_2": parseFloat(document.getElementById("fleet_lease_payment_2").value).toFixed(2) ,
           
            "Fleet_Lease_1_HST": parseFloat(document.getElementById("fleet_lease_hst_1").value).toFixed(2) ,
            "Fleet_Lease_2_HST": parseFloat(document.getElementById("fleet_lease_hst_2").value).toFixed(2) ,
          
            "Fleet_Lease_1_Total": parseFloat(document.getElementById("fleet_lease_total_1").value).toFixed(2) ,
            "Fleet_Lease_2_Total": parseFloat(document.getElementById("fleet_lease_total_2").value).toFixed(2) ,
           
            "Fleet_Lease_Res_1": parseFloat(document.getElementById("fleet_lease_residual_1").value).toFixed(2),
            "Fleet_Lease_Res_2": parseFloat(document.getElementById("fleet_lease_residual_2").value).toFixed(2),
            
            "Fleet_Lease_Sec_Dep_1": parseFloat(document.getElementById("fleet_lease_sec_dep_1").value).toFixed(2),
            "Fleet_Lease_Sec_Dep_2": parseFloat(document.getElementById("fleet_lease_sec_dep_2").value).toFixed(2),

            // Down Payment and Fees
            "Fleet_Lease_1_PPM": document.getElementById("fleet_lease_1st_pay_1").value ,
            "Fleet_Lease_2_PPM": document.getElementById("fleet_lease_1st_pay_2").value ,
            "Fleet_Lease_PPSA_1": document.getElementById("fleet_lease_PPSA_1").value ,
            "Fleet_Lease_PPSA_2": document.getElementById("fleet_lease_PPSA_2").value ,
            "Fleet_Lease_Due_at_Signing_1": document.getElementById("fleet_lease_total_due_1").value ,
            "Fleet_Lease_Due_at_Signing_2": document.getElementById("fleet_lease_total_due_2").value ,
            "Fleet_Lease_HST_2": document.getElementById("f_l_hst1").value ,
            "Fleet_Lease_Due_1_HST": document.getElementById("f_l_hst2").value ,

            // /***********************************   COM LEASE   ***************************/
// 
            "Com_Lease_Cap": document.getElementById("com_lease_price").value ,
            "Com_HST_Cap": document.getElementById("com_lease_per").value ,
            "Com_Net_Cap": document.getElementById("com_lease_net_cap").value ,

            "Com_Lease_Term_1": document.getElementById("com_lease_term_1").value ,
            "Com_Lease_Term_2": document.getElementById("com_lease_term_2").value ,

            "Com_Lease_1": document.getElementById("com_lease_rate_1").value ,
            "Com_Lease_2": document.getElementById("com_lease_rate_2").value ,

            "Com_Lease_Res_Percent_1": document.getElementById("com_lease_residual_per_1").value ,
            "Com_Lease_Res_Percent_2": document.getElementById("com_lease_residual_per_2").value ,

            "Com_Lease_PMT_1": document.getElementById("com_lease_payment_1").value ,
            "Com_Lease_PMT_2": document.getElementById("com_lease_payment_2").value ,

            "Com_Lease_HST_1": document.getElementById("com_lease_hst_1").value ,
            "Com_Lease_HST_2": document.getElementById("com_lease_hst_2").value ,

            "Com_Lease_Total_1": document.getElementById("com_lease_total_1").value ,
            "Com_Lease_Total_2": document.getElementById("com_lease_total_2").value ,

            "Com_Lease_Res_1": document.getElementById("com_lease_residual_1").value ,
            "Com_Lease_Res_2": document.getElementById("com_lease_residual_2").value ,

            "Com_Lease_Sec_1": document.getElementById("com_lease_sec_dep_1").value ,
            "Com_Lease_Sec_2": document.getElementById("com_lease_sec_dep_2").value ,

           "Com_Lease_HST_1_Due": document.getElementById("com_lease_hst_3").value ,
            "Com_Lease_HST_2_Due": document.getElementById("com_lease_hst_4").value ,

            "Com_Lease_1_PPM": document.getElementById("com_lease_1st_pay_1").value ,
            "Com_Lease_2_PPM": document.getElementById("com_lease_1st_pay_2").value ,
           
            "Com_Lease_PPSA_1": document.getElementById("com_lease_PPSA_1").value ,
            "Com_Lease_PPSA_2": document.getElementById("com_lease_PPSA_2").value ,

            "Com_Lease_Due_1": parseFloat(document.getElementById("com_lease_total_due_1").value).toFixed(2),
            "Com_Lease_Due_2": parseFloat(document.getElementById("com_lease_total_due_2").value).toFixed(2),

            // //  /***********************************   Dealer Fees   ***************************/
            // "Admin_Fee": document.getElementById("dealer_fee_admin").value ,
            // "Fuel": document.getElementById("dealer_fee_fuel").value ,
            // "Licensing": document.getElementById("dealer_fee_licensing").value ,
            // "Environment_Fee": document.getElementById("dealer_fee_env_recovery").value ,
            // "OMVIC": document.getElementById("dealer_fee_omvic").value ,
            // "Wheel_Locks": document.getElementById("dealer_fee_wheel_locks").value ,
            // "Floor_Mats": document.getElementById("dealer_fee_floor_mats").value ,
            // // "Dealer_Cost": document.getElementById("Dealer_Cost").value ,
            // // "PPSA": document.getElementById("dealer_fee_ppsa").value ,
            

            // //  /***********************************   RETAIL CASH    ***************************/  
            //  "Cash_Discounts":document.getElementById("Cash_Discounts").value ,
            //  "Cash_Sub_Total":document.getElementById("Cash_Sub_Total").value ,
            //  "Cash_Tax_Sub_Total":document.getElementById("Cash_Tax_Sub_Total").value ,
            //  "Cash_Deal_HST":document.getElementById("Cash_Deal_HST").value ,
            //  "Cash_Total":document.getElementById("Cash_Total").value ,
            //  "Cash_After_Tax_Rebates": document.getElementById("CashAfterTaxRebate").value ,
            //  "Cash_Due_on_Delivery":document.getElementById("Cash_Due_on_Delivery").value ,
            //  "Cash_Selling_Price":document.getElementById("Cash_Selling_Price").value ,
            //  "Total_Cash_Savings":document.getElementById("Total_Cash_Savings").value ,

            // //  /***********************************   FLEET CASH    ***************************/
            //  "Fleet_Discount":document.getElementById("Fleet_Discounts").value ,
            //  "Fleet_Sub_Total":document.getElementById("Fleet_Sub_Total").value ,
            //  "Fleet_Tax_Sub_Total":document.getElementById("Fleet_Tax_Sub_Total").value ,
            //  "Fleet_HST":document.getElementById("Fleet_Deal_HST").value ,
            //  "Fleet_Total":document.getElementById("Fleet_Total").value ,
            //  "Fleet_After_Tax_Rebates":document.getElementById("FleetAfterTaxRebate").value,
            //  "Fleet_Due_on_Delivery":document.getElementById("Fleet_Due_on_Delivery").value ,
            //  "Fleet_Price":document.getElementById("Fleet_Selling_Price").value ,
            //  "Fleet_Total_Savings":document.getElementById("Total_Fleet_Savings").value ,
           
       
},
        Trigger:["workflow"]
      }
                ZOHO.CRM.API.updateRecord(config).then(function (data) {
                    if (data.data[0].message == "record updated") 
                    {
                        ZOHO.CRM.UI.Record.open({ Entity: "Deals", RecordID: id })
                                .then(function (opensdata) {
                                });
                    } 
                    else {}});
      ZOHO.embeddedApp.init();
}