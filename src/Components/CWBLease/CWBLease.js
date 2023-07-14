import React, { useState } from 'react'
import Sdata11 from './Sdata11'
import { CWB_Disabled,CWBleaseprice,CWBleaseper,CWBleasenetcap,CWBleasesaving,CWBleaseresidual,CWBleasepayment,
    CWBleasehst,CWBleasehsdownpay,CWBleasehst2,CWBleaseistpayment,CWBleasefeefuel,CWBleasetotalvalue,CWBleasetotaldue,CWBleaselicfee,CWBleasedeposit} from "./CWB_Fun";
import { useEffect } from 'react';
const CWBLease = () => {
            useEffect(()=>{
            CWB_Disabled();
            // CWBleaseprice();
            // CWBleaseper();
            // CWBleasenetcap();
            // CWBleasesaving();
            // CWBleaseresidual();
            // CWBleasepayment();
            // CWBleasehst();
            // CWBleasehsdownpay();
            // CWBleasehst2();
            // CWBleaseistpayment();
            // CWBleasefeefuel();
            // CWBleasetotalvalue();
            // CWBleasetotaldue();
            // CWBleaselicfee();
            // CWBleasedeposit();
        },[]);

    const[curValue3 , setCurValue3] = useState({
        CWB_lease_per:"0.00",
        CWB_lease_price:"0.00",
        CWB_lease_net_cap:"0.00",
        cwb_save:"0.00"
    })
    const [curValue, setCurValue] = useState({
        CWB_lease_term_1: "48",
        CWB_lease_rate_1: "8.95",
        CWB_lease_residual_per_1: "25",
        CWB_lease_payment_1: "0.00",
        CWB_lease_hst_1: "0.00",
        CWB_lease_total_1: "0.00",
        CWB_lease_residual_1: "0.00",
        CWB_lease_down_pay_1: "0.00",
        CWB_lease_hst_3: "0.00",
        CWB_lease_Ist_pay_1: "0.00",
        CWB_lease_lic_fee_1: "0.00",
        CWB_lease_fuel_1: "0.00",
        CWB_lease_dep_1: "0.00",
        CWB_lease_total_due_1: "0.00",
    });
    const [curValue1, setCurValue1] = useState({
        CWB_lease_term_2: "60",
        CWB_lease_rate_2: "8.95",
        CWB_lease_residual_per_2: "20",
        CWB_lease_payment_2: "0.00",
        CWB_lease_hst_2: "0.00",
        CWB_lease_total_2: "0.00",
        CWB_lease_residual_2: "0.00",
        CWB_lease_down_pay_2: "0.00",
        CWB_lease_hst_4: "0.00",
        CWB_lease_Ist_pay_2: "0.00",
        CWB_lease_lic_fee_2: "0.00",
        CWB_lease_fuel_2: "0.00",
        CWB_lease_dep_2: "0.00",
        CWB_lease_total_due_2: "0.00",
    });
    const handleInputChange = (e) => {
    setCurValue(e.target.id);
    setCurValue3(e.target.value);
    };
    const handleInputChange2 = (e2) => {
    setCurValue1(e2.target.name);
    };
    return (
        <>
            <form class="px-md-2" action="" method="POST">
                <div class="d-flex">
                    <h5 class="heading" style={{ width: "33.3%;" }}>CWB Lease</h5>
                    <h5 class="heading" style={{ width: "33.3%;" }}>Term 1</h5>
                    <h5 class="heading" style={{ width: "33.3%;" }}>Term 2</h5>
                </div>
                <div class="row">
                    <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                        <label class="form-label" for="">Price</label>
                        <div class="input-group mb-3">
                            <input type="tel" class="form-control form-control-sm uni_colr"
                                id="CWB_lease_price" name="CWB_lease_price" disabled  maxlength="10"
                                value={curValue3.CWB_lease_price} onChange={(e) => { handleInputChange(e) } } />
                            <span class="input-group-text">
                                <i class="fa fa-dollar"></i>
                            </span>
                        </div>
                    </div>
                    <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                        <label class="form-label" for="5per">Lease Down Payment</label>
                        <div class="input-group mb-3">
                            <input type="tel" class="form-control form-control-sm uni_colr"
                                id="CWB_lease_per" name="CWB_lease_per" disabled maxlength="10" value={curValue3.CWB_lease_per} onChange={(e) => { handleInputChange(e) } } />
                            <span class="input-group-text">
                                <i class="fa fa-dollar"></i>
                            </span>
                        </div>
                    </div>
                    <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                        <label class="form-label" for="finacanced_amount">Net Cap</label>
                        <div class="input-group mb-3">
                            <input type="tel" class="form-control form-control-sm uni_colr"
                                id="CWB_lease_net_cap" name="CWB_lease_net_cap" maxlength="10"
                                value={curValue3.CWB_lease_net_cap} disabled onChange={(e) => { handleInputChange(e) } } />
                            <span class="input-group-text">
                                <i class="fa fa-dollar"></i>
                            </span>
                        </div>
                    </div>
                    <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                        <label class="form-label" for="cwb_save">Savings</label>
                        <div class="input-group mb-3">
                            <input type="tel" class="form-control form-control-sm uni_colr"
                                id="cwb_save" name="cwb_save" maxlength="10"  disabled value={curValue3.cwb_save}  onChange={(e) => { handleInputChange(e) } } />
                            <span class="input-group-text">
                                <i class="fa fa-dollar"></i>
                            </span>
                        </div>
                    </div>
                </div>
                {
                    Sdata11.map((val) => {
                        return (
                            <>
                                <div class="row">
                                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                        <label class="form-label" for="Term">{val.sname}</label>
                                    </div>
                                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                        <div class="input-group mb-3">
                                            <input type={val.type} class="form-control form-control-sm" id={val.id}
                                                name={val.id} maxlength="10" disabled value={curValue[val.id]} onChange={(e) => { handleInputChange(e) }} />
                                            {val.Font}
                                        </div>
                                    </div>
                                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                        <div class="input-group mb-3">
                                            <input type={val.type} class="form-control form-control-sm" id={val.id2}
                                                name={val.id2} maxlength="10" disabled value={curValue1[val.id2]} onChange={(e2) => { handleInputChange2(e2) }} />
                                            {val.Font}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </form>
        </>
    )
}
export default CWBLease
