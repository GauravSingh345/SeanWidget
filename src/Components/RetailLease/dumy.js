// import React, { useState } from 'react'
// import Sdata8 from './Sdata8'
// import { RetaiLease_Disabled } from "./RetLeaseFun";
// import { useEffect } from 'react';
// import {ReatiLeaseLDP ,ReatiLeasePrice,ReatiLeaseNetCap , ReatiLeasePayment1 ,ReatiLeaseResidual ,ReatiLeasePayment22 ,ReatiLeasehst1,ReatiLeasehst2 ,ReatiLeaseTotal1 ,ReatiLeaseTotal2 ,ReatiLeaseSecurity_deposit1 ,ReatiLeaseSecurity_deposit2 ,ReatiLeaseTotal_km ,ReatiLeaseDPFee2, ReatiLeaseHst ,ReatiLeaseSt_Payment ,ReatiLeaseLic_fee ,ReatiLeaseFuel , ReatiLeasePPSA , ReatiLeaseDeposit_1_ , ReatiLeaseTotal_due_} from "./RetLeaseFun";
// const RetailLease = () => {
//     useEffect(()=>{
//         // ReatiLeasePayment1();ReatiLeaseResidual();ReatiLeasePayment22();ReatiLeasehst1();ReatiLeasehst2();ReatiLeaseTotal1();ReatiLeaseTotal2();ReatiLeaseSecurity_deposit1();ReatiLeaseSecurity_deposit2();ReatiLeaseTotal_km();ReatiLeaseDPFee2();ReatiLeaseHst();ReatiLeaseSt_Payment();ReatiLeaseLic_fee();
//         // ReatiLeaseFuel();ReatiLeasePPSA();ReatiLeaseDeposit_1_();ReatiLeaseTotal_due_();ReatiLeaseNetCap();ReatiLeaseLDP();
//         RetaiLease_Disabled();
//     },[]);
//     const [curValue, setCurValue] = useState({
//         term111: "36",
//         rate111: "8.95",
//         rate1111: "50",
//         payment11: "0.00",
//         hst1: "0.00",
//         total1: "0.00",
//         residual1: "0.00",
//         security_deposit1: "0.00",
//         excess_kms: "0.00",
//         twenty_four: "0.00",
//         cents_per_km1: "0.00",
//         total_km1: "0.00",
//         down_payment_and_fees: "0.00",
//         hst3: "0.00",
//         st_Payment_1:"0.00",
//         lic_fee: "0.00",
//         fuel33:"0.00",
//         ppsa: "0.00",
//         deposit_1_: "0.00",
//         total_due: "0.00",
//     });
//     const [curValue1, setCurValue1] = useState({
//         term222: "48",
//         rate222: "8.95",
//         rate2222: "40",
//         payment12: "0.00",
//         hst2: "0.00",
//         total2: "0.00",
//         residual2: "0.00",
//         security_deposit2: "0.00",
//         excess_kms2: "0.00",
//         twenty_four1: "0.00",
//         cents_per_km2: "0.00",
//         total_km2: "0.00",
//         down_payment_and_fees2: "0.00",
//         hst4: "0.00",
//         st_Payment1_1:"0.00",
//         lic_fee1: "0.00",
//         fuel44:"0.00",
//         ppsa1: "0.00",
//         deposit_1_1: "0.00",
//         total_due2: "0.00",
//     });
//     const[curValue2 , setCurValue2] = useState({
//         price7:"0.00",
//         per7:"0.00",
//         net_cap_7:"0.00",
//         Savings:"0.00",
        
//     });
//     const handleInputChange = (e) => {
//         setCurValue(e.target.value);
//         // setCurValue2(e.target.value);
      
      
//     };
//     const handleInputChange2 = (e2) => {
//         setCurValue1(e2.target.value);
       
//         // console.log(e2.target.id);
//     };
//     const handleInputChange3 = (e3) =>{
//         setCurValue2(e3.target.value);
//     }
//     return (
//         <>
//             <div class="d-flex">
//                 <h5 class="heading" style={{ width: "33.3%;" }}>Retail Lease</h5>
//                 <h5 class="heading" style={{ width: "33.3%;" }}>Term 1</h5>
//                 <h5 class="heading" style={{ width: "33.3%;" }}>Term 2</h5>
//             </div>
//             <div class="row">
//                 <div class="col-3 col-md-4 col-lg-4 col-xl-4">
//                     <label class="form-label" for="Price">Price</label>
//                     <div class="input-group mb-3">
//                         <input type="tel" class="form-control form-control-sm uni_colr" id="price7"
//                             name="price7" maxlength="10"  value={curValue2.price7} onChange={(e) => { handleInputChange3(e) } } />
//                         <span class="input-group-text">
//                             <i class="fa fa-dollar"></i>
//                         </span>
//                     </div>
//                 </div>
//                 <div class="col-3 col-md-4 col-lg-4 col-xl-4">
//                     <label class="form-label" for="5per">Lease Down Payment</label>
//                     <div class="input-group mb-3">
//                         <input type="tel" class="form-control form-control-sm uni_colr" id="per7"
//                             name="per7" maxlength="10"  value={curValue2.per7} onChange={(e) => { handleInputChange3(e) } } />
//                         <span class="input-group-text">
//                             <i class="fa fa-dollar"></i>
//                         </span>
//                     </div>
//                 </div>
//                 <div class="col-3 col-md-4 col-lg-4 col-xl-4">
//                     <label class="form-label" for="finacanced_amount">Net Cap</label>
//                     <div class="input-group mb-3">
//                         <input type="tel" class="form-control form-control-sm uni_colr" id="net_cap_7"
//                             name="net_cap_7" maxlength="10" disabled value={curValue2.net_cap_7} onChange={(e) => { handleInputChange3(e) } } />
//                         <span class="input-group-text">
//                             <i class="fa fa-dollar"></i>
//                         </span>
//                     </div>
//                 </div>
//                 <div class="col-3 col-md-4 col-lg-4 col-xl-4">
//                     <label class="form-label" for="finacanced_amount">Savings</label>
//                     <div class="input-group mb-3">
//                         <input type="tel" class="form-control form-control-sm uni_colr" id="Savings"
//                             name="Savings" maxlength="10"  disabled value={curValue2.Savings} onChange={(e) => { handleInputChange3(e) } } />
//                         <span class="input-group-text">
//                             <i class="fa fa-dollar"></i>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//             {
//                 Sdata8.map((val) => {
//                     return (
//                         <>
//                             <div class="row">
//                                 <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                                     <label class="form-label" for="Term">{val.sname}</label>
//                                 </div>
//                                 <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                                     <div class="input-group mb-3">
//                                         <input type={val.type} class="form-control form-control-sm" id={val.id}
//                                             name={val.id} maxlength="10" disabled value={curValue[val.id]} onChange={(e) => { handleInputChange(e) }} />
//                                         {val.Font}
//                                     </div>
//                                 </div>
//                                 <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                                     <div class="input-group mb-3">
//                                         <input type={val.type} class="form-control form-control-sm" id={val.id2}
//                                             name={val.id2} maxlength="10"  disabled value={curValue1[val.id2]} onChange={(e2) => { handleInputChange2(e2) }} />
//                                         {val.Font}
//                                     </div>
//                                 </div>
//                             </div>
//                         </>
//                     )
//                 })
//             }
//         </>
//     )
// }
// export default RetailLease