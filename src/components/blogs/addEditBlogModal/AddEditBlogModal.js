import { Button, Modal, Form } from "react-bootstrap";
import * as yup from "yup";
import { Formik } from "formik";
import BloggerHelper from "../../../helpers/BloggerHelper";

const AddEditBlogModal = (props) => {
  const { show, data, isEdit, handleClose, handleSubmit } = props;
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {isEdit
            ? BloggerHelper.ADD_EDIT_BLOG_MODAL.EDIT_BLOG_MODAL_TITLE
            : BloggerHelper.ADD_EDIT_BLOG_MODAL.ADD_BLOG_MODAL_TITLE}
        </Modal.Title>
      </Modal.Header>
      <Formik
        enableReinitialize
        initialValues={
          data
            ? {
                title: data.title,
                author: data.author,
                description: data.description,
              }
            : { title: "", author: "", description: "" }
        }
        validationSchema={yup.object().shape({
          title: yup.string().required("Title is required"),
          author: yup.string().required("Author is required"),
          description: yup.string().required("Description is required"),
        })}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ handleSubmit, handleChange, values, errors, isValid, dirty }) => (
          <Form onSubmit={handleSubmit}>
            <Modal.Body>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter title"
                  name="title"
                  value={values.title}
                  onChange={handleChange}
                />
                {errors.title && (
                  <Form.Text className="text-danger">{errors.title}</Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Author</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter author"
                  name="author"
                  value={values.author}
                  onChange={handleChange}
                />
                {errors.author && (
                  <Form.Text className="text-danger">{errors.author}</Form.Text>
                )}
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  as="textarea"
                  placeholder="Enter description"
                  name="description"
                  value={values.description}
                  onChange={handleChange}
                />
                {errors.description && (
                  <Form.Text className="text-danger">
                    {errors.description}
                  </Form.Text>
                )}
              </Form.Group>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={handleClose}>
                Close
              </Button>
              <Button
                variant="primary"
                type="submit"
                disabled={!isValid || !dirty}
              >
                {isEdit
                  ? BloggerHelper.ADD_EDIT_BLOG_MODAL.SUBMIT.UPDATE
                  : BloggerHelper.ADD_EDIT_BLOG_MODAL.SUBMIT.ADD}
              </Button>
            </Modal.Footer>
          </Form>
        )}
      </Formik>
    </Modal>
  );
};

export default AddEditBlogModal;
