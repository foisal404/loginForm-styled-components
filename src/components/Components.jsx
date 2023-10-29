import styled from "styled-components";
// Create a HeroSection component that'll render a <section> tag with some styles
export const HeroSection = styled.section`
  max-width: 1536px;
  height: 100vh;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  aling-items: center;
`;

export const Title = styled.h1`
  font-size: 2.5em;
  text-align: center;
  font-weight: 900;
`;
export const Divisor = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  width: 100%;
  padding:20px 40px;
  align-items: center;
`;
export const ImageDiv = styled.div`
  padding: 20px;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  aling-items: center;
`;
export const FormDiv = styled.div`
  padding: 20px 60px;
  margin: 0 auto;
  box-shadow: 1px 1px 50px 1px #dcdedc;
`;
export const Input = styled.input`
  padding: 10px 0;
  border: 1px solid #6a6b6a;
  border-radius: 4px;
  font-size: 16px;
  width: 100%;
  margin-bottom: 10px;
`;
