import { Fragment } from "react";
import Combobox from "../../components/combobox/Combobox";
import ComboboxToggle from "../../components/combobox/components/ComboboxToggle";
import ComboboxList from "../../components/combobox/components/ComboboxList";
import TextField from "./../../components/input/textField/TextField";

const Main = () => {
  const description_main = [
    {
      id: 1,
      title: "تعداد فایل ها",
      total: "562",
    },
    {
      id: 2,
      title: "فایل های خوانده شده",
      total: "417",
    },
    {
      id: 3,
      title: "دسته بندی",
      total: "8",
    },
  ];

  return (
    <Fragment>
      <div className={"w-full"}>
        <div className={"flex justify-center items-center"}>
          {description_main.map((item) => {
            return (
              <div
                key={item.id}
                className={
                  "text-xl mx-2 bg-bg-default shadow-xl p-6 flex justify-center items-center rounded-xl flex-col w-full md:w-64"
                }
              >
                <p className={"text-center text-text-primary"}>{item.title}</p>
                <p className={"text-center mt-3 text-text-primary"}>
                  {item.total}
                </p>
              </div>
            );
          })}
        </div>
        <div className="container">
          <div className="config w-full bg-bg-default rounded-lg p-5 my-8">
            <div className="search">
              <TextField />
            </div>
            <div className="category">
              <Combobox>
                <ComboboxToggle>
                  دسته بندی
                </ComboboxToggle>
                <ComboboxList>
                  <ul>
                    <li>one</li>
                    <li>two</li>
                  </ul>
                </ComboboxList>
              </Combobox>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Main;
