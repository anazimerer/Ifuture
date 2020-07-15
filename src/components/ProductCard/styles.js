import styled from "styled-components";
import dropdown from "./dropdown.svg";

export const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
  grid-template-rows: repeat(2, 2.5rem) 2rem;
  grid-template-areas:
    "img img img nme nme nme nme nme nme qtd"
    "img img img des des des des des des des"
    "img img img brl brl ... ... btn btn btn";
  width: 100%;
  border-radius: 8px;
  border: solid 1px #b8b8b8;
  margin-top: 0.5rem;
`;

export const Img = styled.img`
  grid-area: img;
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`;

export const Name = styled.div`
  grid-area: nme;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #e8222e;
  display: flex;
  align-items: center;
  margin-top: 1.125rem;
  margin-left: 1rem;
`;

export const Qtd = styled.div`
  display: ${({ inCart }) => (inCart ? "flex" : "none")};
  font-family: Roboto;
  color: #e8222e;
  grid-area: qtd;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  border: solid 1px #e8222e;
  align-items: center;
  justify-content: center;
  height: 2rem;
`;

export const Description = styled.div`
  font-family: Roboto;
  grid-area: des;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
  margin-left: 1rem;
`;

export const Price = styled.div`
  font-family: Roboto;
  grid-area: brl;
  margin-left: 1rem;
`;

export const Button = styled.div`
  color: ${({ inCart }) => (inCart ? " #e8222e" : "black")};
  font-family: Roboto;
  grid-area: btn;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  border: solid 1px ${({ inCart }) => (inCart ? " #e8222e" : "black")};
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-right: -1px;
  margin-bottom: -1px;
`;

export const ModalButton = styled.div`
  cursor: pointer;
  color: #4f81a8;
  width: 100%;
  text-align: right;
  margin-top: 1.75rem;
`;

export const SelectWrapper = styled.div`
  width: 100%;
  height: 3rem;
  overflow: hidden;
  background: url(${dropdown}) no-repeat 95% 50% white;
  display: inline-block;
  position: relative;
`;

export const ModalSelect = styled.select`
  width: 100%;
  height: 100%;
  border-radius: 4px;
  border: solid 1px #b8b8b8;
  padding-left: 1rem;
  background: transparent;
  -webkit-appearance: none;
  appearance: none;
`;

export const ModalBody = styled.div`
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  position: absolute;
  width: 90%;
  background-color: white;
  padding: 20px;
`;

export const ModalTitle = styled.h4`
  text-align: center;
`;
