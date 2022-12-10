import world from './world.png';
function Navbar() {
  return (
    <nav className="bg-[#f55a5a] py-3 flex items-center justify-center gap-2">
        <img src={world} className="" alt="world" />
        <p className='text-[#ffffff]'>my travel journal.</p>
    </nav>
  );
}

export default Navbar;

