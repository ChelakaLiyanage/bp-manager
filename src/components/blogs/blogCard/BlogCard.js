import { Card, Button } from 'react-bootstrap';

import BloggerHelper from '../../../helpers/BloggerHelper';

const BlogCard = (props) => {
    const { title, author, description } = props.data;
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">{author}</Card.Subtitle>
                <Card.Text>
                    {description}
                </Card.Text>
                <Button variant="primary" onClick={() => props.handleEditClick({show: true, data: props.data, isEdit: true })}>{BloggerHelper.BLOG_CARD.EDIT}</Button>
                <Button variant="danger" onClick={() => props.handleDeleteClick({show: true, data: props.data })}>{BloggerHelper.BLOG_CARD.DELETE}</Button>
            </Card.Body>
        </Card>
    );
}

export default BlogCard;