import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import FatText from "../../Components/FatText";
import Loader from "../../Components/Loader";
import UserCard from "../../Components/UserCard";

const Wrapper = styled.div`
  height: 50vh;
`;

const Section = styled.div`
  height: 50vh;
`;

const SearchPresenter = ({ loading, data, searchTerm }) => {
  console.log(data);
  if (loading) {
    return (
      <Wrapper>
        <Loader />
      </Wrapper>
    );
  } else if (data && data.searchUser && data.searchPost) {
    return (
      <Wrapper>
        <Section>
          {data.searchUser.length === 0 ? (
            <FatText text={"No Users Found"} />
          ) : (
            data.searchUser.map((user) => (
              <UserCard
                key={user.id}
                username={user.username}
                isFollowing={user.isFollowing}
                url={user.avatar}
                isMySelf={user.isMySelf}
              />
            ))
          )}
        </Section>
        <Section>
          {data.searchPost.length === 0 ? (
            <FatText text="No Posts Found" />
          ) : (
            data.searchPost.map((post) => null)
          )}
        </Section>
      </Wrapper>
    );
  } else {
    return <FatText text={"YEAH"} />;
  }
};

SearchPresenter.propTypes = {
  searchTerm: PropTypes.string,
  loading: PropTypes.bool,
};

export default SearchPresenter;
