import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import Avatar from "./Avatar";
import FatText from "./FatText";
import Button from "./Button";
import { Link } from "react-router-dom";

const Card = styled.div`
  display: flex;
  ${(props) => props.theme.whiteBox};
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const EAvatar = styled(Avatar)`
  margin-bottom: 15px;
`;

const ELink = styled(Link)`
  color: inherit;
  margin-bottom: 10px;
`;

const UserCard = ({ url, username, isMySelf, isFollowing }) => (
  <Card>
    <EAvatar url={url} size={"md"} />
    <ELink to={`/${username}`}>
      <FatText text={username} />
    </ELink>
    {!isMySelf && <Button text={isFollowing ? "Unfollow" : "Follow"} />}
  </Card>
);

UserCard.propTypes = {
  url: PropTypes.string,
  username: PropTypes.string.isRequired,
  isMySelf: PropTypes.bool.isRequired,
  isFollowing: PropTypes.bool.isRequired,
};

export default UserCard;
