const Header = (props) => {
  console.log(props);

  return (
    <div>
      <h1>hello world my name is {props.txt}</h1>
      <p>{props.author}</p>
    </div>
  );
};

export default Header;
