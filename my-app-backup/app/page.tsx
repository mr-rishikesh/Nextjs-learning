import axios from "axios";
import Image from "next/image";
    async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}
export default async function Home() {
  const UserData = await getUserDetails();
  return (
  
       <>
            <div>Hello world </div>
            <div>{UserData.name}</div>
            <div>{UserData.email} </div></>
  );
}
