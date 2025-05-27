import Lottie from "lottie-react";
import loader from "@/assets/animations/loader.json";

const Spinner = () => {
  return (
    <div className="">
      <Lottie loop={true} animationData={loader} className="h-10" />
    </div>
  );
};

export default Spinner;
