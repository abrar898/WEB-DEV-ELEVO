const BlogCard = ({ post }) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={post.image} alt={post.title} className="w-full h-40 object-cover" />
    <div className="p-4">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-sm text-gray-600">{post.date}</p>
      <p className="text-gray-700 mt-2">{post.description}</p>
    </div>
  </div>
);

export default BlogCard;
