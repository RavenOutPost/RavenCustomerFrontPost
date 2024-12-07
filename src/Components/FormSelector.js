import { useState } from "react";

export const FormSelector = ({data}) => {
  const [value, setvalue] = useState('');  
  
  const handleChange = (event) => {
    setvalue(event.target.value);  
  };
  
  
  return (
    <div>
      <form>
        <div>
        <label htmlFor="name">{data.title} :</label>
        {data.values?.map(e =>
        <>
          <input
            type="radio"
            name={e}
            value={e}
            checked={value === e}
            onChange={handleChange}
          />
          <label>{e}</label>
        </>
        )}
        
        </div>
      </form>
      {/* {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>} */}
    </div>
  );
}

