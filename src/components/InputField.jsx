const InputField = (props) => {
  return (
    <input
      id={props?.id || ""}
      type={props?.type || "text"}
      class="max-w-56 flex-1 rounded-lg bg-slate-300 px-3 py-1 text-slate-950 outline-indigo-600 disabled:bg-slate-200/20"
      value={props.value}
      disabled={!!props?.disabled}
      onInput={props.onInput}
    />
  );
};

export default InputField;
