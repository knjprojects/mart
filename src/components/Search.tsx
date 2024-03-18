// /components/SearchComponent.js
import { useRouter } from 'next/navigation';
import { IoMdSearch } from "react-icons/io";
const SearchComponent = () => {
  const router = useRouter();

  const handleSearch = (event:any) => {
    event.preventDefault();
    const searchQuery = event.target.elements.search.value;
    router.push(`/products?search=${searchQuery}`);
  };

  return (
        <div className="relative group hidden sm:block">
            <form onSubmit={handleSearch}>
                <input type="text" name="search" placeholder='Search' />
                <button type="submit"><IoMdSearch className="text-xl text-gray-600 group-hover:text-primary dark:text-gray-400 absolute top-1/2 -translate-y-1/2 right-3 duration-200" /></button>
            </form>
            
        </div>
  );
};

export default SearchComponent;