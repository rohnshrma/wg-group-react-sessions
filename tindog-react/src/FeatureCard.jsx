const FeatureCard = (props) => {
  return (
    <div class="feature">
      <i class={`fa-regular ${props.icon}`}></i>
      <h3 class="level-3">{props.feature}</h3>
      <p>{props.description}</p>
    </div>
  );
};

export default FeatureCard;
