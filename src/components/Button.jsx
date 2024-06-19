const Button = (props) => {
  return (
    <button
      type={props?.type || "button"}
      class="min-w-20 rounded-md bg-indigo-500 px-3 py-2 text-sm font-medium"
      classList={props?.classList}
      onClick={() => props.onClick?.()}
    >
      {props.children}
    </button>
  );
};

export default Button;
