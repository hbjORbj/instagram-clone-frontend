import React from "react";
import Button from "../Button";

const FollowButtonPresenter = ({ amIFollowing, onClick }) => (
  <Button text={amIFollowing ? "Unfollow" : "Follow"} onClick={onClick} />
);

export default FollowButtonPresenter;
