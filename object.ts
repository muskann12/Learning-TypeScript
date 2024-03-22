//Objects

//object type
type employestype = {Name:string,Gender:string,Age:number,Email:string, Address: AddressType};
interface AddressType   {
    streetname : string,
    city : string,
};


let employes: employestype    = {
    Name : "Muskan",
    Gender : "female",
    Age : 18,
    Email : "nisarmuskan14@gmail.com",
    Address :{
    streetname : "abc",
    city : "khi",
    
    }
}
 
let employe2 : employestype={
    Name : "Ahmed",
    Gender : "Male", 
    Age : 20,
    Email : "ahmedraza@gmail.com",
   Address : {
    streetname : "abcd",
    city : "isb", 
   }

}
//now we will print this.
console.log(employes.Age);
console.log(employe2.Gender);

// number , string , boolean => types

type phonetypestring = string 

let phonetypestring = " apple"


