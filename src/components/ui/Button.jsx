import clsx from "clsx";

const Button = ({id, title, containerClasses, leftIcon, rightIcon}) => {
  return (
    <button
      id={id}
      className={clsx("group  relative z-10 w-fit cursor-pointer overflow-hidden rounded-full bg-violet-50 px-7 py-3 text-black", containerClasses)}
    >
      {leftIcon}
      <span className="relative inline-flex overflow-hidden font-general uppercase text-xs">{title}</span>
      {rightIcon}
    </button>
  );
};

export default Button;
