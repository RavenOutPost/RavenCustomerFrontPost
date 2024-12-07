export const FormPhone = ({data}) => 
      <div>
      <label htmlFor="name">{data.title} :</label>
      <input
          id={data.key}
          name={data.key}
          type="tel"
          // value={phone}
          // onChange={handlePhoneChange}
          pattern="(\+33|0)[1-9](\d{2}){4}"  // Exemple de validation pour un numéro français
          placeholder="Ex: +33 1 23 45 67 89"
        />
      {/* {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>} */}
    </div>

