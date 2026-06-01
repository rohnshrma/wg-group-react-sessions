const Header = (props) => {
  console.log("Header Re-rendered");
  return (
    <div>
      <h1>{props.text}</h1>
    </div>
  );
};

export default Header;
