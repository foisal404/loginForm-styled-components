import {
  Divisor,
  FormDiv,
  HeroSection,
  ImageDiv,
  Input,
  Title,
} from "../../components/Components";
import loginAnime from "../../assets/images/loginAnimate.png";

const Login = () => {
  return (
    <>
      <HeroSection>
        <Divisor>
          <ImageDiv>
            <img src={loginAnime} alt="" />
          </ImageDiv>
          <div>
            <FormDiv>
              <Title>Login</Title>
              <form>
                <label htmlFor="">Login ID</label>
                <Input></Input>
                <label htmlFor="">Password</label>
                <Input></Input>
              </form>
            </FormDiv>
          </div>
        </Divisor>
      </HeroSection>
    </>
  );
};

export default Login;
