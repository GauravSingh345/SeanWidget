// import React, { useState } from 'react'
// // import Sdata4 from "./Sdata4";
// import { ReatiLeasePrice} from "../RetailLease/RetLeaseFun";
// const Rebates = () => {
 
//     const [RebatesInput ,setRebatesInput]=useState({
//         delivery_allowance:"0",
//         alternatecashback:"0",
//         retail_lease:"0",
//         fleet:"0",
//         CNLA:"0",
//         up_fitter_rebate:"0",
//         after_tax_rebate:"0",
//         fals:"0",
//         emp_price_disc:"0",
//         freight_and_air_tax:"0",
//         fals_amount:"0",
//         employee_pricing_amount:"0"
//     });

//     const HandleInput =(e)=>{
//         const name = e.target.value;
//         console.log(e.target.value);
//         setRebatesInput(name);
//         //...................Employee Pricing Amount..................................//
//         if (e.target.id == "emp_price_disc" ) {
//             document.getElementById("employee_pricing_amount").value =parseFloat(document.getElementById("emp_price_disc").value) * parseFloat(document.getElementById("invoice").value)/100 ;
//         }
//         //...................FALS Amount..................................//
//         if (e.target.id == "fals" ) {
//             document.getElementById("fals_amount").value =(parseFloat(document.getElementById("fals").value) * parseFloat(document.getElementById("invoice").value)) / 1000;
//         }
//        //.....................Retail Finance(Price Field Calculation ).............................................//
//        if (e.target.id == "delivery_allowance" || e.target.id == "employee_pricing_amount" || e.target.id == "after_tax_rebate") {
//         ReatiLeasePrice();
//         var calculate_price12 = parseFloat( document.getElementById("invoice").value) - parseFloat(document.getElementById("hb").value) + parseFloat( document.getElementById("dmup").value) + parseFloat( document.getElementById("lcmup").value) + parseFloat(document.getElementById("pdi").value) + parseFloat( document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value) + parseFloat(document.getElementById("broker_fee").value)+ parseFloat(document.getElementById("delivery_fee").value) - parseFloat(document.getElementById("delivery_allowance").value)- parseFloat(document.getElementById("employee_pricing_amount").value) -  ( parseFloat( document.getElementById("after_tax_rebate").value)/1.13   )      ;
//         var price_round = calculate_price12.toFixed(2);
//         document.getElementById("price2").value = price_round;
//      }
//     }
   
   
//   return (
//     <form class="px-md-2" action="" method="POST">
//     <div id="dealinfo_sec">
//         <h5 class="heading">Rebates</h5>
//         <div class="row">
//               <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                   <label class="form-label" for="delivery_allowance">Delivery
//                       Allowance</label>
//                   <div class="input-group mb-3">
//                       <input type="text" class="form-control form-control-sm"
//                           id="delivery_allowance" name="delivery_allowance" maxlength="10"
//                           value={RebatesInput.delivery_allowance} onChange={(event) => HandleInput(event )} />
//                       <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
//                   </div>
//               </div>
//               <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                   <label class="form-label" for="alternate_cash_back">Alternate Cash
//                       Back</label>
//                   <div class="input-group mb-3">
//                       <input type="tel" class="form-control form-control-sm"
//                           id="alternatecashback" name="alternatecashback" maxlength="10"
//                           value={RebatesInput.alternatecashback} onChange={(event) => HandleInput(event )} />
//                       <span class="input-group-text"> <i class="fa fa-dollar"></i> </span>
//                   </div>
//               </div>
//               <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                   <label class="form-label" for="retail_lease_only">Retail Lease Only
//                       Rebate</label>
//                   <div class="input-group mb-3">
//                       <input type="tel" class="form-control form-control-sm"
//                           id="retail_lease" name="retail_lease" maxlength="10"
//                           value={RebatesInput.retail_lease} onChange={(event) => HandleInput(event )} />
//                       <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
//                   </div>
//               </div>
//           </div>

