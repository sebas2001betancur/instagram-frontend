import React from "react";
import StoryViwer from "../../Components/StoryComponents/StoryViwer";

const Story = () => {
  const story = [
    {
      image:
        "https://images.pexels.com/photos/16102236/pexels-photo-16102236/free-photo-of-paisaje-naturaleza-colina-hierba.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      image:
        "https://images.pexels.com/photos/16697135/pexels-photo-16697135/free-photo-of-volador-mujer-hierba-vestido.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      image:
        "https://images.pexels.com/photos/17291645/pexels-photo-17291645/free-photo-of-edificios-ventanas-urbano-pueblo.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      image:
        "https://images.pexels.com/photos/17088085/pexels-photo-17088085/free-photo-of-edificios-arboles-pueblo-paisaje-urbano.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
    {
      image:
        "https://images.pexels.com/photos/17150180/pexels-photo-17150180/free-photo-of-nieve-mar-paisaje-naturaleza.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
    },
  ];
  return (
    <div>
      <StoryViwer stories={story} />
    </div>
  );
};

export default Story;
