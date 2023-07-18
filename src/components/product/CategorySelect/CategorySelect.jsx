// import React, { useState } from "react";
// import "./CategorySelect.css";

// export default function CategorySelect({ character, setCharacter }) {
//   const [customCategory, setCustomCategory] = useState("");

//   // function handleChange(e) {
//   //   const value = e.target.value;
//   //   if (value === "custom") {
//   //     setCharacter({ ...character, category: customCategory });
//   //   } else {
//   //     setCharacter({ ...character, category: value });
//   //   }
//   // }

//   // function handleCustomCategoryChange(e) {
//   //   setCustomCategory(e.target.value);
//   // }

//   return (
//     <div className="categorySelect">
//       <select name="" id="" value={character.category} >
//         <option value="">Choose movie</option>
//         <option value="ANT-MAN">ANT-MAN</option>
//         <option value="BLACK-PANTHER">BLACK PANTHER</option>
//         <option value="custom">Custom</option>
//       </select>
//       {character.category.value === "custom" && (
//         <input
//           type="text"
//           placeholder="Enter custom category"
//           value={customCategory}
//           // onChange={handleCustomCategoryChange}
//         />
//       )}
//     </div>
//   );
// }

import React from "react";
import "./CategorySelect.css";

export default function CategorySelect({ character, setCharacter }) {
  function handleCategoryChange(e) {
    setCharacter({ ...character, category: e.target.value });
  }
  

  return (
    <div className="categorySelect">
      <select name="" id="" value={character.category} onChange={handleCategoryChange}>
        <option selected value="selected">
          Choose movie
        </option>
        <option value="ANT-MAN">ANT-MAN</option>
        <option value="BLACK-PANTHER">BLACK PANTHER</option>
        <option value="Other">Other</option>
      </select>

    </div>
  );
}

