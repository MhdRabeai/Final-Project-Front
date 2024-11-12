const TeamCard = ({ imageSrc, name, profession }) => {
  return (
    <div className="w-full px-4 md-px-0 md:w-1/2 xl:w-1/4">
      <div className="mx-auto mb-10 w-full max-w-[370px]">
        <div className="relative overflow-hidden rounded-lg">
          <img src={imageSrc} alt="" className="w-full" />
          <div className="absolute bottom-5 left-0 w-full text-center">
            <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-black">
              <h3 className="text-base font-semibold text-dark dark:text-white">
                {name}
              </h3>
              <p className="text-xs text-body-color dark:text-dark-6">
                {profession}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
