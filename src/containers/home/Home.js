import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiPlus } from "@mdi/js";

import BlogCard from "../../components/blogs/blogCard/BlogCard";
import AddEditBlogModal from "../../components/blogs/addEditBlogModal/AddEditBlogModal";
import DeleteBlogModal from "../../components/blogs/deleteBlogModal/DeleteBlogModal";

import LocalStorageHelper from "../../helpers/LocalStorageHelper";

import "./Home.css";

const Home = () => {
  const [showAddEditBlogModal, setShowAddEditBlogModal] = useState({
    show: false,
    data: null,
    isEdit: false,
  });
  const [showDeleteBlogModal, setShowDeleteBlogModal] = useState({
    show: false,
    data: null,
  });
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem(LocalStorageHelper.BLOG_DATA)) {
      setBlogData(
        JSON.parse(localStorage.getItem(LocalStorageHelper.BLOG_DATA))
      );
    }
  }, []);

  const handleAddEditBlog = (values) => {
    if (showAddEditBlogModal.isEdit) handleEditBlog(values);
    else handleAddBlog(values);
  };

  const handleAddBlog = (values) => {
    const newBlog = {
      id: blogData.length + 1,
      ...values,
    };
    setBlogData([...blogData, newBlog]);

    localStorage.setItem(
      LocalStorageHelper.BLOG_DATA,
      JSON.stringify([...blogData, newBlog])
    );

    setShowAddEditBlogModal({ show: false, data: null, isEdit: false });
  };

  const handleEditBlog = (values) => {
    const updatedBlogData = blogData.map((blog) => {
      if (blog.id === showAddEditBlogModal.data.id) {
        return {
          id: blog.id,
          ...values,
        };
      }
      return blog;
    });
    setBlogData(updatedBlogData);
    localStorage.setItem(
      LocalStorageHelper.BLOG_DATA,
      JSON.stringify(updatedBlogData)
    );
    setShowAddEditBlogModal({ show: false, data: null, isEdit: false });
  };

  const handleDeleteBlog = () => {
    const updatedBlogData = blogData.filter(
      (blog) => blog.id !== showDeleteBlogModal.data.id
    );
    setBlogData(updatedBlogData);
    localStorage.setItem(
      LocalStorageHelper.BLOG_DATA,
      JSON.stringify(updatedBlogData)
    );
    setShowDeleteBlogModal({ show: false, data: null });
  };

  return (
    <Container className="p-4 home-container" fluid>
      <Row className="mb-3">
        <Col xs={8}>
          <h1>Welcome to Blogger</h1>
        </Col>
        <Col className="d-flex justify-content-end" xs={4}>
          <Button
            className="d-flex align-items-center"
            variant="primary"
            onClick={() =>
              setShowAddEditBlogModal({ show: true, data: null, isEdit: false })
            }
          >
            <Icon path={mdiPlus} size={1} />
            Add Blog
          </Button>
        </Col>
      </Row>
      <Row>
        {blogData.map((blog) => (
          <Col xs={3} className="mb-3">
            <BlogCard
              key={blog.id}
              data={blog}
              handleEditClick={(showModal) =>
                setShowAddEditBlogModal(showModal)
              }
              handleDeleteClick={(showModal) =>
                setShowDeleteBlogModal(showModal)
              }
            />
          </Col>
        ))}
      </Row>

      <AddEditBlogModal
        show={showAddEditBlogModal.show}
        data={showAddEditBlogModal.data}
        isEdit={showAddEditBlogModal.isEdit}
        handleClose={() =>
          setShowAddEditBlogModal({ show: false, data: null, isEdit: false })
        }
        handleSubmit={handleAddEditBlog}
      />

      <DeleteBlogModal
        show={showDeleteBlogModal.show}
        data={showDeleteBlogModal.data}
        handleClose={() => setShowDeleteBlogModal({ show: false, data: null })}
        handleSubmit={handleDeleteBlog}
      />
    </Container>
  );
};

export default Home;
