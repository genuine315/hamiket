import { makeStyles } from "@material-ui/styles";

const useStyle=makeStyles({
header:{
    width:"100%",
    background:"#2B4865",
    display:"flex",
    justifyContent:"space-between",
    alignItems:"center",
    padding:"10px 30px",
    color:"#fff",
    boxShadow:"0 0 10px  #000"
},
image:{
    width:"50px",
    height:"50px",
    // borderRadius:"50%",
    marginLeft:"5px"
},
userInfo:{
    display:"flex",
    alignItems:"center",
    cursor:"pointer"
},
userName:{
    display:"flex",
    flexDirection:"column",
    alignItems:"end"
}
})
export default useStyle