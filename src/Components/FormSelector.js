import { useEffect, useState } from "react";

export const FormSelector = ({data, checkErr, index}) => {
  const [value, setValue] = useState(null); 

  useEffect(() => {
    setValue(localStorage.getItem(data.key))
  },[data.key])

  return (
        <div class='flex flex-col py-2'>
        <label htmlFor="name" class='font-bold'>{data.title}</label>
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
              const key = index != null ? `${data.key}-${index}` : data.key
              setValue(e)
              localStorage.setItem(key, e)
            }}
          />
          <label>{e}</label>
        </div>
        )}
    </div>
  );
}

