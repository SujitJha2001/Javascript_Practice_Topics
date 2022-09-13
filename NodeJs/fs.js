/*
When we use asynchronus then a callback function becomes mandatory
 */
const fs = require('fs');

fs.mkdir('files',(err)=>{
    console.log("folder named 'file' created");
});

fs.mkdir('files/inner',(err)=>{
    console.log("folder named 'inner' created");
});
const path = require('path');

var dirPath = path.join(__dirname,'/files/inner');
//console.log(dirPath);

for(let i=1;i<=2;i++)
{
    fs.writeFile(`${dirPath}/file${i}.txt`, `This is File ${i}`, (err)=>{
        //console.log(err);
    });
}

fs.readdirSync(dirPath).forEach((value)=>{
    fs.readFile(`${dirPath}/${value}`, 'utf8', (err, data)=>{
        console.log(data);
    });
    // console.log(data);
});

//taking input from console
//console.log(process.argv[1]);
dirPath = path.join(__dirname,'files');

if(process.argv[2]==='add')
{
    fs.writeFile(`${dirPath}/add.txt`, process.argv[3],(err)=>{
        //console.log("Add done");
    });
}
else if(process.argv[2]==='update')
{
    fs.appendFile(`${dirPath}/add.txt`, process.argv[3],(err)=>{
        //console.log("updated");
    });
}
else if(process.argv[2]==='delete')
{
    fs.unlink(`${dirPath}/add.txt`,(err)=>{
        //console.log("deleted");
    });
}
else if(process.argv[2]==='read')
{
    fs.readFile(`${dirPath}/add.txt`, 'utf8', (err,data)=>{
        console.log(data);
    });
}
else if(process.argv[2]==='rename')
{
    fs.rename(`${dirPath}/add.txt`,`${dirPath}/${process.argv[3]}`,(err)=>{
        //console.log('renamed');
    });
}
else
{
    console.warn("Invaid Input");
}

//It will get deleted only when the directory is empty
fs.rmdir('./files',(err)=>{
    if(err)
    {
        console.log(err);
    } 
    else
    {
        console.log("folder deleted");
    }
});
