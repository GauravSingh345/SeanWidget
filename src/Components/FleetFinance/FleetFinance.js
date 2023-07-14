import React, { useEffect, useState } from 'react'
import Sdata7 from './Sdata7'
import { per5 ,Fleet_Fin_Discountfun , FleetFinPay1 , FleetFinPay2 ,FF_Onload ,FleetFinancePrice1} from "./FleetFunction";
const FleetFinance = () => {

     useEffect(()=>{
        FF_Onload();
     },[]);
    const [curValue, setCurValue] = useState({
        term11: "48",
        rate11: "8.95",
        payment1: "0.00",
    });
    const [curValue1, setCurValue1] = useState({
        term12: "60",
        rate12: "8.95",
        payment2: "0.00",
    });
    const[curValue2 , setCurValue2] = useState({
        price1:"0.00",
        per5:"0.00",
        Fleet_Fin_Discount:"0.00",
        net_cap:"0.00",
        net_cap_02:"0.00",
               
    });
    const handleInputChange = (e) => {
        setCurValue(e.target.id);
        setCurValue2(e.target.id);
        if (e.target.id ) {
            per5();
            Fleet_Fin_Discountfun();FleetFinancePrice1();
        }
        if (e.target.id === "net_cap" || e.target.id === "rate11" || e.target.id === "term11") {
            FleetFinPay1();
        }
    };
    const handleInputChange2 = (e2) => {
        console.log(e2.target.id);
        setCurValue1(e2.target.name);
        // setCurValue2(e2.target.id);
        FleetFinancePrice1();
        if (e2.target.id === "net_cap_02" || e2.target.id === "rate12" || e2.target.id === "term12") {
            FleetFinPay2();
        }
    };
    return (
        <>
            <form class="px-md-2" action="" method="POST">
                <div class="d-flex">
                    <h5 class="heading" style={{ width: "33.3%;" }}>Fleet Finance</h5>
                    <h5 class="heading" style={{ width: "33.3%;" }}>Term 1</h5>
                    <h5 class="heading" style={{ width: "33.3%;" }}>Term 2</h5>
                </div>
                <div class="row">
                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                        <label class="form-label" for="Price">Price </label>
                        <div class="input-group mb-3">
                            <input type="tel" class="form-control form-control-sm uni_colr"
                                id="price1" name="price1" maxlength="10" disabled value={curValue2.price1} onChange={(e) => { handleInputChange(e) } } />
                            <span class="input-group-text"><i class="fa fa-dollar"></i></span>
                        </div>
                    </div>
                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                        <label class="form-label" for="per5">Fleet Down Payment</label>
                        <div class="input-group mb-3">
                            <input type="tel" class="form-control form-control-sm uni_colr"
                                id="per5" name="per5" maxlength="10"  disabled value={curValue2.per5} onChange={(e) => { handleInputChange(e) } } />
                            <span class="input-group-text"><i class="fa fa-dollar"></i></span>
                        </div>
                    </div>
                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                        <label class="form-label" for="5per">Fleet Finance Discount</label>
                        <div class="input-group mb-3">
                            <input type="tel" class="form-control form-control-sm uni_colr"
                                id="Fleet_Fin_Discount" name="Fleet_Fin_Discount" maxlength="10"  disabled
                                value={curValue2.Fleet_Fin_Discount} onChange={(e) => { handleInputChange(e) } } />
                            <span class="input-group-text"><i class="fa fa-dollar"></i></span>
                        </div>
                    </div>
                </div>
                {
                    Sdata7.map((val, index) => {
                        return (
                            <>
                                <div class="row">
                                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                        <label class="form-label" for="Term">{val.sname}</label>
                                    </div>
                                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                        <div class="input-group mb-3">
                                            <input type={val.type} class={val.class} id={val.id}
                                                name={val.id} maxlength="10" value={curValue[val.id]} onChange={(e) => { handleInputChange(e) }} />
                                            {val.Font}

                                        </div>
                                    </div>
                                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                        <div class="input-group mb-3">
                                            <input type={val.type} class={val.class} id={val.id2}
                                                name={val.id2} maxlength="10" value={curValue1[val.id2]} onChange={(e2) => { handleInputChange2(e2) }} />
                                            {val.Font}
                                        </div>
                                    </div>
                                </div>


                            </>
                        )

                    })
                }
                <div class="row">
                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                        <label class="form-label" for="Fleet_Finanace_Amount">Fleet Finanace Amount</label>
                    </div>
                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                        <label class="form-label" for="net_cap">Fleet Finance Amount 1</label>
                        <div class="input-group mb-3">
                            <input type="tel" class="form-control form-control-sm uni_colr"
                                id="net_cap" name="net_cap" maxlength="10"  disabled
                                value={curValue2.net_cap} onChange={(e) => { handleInputChange(e) } } />
                            <span class="input-group-text">
                                <i class="fa fa-dollar"></i>
                            </span>
                        </div>
                    </div>
                    <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                        <label class="form-label" for="net_cap_02">Fleet Finance Amount 2</label>
                        <div class="input-group mb-3">
                            <input type="tel" class="form-control form-control-sm uni_colr"
                                id="net_cap_02" name="net_cap_02" maxlength="10"  disabled
                                value={curValue2.net_cap_02} onChange={(e) => { handleInputChange(e) } } />
                            <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                        </div>
                    </div>
                </div>
            </form>
        </>
    )
}
export default FleetFinance