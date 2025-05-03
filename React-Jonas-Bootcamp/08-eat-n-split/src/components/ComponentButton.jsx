export default function ComponentButton({
  styleClass,
  children,
  buttonAction,
}) {
  return (
    <button className={styleClass} onClick={buttonAction}>
      {children}
    </button>
  );
}
