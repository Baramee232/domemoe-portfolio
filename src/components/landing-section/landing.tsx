import "./landing.css";
export default function Landing() {
  return (
    <>
      <div className="h-[70vh] w-full  flex">
        <div className="h-full w-[30%] card bg-white px-10 py-20 flex flex-col justify-end">
          <div className="text-4xl font-semibold drop-shadow-xl">Domemie</div>
          <div className="text-5xl font-semibold drop-shadow-xl">
            Baramee Saiphan
          </div>
          <div className="text-gray-500 text-xl pt-2">
            3D Artist & Game Designer
          </div>
          <p className="pt-5 text-gray-500 break-all">
            Welcome to a world where creativity meets technology. As a
            passionate 3D artist and game designer, I specialize in crafting
            visually stunning environments, detailed characters, and dynamic
            gameplay experiences that engage and inspire. With a deep
            understanding of both artistic and technical aspects, I bring ideas
            to life through cutting-edge design, blending storytelling with
            interactive elements to create immersive worlds. Whether it's
            conceptualizing new game mechanics or pushing the limits of 3D art,
            I strive to deliver experiences that are both visually compelling
            and unforgettable.
          </p>
        </div>
        <div className="w-[70%] h-full flex justify-center items-end relative bg-gray-">
          <div className="w-[600px] h-auto">
            <img className="w-full h-full" src="./images/idomeNoBG.png" />
            <div className="tag text-pink-500 top-10 left-[25%]">
              "Creative"
            </div>
            <div className="tag text-orange-500 top-[30%] left-[60%]">
              "Design"
            </div>
            <div className="tag text-red-500 top-[65%] left-[15%]">
              "Artist"
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
