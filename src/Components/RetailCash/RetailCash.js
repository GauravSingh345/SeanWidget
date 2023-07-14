import React, { useEffect, useState } from 'react'
import Sdata12 from './Sdata12'
import { RetaiLeaseCDs, RetaiLeasesubT,RetailLeaseSubTotal,RetailLeasecashdeal,RetailLeasecashtotal,
    RetailLeasecashrebates,RetailLeasecashdelivery,RetailLeasecashselling,RetailLeasecashsaving} from "./RetailCashFun";


const RetailCash = () => {

    const [curValue, setCurValue] = useState({
        Cash_Discounts: "0.00",
        Cash_Sub_Total: "0.00",
        Cash_Tax_Sub_Total: "0.00",
        Cash_Deal_HST: "0.00",
        Cash_Total: "0.00",
        CashAfterTaxRebate: "0.00",
        Cash_Due_on_Delivery: "0.00",
        Cash_Selling_Price: "0.00",
        Total_Cash_Savings: "0.00",
    });
    const handleInputChange = (e) => {
        console.log(e.target.id);
        setCurValue(e.target.id);
    };
    useEffect(() => {
        RetaiLeaseCDs();
        RetaiLeasesubT();
        RetailLeaseSubTotal();
        RetailLeasecashdeal();
        RetailLeasecashtotal();
        RetailLeasecashrebates();
        RetailLeasecashdelivery();
        RetailLeasecashselling();
        RetailLeasecashsaving();
       
    }, []);
  
    return (
        <>
            <form class="px-md-2" action="" method="POST">
                <div class="d-flex">
                    <h5 class="heading" style={{ width: "33.3%;" }}>Retail Cash</h5>
                    <h5 class="heading" style={{ width: "33.3%;" }}></h5>
                    <h5 class="heading" style={{ width: "33.3%;" }}></h5>
                </div>
                <div class="row">
                    {
                        Sdata12.map((val) => {
                            return (
                                <>
                                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                        <div class="form-group form-outline">
                                            <label class="form-label" for={val.name}>{val.sname} </label>
                                            <div class="input-group mb-3">
                                                <input type={val.type} class="form-control form-control-sm uni_colr"
                                                    id={val.id} name={val.name} maxlength="10" disabled value={curValue[val.id]} onChange={(e) => { handleInputChange(e) }} />
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
export default RetailCash