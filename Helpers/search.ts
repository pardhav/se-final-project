import axios from "axios";

export default async function search(
  searchKey: string,
  type: string
): Promise<any> {
  const data = await axios.get(
    `http:localhost:8080/api/search/?type=${type}&searchKey=${searchKey}`
  );
  return data.data;
}
