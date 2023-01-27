import "./singlePost.css";

export const SinglePost = () => {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          src="https://res.cloudinary.com/dq49b0ddj/image/upload/v1674736582/3015346_weofe8.jpg"
          alt=""
          className="singlePostImg"
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <strong>Achike</strong>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDescription">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          veritatis voluptate eligendi quasi maxime suscipit, explicabo quod
          ipsa, doloremque ut fuga repudiandae quae fugit. Exercitationem
          nostrum excepturi fugiat voluptate veniam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatibus vel soluta atque?
          Accusantium, dignissimos iste earum non, harum repellendus ut eveniet
          nesciunt aperiam id distinctio facilis minima expedita optio
          similique! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa explicabo vero ducimus, illo delectus aperiam id? Perferendis,
          repellat debitis eligendi excepturi ea voluptatibus maxime corrupti
          sint voluptas maiores alias voluptatem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          veritatis voluptate eligendi quasi maxime suscipit, explicabo quod
          ipsa, doloremque ut fuga repudiandae quae fugit. Exercitationem
          nostrum excepturi fugiat voluptate veniam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatibus vel soluta atque?
          Accusantium, dignissimos iste earum non, harum repellendus ut eveniet
          nesciunt aperiam id distinctio facilis minima expedita optio
          similique! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa explicabo vero ducimus, illo delectus aperiam id? Perferendis,
          repellat debitis eligendi excepturi ea voluptatibus maxime corrupti
          sint voluptas maiores alias voluptatem.
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          veritatis voluptate eligendi quasi maxime suscipit, explicabo quod
          ipsa, doloremque ut fuga repudiandae quae fugit. Exercitationem
          nostrum excepturi fugiat voluptate veniam! Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Voluptatibus vel soluta atque?
          Accusantium, dignissimos iste earum non, harum repellendus ut eveniet
          nesciunt aperiam id distinctio facilis minima expedita optio
          similique! Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Ipsa explicabo vero ducimus, illo delectus aperiam id? Perferendis,
          repellat debitis eligendi excepturi ea voluptatibus maxime corrupti
          sint voluptas maiores alias voluptatem.
        </p>
      </div>
    </div>
  );
};
