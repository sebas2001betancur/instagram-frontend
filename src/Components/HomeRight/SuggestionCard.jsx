const SuggestionCard = () => {
  return (
    <div className="flex justify-between items-center">
      <div className="flex items-center">
        <img
          className="w-9 h-9 rounded-full"
          src="https://cdn.pixabay.com/photo/2023/06/04/23/09/desert-8041047_640.jpg"
          alt=""
        />
        <div className="ml-2">
          <p className="text-sm font-semibold">username</p>
          <p className="text-sm font-semibold opacity-70m">Follows you</p>
        </div>
      </div>
      <p className="text-blue-700 text-sm font-semibold">Follow</p>
    </div>
  );
};

export default SuggestionCard;
