import axios from "axios";
import { apiUrl } from "@/utils/environments";
import { sanitizeObject } from "@/utils/sanitize";
import {
  setContactLoading,
  setContactMessage,
} from "@/store/slices/commonSlice";
import { messageType } from "@/utils/lib";

export const sendContactDetails = (payload) => async (dispatch) => {
  try {
    dispatch(
      setContactMessage({
        message: "",
        type: "",
      })
    );
    dispatch(setContactLoading(true));
    const response = await axios.post(
      `/api/contact-us`,
      sanitizeObject(payload)
    );
    const { status } = response?.data || {}
    if (status == 200) {
      dispatch(
        setContactMessage({
          message:
            "Thank you for contacting us. We'll get back to you shortly.",
          type: messageType.SUCCESS,
        })
      );

      return true;
    }
    dispatch(
      setContactMessage({
        message: "Failed to contacting us.",
        type: messageType.ERROR,
      })
    );
    return false;
  } catch (error) {
    dispatch(
      setContactMessage({
        message: "Something went wrong",
        type: messageType.ERROR,
      })
    );
  } finally {
    dispatch(setContactLoading(false));
  }
};