//           <div class="row">
//               <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                   <label class="form-label" for="fleet">Fleet</label>
//                   <div class="input-group mb-3">
//                       <input type="tel" class="form-control form-control-sm" id="fleet"
//                           name="fleet" maxlength="10" value={RebatesInput.fleet}  onChange={(event) => HandleInput(event )} />
//                       <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
//                   </div>
//               </div>
//               <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                   <label class="form-label" for="CNLA">CNLA</label>
//                   <div class="input-group mb-3">
//                       <input type="tel" class="form-control form-control-sm" id="CNLA"
//                           name="CNLA" maxlength="10" value={RebatesInput.CNLA}  onChange={(event) => HandleInput(event )} />
//                       <span class="input-group-text"><i class="fa fa-dollar"></i></span>
//                   </div>
//               </div>
//               <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                   <label class="form-label" for="up_fitter_rebate">Up-Fitter</label>
//                   <div class="input-group mb-3">
//                       <input type="tel" class="form-control form-control-sm"
//                           id="up_fitter_rebate" name="up_fitter_rebate" maxlength="10"
//                           value={RebatesInput.up_fitter_rebate}  onChange={(event) => HandleInput(event )} />
//                       <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
//                   </div>
//               </div>
//           </div>

//           <div class="row">
//               <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                   <label class="form-label" for="after_tax_rebate">After Tax
//                       Rebate</label>
//                   <div class="input-group mb-3">
//                       <input type="tel" class="form-control form-control-sm"
//                           id="after_tax_rebate" name="after_tax_rebate" maxlength="10"
//                           value={RebatesInput.after_tax_rebate} onChange={(event) => HandleInput(event )} />
//                       <span class="input-group-text"> <i class="fa fa-dollar"></i> </span>
//                   </div>
//               </div>
//               <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                   <label class="form-label" for="fleet">FALS</label>
//                   <div class="input-group mb-3">
//                       <input type="tel" class="form-control form-control-sm" id="fals"
//                           name="fals" maxlength="10" value={RebatesInput.fals} onChange={(event) => HandleInput(event )} />
//                       <span class="input-group-text"> <i class="fa fa-dollar"></i></span>
//                   </div>
//               </div>
//               <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                   <label class="form-label" for="CNLA">Employee Pricing (%)</label>
//                   <div class="input-group mb-3">
//                       <input type="tel" class="form-control form-control-sm"
//                           id="emp_price_disc" name="emp_price_disc" maxlength="10"
//                           value={RebatesInput.emp_price_disc} onChange={(event) => HandleInput(event )} />
//                       <span class="input-group-text" style={{padding:"0px 9px"}}><i
//                               class="fa fa-percent"></i> </span>
//                   </div>
//               </div>
//           </div>

//           <div class="row">
//                       <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                           <label class="form-label" for="Freight_and_Air_Tax">Freight and Air
//                               Tax</label>
//                           <div class="input-group mb-3">
//                               <input type="tel" class="form-control form-control-sm"
//                                   id="freight_and_air_tax" name="freight_and_air_tax"
//                                   maxlength="10"  value={RebatesInput.freight_and_air_tax} onChange={(event) => HandleInput(event )}  />
//                               <span class="input-group-text">
//                                   <i class="fa fa-dollar"></i>
//                               </span>
//                           </div>
//                       </div>
//                       <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                           <label class="form-label" for="FALSAmount">FALS Amount</label>
//                           <div class="input-group mb-3">
//                               <input type="tel" class="form-control form-control-sm" disabled
//                                   id="fals_amount" name="fals_amount" maxlength="10" value={RebatesInput.fals_amount}
//                                   onChange={(event) => HandleInput(event )} />
//                               <span class="input-group-text">
//                                   <i class="fa fa-dollar"></i>
//                               </span>
//                           </div>
//                       </div>
//                       <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                           <label class="form-label" for="EmployeePricingAmount">Employee Pricing
//                               Amount</label>
//                           <div class="input-group mb-3">
//                               <input type="tel" class="form-control form-control-sm"
//                                   id="employee_pricing_amount" name="employee_pricing_amount" disabled
//                                   maxlength="10" value={RebatesInput.employee_pricing_amount} onChange={(event) => HandleInput(event )} />
//                               <span class="input-group-text">
//                                   <i class="fa fa-dollar"></i>
//                               </span>
//                           </div>
//                       </div>
//                   </div>
//       </div>
//     </form>
//   )
// }

// export default Rebates