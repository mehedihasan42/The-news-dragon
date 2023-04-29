import moment from 'moment/moment';
import React from 'react';
import { Card, Image } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaBookmark, FaShareAlt, FaEye, FaStar, FaStarHalf, FaRegStar } from 'react-icons/fa';
import Rating from 'react-rating';

const NewsCard = ({ news }) => {
  const { _id, title, details, image_url, author, total_view, rating } = news;
  return (
    <Card className="mb-4">
      <Card.Header className='d-flex align-items-center'>
        <Image src={author.img} width="50px" roundedCircle />
        <div className='ps-2 flex-grow-1'>
          <p className='mb-0'>{author?.name}</p>
          <p className='mt-0'><small>{moment(author.published_date).format('yyyy-MM-D')}</small></p>
        </div>
        <div className=''>
          <FaBookmark></FaBookmark>
          <FaShareAlt></FaShareAlt>
        </div>
      </Card.Header>
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Img variant="top" src={image_url} />
        <Card.Text>
          {details.length < 250 ? <>{details}</> :
            <>{details.slice(0, 250)}...<Link to={`/news/${_id}`}>Read More</Link></>
          }
        </Card.Text>
      </Card.Body>
      <Card.Footer className="text-muted d-flex">
        <div className='flex-grow-1'>
          <Rating
            placeholderRating={rating.number}
            emptySymbol={FaRegStar}
            placeholderSymbol={FaStarHalf}
            fullSymbol={FaStar}
          />
          <span>{rating.number}</span>

        </div>
        <div>
          <FaEye></FaEye>{total_view}
        </div>
      </Card.Footer>
    </Card>
  );
};

export default NewsCard;