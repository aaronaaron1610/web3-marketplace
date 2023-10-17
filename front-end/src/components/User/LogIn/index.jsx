const LogIn = () => {
  return (
    <>
      <h1>{localStorage.getItem('email')}</h1>
    </>
  );
};

export default LogIn;
