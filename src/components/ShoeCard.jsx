const ShoeCard = ({ imgURL, changeBigShoeImage, BigShoeImg }) => {
  
  const handleClick = () => {
    console.log('first', imgURL,BigShoeImg)
    // Check if the current big shoe image isn't the same as the clicked shoe's BigShoe image
    // if (BigShoeImg !== imgURL.BigShoe) {
      changeBigShoeImage(imgURL.bigShoe); // Update big shoe image if different
    // }
  };

  return (
    <div
      className={`border-2 rounded-xl ${BigShoeImg === imgURL.BigShoe ? 'border-coral-red' : 'border-transparent'} cursor-pointer max-sm:flex-1`}
      onClick={handleClick}
    >
      <div className="flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4">
        <img
          src={imgURL.thumbnail} // The small thumbnail image
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
