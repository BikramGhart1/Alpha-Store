import React from "react";

const articles = [
  {
    id: 1,
    image: "https://imgs.search.brave.com/6fQWwzM9xaPMfW56Duuye2oE1bDI_dgZJJqsVaGwrkI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LXhzLW5ldy5qcGc",
    title: "Iphone x",
    author: "John Doe",
    date: "Oct 10, 2023",
  },
  {
    id: 2,
    image: "https://imgs.search.brave.com/78HGXVLNZjpPa5BKJh_Vi91W97oRiGwlNdgTcSop9ec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTExLmpwZw",
    title: "iphone 11",
    author: "Jane Smith",
    date: "Oct 12, 2023",
  },
  {
    id: 3,
    image: "https://imgs.search.brave.com/2BKNqIHIgp080J7GBtbxHm_yUpdHaDVz-xZtYfnMZP4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTEzLmpwZw",
    title: "iphone 12",
    author: "Alice Johnson",
    date: "Oct 15, 2023",
  },
  {
    id: 4,
    image: "https://imgs.search.brave.com/Kqkw5baz4OrY_GaJXe-mIR7X9cBhkeVtBReklxXborI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTEyLXByby0tLmpw/Zw",
    title: "iphone 13",
    author: "Bob Brown",
    date: "Oct 18, 2023",
  },
  {
    id: 5,
    image: "https://imgs.search.brave.com/4s0nlzU2ILi2BVKr0FU4tBRVZ1xlQ0E1f3eEwpeN5Vk/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTE0LXByby5qcGc",
    title: "iphone 14",
    author: "Chris Green",
    date: "Oct 20, 2023",
  },
  {
    id: 6,
    image: "https://imgs.search.brave.com/YJen5gXa_keTNCzSBkR10U0YPzhyXfDbeP6Cx5tMRjE/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/OTEtaW1nLmNvbS9n/YWxsZXJ5X2ltYWdl/c191cGxvYWRzLzAv/My8wMzdlMzAxYjMw/NzNiZWMzMTFhNmI1/MWU0NmIxYzA1NTA3/Nzg3ODJhLmpwZz90/cj1oLTU1MCx3LTAs/Yy1hdF9tYXg",
    title: "iphone 15",
    author: "Emma White",
    date: "Oct 22, 2023",
  },
  {
    id: 7,
    image: "https://imgs.search.brave.com/ldQyTim8oZ19Z6JupnBSOcrwOkasT689_L_z7C-UpjM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTE2LmpwZw",
    title: "iphone 16",
    author: "Liam Black",
    date: "Oct 25, 2023",
  },
  {
    id: 8,
    image: "",
    title: "https://imgs.search.brave.com/sUrjYElmR1jtmcaL9shDLgaS1R_DV8WpFLn7GwnhMMA/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTE1LXByby5qcGc",
    author: "Sophia Blue",
    date: "Oct 28, 2023",
  },
  {
    id: 9,
    image: "https://imgs.search.brave.com/US5fyuhU10f42FZY6yNyEcveh63myMPzSr9vuXi-Tjg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9mZG4y/LmdzbWFyZW5hLmNv/bS92di9iaWdwaWMv/YXBwbGUtaXBob25l/LTE2LXByby5qcGc",
    title: "iphone 16 pro",
    author: "Oliver Gray",
    date: "Oct 30, 2023",
  },
];

const BlogLandingPage = () => {
  return (
    <div className="p-6 bg-gray-100">
      <h1 className="text-2xl font-bold text-left mb-8">Latest post</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {articles.map((article) => (
          <div
            key={article.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <p className="text-sm text-gray-500">{article.category}</p>
              <h2 className="text-lg font-semibold text-gray-800 mt-2">
                {article.title}
              </h2>
              <p className="text-sm text-gray-600 mt-1">
                By {article.author} • {article.date}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogLandingPage;