import { AiOutlineCloudUpload } from "react-icons/ai";
import Button from "../button/Button";

const FileUploader = () => {
  return (
    <div className="flex justify-center flex-col">
      <div className="w-full rounded-lg shadow-xl border-2">
        <div className="flex items-center justify-center w-full p-2">
          <label className="flex justify-center w-full h-auto border-4 border-gray-500 border-dashed cursor-pointer hover:bg-bg-default">
            <div className="flex items-center justify-center py-2">
              <AiOutlineCloudUpload color="gray" size={"1.2rem"} />
              <span className="text-text-secondary mx-3 text-sm">عکس شاخص</span>
            </div>
            <input type="file" className="hidden" />
          </label>
        </div>
        <div className="px-2 my-2">
          <Button color="primary-outline" className="w-full">
            آپلود
          </Button>
        </div>
      </div>
      <div className="progress w-full my-6" dir="ltr">
        <div className="bar h-5 w-full rounded-xl bg-gray-400 border-2 overflow-hidden">
          <div className="fill w-1/2 h-full bg-blue-500 text-center text-text-primary transition-all text-sm">
            50%
          </div>
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
