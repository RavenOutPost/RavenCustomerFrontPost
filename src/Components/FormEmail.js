export const FormEmail = ({data}) =>
      <div>
      <label htmlFor="email">{data.title} :</label>
      <input
        type="email"
        id={data.key}
        name={data.key}
        // value={formik.values.email}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
      />
      {/* {formik.touched.email && formik.errors.email && <div>{formik.errors.email}</div>} */}
    </div>

