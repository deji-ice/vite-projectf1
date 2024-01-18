import PropTypes from 'prop-types';

const Greeting = ({ name, age, username }) => {

  return (
    <div >
      hey how are you {username} {age} {name}
    </div>
  );
};

Greeting.propTypes ={
name: PropTypes.string,
age: PropTypes.number.isRequired,
username: PropTypes.string

}
export default Greeting;

