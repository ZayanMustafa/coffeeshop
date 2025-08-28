


const { HERO_CONTENT } = require("@/constant/Home/Hero");

export const StateGrid = () => {
  return (
    <div className="grid grid-cols-3 gap-4 mt-12">
      {HERO_CONTENT.stats.map((stat, index) => (
        <div key={index} className="text-center">
          <p
            className="text-4xl md:text-5xl font-bold mb-2"
            style={{
              color: "#E5B80B",
              fontFamily: "Montserrat, sans-serif",
            }}
          >
            {stat.value}
          </p>
          <p
            className="text-white font-medium"
            style={{ fontFamily: "Inter, sans-serif" }}
          >
            {stat.label}
          </p>
        </div>
      ))}
    </div>
  );
};
