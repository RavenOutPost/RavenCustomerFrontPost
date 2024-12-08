import { useEffect, useState } from "react";

export const FormSelector = ({data, checkErr}) => {
  const [value, setValue] = useState(null); 

  useEffect(() => {
    setValue(localStorage.getItem(data.key))
  },[data.key])

  return (
        <div class='flex flex-col py-2'>
        <label htmlFor="name">{data.title}
        </label>
        {data.values?.map(e =>
           
        <div>
          <input
            class='mr-4'
            key={e}
            type="radio"
            name={e}
            value={e}
            checked={value === e}
            onChange={(_) => {
              setValue(e)
              localStorage.setItem(data.key, e)
            }}
          />
          <label>{e}</label>
        </div>
        )}
    </div>
  );
}

