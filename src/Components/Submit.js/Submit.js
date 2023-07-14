import React from 'react'
import { UpdateDataCRM } from "./UpdateData";
const Submit = (props) => {
  const UpdateData =(id)=>{

    UpdateDataCRM(id);
  }
  return (
    <>
    <form class="px-md-2" action="" method="POST">
        <div class="row">
            <div class="col-12 mt-2">
                <div class="text-center">
                    <input type="hidden" id="zoho_id" name="zoho_id" value=""/>
                    <input type="hidden" id="zoho_deal_name" name="zoho_deal_name" value=""/>
                    <input type="hidden" id="pic1" name="pic1" value=""/>
                    <input type="hidden" id="pic2" name="pic2" value=""/>
                    <input type="hidden" id="pic3" name="pic3" value=""/>
                    <input type="hidden" id="shipping_code" name="shipping_code" value="0"/>
                    <input type="button" class="btn btn-primary" Value="Submit"
                        id="updateBtn" onClick={()=>{UpdateData(props.CRMId)}}/>
                </div>
            </div>
        </div>
    </form>
    </>
  )
}

export default Submit