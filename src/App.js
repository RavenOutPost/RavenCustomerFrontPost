import React, { useState } from 'react';
import { useFormik } from 'formik';
import context from './data/context.json'
import project from './data/project.json'
import flash from './data/flash.json'
import { BuildForm } from './Components/BuildForm';

const App = () => {
  const [type, setType] = useState(null)
  const [checkErr, setcheckErr] = useState(false)

  const getpartDisplay = () => {
    switch (type) {
      case 1: return  <BuildForm data={project}/>
      case 0 :  return   <BuildForm data={flash}/>
      default : return  <div class=' flex flex-row pb-4 gap-4'> 
      <>
      <button class='w-full p-2 rounded-md shadow-sm shadow-slate-400 hover:bg-slate-50' onClick={() => setType(1)}>Un projet</button>
    </>
    <>
      <button class=' w-full  p-2 rounded-md shadow-sm shadow-slate-400 hover:bg-slate-50' onClick={() => setType(0)}>Un Flash</button>
    </>
    </div>
    }
  }

  const retrieveFile = (base64File) => {
    const byteString = atob(base64File.split(',')[1]); 
    const mimeType = base64File.split(',')[0].match(/:(.*?);/)[1]; 
    const arrayBuffer = new Uint8Array(byteString.length);

    for (let i = 0; i < byteString.length; i++) {
      arrayBuffer[i] = byteString.charCodeAt(i);
    }

    return new Blob([arrayBuffer], { type: mimeType });
  };

  const formik = useFormik({
    initialValues: {},
    onSubmit: async (_) => {
      setcheckErr(true)
      let err = false
      const formData = new FormData();

      [...context, ...flash, ...project].forEach(e => {
        let item = localStorage.getItem(e.key)
        if (!item && e.mandatory) {
          err = true
        }
        if (e.key === 'file') {
          item = retrieveFile(item)
        }
        if (item) {
          formData.append(e.key, item)
        }
      })
      formData.entries().forEach(e => console.log(e));
      if (err) {
        return
      }
      localStorage.clear()
      let res = await fetch('https://9793-85-169-182-214.ngrok-free.app/addUser', {
        method: 'POST',
        body: formData,
        headers: {
          'ngrok-skip-browser-warning': 'true',
        },
      }).then((response) => response.json());
      console.log("res => ", res)
    },
  });

  return (
    <div class="h-screen overflow-hidden p-4 bg-cover scroll-smooth bg-pink-50 bg-opacity-90">
      <div class='bg-white max-w-2xl m-auto p-8 rounded-md shadow-md bg-opacity-80 overflow-scroll h-full'>
        <div class='text-3xl bold'>Formulaire de Rendez-vous</div>
        <form onSubmit={formik.handleSubmit}>
          <BuildForm data={context} checkErr={checkErr}/>
          {getpartDisplay()}
        { type != null ? <div>
          <button class='mt-12 w-full p-2 rounded-md shadow-sm shadow-slate-400 hover:bg-slate-50' onClick={() =>{ localStorage.clear()
            window.location.reload()
          }}>Supprimer le formulaire </button>
          <button class='mt-12 w-full p-2 rounded-md shadow-sm shadow-slate-400 hover:bg-slate-50' type="submit">Valider</button>
          </div>: null}
        </form>
      </div>
    </div>



  );
}

export default App;
