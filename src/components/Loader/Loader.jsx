import { MagnifyingGlass } from "react-loader-spinner";
import {LoaderBox} from './Loader.styled'

const Loader = () => {
  return (
    <LoaderBox>
      <MagnifyingGlass />;
    </LoaderBox>
  );
};
export default Loader;
