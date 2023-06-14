const CounterCard = (props) => {
  return (
    <div class="grid grid-rows-2 grid-flow-col gap-4">
      <h1 class="text-white text-2xl">{props.label}</h1>

      <h1 class="text-white text-1xl">{props.data}</h1>
    </div>
  );
};

export default CounterCard;
