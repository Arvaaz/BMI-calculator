function CreateObject(arr){
    d={}
    for (let i=0;i<((arr.length)-1);i=i+2){
      d[arr[i]]=arr[i+1]
      }
    return d
  }
module.exports = CreateObject;
