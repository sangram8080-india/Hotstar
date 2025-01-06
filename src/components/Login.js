import styled from "styled-components";

const Login = (props) => {
  return (
    <Container>
      <Content>
        <CTA>
          <CTALogoOne src="/images/cta-logo-one.svg" alt="logo" />

          <SignUp>GET ALL HERE</SignUp>
          <Description>
            The Premium plan provides access to all the content on the platform, 
            including all the latest movies, TV shows, Hotstar specials and live sports.
             All the content is ad-free except live sports. It is priced at Rs 299 per month 
             or Rs 1499 per year.
          </Description>
          <CTALogoTwo src="/images/cta-logo-two.png" alt="logo" />
        </CTA>
        

      </Content>
      <BackImg />
    </Container>
  );
};

const Container = styled.section`
  overflow: hidden;
  display: flex;
  flex-direction: column;
  text-align: center;
  height: 100vh;
`;

const Content = styled.div`
  margin-bottom: 10vw;
  width: 100%;
  position: relative;
  min-height: 100vh;
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 88px 40px;
  height: 100%;
`;

const BackImg = styled.div`
  height: 100%;
  background-position: top;
  background-size: cover;
  background-image: url("/images/login-background.jpg");
  background-repeat: no-repeat;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  z-index: -1;
`;

const CTA = styled.div`
margin-bottom:2vw;
max-width:658px;
display:flex;
flex-direction:column;
justify-content:center;
margin-top:0;
align-items:center;
text-align:center;
margin-left:auto;
margin-right:auto;
transition-timing-function:ease-out;
transition:opacity 0.2s;
width:100%;

`;

const CTALogoOne = styled.img`
  margin-buttom:12px;
  max-width:600px;
  min-height:1px;
  display:block;
  width:100%;
 
`;

// sighUp

const SignUp = styled.a`
font-weight:blod;
color:#f9f9f9;
background:#0063e5;
margin-bottom:12px;
width:100%;
latter-spacing;1.5px;
font-size:18px;
padding:16.5px;
font-size:1px solid transparent;
border-radius:4px;

&:hover{
background:#0483ee;
}
`;

// CTA LogoTwo
const CTALogoTwo=styled.img`
max-width:600px;
margin-bottom:20px;
display:inline-block;
vertical-align:bottom;
width:100%;
`;

const Description =styled.p`
color:hsla(0,0%,93.3%,1);
font-size:11px;
margin:0 0 24px;
line-height:1.5;
letter-spacing:1.5px;

`;


export default Login;
