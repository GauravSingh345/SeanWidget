// import React, { createContext, useReducer } from 'react'
// import { useEffect } from 'react';
// // import Vehicle from "../Components/Vehicale/Vehicle";
// import { useState } from 'react';
// import { reducer} from "./reducer";
// import { per5 ,Fleet_Fin_Discountfun , FleetFinPay1 , FleetFinPay2} from "../Components/FleetFinance/FleetFunction";
// import { finacanced_amount ,finacanced_amount1 , Payment_01 , Payment_02} from "../Components/RetailFinance/FuncRetailFinc";
// const ZOHO =  window.ZOHO;

// export const CrmContext = createContext();
// const GetRecords = () => {
//  const[crmData,SetCrmData]= useState();

//  const intialState = {
//   Data:crmData
//  }
//  const[state,dispatch] = useReducer(reducer,intialState);
//    // ...................Get CRM Data................................// 
//    useEffect(()=>{
   
//       ZOHO.embeddedApp.on("PageLoad", async function (data) {
//       console.log(`Page load event triggered..`)
//       const recordId = data.EntityId; 
//       console.log(`Record Id: ${recordId}`)
//       ZOHO.CRM.API.getRecord({
//       Entity: "Deals",
//       RecordID: recordId,
//         }).then(function (data) {
//         var getData = data["data"];
//         SetCrmData(getData);
//           getData.forEach(element => {
//              console.log(element);
//              var AccountName = element["Account_Name"]["name"];
//              var AccountId = element["Account_Name"]["id"];
//              var CompanyName = element["Contact_Name"];
//              var Closing_Date = element["Closing_Date"];
//              var Type_of_Deal = element["Type_of_Deal"];
//              var VIN_Number = element["VIN_Number"];
//              var Make_of_Vehicle = element["Make_of_Vehicle"];
//              var Year =  element["Year"];
//              var Financial_Institution =  element["Financial_Institution"];
//               var Fleet_Manager =  element["Fleet_Manager"];
          
//              document.getElementById("companyname").value = AccountName?AccountName:"";
//              document.getElementById("contact_name").value = CompanyName?CompanyName["name"]:"";
//              document.getElementById("closing_date").value = Closing_Date;
//              document.getElementById("type_of_deal").value = Type_of_Deal;
//              document.getElementById("vin_number").value = VIN_Number;
//              document.getElementById("year").value = Year;
//              document.getElementById("make").value = Make_of_Vehicle;
//              document.getElementById("financial_institution").value = Financial_Institution;
//              document.getElementById("percentof").value ="10";
//              if (Financial_Institution != "" || Financial_Institution != null) { 
//                document.getElementById("fleet_mngr").value = Fleet_Manager?Fleet_Manager["name"]:"";
//              }
           
//              //.....................get Account Records......................//
//              ZOHO.CRM.API.getRecord({Entity:"Accounts",RecordID:AccountId})
//                       .then(function(data){
//                         var getAccData = data["data"];
//                         getAccData.forEach(element => {
//                           var shipps1 = element["Shipping_Code"] ;
//                           const subbb = shipps1?shipps1.substring(0, 1):'';
//                            if(subbb == "M" || subbb == "L")
//                            {
//                                document.getElementById("delivery_fee").value= "300";
//                            }
//                            else{
//                             document.getElementById("delivery_fee").value= "600";
//                           }
//                         });
//                       })
//           });
//         });
//       });
//       /*
//       * initializing the widget for Zoho CRM user 3.
//       */
//       ZOHO.embeddedApp.init();

//        //  //...............onLoad Show  Employee And  FALS Amount .................//
//        document.getElementById("fals_amount").value =(parseFloat(document.getElementById("fals").value) * parseFloat(document.getElementById("invoice").value)) / 1000;
//        document.getElementById("employee_pricing_amount").value =parseFloat(document.getElementById("emp_price_disc").value) * parseFloat(document.getElementById("invoice").value) ;
//       //.....Finance Fleet on load ..............//
//        per5();Fleet_Fin_Discountfun();FleetFinPay1();FleetFinPay2();
//        //..........Reatil Finance onload .......................//
//        finacanced_amount();finacanced_amount1();Payment_01();Payment_02();
//       },[])

//       const HandleInput =(e ,val)=>{
//         return dispatch({
//           type:"INCREMENt",
//           payload:e
//         })
//        }
//     return (
//        <>
//        <CrmContext.Provider value={{HandleInput}}>
          
//        </CrmContext.Provider>
//        </>
// )
// }

// export default GetRecords
