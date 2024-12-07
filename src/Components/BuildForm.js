import { FormDate } from "./FormDate";
import { FormEmail } from "./FormEmail";
import { FormPhone } from "./FormPhone";
import { FormSelector } from "./FormSelector";
import { FormText } from "./FormText";
export const BuildForm = ({data})=> 
  
<div>
{data.context.map((e) => {
  
  switch (e.type) {
    case 'text':
      return <FormText data={e}/>;
    case 'date':
      return <FormDate data={e}/>;
    case 'phone':
      return <FormPhone data={e}/>;
    case 'email':
      return <FormEmail data={e}/>;
    case 'selector':
      return <FormSelector data={e}/>;
    default:
      return <p>{e.type} : {e.title}</p>;
  }
})
}
</div>


