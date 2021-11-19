import axios from "axios";
const products = async () =>{
    const {data} = await axios.get('http://localhost:4000/product/');
    console.log("In axios", data);
    return data;
}
const getproduct = async id => await axios.get(`http://localhost:4000/product/${id}`);
const addproduct = async data => await axios.post('http://localhost:4000/product/add',data);
const editproduct = async (id, productname, price)=>{
    console.log("In edit product api is is" +id);
    let {data} = await axios.put(`http://localhost:4000/product/${id}`,{productname, price});
    return data;
}
const deleteproduct = async _id =>{
    console.log("Delete product api"+_id);
    let {data} = await axios.delete(`http://localhost:4000/product/${_id}`);
    return data;
}
const addImage = async imagefile =>{
    var formData = new FormData();
    formData.append('imagefile', imagefile);
    const options ={
        headers:{
            'Content-Type':'multipart/form-data',
        }
    };
    let filename = await axios.post(`http://localhost:4000/asset/image`, formData, options)
    return filename
}
export default { products, getproduct, addproduct, editproduct, deleteproduct, addImage};