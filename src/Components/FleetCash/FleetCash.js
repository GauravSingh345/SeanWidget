import React, {  useState } from 'react';
import Sdata13 from './Sdata13';
import {Fleetcashdiscount,Fleetcashsubtotal,Fleetcashtaxsubtotal,Fleetcashdealhst,Fleetcashtotal,
    Fleetdueondelivery,Fleetsellingprice,Fleettotalsavings} from './FleetCashFun';
const FleetCash = () => {
    const [curValue, setCurValue] = useState({
        Fleet_Discounts: "0.00",
        Fleet_Sub_Total: "0.00",
        Fleet_Tax_Sub_Total: "0.00",
        Fleet_Deal_HST: "0.00",
        Fleet_Total: "0.00",
        FleetAfterTaxRebate: "0.00",
        Fleet_Due_on_Delivery: "0.00",
        Fleet_Selling_Price: "0.00",
        Total_Fleet_Savingss: "0.00",
    });
    const handleInputChange = (e) => {

        setCurValue(e.target.id);
        Fleetcashdiscount();Fleetcashsubtotal(); Fleetcashtaxsubtotal(); Fleetcashdealhst(); Fleetcashtotal();   Fleetdueondelivery();Fleetsellingprice(); Fleettotalsavings();
    };
    return (
        <>
            <div class="d-flex">
                <h5 class="heading" style={{ width: "33.3%;" }}>Fleet Cash</h5>
                <h5 class="heading" style={{ width: "33.3%;" }}></h5>
                <h5 class="heading" style={{ width: "33.3%;" }}></h5>
            </div>
            <div class="row">
                {
                    Sdata13.map((val) => {
                        return (
                            <>
                                <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                    <div class="form-group form-outline">
                                        <label class="form-label" for={val.name}>{val.sname} </label>
                                        <div class="input-group mb-3">
                                            <input type={val.type} class="form-control form-control-sm uni_colr"
                                                id={val.id} name={val.name} maxlength="10"  disabled value={curValue[val.id]} onChange={(e) => { handleInputChange(e) }} />
                                            {val.Font}
                                        </div>
                                    </div>
                                </div>
                            </>
                        )
                    })
                }
            </div>
        </>
    )
}

export default FleetCash