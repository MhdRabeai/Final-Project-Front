const ListItem = ({ count, text }) => {
    return (
      <li className="text-body-color dark:text-dark-6 flex text-base mb-3">
        <span className="bg-[#4F9451] mr-2.5 flex h-[26px] w-[26px] items-center justify-center rounded-full text-base text-white">
          {count}
        </span>
        {text}
      </li>
    );
  };

  export default ListItem