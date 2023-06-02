import styled from "styled-components";

export const Header = styled.h1`
  text-align: center;
  color: white;
`;

export const Back = styled.div`
  background-image: url(https://cdn.pixabay.com/photo/2017/08/15/08/23/stars-2643089_1280.jpg);
  width: 100%;
`;

export const Title = styled.h2`
  text-align: center;
  color: white;
  &:hover {
    color: lightblue;
  }
  &:before {
    content: "Başlık: ";
  }
`;

export const Explanation = styled.p`
  color: white;
  &:hover {
    color: lightblue;
  }
  text-shadow: 3px 2px 1px #000;
  text-align: center;
  font-size: 1.2rem;
  line-height: 150%;
`;

export const Date = styled.p`
  color: white;
  font-size: 1rem;
`;
export const ImgDiv = styled.div`
  border: 2px solid;
  border-radius: 5px;
  width: 100%;
`;
