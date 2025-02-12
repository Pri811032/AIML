const http=require('http');
const fs=require('fs/promises');

const server=http.createServer(async (req,res) =>
{
 console.log(req.url)
 res.statusCode=200;
 res.setHeader('Content-Type','text/html');
 res.write("<h1>Hello,world</h1>");
  try{
     const filekadata=await fs.readFile("./data.html", "utf-8")
     res.end(filekadata);
  } catch(err){
    console.log(err.message);
  } 
 
});
port=3001;
server.listen(port,()=>{
    const a= server.address();
    console.log(`Server is running on port ${port}`);
});