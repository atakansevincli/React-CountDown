import CounterCard from "./CounterCard";
const CounterSection = () => {
  const data = { days: 14, hours: 12, minutes: 52 };

  return (
    <div className="grid grid-cols-3 flex justify-evenly flex-row">
      <CounterCard label={"Days"} data={data.days} />
      <CounterCard label={"Hours"} data={data.hours} />
      <CounterCard label={"Minutes"} data={data.minutes} />
    </div>
  );
};

export default CounterSection;
