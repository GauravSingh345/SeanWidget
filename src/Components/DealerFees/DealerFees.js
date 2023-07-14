import React,{useState} from 'react'
import Sdata14 from './Sdata14'
// import { CWBleasefeefuel} from "../CWBLease/CWB_Fun";
import { finacanced_amount , finacanced_amount1 } from "../RetailFinance/FuncRetailFinc";
import {  FleetFinancePrice1} from "../FleetFinance/FleetFunction";
import {  FleetLeasePrice} from "../FleetLease/FleetLeaseFun";
import { ComLease_Price } from "../COMLease/ComLeaseFun";
const DealerFees = () => {
    const [curValue, setCurValue] = useState({
        dealer_fee_admin:"395.00",
        dealer_fee_ppsa:"8",
        dealer_fee_fuel:"150 ",
        dealer_fee_licensing:"59",
        dealer_fee_env_recovery:"34.50",
        dealer_fee_omvic:"10.00",
        dealer_fee_wheel_locks:"0.00",
        dealer_fee_floor_mats:"0.00",
    });
    const handleInputChange = (e) => {
        console.log(e.target.id);
        setCurValue(e.target.id) ;
        if (e.target.id ) {
            // CWBleasefeefuel();
            finacanced_amount();finacanced_amount1();
            FleetFinancePrice1();
            FleetLeasePrice();
            ComLease_Price();
        }
        if (e.target.id) {
            setTimeout(() => {
                document.getElementById(e.target.id).value = parseFloat(document.getElementById(e.target.id).value).toFixed(2);
            }, 1000);
        }
    };


    return (
        <>
            <form class="px" action="" method="POST">
                <h5 class="heading">Dealer Fees</h5>
                <div class="row">
                    {
                        Sdata14.map((val) => {
                            return (
                                <>
                                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                        <div class="form-group form-outline">
                                            <label class="form-label" for={val.name}>{val.sname} </label>
                                            <div class="input-group mb-3">
                                                <input type={val.type} class="form-control form-control-sm"
                                                    id={val.id} name={val.name} maxlength="10" value={curValue[val.id]} onChange={(e) => { handleInputChange(e) }} />
                                                {val.Font}
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </form>
        </>
    )
}

export default DealerFees