export const FormText= ({data}) =>
      <div>
      <label htmlFor="name">{data.title} :</label>
      <input
        type={data.type}
        id={data.key}
        name={data.key}
        // value={formik.values.name}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
      />
      {/* {formik.touched.name && formik.errors.name && <div>{formik.errors.name}</div>} */}
    </div>

