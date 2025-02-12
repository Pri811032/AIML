const fs=require('fs/promises');
const read=async()=>{
 try{
    const filekadata=await fs.readFile("./data.txt", "utf-8")
    console.log(filekadata);
 } catch(err){
   console.log(err.message);
 } 
}
read()