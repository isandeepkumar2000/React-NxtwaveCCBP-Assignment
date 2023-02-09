import JobbyHeader from "../Header";

const NotFound = (props: any) => {
  const { history } = props;

  const onClickOfGoHome = () => {
    history.replace("/");
  };

  return (
    <div className="not-found-contianer">
      <JobbyHeader />
      <div className="not-found-info-container">
        <h1 className="text-danger">404 - Page Not Found</h1>
        <p className="error-info">
          Uh oh, we can't seem to find the page you're looking for.Try going
          back or to Home.
        </p>

        <button className="go-home-btn" onClick={onClickOfGoHome}>
          Go Home
        </button>
      </div>
    </div>
  );
};

export default NotFound;
