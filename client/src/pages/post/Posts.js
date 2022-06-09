import React, { useState, useEffect } from 'react';
import PostsPageUl from '../../components/Ul';
import axios from 'axios';

const Posts = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:8080/posts/boards')
      .then((res) => setPost(res.data.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <h1 className='postsTitle'>전체 보기</h1>
      <PostsPageUl post={post}></PostsPageUl>
    </>
  );
};

export default Posts;

// ! 220606 새로 작성한 코드 작동되면 아래 전부 지워도 됨
// import React, { useState } from 'react';
// import DummyPosts from '../../lib/dummypost';
// import Contents from '../../components/Contents';
// import styled from 'styled-components';
// import { Link } from 'react-router-dom';
// import axios from 'axios';

// const Posts = () => {
//   // const [isFiltered, setIsFiltered] = useState(false);
//   const [posts, setPosts] = useState(DummyPosts);
//   // const [filteredPosts, setFilteredPosts] = useState(DummyPosts);

//   // axios
//   //   .get(
//   //     `http://localhost:8080/posts/write`,
//   //     {
//   //       title: newPost.title,
//   //       content: newPost.content,
//   //       image: newPost.image,
//   //     },
//   //     {
//   //       headers: { authorization: `Bearer ${localStorage.getItem('user')}` },
//   //       withCredentials: true,
//   //     }
//   //   )
//   //   .then((res) => console.log(res));

//   const PostsRenderer = (el, idx) => {
//     return <Contents key={idx} el={el} />;
//   };

//   return (
//     <>
//       <Link to='/new'>
//         <button>글작성</button>
//       </Link>
//       <PostsPageUl className='posts'>{posts.map(PostsRenderer)}</PostsPageUl>
//     </>
//   );
// };

// export default Posts;

// const PostsPageUl = styled.ul`
//   background-color: skyblue;
//   display: grid;
//   grid-template-columns: repeat(auto-fill, minmax(20rem, 1fr));
//   justify-items: center;
//   grid-column-gap: 4%;
//   grid-row-gap: 2%;
//   width: 100%;
//   height: max-content;
// `;
