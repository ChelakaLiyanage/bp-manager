import { useEffect, useState } from "react";
import { Container, Row, Col, Button} from "react-bootstrap";

import BlogCard from '../../components/blogs/blogCard/BlogCard';
import AddEditBlogModal from "../../components/blogs/addEditBlogModal/AddEditBlogModal";

import LocalStorageHelper from "../../helpers/LocalStorageHelper";


const Home = () => {
  const [showAddEditBlogModal, setShowAddEditBlogModal] = useState({ show: false, data: null, isEdit: false});
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    if (localStorage.getItem(LocalStorageHelper.BLOG_DATA)) {
      setBlogData(JSON.parse(localStorage.getItem(LocalStorageHelper.BLOG_DATA)));
    }
  }, []);



  return (
    <Container fluid>
      <Row>
        <Col xs={8}>
          <h1>Home</h1>
        </Col>
        <Col xs={4}>
          <Button variant="primary" onClick={() => setShowAddEditBlogModal({ show: true, data: null, isEdit:false })}>Add Blog</Button>
        </Col>
      </Row>
      {blogData.map((blog) => <BlogCard key={blog.id} data={blog} handleEditClick={(showModal) => setShowAddEditBlogModal(showModal)} />)}
      <AddEditBlogModal
        show={showAddEditBlogModal.show}
        data={showAddEditBlogModal.data}
        isEdit={showAddEditBlogModal.isEdit}
        handleClose={() => setShowAddEditBlogModal({ show: false, data: null, isEdit: false})} 
        handleSubmit={(values) => console.log(values)}
      />
    </Container>
  );
}

export default Home;