import { FormFile } from "./FormFile";
import { FormSelector } from "./FormSelector";
import { FormText } from "./FormText";
export const BuildForm = ({data, checkErr})=> 
<div class='flex flex-col justify-evenly'>
{data.map((e) => {
  switch (e.type) {
    case 'selector':
      return <FormSelector data={e} checkErr={checkErr}/>;
    case 'file':
      return <FormFile data={e} checkErr={checkErr}/>;
    default:
      return <FormText data={e} checkErr={checkErr}/>;
  }
})
}
</div>


