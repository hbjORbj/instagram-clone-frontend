import React from "react";
import styled from "styled-components";
import Avatar from "../Avatar";
import FatText from "../FatText";
import { FullHeart, EmptyHeart, Comment } from "../Icons";

const Post = styled.div`
  ${(props) => props.theme.whiteBox};
  width: 100%;
  max-width: 600px;
  margin-bottom: 25px;
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

const Files = styled.div``;

const File = styled.img`
  max-width: 100%;
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
  margin: 10px 0px;
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
      {files && files.map((file) => <File id={file.id} src={file.url} />)}
    </Files>
    <Meta>
      <Buttons>
        <Button>{isLiked ? <FullHeart /> : <EmptyHeart />}</Button>
        <Button>
          <Comment />
        </Button>
      </Buttons>
      <FatText text={likeCount === 1 ? "1 like" : `${likeCount} likes`} />
      <Timestamp>{createdAt}</Timestamp>
    </Meta>
  </Post>
);

export default PostPresenter;
