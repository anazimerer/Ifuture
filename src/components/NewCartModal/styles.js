import styled from "styled-components";

export const ModalBody = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 90%;
  max-width: 400px;
  background-color: white;
  padding: 1rem;
`;

export const ModalTitle = styled.h4`
  text-align: center;
`;

export const ModalSubTitle = styled.h5`
  text-align: center;
`;

export const ModalButtonConfirm = styled.div`
  cursor: pointer;
  color: white;
  width: 100%;
  height: 2rem;
  padding-top: 0.4rem;
  text-align: center;
  margin-top: 1.25rem;
  background-color: #e8222e;
  border-radius: 4px;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;

export const ModalButtonDeny = styled.div`
  cursor: pointer;
  color: #e8222e;
  width: 100%;
  text-align: center;
  margin-top: 1rem;
  height: 2rem;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`;
