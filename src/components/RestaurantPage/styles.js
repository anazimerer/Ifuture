import styled from "styled-components";

export const Restaurant = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(8, 1fr);
  grid-template-areas:
    "img img img"
    "img img img"
    "img img img"
    "img img img"
    "nme nme nme"
    "cat cat cat"
    "dlv shi shi"
    "adr adr adr";
  height: 15rem;
  width: 100%;
  border-radius: 8px;
  margin-top: 3.75rem;
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

export const Img = styled.img`
  grid-area: img;
  width: 100%;
  height: 100%;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
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
`;

export const Category = styled.div`
  font-family: Roboto;
  grid-area: cat;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;

export const Delivery = styled.div`
  font-family: Roboto;
  grid-area: dlv;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;

export const Shipping = styled.div`
  font-family: Roboto;
  grid-area: shi;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;

export const Address = styled.div`
  font-family: Roboto;
  grid-area: adr;
  display: flex;
  align-items: center;
  font-size: 0.9rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  color: #b8b8b8;
`;

export const Loading = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
`;

export const ProductCategory = styled.div`
  letter-spacing: -0.29px;
  font-family: Roboto;
  font-size: 1rem;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.29px;
  margin-top: 1rem;
  border-bottom: 1px solid black;
  padding-bottom: 0.5rem;
  margin-bottom: 0.5rem;
`;
