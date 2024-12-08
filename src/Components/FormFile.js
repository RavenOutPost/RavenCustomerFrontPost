import { useEffect, useState } from "react"

export const FormFile= ({data, checkErr}) =>{
  const [name, setName] = useState(null)


  useEffect(() => {
    const name = localStorage.getItem(`${data.key}-name`);
    if (name) {
      setName(name.name);
    } 
  },[data.key])

  useEffect(() => {
    console.log(checkErr)
  }, [checkErr])

  const convertFileToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = () => resolve(reader.result);
      reader.onerror = (error) => reject(error);
      reader.readAsDataURL(file);
    });
  };

  return ( 
  <div class='flex flex-col py-3'>
    <label class=''>{data.title}</label>
    {checkErr && !name && data.mandatory ? <div class='text-red-500 text-xs'>Champs obligatoire</div> : null}

    <input
      class=' hidden'
      type='file'
      id={`file-${data.key}`}
      name='file'
      onChange={async (event) => {
        const file = event.target.files[0];
        const base64 = await convertFileToBase64(file);
        console.log(file)
        localStorage.setItem(data.key, base64);
        localStorage.setItem(`${data.key}-name`, file.name);
        setName(file.name)
      }}
      
      />
    <label  for={`file-${data.key}`} class={`border-b-2 border-solid border-${checkErr && !name ? 'red-100' : 'red-400'} w-64 hover:bg-slate-50 rounded-md p-2 bg-transparent`}>{name ?? 'Choisir un fichier'}</label>

  </div>
    )}
    
    