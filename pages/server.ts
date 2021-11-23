import axios from "axios";

export async function search(
  searchKey: string,
  type: string,
  operation:string
): Promise<any> {
  const data = await axios.get(
    `http:localhost:8080/api/search/?type=${type}&searchKey=${searchKey}`
  );
  return data.data;
}
 
export async function getAll(type: string): Promise<any> {
  const data = await axios.get(`http://localhost:8080/api/all?type=${type}`);
  return data.data;
}