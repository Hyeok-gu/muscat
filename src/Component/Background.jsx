import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  background: #eee;
`;

const Wrapper2nd = styled(Wrapper)`
  background: no-repeat center center url(./asset/background/background1.jpg);
`;

const Background = (props) => {
  const { type } = props;
  return {
    default: <Wrapper></Wrapper>,
    1: <Wrapper2nd></Wrapper2nd>,
  }[type];
};

export default Background;
