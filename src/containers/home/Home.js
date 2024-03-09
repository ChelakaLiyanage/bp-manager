import { useEffect, useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";

import BlogCard from '../../components/blogs/blogCard/BlogCard';
import AddEditBlogModal from "../../components/blogs/addEditBlogModal/AddEditBlogModal";
import DeleteBlogModal from "../../components/blogs/deleteBlogModal/DeleteBlogModal";

import LocalStorageHelper from "../../helpers/LocalStorageHelper";


const Home = () => {
  const [showAddEditBlogModal, setShowAddEditBlogModal] = useState({ show: false, data: null, isEdit: false });
  const [showDeleteBlogModal, setShowDeleteBlogModal] = useState({ show: false, data: null });
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem(LocalStorageHelper.BLOG_DATA)) {
      setBlogData(JSON.parse(localStorage.getItem(LocalStorageHelper.BLOG_DATA)));
    }
  }, []);

  const handleAddEditBlog = (values) => {
    if(showAddEditBlogModal.isEdit) handleEditBlog(values);
    else handleAddBlog(values);
  };

  const handleAddBlog = (values) => {
    const newBlog = {
      id: blogData.length + 1,
      ...values
    }
    setBlogData([...blogData, newBlog]);
    localStorage.setItem(LocalStorageHelper.BLOG_DATA, JSON.stringify([...blogData, newBlog]));
    setShowAddEditBlogModal({ show: false, data: null, isEdit: false });
  };

  const handleEditBlog = (values) => {
    const updatedBlogData = blogData.map((blog) => {
      if(blog.id === showAddEditBlogModal.data.id) {
        return {
          id: blog.id,
          ...values
        }
      }
      return blog;
    });
    setBlogData(updatedBlogData);
    localStorage.setItem(LocalStorageHelper.BLOG_DATA, JSON.stringify(updatedBlogData));
    setShowAddEditBlogModal({ show: false, data: null, isEdit: false });
  };

  const handleDeleteBlog = () => { 
    const updatedBlogData = blogData.filter((blog) => blog.id !== showDeleteBlogModal.data.id);
    setBlogData(updatedBlogData);
    localStorage.setItem(LocalStorageHelper.BLOG_DATA, JSON.stringify(updatedBlogData));
    setShowDeleteBlogModal({ show: false, data: null });
  };


  return (
    <Container fluid>
      <Row>
        <Col xs={8}>
          <h1>Home</h1>
        </Col>
        <Col xs={4}>
          <Button variant="primary" onClick={() => setShowAddEditBlogModal({ show: true, data: null, isEdit: false })}>Add Blog</Button>
        </Col>
      </Row>
      {blogData.map((blog) => 
        <BlogCard 
          key={blog.id} 
          data={blog} 
          handleEditClick={(showModal) => setShowAddEditBlogModal(showModal)} 
          handleDeleteClick={(showModal) => setShowDeleteBlogModal(showModal)} 
        />
      )}
      
      <AddEditBlogModal
        show={showAddEditBlogModal.show}
        data={showAddEditBlogModal.data}
        isEdit={showAddEditBlogModal.isEdit}
        handleClose={() => setShowAddEditBlogModal({ show: false, data: null, isEdit: false })}
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
}

export default Home;