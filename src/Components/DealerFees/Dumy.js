// import React, { useState } from 'react'

// const DealerFees = () => {

//     const [DealerInput ,setDealerInput]=useState({
//         dealer_fee_admin:"0.00",
//         dealer_fee_ppsa:"8",
//         dealer_fee_fuel:"0.00",
//         dealer_fee_licensing:"0.00",
//         dealer_fee_env_recovery:"0.00",
//         dealer_fee_omvic:"0.00",
//         dealer_fee_floor_mats:"0.00",
//         dealer_fee_wheel_locks:"0.00"
//     })
//     const HandleInput =(e )=>{
//         const name = e.target.value;
        
//         setDealerInput(name);

//            //.............................finacanced_amount1........................//
//            var fin_amount11 = ((parseFloat(document.getElementById("price2").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(  document.getElementById("leasetrade").value)) * 1.13) + parseFloat(  document.getElementById("lienamount").value) - parseFloat(  document.getElementById("per1_5").value) + (( document.getElementById("term1").value / 12) * document.getElementById("dealer_fee_ppsa").value);
//            var fin_amount100 = fin_amount11.toFixed(2);
//            //.................................finacanced_amount..........................................................//
//            var fin_amount111 = ((parseFloat(document.getElementById("price2").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value)) * 1.13) + parseFloat( document.getElementById("lienamount").value) - parseFloat(document.getElementById("per1_5").value) + ( document.getElementById("term2").value / 12 *document.getElementById("dealer_fee_ppsa").value);
//            var fin_amount2_round = fin_amount111.toFixed(2);

//         if (e.target.id == "dealer_fee_ppsa") {
//             document.getElementById("finacanced_amount1").value = fin_amount100; 
//             document.getElementById("finacanced_amount").value = fin_amount2_round;
//         }
  
//      }
//   return (
//     <>
//     <form class="px-md-2" action="" method="POST">
//        <h5 class="heading">Dealer Fees</h5>

//        <div class="row">
//             <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                 <label class="form-label" for="admin">Admin</label>
//                 <div class="input-group mb-3">
//                     <input type="tel" class="form-control form-control-sm"
//                         id="dealer_fee_admin" name="dealer_fee_admin" maxlength="10"
//                         value={DealerInput.dealer_fee_admin} onChange={(event) => HandleInput(event )} />
//                     <span class="input-group-text">
//                         <i class="fa fa-dollar"></i>
//                     </span>
//                 </div>
//             </div>
//             <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                 <label class="form-label" for="ppsa">PPSA</label>
//                 <div class="input-group mb-3">
//                     <input type="tel" class="form-control form-control-sm"
//                         id="dealer_fee_ppsa" name="dealer_fee_ppsa" maxlength="10"
//                         value={DealerInput.dealer_fee_ppsa} onChange={(event) => HandleInput(event )} />
//                     <span class="input-group-text">
//                         <i class="fa fa-dollar"></i>
//                     </span>
//                 </div>
//             </div>
//             <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                 <label class="form-label" for="fuel">Fuel</label>
//                 <div class="input-group mb-3">
//                     <input type="tel" class="form-control form-control-sm"
//                         id="dealer_fee_fuel" name="dealer_fee_fuel" maxlength="10"
//                         value={DealerInput.dealer_fee_fuel} onChange={(event) => HandleInput(event )} />
//                     <span class="input-group-text">
//                         <i class="fa fa-dollar"></i>
//                     </span>
//                 </div>
//             </div>
//         </div>
//         <div class="row">
//             <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                 <label class="form-label" for="licensing">Licensing</label>
//                 <div class="input-group mb-3">
//                     <input type="tel" class="form-control form-control-sm"
//                         id="dealer_fee_licensing" name="dealer_fee_licensing" maxlength="10"
//                         value={DealerInput.dealer_fee_licensing} onChange={(event) => HandleInput(event )} />
//                     <span class="input-group-text">
//                         <i class="fa fa-dollar"></i>
//                     </span>
//                 </div>
//             </div>
//             <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                 <label class="form-label" for="env_recovery_fee">Env. Recovery Fee</label>
//                 <div class="input-group mb-3">
//                     <input type="tel" class="form-control form-control-sm"
//                         id="dealer_fee_env_recovery" name="dealer_fee_env_recovery"
//                         maxlength="10"  value={DealerInput.dealer_fee_env_recovery} onChange={(event) => HandleInput(event )} />
//                     <span class="input-group-text">
//                         <i class="fa fa-dollar"></i>
//                     </span>
//                 </div>
//             </div>
//             <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                 <label class="form-label" for="omvic">OMVIC</label>
//                 <div class="input-group mb-3">
//                     <input type="tel" class="form-control form-control-sm"
//                         id="dealer_fee_omvic" name="dealer_fee_omvic" maxlength="10"
//                           value={DealerInput.dealer_fee_omvic} onChange={(event) => HandleInput(event )} />
//                     <span class="input-group-text">
//                         <i class="fa fa-dollar"></i>
//                     </span>
//                 </div>
//             </div>
//         </div>
//         <div class="row">
//             <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                 <label class="form-label" for="wheel_locks">Wheel Locks</label>
//                 <div class="input-group mb-3">
//                     <input type="tel" class="form-control form-control-sm"
//                         id="dealer_fee_wheel_locks" name="dealer_fee_wheel_locks"
//                         maxlength="10" value={DealerInput.dealer_fee_wheel_locks}  onChange={(event) => HandleInput(event)}/>
//                     <span class="input-group-text">
//                         <i class="fa fa-dollar"></i>
//                     </span>
//                 </div>
//             </div>
//             <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//                 <label class="form-label" for="floor_mats">Floor mats</label>
//                 <div class="input-group mb-3">
//                     <input type="tel" class="form-control form-control-sm"
//                         id="dealer_fee_floor_mats" name="dealer_fee_floor_mats"
//                         maxlength="10" value={DealerInput.dealer_fee_floor_mats}   onChange={(event) => HandleInput(event)}/>
//                     <span class="input-group-text">
//                         <i class="fa fa-dollar"></i>
//                     </span>
//                 </div>
//             </div>
//             <div class="col-4 col-md-4 col-lg-4 col-xl-4"> </div>
//         </div>

//     </form>
//     </>
//   )
// }

// export default DealerFees