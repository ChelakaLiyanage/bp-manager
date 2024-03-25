import { Card, Button, Row, Col } from "react-bootstrap";

import BloggerHelper from "../../../helpers/BloggerHelper";

import "./BlogCard.css";

const BlogCard = (props) => {
  const { title, author, description } = props.data;
  return (
    <Card className="blog-card">
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
        <Card.Text>{description}</Card.Text>
        <Row>
          <Col className="d-flex justify-content-end" xs={12}>
            <Button
              variant="primary"
              onClick={() =>
                props.handleEditClick({
                  show: true,
                  data: props.data,
                  isEdit: true,
                })
              }
            >
              {BloggerHelper.BLOG_CARD.EDIT}
            </Button>
            <Button
              className="ms-2"
              variant="danger"
              onClick={() =>
                props.handleDeleteClick({ show: true, data: props.data })
              }
            >
              {BloggerHelper.BLOG_CARD.DELETE}
            </Button>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default BlogCard;
