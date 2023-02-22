import { Field, Form } from "react-final-form";
import { AiOutlineCaretDown } from "react-icons/ai";
import { BsFilePdfFill } from "react-icons/bs";
import Button from "../../components/button/Button";
import FileUploader from "../../components/fileUploader/FileUploader";
import Menu from "../../components/menu/Menu";
import MenuCore from "../../components/menu/MenuCore";
import MenuItem from "../../components/menu/MenuItem";
import MenuToggle from "../../components/menu/MenuToggle";
import TextField from "./../../components/input/textField/TextField";
const NewDocument = () => {
  const onSubmit = () => {};

  return (
    <div>
      <Form
        onSubmit={onSubmit}
        render={({ handleSubmit }) => {
          return (
            <form onSubmit={handleSubmit}>
              <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10 gap-y-8">
                <Field
                  name="title"
                  render={({ input, meta }) => {
                    return <TextField placeholder="عنوان" {...input} />;
                  }}
                />
                <Field
                  name="writer"
                  render={({ input, meta }) => {
                    return <TextField placeholder="نویسنده" {...input} />;
                  }}
                />
                <Field
                  name="subject"
                  render={({ input, meta }) => {
                    return <TextField placeholder="موضوع" {...input} />;
                  }}
                />
                <Field
                  name="subject"
                  render={({ input, meta }) => {
                    return <TextField placeholder="خوانده شده تا" {...input} />;
                  }}
                />
              </div>
              <Field
                name="desciption"
                render={({ input, meta }) => {
                  return (
                    <textarea
                      placeholder="توضیحات"
                      className="w-full mt-12"
                      {...input}
                    />
                  );
                }}
              />
              <div className="grid grid-cols-1 sm:grid-cols-3 mt-8">
                <div className="inline-block mb-4">
                  <MenuCore>
                    <MenuToggle>
                      <div className="w-full sm:w-60 px-2 py-3 rounded-sm inline-block text-text-primary border-2">
                        <div className="flex justify-between items-center">
                          <span>دسته بندی</span>
                          <AiOutlineCaretDown />
                        </div>
                      </div>
                    </MenuToggle>
                    <Menu className="w-full sm:w-60">
                      <MenuItem>دسته بندی 1</MenuItem>
                      <MenuItem>دسته بندی 2</MenuItem>
                      <MenuItem>دسته بندی 3</MenuItem>
                    </Menu>
                  </MenuCore>
                </div>
                <div className="inline-block mb-4">
                  <MenuCore>
                    <MenuToggle>
                      <div className="w-full sm:w-60 px-2 py-3 rounded-sm inline-block text-text-primary border-2">
                        <div className="flex justify-between items-center">
                          <span>وضعیت</span>
                          <AiOutlineCaretDown />
                        </div>
                      </div>
                    </MenuToggle>
                    <Menu className="w-full sm:w-60">
                      <MenuItem>وضعیت 1</MenuItem>
                      <MenuItem>وضعیت 2</MenuItem>
                      <MenuItem>وضعیت 3</MenuItem>
                    </Menu>
                  </MenuCore>
                </div>
                <div className="my-5 sm:my-0">
                  <FileUploader />
                </div>
              </div>
              <div className="my-5 sm:my-0 sm:w-2/12 h-64 mx-auto">
                <label htmlFor="pdf-file">
                  <input type="file" className="hidden" id="pdf-file" />
                  <div className="w-full h-full cursor-pointer">
                    <div className="border-2 border-dashed h-full var(--color-text-primary) flex justify-center items-center">
                      <BsFilePdfFill
                        size={"2rem"}
                        color="var(--color-text-primary)"
                      />
                    </div>
                  </div>
                </label>
              </div>
              <Button className="w-full sm:w-24 my-4">ذخیره</Button>
            </form>
          );
        }}
      />
    </div>
  );
};

export default NewDocument;
