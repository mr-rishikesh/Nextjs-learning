import axios from "axios";
import {Signin as SigninComponent}  from "../../../components/signin"


export default function SigninPage() {
    async function getUserDetails() {
  const response = await axios.get("https://week-13-offline.kirattechnologies.workers.dev/api/v1/user/details")
	return response.data;
}
    
    

    return <>
    <SigninComponent/>
    </>
}
