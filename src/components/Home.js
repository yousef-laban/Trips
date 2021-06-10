//styling
import { Center, Image } from "../styles";
//data
import pic from "../pics/home.jpg";

const Home = () => {
  return (
    <Center>
      <h1>Laban and Jalajel Trips </h1>
      <p>بس مع جلاجل ولبن احلى الرحلات </p>
      <Image src={pic} alt="logo" />
    </Center>
  );
};

export default Home;
