import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  });

  return (
    <>
      <h1 className="govuk-heading-xl">Home page</h1>
    </>
  );
};

export default Home;
