const Avatar = (props) => {
  return (
    <div className={props.isBlack}>
      <img
        src={require(`../img/${props.name}.jpeg`)}
        className="w-32 h-32 rounded-full shadow-xl mx-auto m-6"
        alt="Avatar"
      />
    </div>
  );
};

export default Avatar;
