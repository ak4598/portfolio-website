import Globe from "react-globe.gl";

const GlobeTmpl = ({ forwardRef, ...otherProps }: any) => (
  <Globe {...otherProps} ref={forwardRef} />
);

export default GlobeTmpl;
