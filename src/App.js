import React, { useEffect, useState } from 'react';
import { useFormik } from 'formik';
import context from './data/context.json'
import projectData from './data/project.json'
import flashData from './data/flash.json'
import { BuildForm } from './Components/BuildForm';

const App = () => {
  const [flash, setFlash] = useState([])
  const [btn, setBtn] = useState(true)
  const [project, setProject] = useState([])
  const [checkErr, setcheckErr] = useState(false)

useEffect(() => flash.length < 3 && project.length < 3 ? setBtn(true) : setBtn(false), [project, flash])

  const formik = useFormik({
    initialValues: {},
    onSubmit: async (_) => {
      setcheckErr(true)
      let err = false
      const formData = new FormData();

      context.forEach(e => {
        let item = localStorage.getItem(e.key)
        if (e.type === 'file') {
          let fileInput = document.getElementById(`file-${e.key}`)
          item = fileInput?.files[0]
        }
        if (!item && e.mandatory) {
          err = true
        }
      
        if (item) {
          formData.append(e.key, item)
        }
      })
      for (let i = 0; i < flash.length; i++) {
        flashData.forEach(e => {
          let key = `${e.key}-${i}`
          let item = localStorage.getItem(key)
          if (e.type === 'file') {
            let fileInput = document.getElementById(`file-${key}`)
            item = fileInput?.files[0]
          }
          if (!item && e.mandatory) {
            err = true
          }
        
          if (item) {
            formData.append(key, item)
          }
        })
      }
      for (let i = 0; i < project.length; i++) {
        projectData.forEach(e => {
          let key = `${e.key}-${i}`
          let item = localStorage.getItem(key)
          if (e.type === 'file') {
            let fileInput = document.getElementById(`file-${key}`)
            item = fileInput?.files[0]
          }
          if (!item && e.mandatory) {
            err = true
          }
        
          if (item) {
            formData.append(key, item)
          }
        })
      }
      if (err) {
        return
      }
      await fetch('https://8418-85-169-182-214.ngrok-free.app/user', {
        method: 'POST',
        body: formData,
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      }).then((response) => response.json());
    },
  });

  return (
    <div class="h-screen overflow-hidden p-4 bg-cover scroll-smooth bg-pink-50 bg-opacity-90">
      <div class='bg-white max-w-2xl m-auto p-8 rounded-md shadow-md bg-opacity-80 overflow-scroll h-full'>
        <div class='text-3xl bold'>Formulaire de Rendez-vous</div>
        <form onSubmit={formik.handleSubmit}>
          <BuildForm data={context} checkErr={checkErr}/>
          {project}
          {flash}
          {[...project].lenght}
         { 
         btn ? <>
          <span  class='font-bold'>
            Ajouter : 
            </span> 
            <div class=' flex flex-row pb-4 gap-4'> 
              <>
                <button type='button' disabled={flash.length !== 0} class='w-full p-2 rounded-md shadow-sm shadow-slate-400 hover:bg-slate-50 disabled:shadow-inner' onClick={() => setProject([...project,<BuildForm data={projectData} checkErr={checkErr} index={project.length}/> ])}>Un projet</button>
              </>
              <>
                <button type='button' disabled={project.length !== 0} class=' w-full  p-2 rounded-md shadow-sm shadow-slate-400 hover:bg-slate-50 disabled:shadow-inner' onClick={() => setFlash([...flash,<BuildForm data={flashData} checkErr={checkErr} index={flash.length}/> ])}>Un Flash</button>
              </>
            </div>
          </> :  null
          }
          <button class='mt-12 w-full p-2 rounded-md shadow-sm shadow-slate-400 hover:bg-slate-50' type="submit">Valider</button>
        </form>
      </div>
    </div>



  );
}

export default App;
