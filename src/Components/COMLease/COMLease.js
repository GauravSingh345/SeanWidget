import React,{useState}from 'react'
import Sdata10 from './Sdata10'
import {COM_Disabled ,ComLease_Price, ComLease_DownPayment, ComLease_NetCap, ComLease_Saving,ComLease_hst_1,ComLease_hst_2, ComLease_Residual_1, ComLease_Residual_2, ComLease_Sec_dep_1,ComLease_Sec_dep_2, ComLease_DownPayment_Fees_1,ComLease_DownPayment_Fees_2,ComLease_hst_3,ComLease_hst_4, ComLease_1stPayment1, ComLease_1stPayment2, ComLease_LicenceFee1, ComLease_LicenceFee2,ComLease_Fuel, ComLease_PPSA1, ComLease_PPSA2, ComLease_Deposit1, ComLease_Deposit2 , ComLease_Payment ,ComLease_Total} from "./ComLeaseFun";
import { useEffect } from 'react';
const COMLease = () => {
    useEffect(() => {
        COM_Disabled(); 
        //  ComLease_Price(); ComLease_DownPayment(); ComLease_NetCap(); ComLease_Saving(); ComLease_hst_1(); ComLease_hst_2(); ComLease_Residual_1(); ComLease_Residual_2(); ComLease_Sec_dep_1(); ComLease_Sec_dep_2(); ComLease_DownPayment_Fees_1(); ComLease_DownPayment_Fees_2(); ComLease_hst_3(); ComLease_hst_4(); ComLease_1stPayment1(); ComLease_1stPayment2(); ComLease_LicenceFee1(); ComLease_LicenceFee2(); ComLease_Fuel(); ComLease_PPSA1(); ComLease_PPSA2(); ComLease_Deposit1(); ComLease_Deposit2();ComLease_Payment();
        // ComLease_Total();
    },[]);
        const [curValue, setCurValue] = useState({
            com_lease_term_1:"48",
            com_lease_rate_1:"8.95",
            com_lease_residual_per_1:"25",
            com_lease_payment_1:"0.00",
            com_lease_hst_1:"0.00",
            com_lease_total_1:"0.00",
            com_lease_residual_1:"0.00",
            com_lease_sec_dep_1:"0.00",
            com_lease_down_pay_1:"0.00",
            com_lease_hst_3:"0.00",
            com_lease_1st_pay_1:"0.00",
            com_lease_lic_fee_1:"0.00",
            com_lease_fuel_1:"0.00",
            com_lease_PPSA_1:"0.00",
            com_lease_dep_1:"0.00",
            com_lease_total_due_1:"0.00",


        });
        const [curValue1, setCurValue1] = useState({
            com_lease_term_2:"60",
            com_lease_rate_2:"8.95",
            com_lease_residual_per_2:"20",
            com_lease_payment_2:"0.00",
            com_lease_hst_2:"0.00",
            com_lease_total_2:"0.00",
            com_lease_residual_2:"0.00",
            com_lease_sec_dep_2:"0.00",
            com_lease_down_pay_2:"0.00",
            com_lease_hst_4:"0.00",
            com_lease_1st_pay_2:"0.00",
            com_lease_lic_fee_2:"0.00",
            com_lease_fuel_2:"0.00",
            com_lease_PPSA_2:"0.00",
            com_lease_dep_2:"0.00",
            com_lease_total_due_2:"0.00",
        });
        const[curValue2 , setCurValue2] = useState({
            com_lease_price:"0.00",
            com_lease_per:"0.00",
            com_lease_net_cap:"0.00",
            com_save:"0.00",
        });
        const handleInputChange = (e) => {
            console.log(e.target.id);
            setCurValue(e.target.id);
            setCurValue2(e.target.id);
            if (e.target.id ) {
                ComLease_hst_1();
                ComLease_Price();
                ComLease_Residual_1();
                ComLease_Sec_dep_1();
                ComLease_DownPayment_Fees_1();
                ComLease_hst_3();
                ComLease_1stPayment1();
                ComLease_LicenceFee1();
                ComLease_Fuel();
                ComLease_PPSA1();
                ComLease_Deposit1();
                ComLease_Payment();
                ComLease_Total();
            }
        };
        const handleInputChange2 = (e2) => {
            console.log(e2.target.id);
            setCurValue1(e2.target.name);
            if (e2.target.id ) {
                ComLease_Price();
                ComLease_DownPayment();
                ComLease_NetCap();
                ComLease_Saving();
                ComLease_hst_2();
                ComLease_Residual_2();
                ComLease_Sec_dep_2();
                ComLease_DownPayment_Fees_2();
                ComLease_hst_4();
                ComLease_1stPayment2();
                ComLease_LicenceFee1();
                ComLease_Fuel();
                ComLease_PPSA2();
                ComLease_Deposit1();
                ComLease_Payment();
                ComLease_Total();
            }
        };
  return (
    <>
    <form class="px-md-2" action="" method="POST">
            <div class="d-flex">
                <h5 class="heading" style={{width: "33.3%;"}}>COM Lease</h5>
                <h5 class="heading" style={{width: "33.3%;"}}>Term 1</h5>
                <h5 class="heading" style={{width: "33.3%;"}}>Term 2</h5>
            </div>
            <div class="row">
                <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                    <label class="form-label" for="">Price</label>
                    <div class="input-group mb-3">
                        <input type="tel" class="form-control form-control-sm uni_colr"
                            id="com_lease_price" name="com_lease_price" maxlength="10"
                            value={curValue2.com_lease_price} onChange={(e) => { handleInputChange(e) } } />
                        <span class="input-group-text">
                            <i class="fa fa-dollar"></i>
                        </span>
                    </div>
                </div>
                <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                    <label class="form-label" for="5per">Lease Down Payment</label>
                    <div class="input-group mb-3">
                        <input type="tel" class="form-control form-control-sm uni_colr"
                            id="com_lease_per" name="com_lease_per" maxlength="10" 
                             value={curValue2.com_lease_per} onChange={(e) => { handleInputChange(e) } } />
                        <span class="input-group-text">
                            <i class="fa fa-dollar"></i>
                        </span>
                    </div>
                </div>
                <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                    <label class="form-label" for="finacanced_amount">Net Cap</label>
                    <div class="input-group mb-3">
                        <input type="tel" class="form-control form-control-sm uni_colr"
                            id="com_lease_net_cap" name="com_lease_net_cap" maxlength="10"
                            value={curValue2.com_lease_net_cap} onChange={(e) => { handleInputChange(e) } } />
                        <span class="input-group-text">
                            <i class="fa fa-dollar"></i>
                        </span>
                    </div>
                </div>
                <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                    <label class="form-label" for="com_save">Savings</label>
                    <div class="input-group mb-3">
                        <input type="tel" class="form-control form-control-sm uni_colr"
                            id="com_save" name="com_save" maxlength="10"  
                             value={curValue2.com_save} onChange={(e) => { handleInputChange(e) } } />
                        <span class="input-group-text">
                            <i class="fa fa-dollar"></i>
                        </span>
                    </div>
                </div>
            </div>

            {
                Sdata10.map((val) => {
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

export default COMLease
