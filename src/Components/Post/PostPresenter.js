import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-autosize-textarea";
import Avatar from "../Avatar";
import FatText from "../FatText";
import { FullHeart, EmptyHeart, Comment } from "../Icons";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
  user-select: none;
`;

const Header = styled.header`
  padding: 15px;
  display: flex;
  align-items: center;
`;

const UserColumn = styled.div`
  margin-left: 15px;
  display: flex;
  flex-direction: column;
`;

const Location = styled.span`
  font-size: 12px;
  margin-top: 5px;
`;

const Files = styled.div`
  position: relative;
  padding-bottom: 100%;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const File = styled.img`
  max-width: 100%;
  width: 100%;
  height: 600px;
  position: absolute;
  background-image: url(${(props) => props.src}});
  background-size: cover;
  background-position: center;
  opacity: ${(props) => (props.showing ? 1 : 0)};
  transition: 0.5s linear;
`;

const Textarea = styled(TextareaAutosize)`
  border: none;
  width: 100%;
  resize: none;
  margin-top: 10px;
  font-size: 14px;
  &:focus {
    outline: none;
  }
`;

const Meta = styled.div`
  padding: 15px;
`;

const Button = styled.span`
  cursor: pointer;
`;

const Buttons = styled.div`
  ${Button} {
    &:not(:last-child) {
      margin-right: 10px;
    }
  }
  margin-bottom: 10px;
`;

const Timestamp = styled.span`
  font-weight: 400;
  text-transform: uppercase;
  opacity: 0.4;
  display: block;
  font-size: 12px;
  margin-top: 10px;
  padding-bottom: 10px;
  border-bottom: ${(props) => props.theme.lightGreyColor} 0.3px solid;
`;

const PostPresenter = ({
  user: { username, avatar },
  location,
  files,
  isLiked,
  likeCount,
  createdAt,
  newComment,
  currentItem,
  toggleLike,
}) => (
  <Post>
    <Header>
      <Avatar url={avatar} />
      <UserColumn>
        <FatText text={username} />
        <Location>{location}</Location>
      </UserColumn>
    </Header>
    <Files>
      {files &&
        files.map((file, index) => (
          <File key={file.id} src={file.url} showing={index === currentItem} />
        ))}
    </Files>
    <Meta>
      <Buttons>
        <Button onClick={toggleLike}>
          {isLiked ? <FullHeart /> : <EmptyHeart />}
        </Button>
        <Button>
          <Comment />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
      <Textarea placeholder={"Add a comment..."} {...newComment} />
      <Timestamp>{createdAt}</Timestamp>
    </Meta>
  </Post>
);

export default PostPresenter;
