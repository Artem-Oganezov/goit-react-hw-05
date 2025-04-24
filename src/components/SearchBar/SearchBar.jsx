import { Form, Field, Formik } from "formik";

const SearchBar = ({ dataMovie }) => {
  const initialValues = {
    query: "",
  };

  const handleSubmit = (values, options) => {
    dataMovie(values.query.trim());
    options.resetForm();
  };

  return (
    <div>
      <Formik onSubmit={handleSubmit} initialValues={initialValues}>
        <Form>
          <Field name="query" placeholder="Search movies..." autoFocus />
          <button type="submit">Search</button>
        </Form>
      </Formik>
    </div>
  );
};

export default SearchBar;
