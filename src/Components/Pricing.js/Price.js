import React, { useEffect ,useState} from 'react'
// import Sdata3 from "./Sdata3";
import { Function2  , HBDumbLsmp_fun , Price_dealerCost , PriceBrokenDown ,PriceFleetMangerShowHide} from "./PriceFunc";
import { Payment_01, Payment_02 ,finacanced_amount ,finacanced_amount1 ,RF_FinacDisc ,RF_Price2} from "../RetailFinance/FuncRetailFinc";
import { FleetFinancePrice1 ,per5 ,Fleet_Fin_Discountfun ,FleetFinPay1 , FleetFinPay2} from "../FleetFinance/FleetFunction";
import { ReatiLeasePrice } from "../RetailLease/RetLeaseFun";
import { Rebata_fals_amount } from "../Rebates/RebatesFun";
import { VehicalMake } from "../Vehicale/VehicalFunc";
import {Fleetcashdiscount,Fleetcashsubtotal,Fleetcashtaxsubtotal,Fleetcashdealhst,Fleetcashtotal,
    Fleetdueondelivery,Fleetsellingprice,Fleettotalsavings} from '../FleetCash/FleetCashFun';
import {FleetLeasePrice  } from "../FleetLease/FleetLeaseFun";
import {ComLease_Price  } from "../COMLease/ComLeaseFun";
import { DownPay_LeaseDPercent } from "../DownPayments/DownPayFunc";
const  Price = () => {
    
    const [vehicalInput ,setVehicalInput]=useState(
        {
            msrp:"60000",
            invoice:"60000",
            hb:"0.00",
            dmup:"0.00",
            lcmup:"0.00",
            pdi:"0.00",
            truck_body_desc:"0.00",
            Aftermarket1desc:"0.00",
            Aftermarket2desc:"0.00",
            truck_body_price:"0.00",
            Aftermarket_1:"0.00",
            Aftermarket_2:"0.00",
            broker_fee_per:"0.00",
            broker_fee:"0",
            delivery_fee:"0.00",
            fleet_mngr:"",
            Dealer_Cost:"0",
            full_msrp:"0.00"            
        }
    )
  useEffect(()=>{
    PriceFleetMangerShowHide();
    //...............retail Lease Functions .................//
    // ReatiLeaseLDP();ReatiLeaseNetCap();ReatiLeaseSavings();ReatiLeaseResidual();ReatiLeasePayment1();ReatiLeasePayment22();ReatiLeasehst1();ReatiLeasehst2();HBDumbLsmp_fun();
    setTimeout(() => {
         //....................Full MSRP.................................//
        document.getElementById("full_msrp").value = parseFloat(document.getElementById("msrp").value) +  parseFloat(document.getElementById("truck_body_price").value) +parseFloat(document.getElementById("Aftermarket_1").value)+parseFloat(document.getElementById("Aftermarket_2").value);
        Function2();
    }, 1000);


//...................Dealer Cost .......................//
document.getElementById("Dealer_Cost").value = (parseFloat(document.getElementById("invoice").value) +  parseFloat(document.getElementById("truck_body_price").value) + parseFloat(document.getElementById("Aftermarket_1").value) + parseFloat(document.getElementById("Aftermarket_2").value)).toFixed(2);
//................Broken Fee Field...........................//
document.getElementById("broker_fee").value = document.getElementById("full_msrp").value * (document.getElementById("broker_fee_per").value / 100);
},[]);

const GVWRInput = ()=>{
    VehicalMake();
}
const HandleInput =(e)=>{
    const name = e.target.value;
    if (e.target.id === "financial_institution") {
       if (e.target.value === "-None-" ) {
        document.getElementById("hideshowdiv").style.visibility = "hidden";
        
       }
    }
    setVehicalInput(name);
    console.log(name);
    //...............Full MSRP .......................//

  //..........................Broken Fee ..................................//
  if (e.target.id) {
    document.getElementById("broker_fee").value = document.getElementById("full_msrp").value * (document.getElementById("broker_fee_per").value / 100);
  
    document.getElementById("full_msrp").value =  parseFloat(document.getElementById("msrp").value) +  parseFloat(document.getElementById("truck_body_price").value) +parseFloat(document.getElementById("Aftermarket_1").value)+parseFloat(document.getElementById("Aftermarket_2").value);  
    Price_dealerCost();
    RF_Price2();Rebata_fals_amount();
    ReatiLeasePrice();
    FleetLeasePrice();
    ComLease_Price();
    DownPay_LeaseDPercent();
  }

  //.......................How are the Broker Fees Paid..................................//
  if (e.target.id === "broker_drp_dwn" ) {
    PriceBrokenDown(e);
  }
 //...........................................Retail Finance (Price Field Calculation )..................................//
 if (e.target.id === "msrp" || e.target.id === "invoice" || e.target.id === "hb" || e.target.id === "dmup" || e.target.id === "lcmup" || e.target.id === "pdi" || e.target.id === "truck_body_price" || e.target.id === "Aftermarket_1" || e.target.id == "Aftermarket_2" || e.target.id === "broker_fee_per" || e.target.id === "delivery_fee") {
    Function2();
    //..........Retail Finance Functions ...............//
    Payment_01(); Payment_02();finacanced_amount(); finacanced_amount1()
    //...............Fleet Finance Function .................//
    Fleet_Fin_Discountfun(); per5(); FleetFinPay1();  FleetFinPay2();
    //...............retail Lease Functions .................//
    // ReatiLeasePrice();ReatiLeaseLDP();ReatiLeaseNetCap();ReatiLeaseSavings();
 }
 //..................................Retail Finance (Finance Discount Field Calculation)...................//
 if (e.target.id) {
    RF_FinacDisc();FleetFinancePrice1();
    Fleetcashdiscount();Fleetcashsubtotal(); Fleetcashtaxsubtotal(); Fleetcashdealhst(); Fleetcashtotal();   Fleetdueondelivery();Fleetsellingprice(); Fleettotalsavings();
 }
 }
  return (
    <form class="px-md-2" action="" method="POST">
    <div id="dealinfo_sec">
        <h5 class="heading">Pricing and Options</h5>
        <div class="row">
            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                <label class="form-label" for="msrp">MSRP</label>
                <div class="input-group mb-3">
                    <input type="tel" class="form-control form-control-sm" id="msrp"
                        name="msrp" maxlength="10" value={vehicalInput.msrp} onChange={(event) => HandleInput(event )} />
                    <span class="input-group-text"> <i class="fa fa-dollar"></i> </span>
                </div>
            </div>
            <div id="hide_inv" class="col-4 col-md-4 col-lg-4 col-xl-4">
                <label class="form-label" for="invoices">Invoice</label>
                <div class="input-group mb-3">
                    <input type="tel" class="form-control form-control-sm" id="invoice"
                        name="invoice" maxlength="10" value={vehicalInput.invoice} onChange={(event) => HandleInput(event )} />
                    <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                </div>
            </div>
            <div id="hbid" class="col-4 col-md-4 col-lg-4 col-xl-4">
                <label class="form-label" for="hb">HB</label>
                <div class="input-group mb-3">
                    <input type="tel" class="form-control form-control-sm" id="hb"
                        name="hb" maxlength="10" disabled value={vehicalInput.hb} onChange={(event) => HandleInput(event )} />
                    <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                <label class="form-label" for="dmup">DMUP</label>
                <div class="input-group mb-3">
                    <input type="tel" class="form-control form-control-sm "
                        id="dmup" name="dmup" maxlength="10" value={vehicalInput.dmup} onChange={(event) => HandleInput(event )} />
                    <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                </div>
            </div>
            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                <label class="form-label" for="lcmup">LCMUP</label>
                <div class="input-group mb-3">
                    <input type="tel" class="form-control form-control-sm "
                        id="lcmup" name="lcmup" maxlength="10" value={vehicalInput.lcmup} onChange={(event) => HandleInput(event )} />
                    <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                </div>
            </div>
            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                <label class="form-label" for="pdi">PDI</label>
                <div class="input-group mb-3">
                    <input type="tel" class="form-control form-control-sm" id="pdi"
                        name="pdi" maxlength="10" value={vehicalInput.pdi} onChange={(event) => HandleInput(event )} />
                    <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                </div>
            </div>
        </div>
      <div class="row">
            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                <label class="form-label" for="truck body">Truck Body Desc.</label>
                <div class="input-group mb-3">
                    <input type="tel" class="form-control form-control-sm"
                        id="truck_body_desc" name="truck_body_desc" maxlength="50"
                        value={vehicalInput.truck_body_desc} onChange={(event) => HandleInput(event )} />
                </div>
            </div>
            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                <label class="form-label" for="Aftermarket1desc">Aftermarket 1 Desc
                </label>
                <div class="input-group mb-3">
                    <input type="tel" class="form-control form-control-sm"
                        id="Aftermarket1desc" name="Aftermarket1desc" maxlength="50"
                        value={vehicalInput.Aftermarket1desc} onChange={(event) => HandleInput(event)} />
                </div>
            </div>
            <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                <label class="form-label" for="Aftermarket2desc">Aftermarket 2
                    Desc</label>
                <div class="input-group mb-3">
                    <input type="tel" class="form-control form-control-sm"
                        id="Aftermarket2desc" name="Aftermarket2desc" maxlength="50"
                        value={vehicalInput.Aftermarket2desc} onChange={(event) => HandleInput(event)} />
                </div>
            </div>
        </div>
        <div class="row">
              <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                  <label class="form-label" for="truck_body_price">Truck Body
                      Price</label>
                  <div class="input-group mb-3">
                      <input type="tel" class="form-control form-control-sm"
                          id="truck_body_price" name="truck_body_price" maxlength="10"
                          value={vehicalInput.truck_body_price} onChange={(event) => HandleInput(event)} />
                      <span class="input-group-text"><i class="fa fa-dollar"></i></span>
                  </div>
              </div>
              <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                  <label class="form-label" for="Aftermarket_1">Aftermarket 1</label>
                  <div class="input-group mb-3">
                      <input type="tel" class="form-control form-control-sm"
                          id="Aftermarket_1" name="Aftermarket_1" maxlength="10"
                          value={vehicalInput.Aftermarket_1} onChange={(event) => HandleInput(event )} />
                      <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                  </div>
              </div>
              <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                  <label class="form-label" for="Aftermarket_2">Aftermarket 2</label>
                  <div class="input-group mb-3">
                      <input type="tel" class="form-control form-control-sm"
                          id="Aftermarket_2" name="Aftermarket_2" maxlength="10"
                          value={vehicalInput.Aftermarket_2} onChange={(event) => HandleInput(event )} />
                      <span class="input-group-text"><i class="fa fa-dollar"></i></span>
                  </div>
              </div>
          </div>

          <div class="row">
              <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                  <label class="form-label" for="broker_fee">Broker Fee %</label>
                  <div class="input-group mb-3">
                      <input type="tel" class="form-control form-control-sm"
                          id="broker_fee_per" name="broker_fee_per" maxlength="10"
                          value={vehicalInput.broker_fee_per}  onChange={(event) => HandleInput(event )} />
                      <span class="input-group-text"> <i class="fa fa-percent"></i>
                      </span>
                  </div>
              </div>
              <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                  <label class="form-label" for="broker_fee">Broker Fee</label>
                  <div class="input-group mb-3">
                      <input type="tel" class="form-control form-control-sm uni_colr"
                          id="broker_fee" name="broker_fee" maxlength="10" value={vehicalInput.broker_fee} onChange={(event) => HandleInput(event )} />
                      <span class="input-group-text"> <i class="fa fa-dollar"></i> </span>
                  </div>
              </div>
              <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                  <div class="form-group form-outline">
                      <label class="form-label" for="financial_institution">Financial
                          Institution</label>
                      <select name="financial_institution" id="financial_institution"
                          class="form-control form-control-sm"  onChange={(event) => HandleInput(event )}>
                          <option value="-None-">-None-</option>
                          <option value="BMW Financial Services">BMW Financial Services
                          </option>
                          <option value="Canadian Dealer Lease Services">Canadian Dealer
                              Lease Services</option>
                          <option value="Carfinco">Carfinco</option>
                          <option value="Chrysler Credit">Chrysler Credit</option>
                          <option value="20,000 KG With Yellow Sticker">
                              20,000 KG With Yellow Sticker</option>
                          <option value="CWB National Leasing">CWB National Leasing
                          </option>
                          <option value="Donway Leasing">Donway Leasing</option>
                          <option value="East Metro Auto Leasing">East Metro Auto Leasing
                          </option>
                          <option value="FCA Financial">FCA Financial</option>
                          <option value="FinanciaLinx Corporation">FinanciaLinx
                              Corporation</option>
                          <option value="Ford Commercial Financing">Ford Commercial
                              Financing</option>
                          <option value="Ford Credit">Ford Credit</option>
                          <option value="Foss Leasing">Foss Leasing</option>
                          <option value="GMAC">GMAC</option>
                          <option value="Cash">Cash</option>
                          <option value="Hitachi">Hitachi</option>
                          <option value="Honda Finance">Honda Finance</option>
                          <option value="Hyundai Financial">Hyundai Financial</option>
                          <option value="Kennedy National Leasing">Kennedy National
                              Leasing</option>
                          <option value="LBC Capital Inc.">LBC Capital Inc.</option>
                          <option value="Leggatt Leasing">Leggatt Leasing</option>
                          <option value="Mazda Financial Services">Mazda Financial
                              Services</option>
                          <option value="Mercedes Financial Services">Mercedes Financial
                              Services</option>
                          <option value="New Roads Leasing">New Roads Leasing</option>
                          <option value="Nissan Finance">Nissan Finance</option>
                          <option value="Other">Other</option>
                          <option value="RBC Financial">RBC Financial</option>
                          <option value="RCAP Leasing">RCAP Leasing</option>
                          <option value="Royal Bank">Royal Bank</option>
                          <option value="Roynat Financial">Roynat Financial</option>
                          <option value="Scotiabank">Scotiabank</option>
                          <option value="TD Bank">TD Bank</option>
                          <option value="Toyota Credit">Toyota Credit</option>
                          <option value="VW Financial Services">VW Financial Services
                          </option>
                          <option value="Wells Fargo">Wells Fargo</option>
                      </select>
                  </div>
              </div>
              <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                  <div class="form-group form-outline">
                      <label class="form-label" for="gvwr_for_plates">GVWR for
                          Plates</label>
                      <select name="gvwr_for_plates" id="gvwr_for_plates"
                          class="form-control form-control-sm"  onChange={() => GVWRInput()} >
                          <option value="-None-">-None-</option>
                          <option value="10000 KG with Yellow Sticker (22,000 lbs)">
                              10000 KG with Yellow Sticker (22,000 lbs)</option>
                          <option value="11000 with Yellow Sticker (24,250 lbs)">11000
                              with Yellow Sticker (24,250 lbs)</option>
                          <option value="13181 KG with Yellow Sticker (29,000 lbs)">
                              13181 KG with Yellow Sticker (29,000 lbs)</option>
                          <option value="14000 KG Yellow Sticker">14000 KG Yellow Sticker
                          </option>
                          <option value="20000 KG With Yellow Sticker">20000 KG With
                              Yellow Sticker</option>
                          <option value="21500 KG with Yellow Sticker">21500 KG with
                              Yellow Sticker</option>
                          <option value="3000 KG">3000 KG</option>
                          <option value="3800 KG">3800 KG</option>
                          <option value="4500 KG NO Sticker">4500 KG NO Sticker</option>
                          <option value="4500 KG with Yellow Sticker">4500 KG with
                              Yellow Sticker</option>
                          <option value="53000 KG Heavy Truck and Pup">53000 KG Heavy
                              Truck and Pup</option>
                          <option value="6000 KG Yellow Sticker">6000 KG Yellow Sticker
                          </option>
                          <option value="9500 KG with Yellow Sticker">9500 KG with
                              Yellow Sticker</option>
                          <option value="GVWR on the NIVIS">GVWR on the NIVIS</option>
                          <option value="Maximum GCWR for the Truck">Maximum GCWR for the
                              Truck</option>
                      </select>
                  </div>
              </div>
              <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                  <label class="form-label" for="delivery_allowance">Delivery Fee</label>
                  <div class="input-group mb-3">
                      <input type="text" class="form-control form-control-sm"
                          id="delivery_fee" name="delivery_fee" maxlength="10"
                          value={vehicalInput.delivery_fee} onChange={(event) => HandleInput(event )} />
                      <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                  </div>
              </div>
              <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                  <div class="form-group form-outline">
                      <label class="form-label" for="broker_drp_dwn">How are the Broker
                          Fees Paid</label>
                      <select name="broker_drp_dwn" id="broker_drp_dwn"
                          class="form-control form-control-sm" onChange={(event) => HandleInput(event )}>
                          <option value="None">None</option>
                          <option value="Broker Fee in the Price">Broker Fee in the Price
                          </option>
                          <option value="Broker Fee Paid Up Front">Broker Fee Paid Up
                              Front</option>
                          <option value="No Broker Fee">No Broker Fee</option>
                      </select>
                  </div>
              </div>
              <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                  <label class="form-label" for="full_msrp">Full MSRP</label>
                  <div class="input-group mb-3">
                      <input type="text" class="form-control form-control-sm uni_colr"
                          id="full_msrp" name="full_msrp" maxlength="20" value={vehicalInput.full_msrp} disabled  onChange={(event) => HandleInput(event )} />
                      <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                  </div>
              </div>
              <div class="col-4 col-md-4 col-lg-4 col-xl-4">
                  <label class="form-label" for="Dealer_Cost">Dealer Cost</label>
                  <div class="input-group mb-3">
                      <input type="text" class="form-control form-control-sm uni_colr"
                          id="Dealer_Cost" name="Dealer_Cost" maxlength="20"  value={vehicalInput.Dealer_Cost} onChange={(event) => HandleInput(event )}  />
                      <span class="input-group-text"><i class="fa fa-dollar"></i> </span>
                  </div>
              </div>
              <div class="col-4 col-md-4 col-lg-4 col-xl-4" id="hideshowdiv">
                  <label class="form-label" for="fleet_mngr">Fleet Manager</label>
                  <div class="input-group mb-3">
                      <input type="text" class="form-control form-control-sm"
                          id="fleet_mngr" name="fleet_mngr" maxlength="20"  value={vehicalInput.fleet_mngr} onChange={(event) => HandleInput(event )} />
                  </div>
              </div>
          </div>
      </div>
    </form>
  )
}

export default Price