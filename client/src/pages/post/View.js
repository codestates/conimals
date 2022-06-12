import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

/**
 * - 각 고유의 id값을 url값에 더해 /view/30 이런식으로 끝나도록 할 것
 * - 포스트페이지에서 글 클릭하면 해당 id값에 해당하는 글을
 *   서버에서 받아와서 제목, 내용, 사진을 보여줌
 * - 해당 글 작성자는 수정 및 삭제 가능
 *   (글이 삭제가 되면 다른 글의 id값이 변경되면 안됨)
 * - [Nightmare??]만약 조회수 기능을 추가할 경우, 조회수 값을 저장할 데이터가 필요함
 * - 조회수 중복 체크 막기도 구현하면 좋음 (쿠키 적용해야 한다고함)
 */

const View = () => {
  const [selectedPost, setSelectedPost] = useState('');
  const { id } = useParams();

  const getDetail = async () => {
    const json = await (
      await fetch(`http://localhost:8080/posts/view/${id}`)
    ).json();
    setSelectedPost(json.data[0]);
  };

  useEffect(() => {
    getDetail();
  }, []);

  return (
    <>
      <div className='viewSection'>
        <h1>게시글 보기</h1>
        <div className='viewWrap'>
          {selectedPost ? (
            <>
              <div className='postId'>
                <div className='viewPostId'>게시글 번호</div>
                <div className='viewId'>{selectedPost.id}</div>
              </div>
              <div className='writer'>
                <div className='postUsername'>작성자</div>
                <div className='viewWriter'>{selectedPost.username}</div>
              </div>
              <div className='postTitle'>
                <div className='viewTitle'>제목</div>
                <div className='viewTitle'>{selectedPost.title}</div>
              </div>
              <div className='postContent'>
                <div className='viewContent'>내용</div>
                <div className='viewContent'>{selectedPost.content}</div>
              </div>
              <div className='postImage'>
                <div className='viewImage'>사진</div>
                <img className='viewImage' src={selectedPost.image} />
              </div>
            </>
          ) : (
            '해당 게시글을 찾을 수 없습니다'
          )}
        </div>
      </div>
    </>
  );
};

export default View;
