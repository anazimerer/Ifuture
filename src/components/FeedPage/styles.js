import styled from "styled-components";

export const FeedPageContainer = styled.div`
  width: 100vw;
`;

export const TitleBarContainer = styled.div`
  width: 100vw;
  height: 4rem;
  display: flex;
  flex-flow: row;
  justify-content: center;
`;
export const Title = styled.div`
  width: 10.938rem;
  height: 2.75rem;
  display: flex;
  flex-flow: column;
  justify-content: center;
  text-align: center;
  margin-top: 1.25rem;
`;

export const Form = styled.input`
  width: 20.5rem;
  height: 3.5rem;
  border-radius: 2px;
  border: solid 1px #b8b8b8;
  margin-top: 0.5rem;
`;
export const InfoContainer = styled.div`
  display: flex;
  flex-flow: row;
`;

export const AddressError = styled.div`
  width: 100%;
  margin-top: 7rem;
  text-align: center;
  cursor: pointer;
  font-size: 1rem;
  background-color: #e8222e;
  border-radius: 2px;
  height: 2.5rem;
  padding-top: 0.5rem;
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;
