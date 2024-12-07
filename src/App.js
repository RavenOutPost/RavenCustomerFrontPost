import React from 'react';
import { useFormik } from 'formik';
import context from './data/context.json'
import { BuildForm } from './Components/BuildForm';

function App() {
  const formik = useFormik({
    onSubmit: async (values) => {
      const formData = new FormData();
      formData.append('name', values.name);
      formData.append('email', values.email);
      formData.append('date', values.date);
      formData.append('file', values.file);

      console.log(formData)
      let res = await fetch('https://9793-85-169-182-214.ngrok-free.app/addUser', {
        method: 'POST',
        body: formData,
        headers: {
          'ngrok-skip-browser-warning': 'true',
          // 'Content-Type': 'multipart/form-data',
        },
      }).then((response) => response.json());
      console.log("res => ", res)
    },
  });

  return (
    <div className="App">
      <h1>Formulaire de Rendez-vous</h1>
      <form 
      // onSubmit={formik.handleSubmit}
      >
        <BuildForm data={{context}}/>
 
       
   
        {/* <div>
          <label htmlFor="file">Fichier :</label>
          <input
            type="file"
            id="file"
            name="file"
            onChange={(event) => {
              formik.setFieldValue('file', event.currentTarget.files[0]);
            }}
          />
          {formik.touched.file && formik.errors.file && <div>{formik.errors.file}</div>}
        </div> */}
        {/* <div>
          <button type="submit">Soumettre</button>
        </div> */}
      </form>
    </div>
  );
}

export default App;
