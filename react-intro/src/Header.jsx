const Header = (props) => {
  console.log(props);

  return (
    <div>
      <h1>{props.text}</h1>
      <span>Author : {props.by}</span>
    </div>
  );
};

export default Header;
