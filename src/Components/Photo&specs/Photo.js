import React from 'react'
import Sdata2 from "./Sdata2";
const ZOHO =  window.ZOHO;
const Photo = () => {
  function UploadAttahment(params) {
          // ...................Get CRM Data................................// 

    ZOHO.embeddedApp.on("PageLoad", async function (data) {
      const recordId = data.EntityId; 
      // console.log(`Record Id: ${recordId}`);
      var file1 = document.getElementById("myfile3").files[0];
      if (file1 != null) {
          var fileType = file1.type;
          var config = {
              "CONTENT_TYPE": "multipart",
              "PARTS": [{
                  "headers": {
                      "Content-Disposition": "file;"
                  },
                  "content": "__FILE__"
              }],
              "FILE": {
                  "fileParam": "content",
                  "file": file1
              }
          }
          ZOHO.CRM.API.uploadFile(config).then(function (data) {
              // console.log(data);  
              var file_details = data.data[0].details;
              var file_de_id = file_details.id;
              if (data.data[0].code == "SUCCESS") {
                  var file_details = data.data[0].details;
                  var file_de_id = file_details.id;
                  document.getElementById("pic3").value= file_de_id;

              }
              else {
                document.getElementById("pic3").value= "";
              }
          });

      }
        
      });
      /*
      * initializing the widget for Zoho CRM user 3.
      */
      ZOHO.embeddedApp.init();
  }

  return (
    <form className="px-md-2" action="" method="POST">
            <div id="dealinfo_sec">
                <h5 class="heading">Photos and Specs</h5>
                <div class="row">
    {
        Sdata2.map((val)=>{

        return(
        <div className="col-4 col-md-4 col-lg-4 col-xl-4">
            <div className="form-group form-outline">
                <label className="form-label" for={val.name}>{val.sname} </label>
                <input type={val.type} class="form-control form-control-sm"
                    id={val.id} name={val.name} maxlength="17" onChange={UploadAttahment}  />
            </div>
        </div>
        )
    })
    }

         
          </div>
       </div>
     </form>
  )
}

export default Photo