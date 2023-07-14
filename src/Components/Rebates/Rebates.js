import React,{useState} from 'react'
import Sdata4 from "./Sdata4";
import { RetaiLeaseCDs} from "../RetailCash/RetailCashFun";
import { ReatiLeasePrice} from "../RetailLease/RetLeaseFun";
import { RF_Price2 } from "../RetailFinance/FuncRetailFinc";
import { Emply_Price_amount ,  Rebata_fals_amount} from "./RebatesFun";
import { FleetFinancePrice1 } from "../FleetFinance/FleetFunction";
import { useEffect } from 'react';
import {  ComLease_Price} from "../COMLease/ComLeaseFun";
import {Fleetcashdiscount,Fleetcashsubtotal,Fleetcashtaxsubtotal,Fleetcashdealhst,Fleetcashtotal,
    Fleetdueondelivery,Fleetsellingprice,Fleettotalsavings} from '../FleetCash/FleetCashFun';
const Rebates = () => {
   
    useEffect(()=>{
        Emply_Price_amount();Rebata_fals_amount();
    },[]);

    const [curValue, setCurValue] = useState({
        delivery_allowance:"0.00",
        alternatecashback:"0.00",
        retail_lease:"0.00",
        fleet:"0.00",
        CNLA:"0.00",
        up_fitter_rebate:"0.00",
        after_tax_rebate:"0.00",
        fals:"0.00",
        emp_price_disc:"0.00",
        freight_and_air_tax:"0.00",
        fals_amount:"0.00",
        employee_pricing_amount:"0.00",

    });
    const handleInputChange = (e) => {
        setCurValue(e.target.id);
        if (e.target.id) {
            RetaiLeaseCDs();
            ReatiLeasePrice();
            Emply_Price_amount();Rebata_fals_amount();
            FleetFinancePrice1();
            RF_Price2();
            ComLease_Price();
            Fleetcashdiscount();Fleetcashsubtotal(); Fleetcashtaxsubtotal(); Fleetcashdealhst(); Fleetcashtotal();   Fleetdueondelivery();Fleetsellingprice(); Fleettotalsavings();
            }
            if (e.target.id) {
                setTimeout(() => {
                    document.getElementById(e.target.id).value = parseFloat(document.getElementById(e.target.id).value).toFixed(2);
                }, 1000);
            }
   
    };
    return (
        <>
        <form class="px-md-2" action="" method="POST">
            <div id="dealinfo_sec">
                <h5 class="heading">Rebates</h5>
                <div class="row">
                    {
                        Sdata4.map((val) => {
                            return (
                                <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                    <div class="form-group form-outline">
                                        <label class="form-label" for={val.name}>{val.sname} </label>
                                        <div class="input-group mb-3">
                                        <input type={val.type} class="form-control form-control-sm"
                                            id={val.id} name={val.name} maxlength="17" value={curValue[val.id]} onChange={(e) => { handleInputChange(e) }} />
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
        </>
    )
}

export default Rebates