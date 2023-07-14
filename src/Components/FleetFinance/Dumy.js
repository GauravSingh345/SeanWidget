// import React, {  useState } from 'react'
// import { per5 ,Fleet_Fin_Discountfun , FleetFinPay1 , FleetFinPay2} from "./FleetFunction";

// const FleetFinance = () => {
//     const [FleetFinanceInput ,setFleetFinanceInput]=useState({
//         price1:"0.00",
//         per5:"0.00",
//         Fleet_Fin_Discount:"0.00",
//         term11:"48",
//         term12:"60",
//         rate11:"8.95",
//         rate12:"8.95",
//         payment1:"0.00",
//         payment2:"0.00",
//         net_cap:"0.00",
//         net_cap_02:"0.00"
//     });

//     const HandleInput =(e)=>{
//         const name = e.target.value;
//         setFleetFinanceInput(name);
//         if (e.target.id === "price1") {
//             per5();
//             Fleet_Fin_Discountfun();
//         }
//         if (e.target.id === "net_cap" || e.target.id === "rate11" || e.target.id === "term11") {
//             FleetFinPay1();
//         }
//         if (e.target.id === "net_cap_02" || e.target.id === "rate12" || e.target.id === "term12") {
//             FleetFinPay2();
//         }
//     }
//   return (
//     <form class="px-md-2" action="" method="POST">
//       <div class="d-flex">
//         <h5 class="heading" style={{width: "33.3%;"}}>Fleet Finance</h5>
//         <h5 class="heading" style={{width: "33.3%;"}}>Term 1</h5>
//         <h5 class="heading" style={{width: "33.3%;"}}>Term 2</h5>
//     </div>
//     <div class="row">
//         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//             <label class="form-label" for="Price">Price </label>
//             <div class="input-group mb-3">
//                 <input type="tel" class="form-control form-control-sm uni_colr"
//                     id="price1" name="price1" maxlength="10" value={FleetFinanceInput.price1} onChange={(event) => HandleInput(event )}/>
//                 <span class="input-group-text"><i class="fa fa-dollar"></i></span>
//             </div>
//         </div>
//         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//             <label class="form-label" for="5per">Fleet Down Payment</label>
//             <div class="input-group mb-3">
//                 <input type="tel" class="form-control form-control-sm uni_colr"
//                     id="per5" name="per5" maxlength="10" value={FleetFinanceInput.per5} onChange={(event) => HandleInput(event )}/>
//                 <span class="input-group-text"><i class="fa fa-dollar"></i></span>
//             </div>
//         </div>
//         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//             <label class="form-label" for="5per">Fleet Finance Discount</label>
//             <div class="input-group mb-3">
//                 <input type="tel" class="form-control form-control-sm uni_colr"
//                     id="Fleet_Fin_Discount" name="Fleet_Fin_Discount" maxlength="10"
//                     value={FleetFinanceInput.Fleet_Fin_Discount}  onChange={(event) => HandleInput(event )} />
//                 <span class="input-group-text"><i class="fa fa-dollar"></i></span>
//             </div>
//         </div>
//     </div>

//             <div class="row">
//                         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                             <label class="form-label" for="Term">Term</label>
//                         </div>
//                         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                             <div class="input-group mb-3">
//                                 <input type="tel" class="form-control form-control-sm" id="term11"
//                                     name="term11" maxlength="10" value={FleetFinanceInput.term11} onChange={(event) => HandleInput(event )} />
//                             </div>
//                         </div>
//                         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                             <div class="input-group mb-3">
//                                 <input type="tel" class="form-control form-control-sm" id="term12"
//                                     name="term12" maxlength="10" value={FleetFinanceInput.term12} onChange={(event) => HandleInput(event )} />
//                             </div>
//                         </div>
//                     </div>
//                     <div class="row">
//                         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                             <label class="form-label" for="Rate">Rate</label>
//                         </div>
//                         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                             <div class="input-group mb-3">
//                                 <input type="tel" class="form-control form-control-sm" id="rate11"
//                                     name="rate11" maxlength="10" value={FleetFinanceInput.rate11} onChange={(event) => HandleInput(event )} />
//                                 <span class="input-group-text"><i class="fa fa-percent"></i> </span>
//                             </div>
//                         </div>
//                         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                             <div class="input-group mb-3">
//                                 <input type="tel" class="form-control form-control-sm" id="rate12"
//                                     name="rate12" maxlength="10" value={FleetFinanceInput.rate12} onChange={(event) => HandleInput(event )}/>
//                                 <span class="input-group-text"><i class="fa fa-percent"></i> </span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="row">
//                         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                             <label class="form-label" for="Payment">Payment</label>
//                         </div>
//                         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                             <div class="input-group mb-3">
//                                 <input type="tel" class="form-control form-control-sm uni_colr"
//                                     id="payment1" name="payment1" maxlength="10" value={FleetFinanceInput.payment1} onChange={(event) => HandleInput(event )} />
//                                 <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
//                             </div>
//                         </div>
//                         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                             <div class="input-group mb-3">
//                                 <input type="tel" class="form-control form-control-sm uni_colr"
//                                     id="payment2" name="payment2" maxlength="10" value={FleetFinanceInput.payment2} onChange={(event) => HandleInput(event )} />
//                                 <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
//                             </div>
//                         </div>
//                     </div>
//                     <div class="row">
//                 <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                     <label class="form-label" for="Payment">Fleet Finanace Amount</label>
//                 </div>
//                 <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                     <label class="form-label" for="finacanced_amount">Fleet Finance Amount
//                         1</label>
//                     <div class="input-group mb-3">
//                         <input type="tel" class="form-control form-control-sm uni_colr" id="net_cap"
//                             name="net_cap" maxlength="10" value={FleetFinanceInput.net_cap} onChange={(event) => HandleInput(event )}/>
//                         <span class="input-group-text">
//                             <i class="fa fa-dollar"></i>
//                         </span>
//                     </div>
//                 </div>
//                 <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                     <label class="form-label" for="finacanced_amount">Fleet Finance Amount
//                         2</label>
//                     <div class="input-group mb-3">
//                         <input type="tel" class="form-control form-control-sm uni_colr" id="net_cap_02"
//                             name="net_cap_02" maxlength="10"  value={FleetFinanceInput.payment2} onChange={(event) => HandleInput(event )}/>
//                         <span class="input-group-text">
//                             <i class="fa fa-dollar"></i>
//                         </span>
//                     </div>
//                 </div>
//             </div>
//    </form>
//   )
// }

// export default FleetFinance