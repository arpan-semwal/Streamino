import Cards from "./Cards";

const CardSection: React.FC = () => {
  const categories = [
    { id: 1, title: "Games", image: "../../../public/photo.jpg" },
    { id: 2, title: "Irl", image: "../../../public/photo.jpg" },
    { id: 2, title: "Music & DJs", image: "../../../public/photo.jpg" },
    { id: 2, title: "Creative", image: "../../../public/photo.jpg" },
    { id: 2, title: "Esports", image: "../../../public/photo.jpg" },
  ];

  return (
    <div className="p-6 w-full">
      <h2 className="text-xl font-bold mb-4">Browse</h2>

      <div
        className="grid 
                grid-cols-2 
                sm:grid-cols-3 
                md:grid-cols-3 
                lg:grid-cols-4 
                xl:grid-cols-5 
                gap-6 p-6"
      >
        {categories.map((cat) => (
          <Cards key={cat.id} title={cat.title} onClick={() => {}} />
        ))}
      </div>
    </div>
  );
};

export default CardSection;
