import './Home.scss';

export const Home = () => {
  return (
    <div className='home-container'>
      <h1>Chatty</h1>
      <br />
      <br />
      <br />
      <br />
      <h2>Register</h2>
      <form
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
        }}
      >
        <label>
          First Name
          <input placeholder='First Name' />
        </label>
        <label>
          Last Name
          <input placeholder='Last Name' />
        </label>
        <label>
          Email
          <input placeholder='Email' />
        </label>
        <label>
          Password
          <input placeholder='Password' />
        </label>
        <label>
          Re-enter Password
          <input placeholder='Re-enter Password' />
        </label>
        <button>Submit</button>
      </form>
    </div>
  );
};
