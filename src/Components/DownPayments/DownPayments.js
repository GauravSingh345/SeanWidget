import React,{useState} from 'react'
import Sdata5 from "./Sdata5";
import { ReatiLeaseNetCap ,ReatiLeaseDeposit_1_ ,ReatiLeasePrice} from "../RetailLease/RetLeaseFun";
import { DownPay_LeaseD , DownPay_LeaseDPercent } from "./DownPayFunc";
import {finacanced_amount1,finacanced_amount ,RF_Price2 } from "../RetailFinance/FuncRetailFinc";
import { FleetFinancePrice1 } from "../FleetFinance/FleetFunction";
import { FleetLeasePrice } from "../FleetLease/FleetLeaseFun";
import {ComLease_Price } from "../COMLease/ComLeaseFun";
const DownPayments = () => {
  const [curValue, setCurValue] = useState({
    percentof:"5",
    down_payments:"5",
    lease_down:"0.00",
    deposit:"2500",
    trade_val:"0.00",
    lienamount:"0.00",
    leasetrade:"0.00",

});
const handleInputChange = (e) => {
    setCurValue(e.target.id);
    console.log(e.target.id);
    if (e.target.id) {
      // ReatiLeaseDeposit_1_(); ReatiLeaseNetCap();
      DownPay_LeaseDPercent();
      RF_Price2();
      FleetFinancePrice1();ReatiLeasePrice();
      FleetLeasePrice();
      ComLease_Price();
      // DownPay_LeaseD();
      // finacanced_amount1();finacanced_amount();
      var PercentOfVal = document.getElementById("percentof").value;
   
      if (PercentOfVal === "NaN" || PercentOfVal === "" ) {
      
        document.getElementById("percentof").value = "0.00";
      }
      
    }
    if (e.target.id) {
      setTimeout(() => {
          document.getElementById(e.target.id).value = parseFloat(document.getElementById(e.target.id).value).toFixed(2);
      }, 1000);
  }



};
  return (
    <form class="px-md-2" action="" method="POST">
    <div id="dealinfo_sec">
        <h5 class="heading">Down Payment and Trades</h5>
        <div class="row">
        {
        Sdata5.map((val)=>{
        return(
        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
            <div class="form-group form-outline">
                <label class="form-label" for={val.name}>{val.sname} </label>
                <div class="input-group mb-3">
                <input type={val.type} class="form-control form-control-sm"
                    id={val.id} name={val.name} maxlength="17" value={curValue[val.id] } onChange={(e) => { handleInputChange(e) }} />
                    {val.Font}
                    </div>
            </div>
        </div>
        )
        })
        }

        
        </div>
      </div>
    </form>
  )
}

export default DownPayments