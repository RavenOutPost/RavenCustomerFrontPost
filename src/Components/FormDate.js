export const FormDate = ({data}) => 
      <div>
      <label htmlFor="date">{data.title} :</label>
      <input
        type="date"
        id={data.key}
        name={data.key}
        // value={formik.values.date}
        // onChange={formik.handleChange}
        // onBlur={formik.handleBlur}
      />
      {/* {formik.touched.date && formik.errors.date && <div>{formik.errors.date}</div>} */}
    </div>

