import axios from "axios";
import { toast } from "@/components/ui/use-toast";
import { __ } from "./getElementById";

export const handleFormUpdate = async (field, value, url, id) => {
  if (!value) return false;
  const fieldName = __(field);
  fieldName.innerHTML = "Updating...";
  fieldName.disabled = true;
  try {
    const response = await axios.put(`/api/${url}`, {
      id,
      value,
      field,
    });

    if (response.data.message !== "success") {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: response.data.message,
      });
    } else {
      toast({
        description: `Updated successfully.`,
        className: "bg-green-500 text-white",
      });
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  } catch (error) {
    console.log(error);
  } finally {
    fieldName.innerHTML = "Update";
    fieldName.disabled = false;
  }
};
