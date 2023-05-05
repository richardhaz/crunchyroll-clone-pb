import Cat from '@/assets/pets/cat-sleepy.png';

const Feeds = () => {
  return (
    <div className="use-container">
      <div className="mx-auto flex max-w-md flex-col items-center justify-center px-10">
        <div className="mb-4">
          <img src={Cat} alt="cat" />
        </div>
        <div className="mb-4">
          <h3 className="text-center text-20 font-semibold leading-6">
            Still looking for something to watch? Check out our full library
          </h3>
        </div>
        <button className="use-text-transition border-2 border-[#F37521] bg-transparent px-4 py-1.5 text-14 font-semibold uppercase text-[#F37521] hover:border-[#FF944D] hover:text-[#FF944D]">
          View All
        </button>
      </div>
    </div>
  );
};

export default Feeds;
