import { useEffect, useState } from "react"

export const FormText= ({data, checkErr, index}) =>{
  const [value, setValue] = useState('')


  useEffect(() => {
    setValue(localStorage.getItem(data.key))
  },[data.key])


  return ( 
  <div class='flex flex-col py-3'>
    <label  class='font-bold'>{data.title}</label>
    {checkErr && !value && data.mandatory ? <div class='text-red-500 text-xs'>Champs obligatoire</div> : null}

    <input
      class={`border-b-2 border-solid border-${checkErr && !value ? 'red-100' : 'red-400'} w-64 hover:bg-slate-50 rounded-md p-2 bg-transparent`}
      type={data.type}
      id={data.key}
      name={data.key}
      value={value}
      onChange={(event) => {
        const key = index != null ? `${data.key}-${index}` : data.key
        setValue(event.target.value)
        localStorage.setItem(key, event.target.value)
      }}
      
      />
  </div>
    )}
    
    