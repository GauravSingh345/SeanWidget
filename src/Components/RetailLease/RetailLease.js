import React, { useEffect, useState } from 'react'
import {ReatiLeasePrice} from "./RetLeaseFun";
const RetailLease = () => {
    useEffect(()=>{
        // ReatiLeasePayment1();ReatiLeaseResidual();ReatiLeasePayment22();ReatiLeasehst1();ReatiLeasehst2();ReatiLeaseTotal1();ReatiLeaseTotal2();ReatiLeaseSecurity_deposit1();ReatiLeaseSecurity_deposit2();ReatiLeaseTotal_km();ReatiLeaseDPFee2();ReatiLeaseHst();ReatiLeaseSt_Payment();ReatiLeaseLic_fee();
        // ReatiLeaseFuel();ReatiLeasePPSA();ReatiLeaseDeposit_1_();ReatiLeaseTotal_due_();
    },[]);


        const [RetailLeaseInput ,setRetailLeaseInput]=useState({
            price7:"0.00",
            per7:"0.00",
            net_cap_7:"0.00",
            Savings:"0.00",
            term111:"36",
            term222:"48",
            rate111:"8.95",
            rate222:"8.95",
            rate1111:"50",
            rate2222:"40",
            payment11:"0.00",
            payment12:"0.00",
            hst1:"0.00",
            hst2:"0.00",
            total1:"0.00",
            total2:"0.00",
            residual1:"0.00",
            residual2:"0.00",
            security_deposit1:"0.00",
            security_deposit2:"0.00",
            excess_kms:"0",
            excess_kms2:"0",
            twenty_four:"0",
            twenty_four1:"0",
            cents_per_km1:"0.00",
            cents_per_km2:"0.00",
            total_km1:"0.00",
            total_km2:"0.00",
            down_payment_and_fees:"0.00",
            down_payment_and_fees2:"0.00",
            hst4:"0.00",
            hst3:"0.00",
            st_Payment_1:"0.00",
            st_Payment_11:"0.00",
            lic_fee:"0.00",
            lic_fee1:"0.00",
            fuel44:"0.00",
            fuel33:"0.00",
            ppsa1:"0.00",
            ppsa:"0.00",
            deposit_1_:"0.00",
            deposit_1_1:"0.00",
            total_due:"0.00",
            total_due2:"0.00"
        });
    const HandleInput =(e)=>{
        const name = e.target.value;
        setRetailLeaseInput(name);
        if (e.target.id == "price7") {
            // ReatiLeaseLDP();ReatiLeaseNetCap();
        }
        // if (e.target.id == "net_cap_7" || e.target.id == "residual1" || e.target.id == "term111" || e.target.id == "rate111" || e.target.id == "rate222" || e.target.id == "residual2" || e.target.id == "term222" || e.target.id == "payment11" || e.target.id == "payment22" || e.target.id == "hst2" || e.target.id == "hst1" || e.target.id == "total1") {
        //     ReatiLeasePayment1();ReatiLeaseResidual();ReatiLeasePayment22();ReatiLeasehst1();ReatiLeasehst2();ReatiLeaseTotal1();ReatiLeaseTotal2();ReatiLeaseSecurity_deposit1(); ReatiLeaseSecurity_deposit2();ReatiLeaseTotal_km();
        // }
        if (e.target.id ) {
            ReatiLeasePrice();
            // ReatiLeasePayment1();ReatiLeaseResidual();ReatiLeasePayment22();ReatiLeasehst1();ReatiLeasehst2();ReatiLeaseTotal1();ReatiLeaseTotal2();ReatiLeaseSecurity_deposit1(); ReatiLeaseSecurity_deposit2();ReatiLeaseTotal_km();ReatiLeaseDPFee2();ReatiLeaseHst();ReatiLeaseSt_Payment();
            // ReatiLeaseLic_fee();ReatiLeaseFuel(); ReatiLeasePPSA();ReatiLeaseDeposit_1_();ReatiLeaseTotal_due_();
        }
    }
  return (
   <>
  
      <div class="d-flex">
        <h5 class="heading" style={{width: "33.3%;"}}>Retail Lease</h5>
        <h5 class="heading" style={{width: "33.3%;"}}>Term 1</h5>
        <h5 class="heading" style={{width: "33.3%;"}}>Term 2</h5>
    </div>
    <div class="row">
                                        <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="Price">Price</label>
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="price7"
                                                    name="price7" maxlength="10" value={RetailLeaseInput.price7}  onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="5per">Lease Down Payment</label>
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="per7"
                                                    name="per7" maxlength="10" value={RetailLeaseInput.per7} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="finacanced_amount">Net Cap</label>
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="net_cap_7"
                                                    name="net_cap_7" maxlength="10" value={RetailLeaseInput.net_cap_7} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-3 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="finacanced_amount">Savings</label>
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="Savings"
                                                    name="Savings" maxlength="10" value={RetailLeaseInput.Savings} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="Term">Term</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="term111"
                                                    name="term111" maxlength="10" value={RetailLeaseInput.term111} onChange={(event) => HandleInput(event )} />
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="term222"
                                                    name="term222" maxlength="10" value={RetailLeaseInput.term222} onChange={(event) => HandleInput(event )}/>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="Rate">Rate</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="rate111"
                                                    name="rate111" maxlength="10" value={RetailLeaseInput.rate111} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text"><i class="fa fa-percent"></i> </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="rate222"
                                                    name="rate222" maxlength="10" value={RetailLeaseInput.rate222} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text"><i class="fa fa-percent"></i> </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="Rate">Residual %</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="rate1111"
                                                    name="rate1111" maxlength="10" value={RetailLeaseInput.rate1111} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text"><i class="fa fa-percent"></i> </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="rate2222"
                                                    name="rate2222" maxlength="10" value={RetailLeaseInput.rate2222} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text"><i class="fa fa-percent"></i></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="Payment">Payment</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="payment11"
                                                    name="payment11" maxlength="10" value={RetailLeaseInput.payment11} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="payment12"
                                                    name="payment12" maxlength="10" value={RetailLeaseInput.payment12} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="hst">HST</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="hst1"
                                                    name="hst1" maxlength="10" value={RetailLeaseInput.hst1} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="hst2"
                                                    name="hst2" maxlength="10" value={RetailLeaseInput.hst2} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="total">Total</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="total1"
                                                    name="total1" maxlength="10" value={RetailLeaseInput.total1} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="total2"
                                                    name="total2" maxlength="10" value={RetailLeaseInput.total2} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="res">Residual</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="residual1"
                                                    name="residual1" maxlength="10" value={RetailLeaseInput.residual1} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="residual2"
                                                    name="residual2" maxlength="10" value={RetailLeaseInput.residual2} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="securitydeposit">Security Deposit</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr"
                                                    id="security_deposit1" name="security_deposit1" maxlength="10"
                                                    value={RetailLeaseInput.security_deposit1} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" 
                                                    id="security_deposit2" name="security_deposit2" maxlength="10"
                                                    value={RetailLeaseInput.security_deposit2} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="kms_per_year">Total Km Per Year</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="excess_kms"
                                                    name="excess_kms" maxlength="10" value={RetailLeaseInput.excess_kms} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="excess_kms2"
                                                    name="excess_kms2" maxlength="10" value={RetailLeaseInput.excess_kms2} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="twenty_four">Excess KMs</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="twenty_four"
                                                    name="twenty_four" maxlength="10" value={RetailLeaseInput.twenty_four} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="twenty_four1"
                                                    name="twenty_four1" maxlength="10" value={RetailLeaseInput.twenty_four1} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="cents_per_km">Cents Per KM</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm"
                                                    id="cents_per_km1" name="cents_per_km1" maxlength="10" value={RetailLeaseInput.cents_per_km1} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm"
                                                    id="cents_per_km2" name="cents_per_km2" maxlength="10" value={RetailLeaseInput.cents_per_km2} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="cents_per_km">Total KM</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="total_km1"
                                                    name="total_km1" maxlength="10" value={RetailLeaseInput.total_km1} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="total_km2"
                                                    name="total_km2" maxlength="10" value={RetailLeaseInput.total_km2} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="Down_Payment_and_Fees">Down Payment and
                                                Fees</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr"
                                                    id="down_payment_and_fees" name="down_payment_and_fees"
                                                    maxlength="10" value={RetailLeaseInput.down_payment_and_fees} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr"
                                                    id="down_payment_and_fees2" name="down_payment_and_fees2"
                                                    maxlength="10" value={RetailLeaseInput.down_payment_and_fees2} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="HST">HST</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="hst3"
                                                    name="hst3" maxlength="10" value={RetailLeaseInput.hst3} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="hst4"
                                                    name="hst4" maxlength="10" value={RetailLeaseInput.hst4} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="istpayment">1st Payment</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="st_Payment_1"
                                                    name="st_Payment_1" maxlength="10" value={RetailLeaseInput.st_Payment_1} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="st_Payment_11"
                                                    name="st_Payment_11" maxlength="10" value={RetailLeaseInput.st_Payment_11} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="lic_fee">License Fee</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="lic_fee"
                                                    name="lic_fee" maxlength="10"  value={RetailLeaseInput.lic_fee} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="lic_fee1"
                                                    name="lic_fee1" maxlength="10"  value={RetailLeaseInput.lic_fee1} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="fuel">Fuel</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="fuel33"
                                                    name="fuel33" maxlength="10" value={RetailLeaseInput.fuel33} onChange={(event) => HandleInput(event )}/>
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="fuel44"
                                                    name="fuel44" maxlength="10" value={RetailLeaseInput.fuel44} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="ppsa">PPSA</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="ppsa"
                                                    name="ppsa" maxlength="10" value={RetailLeaseInput.ppsa} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="ppsa1"
                                                    name="ppsa1" maxlength="10" value={RetailLeaseInput.ppsa1} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="deposit">Deposit</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="deposit_1_"
                                                    name="deposit_1_" maxlength="10" value={RetailLeaseInput.deposit_1_} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm" id="deposit_1_1"
                                                    name="deposit_1_1" maxlength="10" value={RetailLeaseInput.deposit_1_1} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <label class="form-label" for="total_due">Total Due</label>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="total_due"
                                                    name="total_due" maxlength="10" value={RetailLeaseInput.total_due} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                        <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                                            <div class="input-group mb-3">
                                                <input type="tel" class="form-control form-control-sm uni_colr" id="total_due2"
                                                    name="total_due2" maxlength="10" value={RetailLeaseInput.total_due2} onChange={(event) => HandleInput(event )} />
                                                <span class="input-group-text">
                                                    <i class="fa fa-dollar"></i>
                                                </span>
                                            </div>
                                        </div>
                                    </div>
   </>
  )
}

export default RetailLease