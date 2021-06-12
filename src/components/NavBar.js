import { NavB, Logo, LinkItem } from "../styles";

const NavBar = (props) => {
  return (
    <NavB class="navbar navbar-expand-lg navbar-light bg-light">
      <Logo exact to="/">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdbptkeg78quvzVcXvhg3sozfYXkuCFZTFsw&usqp=CAU"
          alt="logo"
        ></img>
      </Logo>
      <div>
        <p>Laban and Jalajel Trips</p>
      </div>
      <div>
        <LinkItem to="/trips/">Trips</LinkItem>
      </div>
    </NavB>
  );
};

export default NavBar;
