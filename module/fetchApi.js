export const fetchApi = async (api) => {
  // cho phan hoi va luu tru vao respone
  const response = await fetch(api);
  // chuyen doi tu json sang object
  const result = response.json();
  return result;
};
