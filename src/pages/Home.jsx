import { useEffect } from 'react';

const Home = () => {
  useEffect(() => {
    document.title = 'Home';
  });

  return (
    <>
      <h1 className="govuk-heading-xl">Home page</h1>
      <p class="govuk-body">Demo UI application as part of LocalDev demo solution.</p>
    </>
  );
};

export default Home;
