import React from "react";

const PersonCard = (props) => {
  const {
    name,
    designation,
    img,
    colorFrom,
    colorTo,
    borderColor
  } = props;

  return (
    <div className={`border-2 rounded-xl overflow-hidden shadow-md ${borderColor}`}>
      <img
        src={img}
        alt={name}
        className="w-full h-60 object-cover"
      />
      <div className={`bg-gradient-to-r ${colorFrom} ${colorTo} text-white p-3 relative`}>
        {/* Dot + Line */}
        <div className="absolute left-3 top-3 flex flex-col items-center">
          <div className="w-2 h-2 bg-white rounded-full"></div>
          <div className="w-px h-full bg-white mt-1"></div>
        </div>

        <div className="pl-6">
          <h2 className="font-bold text-sm">{name}</h2>
          <p className="text-xs font-medium">{designation}</p>
        </div>
      </div>
    </div>
  );
};

export default PersonCard;
