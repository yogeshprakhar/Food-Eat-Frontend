import landingImage from "../assets/landing.png";
import appImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const HomePage = () => {
  
  useEffect(() => {
    //  add health check here to run the backend server
    const health = async() =>{
      const response = await fetch(`${import.meta.env.VITE_API_BASE_URL}/health`);
      console.log(response.json())
    }
    health()
  }, []);

  const navigate = useNavigate();
  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white md:px-32 rounded-lg flex flex-col gap-5 text-center -mt-16 shadow-md py-8">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck into a takeway today
        </h1>
        <span className="text-xl"> Food is just click away</span>
        <SearchBar
          placeholder="Search by City Ex- Delhi,Kolkata,Mumbai "
          onSubmit={handleSearchSubmit}
        />
      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="font-bold text-3xl tracking-tighter">
            Order takeway even faster
          </span>
          <span>
            Download the Foodeat App for faster ordering and recomedination
          </span>
          <img src={appImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
