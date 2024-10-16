import "./navbar.css";
export default function Navbar() {
  return (
    <>
      <div className="w-full h-[10vh] bg-red-500 sticky top-0 flex justify-between items-center px-20 z-20">
        <div className=" flex items-center justify-center text-5xl font-semibold text-white">
          Domemie
        </div>
        <div className="flex gap-10 text-2xl text-white ">
          <div className="nav-btn">
            <a href="#profiles">Profile</a>
          </div>
          <div className="nav-btn">
            <a href="#projects">Project</a>
          </div>
        </div>
      </div>
    </>
  );
}
