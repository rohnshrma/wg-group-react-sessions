import FeatureCard from "./FeatureCard";

const Features = () => {
  const cardData = [
    {
      feature: "Feature 1",
      description: "feature description for card 1",
      icon: "fa-user",
    },
    {
      feature: "Feature 2",
      description: "feature description for card 2",
      icon: "fa-eye",
    },
    {
      feature: "Feature 3",
      description: "feature description for card 3",
      icon: "fa-dollar",
    },
  ];

  return (
    <div id="features" class="wrapper">
      <h2 class="level-2">Why Choose Us?</h2>
      <div class="row">
        {cardData.map((item, i) => (
          <FeatureCard
            key={i}
            feature={item.feature}
            description={item.description}
            icon={item.icon}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
