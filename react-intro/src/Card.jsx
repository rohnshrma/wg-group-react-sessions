const Card = (props) => {
  console.log(props);
  return (
    <div className="card">
      <div className="card-header">{props.name}</div>
      <div className="card-body">
        <h5 className="card-title">
          {props.type.map((typ, i) => (
            <span key={i}>{typ}</span>
          ))}
        </h5>
      </div>
    </div>
  );
};

export default Card;
