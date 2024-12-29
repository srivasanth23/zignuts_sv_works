import { BeatLoader } from "react-spinners";

function LoaderView() {
  return (
    <div className="p-4 d-flex flex-col justify-content-center align-items-center">
      <BeatLoader size={15}/>
    </div>
  );
}

export default LoaderView;
