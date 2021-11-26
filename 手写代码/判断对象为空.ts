function checkNullObj(obj: Object): Boolean {
  return (
    Object.keys(obj).length === 0 &&
    Object.getOwnPropertySymbols(obj).length === 0
  );
}
