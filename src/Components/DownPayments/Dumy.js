// import React, { useState } from 'react'
// import Sdata5 from "./Sdata5";
// import { ReatiLeaseNetCap ,ReatiLeaseDeposit_1_} from "../RetailLease/RetLeaseFun";

// const DownPayments = () => {
   
//   const [DownPaymentsInput ,setDownPaymentsInput]=useState({
//     percentof:"1",
//     down_payments:"0",
//     lease_down:"0",
//     deposit:"0",
//     trade_val:"0",
//     lienamount:"0",
//     leasetrade:"0                         ",
//   })
  
//   const HandleInput =(e)=>{
   
//     const name = e.target.value;
//     // console.log(e.target.id);
//     setDownPaymentsInput(name);

//     if (e.target.id) {
//       ReatiLeaseDeposit_1_();
//     }
//       //.............................finacanced_amount1........................//
//          var fin_amount11 = ((parseFloat(document.getElementById("price2").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(  document.getElementById("leasetrade").value)) * 1.13) + parseFloat(  document.getElementById("lienamount").value) - parseFloat(  document.getElementById("per1_5").value) + (( document.getElementById("term1").value / 12) * document.getElementById("dealer_fee_ppsa").value);
//          var fin_amount100 = fin_amount11.toFixed(2);
//       //.................................finacanced_amount..........................................................//
//           var fin_amount111 = ((parseFloat(document.getElementById("price2").value) - parseFloat(document.getElementById("trade_val").value) - parseFloat(document.getElementById("leasetrade").value)) * 1.13) + parseFloat( document.getElementById("lienamount").value) - parseFloat(document.getElementById("per1_5").value) + ( document.getElementById("term2").value / 12 *document.getElementById("dealer_fee_ppsa").value);
//           var fin_amount2_round = fin_amount111.toFixed(2);
//     if ( e.target.id == "down_payments") {
      
//       var cal_per_of_dwn = (parseFloat(document.getElementById("down_payments").value) / parseFloat(document.getElementById("full_msrp").value) ) *100;
//       var cal_per_of_dwn1 = cal_per_of_dwn.toFixed(2);
//       document.getElementById("percentof").value = cal_per_of_dwn1;
//       document.getElementById("lease_down").value =( parseFloat(document.getElementById("down_payments").value) / 1.13).toFixed(2);
//     }
//     if ( e.target.id == "lienamount" || e.target.id == "leasetrade" || e.target.id == "trade_val") {
//       document.getElementById("finacanced_amount1").value = fin_amount100; 
//       document.getElementById("finacanced_amount").value = fin_amount2_round;
//       //.........RetailEase Cal .....................//
//       ReatiLeaseNetCap();
//     } 
//     if (e.target.id == "percentof") {
//       document.getElementById("broker_fee_per").value = "2.5";
//       document.getElementById("broker_fee").value = document.getElementById("full_msrp").value * (document.getElementById("broker_fee_per").value / 100);
//       var bfinp = ((parseFloat(document.getElementById("full_msrp").value)*( parseFloat(document.getElementById("percentof").value)  /100 ) ) +parseFloat(document.getElementById("broker_fee").value) ) * 1.13;

//       document.getElementById("down_payments").value = bfinp.toFixed(2);
//       document.getElementById("lease_down").value =( parseFloat(document.getElementById("down_payments").value) / 1.13).toFixed(2);
//     }
//   }
//   return (
//     <form class="px-md-2" action="" method="POST">
//     <div id="dealinfo_sec">
//         <h5 class="heading">Down Payment and Trades</h5>
//         <div class="row">
//         {
//         Sdata5.map((val)=>{
//         return(
//         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
//             <div class="form-group form-outline">
//                 <label class="form-label" for={val.name}>{val.sname} </label>
//                 <input type={val.type} class="form-control form-control-sm"
//                     id={val.id} name={val.name} maxlength="17" value={DownPaymentsInput.down_payments}  onChange={(event) => HandleInput(event )}/>
//                     {/* <span class="input-group-text"><i class="fa fa-dollar"></i> </span> */}
//             </div>
//         </div>
//         )
//         })
//         }

        
//         </div>
//       </div>
//     </form>
//   )
// }

// export default DownPayments