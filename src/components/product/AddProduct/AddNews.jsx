// import React, { useEffect, useState } from "react";
// import { Button, Form } from "react-bootstrap";
// import ProductContextProvider, {
//   useProduct,
// } from "../../../contexts/ProductContextProvider";

// const AddNews = () => {
//   const { categories, getCategories, createProduct, createCategory } =
//     useProduct();

//   useEffect(() => {
//     getCategories();
//   }, []);

//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [author, setAuthor] = useState("");
//   const [price, setPrice] = useState("");
//   const [category, setCategory] = useState("");
//   const [image, setImage] = useState("");

//   const handleSave = () => {
//     const newProduct = new FormData();
//     newProduct.append("name", name);
//     newProduct.append("price", price);
//     newProduct.append("author", author);
//     newProduct.append("description", description);
//     newProduct.append("category", category);
//     if (image) {
//       newProduct.append("image", image);
//     }
//     createProduct(newProduct);
//   };

//   useEffect(() => {
//     getCategories();
//   }, []);
//   console.log(categories);

//   return (
//     <ProductContextProvider>
//       <div className="w-50 mt-5 m-auto">
//         <h2>CREATE PRODUCT</h2>
//         <Form.Control
//           onChange={(e) => setName(e.target.value)}
//           placeholder="name"
//           type="text"
//         />
//         <Form.Control
//           onChange={(e) => setDescription(e.target.value)}
//           placeholder="description"
//           type="text"
//         />
//         <Form.Control
//           onChange={(e) => setAuthor(e.target.value)}
//           placeholder="author"
//           type="text"
//         />
//         <Form.Control
//           onChange={(e) => setPrice(e.target.value)}
//           placeholder="price"
//           type="text"
//         />

//         <Form.Select
//           onChange={(e) => setCategory(e.target.value)}
//           aria-label="Default select example"
//         >
//           <option>Open this select menu</option>
//           {categories.map((item) => (
//             <option value={item.id} key={item.id}>
//               {item.title}
//             </option>
//           ))}
//         </Form.Select>
//         <Form.Control
//           type="file"
//           onChange={(e) => setImage(e.target.files[0])}
//         />

//         <Button className="mt-3" onClick={handleSave}>
//           Create Product
//         </Button>
//       </div>
//     </ProductContextProvider>
//   );
// };

// export default AddNews;
