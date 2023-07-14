import React, { useEffect, useState } from 'react'
// import Sdata6 from "./Sdata6";
import { finacanced_amount ,finacanced_amount1 , Payment_01 , Payment_02, RF_FinacDisc ,RF_Price2 , RF_ReatilDownPay} from "./FuncRetailFinc";
const RetailFinance = () => {
useEffect(()=>{
    // RF_FinacDisc(); finacanced_amount(); finacanced_amount1();Payment_01();   Payment_02();RF_Price2();RF_ReatilDownPay();
},[]);
    const [RetailFinanceInput ,setRetailFinanceInput] = useState({
        price2:"0.00",
        Finance_Discount:"0",
        per1_5:"0.00",
        term1:"48",
        term2:"60",
        rate1:"8.95",
        rate2:"8.95",
        payment01:"0.00",
        payment02:"0.00",
        finacanced_amount1:"0.00",
        finacanced_amount:"0.00"
    });
    const HandleInput =(e)=>{
        const name = e.target.value;
        setRetailFinanceInput(name);
         //..................................Retail Finance (Finance Discount Field Calculation)...................//
     if (e.target.id  ) {
        RF_FinacDisc(); finacanced_amount(); finacanced_amount1();Payment_01();   Payment_02();RF_Price2();
        RF_ReatilDownPay();
    }   
}

  return (
                             <form class="px-md-2" action="" method="POST">
                                <div class="d-flex">
                                            <h5 class="heading" style={{width: "33.3%;"}}>Retail Finance</h5>
                                            <h5 class="heading" style={{width: "33.3%;"}}>Term 1</h5>
                                            <h5 class="heading" style={{width: "33.3%"}}>Term 2</h5>
                                        </div>
                                        <div class="row">
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <label class="form-label" for="Price">Price</label>
                                                <div class="input-group mb-3">
                                                    <input type="tel" class="form-control form-control-sm uni_colr"
                                                        id="price2" name="price2" maxlength="10" value={RetailFinanceInput.price2} onChange={(event) => HandleInput(event )} />
                                                    <span class="input-group-text"><i class="fa fa-dollar"></i></span>
                                                </div>
                                            </div>
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <label class="form-label" for="5per">Retail Down Payment</label>
                                                <div class="input-group mb-3">
                                                    <input type="tel" class="form-control form-control-sm uni_colr"
                                                        id="per1_5" name="per1_5" maxlength="10" value={RetailFinanceInput.per1_5}  onChange={(event) => HandleInput(event )}/>
                                                    <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                                                </div>
                                            </div>
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <label class="form-label" for="Finance_Discount">Finance
                                                    Discount</label>
                                                <div class="input-group mb-3">
                                                    <input type="tel" class="form-control form-control-sm uni_colr"
                                                        id="Finance_Discount" name="Finance_Discount" maxlength="10"
                                                        value={RetailFinanceInput.Finance_Discount} onChange={(event) => HandleInput(event )} />
                                                    <span class="input-group-text"><i class="fa fa-dollar"></i></span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <label class="form-label" for="Term">Term</label>
                                            </div>
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <div class="input-group mb-3">
                                                    <input type="tel" class="form-control form-control-sm" id="term1"
                                                        name="term1" maxlength="10" value={RetailFinanceInput.term1} onChange={(event) => HandleInput(event )} />
                                                </div>
                                            </div>
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <div class="input-group mb-3">
                                                    <input type="tel" class="form-control form-control-sm" id="term2"
                                                        name="term2" maxlength="10"  value={RetailFinanceInput.term2} onChange={(event) => HandleInput(event )} />
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <label class="form-label" for="Rate">Rate</label>
                                            </div>
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <div class="input-group mb-3">
                                                    <input type="tel" class="form-control form-control-sm" id="rate1"
                                                        name="rate1" maxlength="10" value={RetailFinanceInput.rate1} onChange={(event) => HandleInput(event )} />
                                                    <span class="input-group-text"><i class="fa fa-percent"></i> </span>
                                                </div>
                                            </div>
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <div class="input-group mb-3">
                                                    <input type="tel" class="form-control form-control-sm" id="rate2"
                                                        name="rate2" maxlength="10" value={RetailFinanceInput.rate2}  onChange={(event) => HandleInput(event )} />
                                                    <span class="input-group-text"><i class="fa fa-percent"></i> </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <label class="form-label" for="Payment">Payment</label>
                                            </div>
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <div class="input-group mb-3">
                                                    <input type="tel" class="form-control form-control-sm uni_colr"
                                                        id="payment01" name="payment01" disabled maxlength="10" value={RetailFinanceInput.payment01} onChange={(event) => HandleInput(event )} />
                                                    <span class="input-group-text"> <i class="fa fa-dollar"></i></span>
                                                </div>
                                            </div>
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <div class="input-group mb-3">
                                                    <input type="tel" class="form-control form-control-sm uni_colr"
                                                        id="payment02" name="payment02" disabled  maxlength="10" value={RetailFinanceInput.payment02} onChange={(event) => HandleInput(event )} />
                                                    <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <label class="form-label" for="Payment">Finance Amount</label>
                                            </div>
                                            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <label class="form-label" for="finacanced_amount">Retail Financed Amount
                                                    1</label>
                                                <div class="input-group mb-3">
                                                    <input type="tel" class="form-control form-control-sm uni_colr"
                                                        id="finacanced_amount1" name="finacanced_amount1"  disabled maxlength="10"
                                                        value={RetailFinanceInput.finacanced_amount1} onChange={(event) => HandleInput(event )} />
                                                    <span class="input-group-text">
                                                        <i class="fa fa-dollar"></i>
                                                    </span>
                                                </div>
                                         </div>
                                         <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                                <label class="form-label" for="finacanced_amount">Retail Financed Amount
                                                    2</label>
                                                <div class="input-group mb-3">
                                                    <input type="tel" class="form-control form-control-sm uni_colr"
                                                        id="finacanced_amount" name="finacanced_amount" maxlength="10" disabled
                                                        value={RetailFinanceInput.finacanced_amount} onChange={(event) => HandleInput(event )} />
                                                    <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                                                </div>
                                            </div>
                                       </div>
                       </form>
  )
}

export default RetailFinance