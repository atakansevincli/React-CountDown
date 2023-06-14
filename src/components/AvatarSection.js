import Avatar from "./Avatar";

const AvatarSection = () => {
  return (
    <div className="grid sm:grid-rows-2 bg-gradient-to-r from-indigo-200 via-red-200 to-yellow-100">
      <div className="flex items-center justify-center">
        <h1 className="mt-4 text-6xl sm:text-7xl pl-5 col-span-1 text-white">
          Bebiskolar 🎉
        </h1>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-2 flex justify-evenly flex-row">
        <Avatar name={"atakan"} />
        <Avatar name={"alara"} />
        <Avatar name={"özge"} />
        <Avatar name={"emirhan"} />
      </div>
      <div className="grid sm:grid-cols-3 grid-cols-2 flex justify-evenly flex-row">
        <Avatar isBlack={""} name={"bihter"} />
        <Avatar isBlack={""} name={"izzet"} />
        {/* <Avatar isBlack={"col-span-2 sm:col-span-1"} name={"alara"} /> */}
      </div>
    </div>
  );
};

export default AvatarSection;
