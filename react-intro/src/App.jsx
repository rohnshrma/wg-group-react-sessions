import Header from "./Header";

const App = () => {
  return (
    <div>
      <h1>{new Date().toLocaleDateString()}</h1>
      <Header author="john doe" txt="hello world" />
      <Header author="john doe" txt="bye world" />
      <Header author="Josie doe" txt="die world" />
      <Header author="john doe" txt="die world" />
      <p>this is a paragraph</p>
    </div>
  );
};

export default App;
