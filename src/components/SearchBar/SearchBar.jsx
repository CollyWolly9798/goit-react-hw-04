import { Formik, Form, Field } from 'formik';
export default function SearchBar({ onSubmit }) {
  return (
    <header>
      <Formik
        initialValues={{
          topic: '',
        }}
        onSubmit={(values, actions) => {
          onSubmit(values.topic);
          actions.resetForm();
        }}
      >
        <Form>
          <Field type='text' placeholder='Search images and photos' name='topic' />
          <button type='submit' onClick={onSubmit}>
            Search
          </button>
        </Form>
      </Formik>
    </header>
  );
}
