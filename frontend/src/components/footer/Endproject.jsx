import Placeholder from 'react-bootstrap/Placeholder';

function AnimationExample() {
  return (
    <>
      <Placeholder as="p" animation="glow" style={{ backgroundColor: "white", color: '#09c2c2' }}>
        <Placeholder xs={12} />
      </Placeholder>
      <p>&copy; 2023 RoCaDaRo</p>
      <Placeholder as="p" animation="wave" style={{ backgroundColor: "white", color: '#09c2c2' }}>
        <Placeholder xs={12} />
      </Placeholder>
    </>
  );
}

export default AnimationExample;