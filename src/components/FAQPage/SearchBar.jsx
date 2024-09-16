// import React, { useState } from "react";
// import { Search, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const SearchBar = ({ articles }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (e) => {
//     e.preventDefault();
//     if (!searchTerm.trim()) {
//       setSearchResults([]);
//       return;
//     }

//     const results = articles.filter((article) =>
//       article.title.toLowerCase().includes(searchTerm.toLowerCase())
//     );
//     setSearchResults(results);
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto mt-4 mb-8">
//       <form onSubmit={handleSearch} className="relative mb-4">
//         <input
//           type="text"
//           placeholder="Search for articles..."
//           value={searchTerm}
//           onChange={(e) => {
//             setSearchTerm(e.target.value);
//             handleSearch(e);
//           }}
//           className="w-full py-3 px-4 pl-12 rounded-lg bg-indigo-700 bg-opacity-50 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />
//         <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-200">
//           <Search className="w-6 h-6" />
//         </div>
//       </form>

//       {searchResults.length > 0 && (
//         <div className="bg-white rounded-lg shadow-lg">
//           {searchResults.map((result, index) => (
//             <Link
//               key={index}
//               to={`/${result.link}`}
//               className="block p-4 border-b border-gray-200 flex justify-between items-center hover:bg-gray-50"
//             >
//               <span className="text-gray-800">{result.title}</span>
//               <ChevronRight className="w-5 h-5 text-gray-400" />
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import { Search, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const SearchBar = ({ articles }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     if (!term.trim()) {
//       setSearchResults([]);
//       return;
//     }

//     const results = articles.filter((article) =>
//       article.title.toLowerCase().includes(term.toLowerCase())
//     );
//     setSearchResults(results);
//   };

//   return (
//     <div className="w-full max-w-4xl mx-auto mt-4 mb-8">
//       <div className="relative mb-4">
//         <input
//           type="text"
//           placeholder="Search for articles..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="w-full py-3 px-4 pl-12 rounded-lg bg-indigo-700 bg-opacity-50 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />
//         <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-200">
//           <Search className="w-6 h-6" />
//         </div>
//       </div>

//       {searchTerm.trim() !== "" && searchResults.length > 0 && (
//         <div className="bg-white rounded-lg shadow-lg">
//           {searchResults.map((result, index) => (
//             <Link
//               key={index}
//               to={`/${result.link}`}
//               className="block p-4 border-b border-gray-200 flex justify-between items-center hover:bg-gray-50"
//             >
//               <span className="text-gray-800">{result.title}</span>
//               <ChevronRight className="w-5 h-5 text-gray-400" />
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

import React, { useState } from "react";
import { Search, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const SearchBar = ({ articles }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    if (!term.trim()) {
      setSearchResults([]);
      return;
    }

    const results = articles.filter((article) =>
      article.title.toLowerCase().includes(term.toLowerCase())
    );
    setSearchResults(results);
  };

  return (
    <div className="w-full max-w-4xl mx-auto mt-4 mb-8">
      <div className="relative mb-4">
        <input
          type="text"
          placeholder="Search for articles..."
          value={searchTerm}
          onChange={handleSearch}
          //   className="w-full py-3 px-4 pl-12 rounded-lg bg-indigo-600 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          className="w-full py-3 px-6 pl-14 rounded-full border bg-opacity-60  focus:outline-none focus:ring-2 focus:ring-black text-lg"
        />
        <div className="absolute left-3 top-1/2 transform -translate-y-1/2 ">
          <Search className="w-6 h-6 opacity-60 " />
        </div>
      </div>

      {searchTerm.trim() !== "" && searchResults.length > 0 && (
        <div className="bg-white rounded-lg shadow-lg ">
          {searchResults.map((result, index) => (
            <Link
              key={index}
              to={`/${result.link}`}
              className="p-4 border-b border-gray-200 flex justify-between items-center hover:bg-gray-50"
            >
              <span className="text-gray-800">{result.title}</span>
              <ChevronRight className="w-5 h-5 text-gray-400" />
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default SearchBar;

// import React, { useState } from "react";
// import { Search, ChevronRight } from "lucide-react";
// import { Link } from "react-router-dom";

// const SearchBar = ({ articles }) => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [searchResults, setSearchResults] = useState([]);

//   const handleSearch = (e) => {
//     const term = e.target.value;
//     setSearchTerm(term);

//     if (!term.trim()) {
//       setSearchResults([]);
//       return;
//     }

//     const results = articles.filter((article) =>
//       article.title.toLowerCase().includes(term.toLowerCase())
//     );
//     setSearchResults(results);
//   };

//   return (
//     <div className="w-full mb-8">
//       <div className="relative mb-4">
//         <input
//           type="text"
//           placeholder="Search for articles..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="w-full py-3 px-4 pl-12 rounded-lg bg-indigo-700 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//         />
//         <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300">
//           <Search className="w-6 h-6" />
//         </div>
//       </div>

//       {searchTerm.trim() !== "" && searchResults.length > 0 && (
//         <div className="bg-white rounded-lg shadow-lg">
//           {searchResults.map((result, index) => (
//             <Link
//               key={index}
//               to={result.link}
//               className="block p-4 border-b border-gray-200 flex justify-between items-center hover:bg-gray-50"
//             >
//               <span className="text-gray-800">{result.title}</span>
//               <ChevronRight className="w-5 h-5 text-gray-400" />
//             </Link>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import { Search } from "lucide-react";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     // Implement search logic here
//   };

//   return (
//     <div className="relative mb-8">
//       <input
//         type="text"
//         placeholder="Search for articles..."
//         value={searchTerm}
//         onChange={handleSearch}
//         className="w-full py-3 px-4 pl-12 rounded-lg bg-indigo-700 text-white placeholder-indigo-300 focus:outline-none focus:ring-2 focus:ring-indigo-400"
//       />
//       <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-indigo-300">
//         <Search className="w-6 h-6" />
//       </div>
//     </div>
//   );
// };

// export default SearchBar;

// import React, { useState } from "react";
// import { Search } from "lucide-react";

// const SearchBar = () => {
//   const [searchTerm, setSearchTerm] = useState("");

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//     // Implement search logic here
//   };

//   return (
//     <div className="relative mb-8">
//       <div className="relative">
//         <input
//           type="text"
//           placeholder="Search for articles..."
//           value={searchTerm}
//           onChange={handleSearch}
//           className="w-full py-4 px-6 pl-14 rounded-full bg-indigo-500 bg-opacity-50 text-white placeholder-indigo-200 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-lg"
//         />
//         <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-indigo-200">
//           <Search className="w-6 h-6" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SearchBar;