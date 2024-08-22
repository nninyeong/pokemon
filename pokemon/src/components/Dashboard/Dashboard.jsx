import Slot from "./Slot";

const SELECTABLE_POKEMON_NUM = 6;

const Dashboard = () => {
  return (
    <div>
      <h2>나만의 포켓몬</h2>
      <div className="slotsContainer" style={{ display: "flex" }}>
        {Array.from({ length: SELECTABLE_POKEMON_NUM }, (_, i) => (
          <Slot key={i} />
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
