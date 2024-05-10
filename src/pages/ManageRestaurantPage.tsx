import {
  useCreateMyRestaurant,
  useGetMyRestuarant,
} from "@/api/MyRestaurantApi";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading } = useCreateMyRestaurant();
  const { restaurant } = useGetMyRestuarant();
  return (
    <ManageRestaurantForm restaurant={restaurant} onSave={createRestaurant} isLoading={isLoading} />
  );
};

export default ManageRestaurantPage;
