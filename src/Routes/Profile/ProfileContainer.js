import React from "react";
import styled from "styled-components";
import { useQuery } from "react-apollo-hooks";
import Loader from "../../Components/Loader";
import Avatar from "../../Components/Avatar";
import { GET_USER } from "./ProfileQueries";
import ProfilePresenter from "./ProfilePresenter";

const ProfileContainer = ({
  match: {
    params: { username },
  },
}) => {
  const { data, loading } = useQuery(GET_USER, {
    variables: { username },
  });
  return <ProfilePresenter loading={loading} data={data} />;
};

export default ProfileContainer;
