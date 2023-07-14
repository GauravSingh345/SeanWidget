import React, { useState } from 'react';
import Sdata9 from './Sdata9';
import {fleet_Disabled ,FleetLeasePrice, FleetLeaseResidual_1 , FleetLeaseResidual_2 ,FleetLeaseDownPayment, FleetLeaseNetcap , FleetLeaseSaving, FleetLeasePayment1, FleetLeasePayment2, FleetLeaseHst1, FleetLeaseHst2, FleetLeaseTotal1 , FleetLeaseTotal2, FleetLease_sec_dep_1, FleetLease_sec_dep_2, FleetLease_DownPayment_1_2, FleetLeas_hst1, FleetLeas_hst2, FleetLease_1st_pay_1, FleetLease_1st_pay_2,FleetLeas_Fuel1, FleetLeas_PPSA_1, FleetLeas_PPSA_2, FleetLeas_Deposit1, FleetLeas_Deposit2 ,FleetLeaseTotal} from "./FleetLeaseFun";
import { useEffect } from 'react';

const FleetLease = () => {
    useEffect(() => {
        fleet_Disabled();
        //  FleetLeasePrice();  FleetLeaseResidual_1();FleetLeaseResidual_2();FleetLeaseDownPayment();FleetLeaseNetcap(); FleetLeaseSaving(); FleetLeasePayment1(); FleetLeasePayment2(); FleetLeaseHst1(); FleetLeaseHst2(); FleetLeaseTotal1(); FleetLeaseTotal2(); FleetLease_sec_dep_1(); FleetLease_sec_dep_2(); FleetLease_DownPayment_1_2(); FleetLeas_hst1(); FleetLeas_hst2(); FleetLease_1st_pay_1(); FleetLease_1st_pay_2(); FleetLeas_Fuel1(); FleetLeas_PPSA_1(); FleetLeas_PPSA_2(); FleetLeas_Deposit1(); FleetLeas_Deposit2();FleetLeaseTotal();
    },[]);

    const [curValue, setCurValue] = useState({
        fleet_lease_term_1: "48",
        fleet_lease_rate_1: "8.95",
        fleet_lease_residual_per_1: "25",
        fleet_lease_payment_1: "0.00",
        fleet_lease_hst_1: "0.00",
        fleet_lease_total_1: "0.00",
        fleet_lease_residual_1: "0.00",
        fleet_lease_sec_dep_1: "0.00",
        fleet_lease_down_pay_1: "0.00",
        f_l_hst1: "0.00",
        fleet_lease_1st_pay_1: "0.00",
        fleet_lease_lic_fee_1: "0.00",
        fleet_lease_fuel_1: "0.00",
        fleet_lease_PPSA_1: "0.00",
        fleet_lease_dep_1: "0.00",
        fleet_lease_total_due_1: "0.00",
    });
    const [curValue1, setCurValue1] = useState({
        fleet_lease_term_2: "60",
        fleet_lease_rate_2: "8.95",
        fleet_lease_residual_per_2: "20",
        fleet_lease_payment_2: "0.00",
        fleet_lease_hst_2: "0.00",
        fleet_lease_total_2: "0.00",
        fleet_lease_residual_2: "0.00",
        fleet_lease_sec_dep_2: "0.00",
        fleet_lease_down_pay_2: "0.00",
        f_l_hst2: "0.00",
        fleet_lease_1st_pay_2: "0.00",
        fleet_lease_lic_fee_2: "0.00",
        fleet_lease_fuel_2: "0.00",
        fleet_lease_PPSA_2: "0.00",
        fleet_lease_dep_2: "0.00",
        fleet_lease_total_due_2: "0.00",
    });
    const[curValue2 , setCurValue2] = useState({
        fleet_lease_price:"0.00",
        fleet_lease_per:"0.00",
        fleet_lease_net_cap:"0.00",
        fleet_save:"0.00"

        
    });
    const handleInputChange = (e) => {
        console.log(e.target.id);
        setCurValue(e.target.id);
        setCurValue2(e.target.id);
        if (e.target.id ) {
            FleetLeasePrice();
            FleetLeaseResidual_1(); 
             FleetLeaseResidual_2(); 
             FleetLeaseDownPayment();  
             FleetLeaseNetcap(); 
             FleetLeasePayment1(); 
             FleetLeasePayment2();
             FleetLeaseHst1();
             FleetLeaseTotal1();
             FleetLease_sec_dep_1();
             FleetLease_DownPayment_1_2();
             FleetLeas_hst1();
             FleetLease_1st_pay_1();
             FleetLeas_Fuel1();
             FleetLeas_PPSA_1();
             FleetLeas_Deposit1();
             FleetLeaseTotal();
        }
    };
    const handleInputChange2 = (e2) => {
        console.log(e2.target.id);
        setCurValue1(e2.target.name);
        if (e2.target.id) {
            FleetLeaseResidual_2();
            FleetLeaseNetcap();
            FleetLeaseSaving();
            FleetLeasePayment2();
            FleetLeaseHst2();
            FleetLeaseTotal2();
            FleetLease_sec_dep_2();
            FleetLease_DownPayment_1_2();
            FleetLeas_hst2();
            FleetLease_1st_pay_2();
            FleetLeas_Fuel1();
            FleetLeas_PPSA_2();
            FleetLeas_Deposit2();
        }
    };
    return (
        <>
            <div class="d-flex">
                <h5 class="heading" style={{ width: "33.3%;" }}>Fleet Lease</h5>
                <h5 class="heading" style={{ width: "33.3%;" }}>Term 1</h5>
                <h5 class="heading" style={{ width: "33.3%;" }}>Term 2</h5>
            </div>
            <div class="row">
                <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                    <label class="form-label" for="">Price</label>
                    <div class="input-group mb-3">
                        <input type="tel" class="form-control form-control-sm uni_colr"
                            id="fleet_lease_price" name="fleet_lease_price" maxlength="10"
                            value={curValue2.fleet_lease_price} onChange={(e) => { handleInputChange(e) } } />
                        <span class="input-group-text">
                            <i class="fa fa-dollar"></i>
                        </span>
                    </div>
                </div>
                <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                    <label class="form-label" for="5per">Lease Down Payment</label>
                    <div class="input-group mb-3">
                        <input type="tel" class="form-control form-control-sm uni_colr"
                            id="fleet_lease_per" name="fleet_lease_per" maxlength="10"
                            value={curValue2.fleet_lease_per} onChange={(e) => { handleInputChange(e) } } />
                        <span class="input-group-text">
                            <i class="fa fa-dollar"></i>
                        </span>
                    </div>
                </div>
                <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                    <label class="form-label" for="finacanced_amount">Net Cap</label>
                    <div class="input-group mb-3">
                        <input type="tel" class="form-control form-control-sm uni_colr"
                            id="fleet_lease_net_cap" name="fleet_lease_net_cap" maxlength="10"
                            value={curValue2.fleet_lease_net_cap} onChange={(e) => { handleInputChange(e) } } />
                        <span class="input-group-text">
                            <i class="fa fa-dollar"></i>
                        </span>
                    </div>
                </div>
                <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                    <label class="form-label" for="fleet_save">Savings</label>
                    <div class="input-group mb-3">
                        <input type="tel" class="form-control form-control-sm uni_colr"
                            id="fleet_save" name="fleet_save" maxlength="10"
                            value={curValue2.fleet_save} onChange={(e) => { handleInputChange(e) } } />
                        <span class="input-group-text">
                            <i class="fa fa-dollar"></i>
                        </span>
                    </div>
                </div>
            </div>
            {
                Sdata9.map((val) => {
                    return (
                        <>
                            <div class="row">
                                <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                    <label class="form-label" for="Term">{val.sname}</label>
                                </div>
                                <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                    <div class="input-group mb-3">
                                        <input type={val.type} class="form-control form-control-sm" id={val.id}
                                            name={val.id} maxlength="10" disabled value={curValue[val.id]} onChange={(e) => { handleInputChange(e) }}  />
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
        </>
    )
}
export default FleetLease