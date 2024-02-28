import { useRouteError } from "react-router-dom";
const Error = () => {
  const err = useRouteError();

  return (
    <>
      <h1>OPPs.........</h1>
      <h3>page is not avilabe</h3>;
      <div>
        {err.status}
        {err.statusText}
      </div>
    </>
  );
};
export default Error;
