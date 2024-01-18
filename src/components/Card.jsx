import PropTypes from 'prop-types';

const Card = ({ item }) => {
  return (
    <div className="item">
      <p>UserName: {item.username}</p>
      <p>Fullname: {item.fullName}</p>
      <p>Age: {item.age}</p>
      <p>email: {item.email}</p>
      <p>Address: {item.address}</p>

      <button className="bg-green-400" onClick={item.func}>
        click me
      </button>

      {/* {item.button && (
        <button className="bg-green-400" onClick={alert}>
          click me
        </button>
      )} */}
      {/* {item.button === true ? (
        <button className="bg-green-400" onClick={alert}>
          click me
        </button>
      ) : (
        <button className="bg-red-400" onClick={alert}>
          click me
        </button>
      )} */}
    </div>
  );
};

Card.propTypes ={
    item: PropTypes.shape({
        username: PropTypes.string.isRequired,
        fullName: PropTypes.string.isRequired,
        func: PropTypes.func.isRequired
    })
}

export default Card;
