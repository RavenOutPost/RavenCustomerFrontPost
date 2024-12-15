import { FormDispo } from "./FormDispo";
import { FormFile } from "./FormFile";
import { FormSelector } from "./FormSelector";
import { FormText } from "./FormText";
export const BuildForm = ({data, checkErr, index})=> 
<div class='flex flex-col justify-evenly'>
  {
    index != null  ? <div class='text-3xl bold pt-5'>{index+1}</div> : null
  }
  
  {data.map((e) => {
    switch (e.type) {
      case 'selector':
        return <FormSelector data={e} checkErr={checkErr} index={index} />;
      case 'file':
        return <FormFile data={e} checkErr={checkErr} index={index} />;
      case 'dispo' : 
      return <FormDispo data={e} checkErr={checkErr} index={index} />;
      default:
        return <FormText data={e} checkErr={checkErr} index={index} />;
    }
  })
  }
  </div>


