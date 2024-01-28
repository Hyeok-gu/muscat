import { Logo, LogoOrange, LogoPink } from "./icons";

const Muscat = (props) => {
  const { type } = props;
  return {
    0: <Logo />,
    1: <LogoPink />,
    2: <LogoOrange />,
  }[type];
};

export default Muscat;
