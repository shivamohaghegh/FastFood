const Loading = ({ theme }) => {
  return (
    <div className="d-flex justify-content-center align-items-center mt-5">
        <div className={`spinner-border text-${theme || 'warning'}`} role="status">
        </div>
    </div>
  );
};

export default Loading;
