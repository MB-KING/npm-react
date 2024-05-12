const useQueryString = () => {
  const urlParams = new URLSearchParams(window.location.search);
  const param1 = urlParams.get("p1");
  const param2 = urlParams.get("p2");
  console.log(param1, param2);
  return { param1, param2 };
};

export default useQueryString;
