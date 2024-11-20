import { Link } from "react-router-dom";

const TeamCard = ({ id, avatar, name, doctorDetails }) => {
  return (
    <div className="w-full px-4 md-px-0 md:w-1/2 xl:w-1/4 hover:scale-105 transition">
      <Link to={`${id}`}>
        <div className="mx-auto mb-10 w-full  max-w-[370px]">
          <div className="relative overflow-hidden rounded-lg test sm-w-50px">
            <img
              src={`http://localhost:4000/${avatar}`}
              alt="img"
              className="w-full sm:w-60px"
            />

            <div className="absolute bottom-5 left-0 w-full text-center">
              <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-black">
                <h3 className="text-dark dark:text-white text-base font-semibold">
                  {name}
                </h3>
                <p className="text-body-color dark:text-dark-6 text-xs">
                  {doctorDetails.specialization}...
                </p>
                <p className="text-body-color dark:text-dark-6 text-xs">
                  {doctorDetails.experience} Exp
                </p>

                <span className="absolute left-0 bottom-0">
                  <svg
                    width="61"
                    height="30"
                    viewBox="0 0 61 30"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="16"
                      cy="45"
                      r="45"
                      fill="#13C296"
                      fillOpacity="0.11"
                    ></circle>
                  </svg>
                </span>
                <span className="absolute top-0 right-0">
                  <svg
                    width="20"
                    height="25"
                    viewBox="0 0 20 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle
                      cx="0.706257"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 0.706257 24.3533)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="6.39669"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 6.39669 24.3533)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="12.0881"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 12.0881 24.3533)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.7785"
                      cy="24.3533"
                      r="0.646687"
                      transform="rotate(-90 17.7785 24.3533)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="0.706257"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 0.706257 18.6624)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="6.39669"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 6.39669 18.6624)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="12.0881"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 12.0881 18.6624)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.7785"
                      cy="18.6624"
                      r="0.646687"
                      transform="rotate(-90 17.7785 18.6624)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="0.706257"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 0.706257 12.9717)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="6.39669"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 6.39669 12.9717)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="12.0881"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 12.0881 12.9717)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.7785"
                      cy="12.9717"
                      r="0.646687"
                      transform="rotate(-90 17.7785 12.9717)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="0.706257"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 0.706257 7.28077)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="6.39669"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 6.39669 7.28077)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="12.0881"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 12.0881 7.28077)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.7785"
                      cy="7.28077"
                      r="0.646687"
                      transform="rotate(-90 17.7785 7.28077)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="0.706257"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 0.706257 1.58989)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="6.39669"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 6.39669 1.58989)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="12.0881"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 12.0881 1.58989)"
                      fill="#3056D3"
                    ></circle>
                    <circle
                      cx="17.7785"
                      cy="1.58989"
                      r="0.646687"
                      transform="rotate(-90 17.7785 1.58989)"
                      fill="#3056D3"
                    ></circle>
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TeamCard;
