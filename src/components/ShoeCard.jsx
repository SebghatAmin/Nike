const ShoeCard = ({ imgURL, changeBigShoeImage, BigShoeImg }) => {
  const handleClick = () => {
    if (BigShoeImg !== imgURL.BigShoe) {
      changeBigShoeImage(imgURL.BigShoe);
    }
  };

  return (
    <div
      className={`border-2 rounded-xl ${
        BigShoeImg === imgURL.BigShoe
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div>
        <img
          src={imgURL.thumbnail}
          alt="Shoe collection thumbnail"
          width={127}
          height={103}
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default ShoeCard;
