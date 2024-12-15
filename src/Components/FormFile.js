import { useEffect, useState } from "react"

export const FormFile= ({data, checkErr, index}) =>{
  const [name, setName] = useState(null)
  const key = index != null ? `${data.key}-${index}` : data.key

  useEffect(() => {

    const name = localStorage.getItem(`${key}-name`);
    if (name) {
      setName(name.name);
    } 
  },[data.key, key])



  return ( 
  <div class='flex flex-col py-3'>
    <label class='font-bold'>{data.title}</label>
    {checkErr && !name && data.mandatory ? <div class='text-red-500 text-xs'>Champs obligatoire</div> : null}

    <input
      class='hidden'
      type='file'
      id={`file-${key}`}
      name='file'
      
      onChange={async (event) => {
        const file = event.target.files[0];

        localStorage.setItem(key, file.name);
        setName(file.name)
      }}
      
      />
    <label  htmlFor={`file-${key}`} class={`border-b-2 border-solid border-${checkErr && !name ? 'red-100' : 'red-400'} w-64 hover:bg-slate-50 rounded-md p-2 bg-transparent`}>{name ?? 'Choisir un fichier'}</label>

  </div>
    )}
    
    