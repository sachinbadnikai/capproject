const cds =require('@sap/cds');
const { Test } = cds.entities; 

module.exports = srv =>{

    srv.on('READ', 'TestSet', async(req)=>{
        console.log("************************hello*****",req.params)
        const ID =req.data.ID;
         result = await cds.db.run(
  SELECT.from(Test).where({ ID })
); 
        console.log("*****************************",result)
    })
}

module.exports = srv =>{

    srv.on('READ', 'TestSet', async(req)=>{
        console.log("************************hello*****",req.params)
        const ID =req.data.ID;
         result = await cds.db.run(
  SELECT.from(Test).where({ ID })
); 
        console.log("*****************************",result)
    })
}