import { useEffect, useState } from "react"

export const FormDispo= ({data, checkErr, index}) =>{
  const [selected, setSelected] = useState([])


  useEffect(() => {
    const name = localStorage.getItem(`${data.key}-name`);
    if (name) {
      setSelected(name);
    } 
  },[data.key])

  const handleClick = (indexs) => indexs.forEach(index => {
    setSelected((old) => {
      if (selected.includes(index)) {
        old = old.filter((e) => {
          return e !== index
        })
      }
      else {
        old = [...old, index]
      }
      localStorage.setItem(data.key, old);
      return old
    })
  });
   


  return ( 
  <div class='flex flex-col py-2'>
    <label  class='font-bold'>{data.title}</label>
    {checkErr && !selected && data.mandatory ? <div class='text-red-500 text-xs'>Champs obligatoire</div> : null}
    <div class='w-full flex justify-evenly'>
      <span class='w-1/3 text-center'>Lundi</span>
      <span class='w-1/3 text-center'>Mardi</span>
      <span class='w-1/3 text-center'>Mercredi</span>
      <span class='w-1/3 text-center'>Jeudi</span>
      <span class='w-1/3 text-center'>Vendredi</span>
      <span class='w-1/3 text-center'>Samedi</span>
      <span class='w-1/3 text-center'>Dimanche</span>
    </div>
    <div class='h-0.5 w-full bg-pink-200 my-2'/>
    <div class='w-full flex justify-evenly gap-2'>
      <button type='button' onClick={(e) => handleClick([0])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(0) ? 'bg-red-200' : null}`}>Matin</button>
      <button type='button' onClick={(e) => handleClick([1])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(1) ? 'bg-red-200' : null}`}>Matin</button>
      <button type='button' onClick={(e) => handleClick([2])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(2) ? 'bg-red-200' : null}`}>Matin</button>
      <button type='button' onClick={(e) => handleClick([3])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(3) ? 'bg-red-200' : null}`}>Matin</button>
      <button type='button' onClick={(e) => handleClick([4])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(4) ? 'bg-red-200' : null}`}>Matin</button>
      <button type='button' onClick={(e) => handleClick([5])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(5) ? 'bg-red-200' : null}`}>Matin</button>
      <button type='button' onClick={(e) => handleClick([6])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(6) ? 'bg-red-200' : null}`}>Matin</button>
    </div>
    
    <div class='w-full flex justify-evenly pt-4 gap-2'>
      <button type='button' onClick={(e) => handleClick([7])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(7) ? 'bg-red-200' : null}`}>Après Midi</button>
      <button type='button' onClick={(e) => handleClick([8])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(8) ? 'bg-red-200' : null}`}>Après Midi</button>
      <button type='button' onClick={(e) => handleClick([9])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(9) ? 'bg-red-200' : null}`}>Après Midi</button>
      <button type='button' onClick={(e) => handleClick([10])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(10) ? 'bg-red-200' : null}`}>Après Midi</button>
      <button type='button' onClick={(e) => handleClick([11])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(11) ? 'bg-red-200' : null}`}>Après Midi</button>
      <button type='button' onClick={(e) => handleClick([12])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(12) ? 'bg-red-200' : null}`}>Après Midi</button>
      <button type='button' onClick={(e) => handleClick([13])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm ${selected.includes(13) ? 'bg-red-200' : null}`}>Après Midi</button>
    </div>
    <div class='w-full flex justify-evenly pt-4 gap-2'>
      <button type='button' onClick={(e) => handleClick([0,7])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm `}>Journée Complète</button>
      <button type='button' onClick={(e) => handleClick([1,8])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm `}>Journée Complète</button>
      <button type='button' onClick={(e) => handleClick([2,9])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm `}>Journée Complète</button>
      <button type='button' onClick={(e) => handleClick([3,10])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm `}>Journée Complète</button>
      <button type='button' onClick={(e) => handleClick([4,11])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm `}>Journée Complète</button>
      <button type='button' onClick={(e) => handleClick([5,12])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm `}>Journée Complète</button>
      <button type='button' onClick={(e) => handleClick([6,13])} class={`w-1/3 text-center rounded-md hover:bg-slate-100 shadow-sm `}>Journée Complète</button>
    </div>
  </div>
    )}
    
    