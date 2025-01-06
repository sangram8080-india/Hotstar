import styled from "styled-components";

const Header = (props) => {
  return (
    <Nav>
      <Logo>
        <img src="/images/logo.svg" alt="Destiny" />
      </Logo>
      <NavMenu>
        <a href="/Home">
          <img src="/images/home-icon.svg" alt="HOME" />
          <span>HOME</span>
        </a>
        <a href="/search">
          <img src="/images/search-icon.svg" alt="SEARCH" />
          <span>SEARCH</span>
        </a>
        <a href="/watchlist">
          <img src="/images/watchlist-icon.svg" alt="WATCHLIST" />
          <span>WATCHLIST</span>
        </a>
        <a href="/original">
          <img src="/images/original-icon.svg" alt="ORIGINAL" />
          <span>ORIGINAL</span>
        </a>
        <a href="/movies">
          <img src="/images/movie-icon.svg" alt="MOVIES" />
          <span>MOVIES</span>
        </a>
        <a href="/series">
          <img src="/images/series-icon.svg" alt="SERIES" />
          <span>SERIES</span>
        </a>
      </NavMenu>
      <BtnLogin>Login</BtnLogin>
    </Nav>
  );
};

const Nav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 70px;
  background-color: #090b13;
  display: flex;
  justify-content: space-between;
  align-items: center; 
  padding: 0 36px;
  letter-spacing: 16px;
  z-index: 3;
`;

const Logo = styled.a`
  padding: 0;
  width: 80px;
  margin-top: 10px;
  font-size: 0;
  display: inline-block;

  img {
    display: block;
    width: 100%;
  }
`;

const NavMenu = styled.div`
  align-items: center;
  display: flex;
  flex-flow: row nowrap;
  margin: 0;
  padding: 0;
  position: relative;

  a {
    display: flex;
    align-items: center;
    padding: 0 12px;
    position: relative;
  }

  img {
    height: 20px;
    min-width: 20px;
    width: 20px;
    z-index: auto;
  }

  span {
    color: rgb(249, 249, 249);
    font-size: 13px;
    letter-spacing: 1.42px;
    line-height: 1.08;
    padding: 2px 0px;
    white-space: nowrap;
    position: relative;
  }

  a:hover span:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 100%;
    height: 2px;
    background-color: rgb(249, 249, 249);
    transition: width 0.3s ease-in-out;
  }

  span:after {
    content: "";
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: rgb(249, 249, 249);
    transition: width 0.3s ease-in-out;
  }
`;

const BtnLogin = styled.a`
  background: rgba(0, 0, 0, 0.6);
  padding: 8px 16px;
  text-transform: uppercase;
  letter-spacing: 1.5px;
  border: 1px solid #f9f9f9;
  border-radius: 4px;
  transition: all 0.2s ease 0s;
  margin-left: auto; 
  &:hover {
    background: #f9f9f9;
    color: #000;
    border-color: transparent;
    cursor: pointer;
  }
`;

export default Header;
