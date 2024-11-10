import axios from "axios";

export const getCategories = async () => {
  try {
    const res = await axios.get(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/category/show`
    );
    return res.data;
  } catch (error) {
    console.log(error);
    return [];
  }
};