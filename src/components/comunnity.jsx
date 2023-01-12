import { useEffect, useState } from "react";
import useInput from "../hooks/useInput";
import axios from "axios";
import notUser from "../assets/question.png"


  
  const Community = () => {
    const friends = useInput();
    const [searchedFriend, setSearchedFriend]= useState("");
    console.log("searched",searchedFriend)
   useEffect(()=>{
      Friend()
    },[searchedFriend] )

    const handleSubmit = (e) =>{
      console.log("Activate")
      e.preventDefault();
      const lowerFriend = (friends.value).toLowerCase()
      axios
        .get(`/api/community/${lowerFriend}`)
        .then(res => {
          console.log(res)
          setSearchedFriend(res.data[0])
        })
    }
  

    const Friend = () => {
       return searchedFriend ? (
    <div className=" box bg-white rounded cardCom shadow-sm py-3 px-4">
      <img src="https://cdn-icons-png.flaticon.com/512/947/947661.png" alt="" width="100" class="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm"/>
                <h4 className="mb-0 text-white">{searchedFriend.userName}</h4>
                <p>{`subject N°: ${searchedFriend.id} (id)`}</p>
                <span className="small ">Planet: Earth</span>
                <h5>{searchedFriend.email}</h5>
            </div>  
   
      ) : (

        <div className="noUserFound">
          <img src={notUser}  className="rounded-circle" />
          <p className="textGeneral" >Sorry! we couldn't find your friend in this dimension</p>        
      </div>
  
      )
    }


      return (
        <div className="containerUser">
        <form className="form-inline formUsers" onSubmit={handleSubmit}>
            <input 
            {...friends}
            className="form-control mr-sm-2" 
            type="search" 
            placeholder="Find friends ej: TarantinoLover190" 
            aria-label="Search"/>
         </form>
         <Friend/>

        </div>
      )
  }

  export default Community;