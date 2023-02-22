import { useState } from "react";
import TextField from "./../../components/input/textField/TextField";
import Button from "../../components/button/Button";
import MenuCore from "../../components/menu/MenuCore";
import Menu from "../../components/menu/Menu";
import MenuItem from "../../components/menu/MenuItem";
import MenuToggle from "../../components/menu/MenuToggle";
import { AiOutlineCaretDown } from "react-icons/ai";
import Checkbox, { LabelCheckbox } from "../../components/checkbox/Checkbox";
import Switch from "../../components/switch/Switch";
import { BsFillHddStackFill, BsGridFill } from "react-icons/bs";
import Paper from "../../components/paper/Paper";
import { Link } from "react-router-dom";
import PaginationNumber from "../../components/pagination/PaginationNumber";

type IMode = "VERTICAL" | "HERIZONTAL";

const VerticalMode = () => {
  return (
    <div className="grid md:grid-cols-3 grid-cols-1 gap-9 mx-9">
      <Paper className="relative group">
        <div className="absolute transition-opacity top-0 left-0 opacity-0 w-full h-full bg-gray-500 group-hover:opacity-100">
          <div className="h-full flex flex-col justify-around items-center">
            <h1 className="text-lg text-center my-2 text-text-primary">
              جنگ نرم
            </h1>
            <span className="text-text-primary"> 200 صفحه</span>
            <span className="text-text-primary">نویسنده : نشر ادب</span>
            <span className="text-text-primary">موضوع : سیاسی</span>
            <span className="text-text-primary">وضعیت : خوانده شده</span>
            <Link to={"/single/1"}>
              <Button color="info-outline">بیشتر</Button>
            </Link>
          </div>
        </div>
        <img src="./images/test.png" alt="" className="w-full object-cover" />
        <div>
          <h1 className="text-lg text-center my-2">جنگ نرم</h1>
        </div>
      </Paper>
      <Paper className="relative group">
        <div className="absolute transition-opacity top-0 left-0 opacity-0 w-full h-full bg-gray-500 group-hover:opacity-100">
          <div className="h-full flex flex-col justify-around items-center">
            <h1 className="text-lg text-center my-2 text-text-primary">
              جنگ نرم
            </h1>
            <span className="text-text-primary"> 200 صفحه</span>
            <span className="text-text-primary">نویسنده : نشر ادب</span>
            <span className="text-text-primary">موضوع : سیاسی</span>
            <span className="text-text-primary">وضعیت : خوانده شده</span>
            <Link to={"/"}>
              <Button color="info-outline">بیشتر</Button>
            </Link>
          </div>
        </div>
        <img src="./images/test.png" alt="" className="w-full object-cover" />
        <div>
          <h1 className="text-lg text-center my-2">جنگ نرم</h1>
        </div>
      </Paper>
      <Paper className="relative group">
        <div className="absolute transition-opacity top-0 left-0 opacity-0 w-full h-full bg-gray-500 group-hover:opacity-100">
          <div className="h-full flex flex-col justify-around items-center">
            <h1 className="text-lg text-center my-2 text-text-primary">
              جنگ نرم
            </h1>
            <span className="text-text-primary"> 200 صفحه</span>
            <span className="text-text-primary">نویسنده : نشر ادب</span>
            <span className="text-text-primary">موضوع : سیاسی</span>
            <span className="text-text-primary">وضعیت : خوانده شده</span>
            <Link to={"/"}>
              <Button color="info-outline">بیشتر</Button>
            </Link>
          </div>
        </div>
        <img src="./images/test.png" alt="" className="w-full object-cover" />
        <div>
          <h1 className="text-lg text-center my-2">جنگ نرم</h1>
        </div>
      </Paper>
      <Paper className="relative group">
        <div className="absolute transition-opacity top-0 left-0 opacity-0 w-full h-full bg-gray-500 group-hover:opacity-100">
          <div className="h-full flex flex-col justify-around items-center">
            <h1 className="text-lg text-center my-2 text-text-primary">
              جنگ نرم
            </h1>
            <span className="text-text-primary"> 200 صفحه</span>
            <span className="text-text-primary">نویسنده : نشر ادب</span>
            <span className="text-text-primary">موضوع : سیاسی</span>
            <span className="text-text-primary">وضعیت : خوانده شده</span>
            <Link to={"/"}>
              <Button color="info-outline">بیشتر</Button>
            </Link>
          </div>
        </div>
        <img src="./images/test.png" alt="" className="w-full object-cover" />
        <div>
          <h1 className="text-lg text-center my-2">جنگ نرم</h1>
        </div>
      </Paper>
    </div>
  );
};

const HerizontalMode = () => {
  return (
    <div className="grid grid-cols-1">
      <Paper className="w-full grid grid-cols-4 bg-bg-default gap-6 relative my-4">
        <div className="">
          <img src="./images/test.png" alt="" />
        </div>
        <div className="col-span-3">
          <h1 className="text-lg my-2 text-text-primary">جنگ نرم</h1>
          <div className="flex flex-col">
            <span className="text-text-primary my-2"> 200 صفحه</span>
            <span className="text-text-primary my-2">نویسنده : نشر ادب</span>
            <span className="text-text-primary my-2">موضوع : سیاسی</span>
            <span className="text-text-primary my-2">وضعیت : خوانده شده</span>
            <Link to={"/"} className="absolute bottom-4 left-4">
              <Button color="info-outline">بیشتر</Button>
            </Link>
          </div>
        </div>
      </Paper>
      <Paper className="w-full grid grid-cols-4 bg-bg-default gap-6 relative my-4">
        <div className="">
          <img src="./images/test.png" alt="" />
        </div>
        <div className="col-span-3">
          <h1 className="text-lg my-2 text-text-primary">جنگ نرم</h1>
          <div className="flex flex-col">
            <span className="text-text-primary my-2"> 200 صفحه</span>
            <span className="text-text-primary my-2">نویسنده : نشر ادب</span>
            <span className="text-text-primary my-2">موضوع : سیاسی</span>
            <span className="text-text-primary my-2">وضعیت : خوانده شده</span>
            <Link to={"/"} className="absolute bottom-4 left-4">
              <Button color="info-outline">بیشتر</Button>
            </Link>
          </div>
        </div>
      </Paper>
      <Paper className="w-full grid grid-cols-4 bg-bg-default gap-6 relative my-4">
        <div className="">
          <img src="./images/test.png" alt="" />
        </div>
        <div className="col-span-3">
          <h1 className="text-lg my-2 text-text-primary">جنگ نرم</h1>
          <div className="flex flex-col">
            <span className="text-text-primary my-2"> 200 صفحه</span>
            <span className="text-text-primary my-2">نویسنده : نشر ادب</span>
            <span className="text-text-primary my-2">موضوع : سیاسی</span>
            <span className="text-text-primary my-2">وضعیت : خوانده شده</span>
            <Link to={"/"} className="absolute bottom-4 left-4">
              <Button color="info-outline">بیشتر</Button>
            </Link>
          </div>
        </div>
      </Paper>
      <Paper className="w-full grid grid-cols-4 bg-bg-default gap-6 relative my-4">
        <div className="">
          <img src="./images/test.png" alt="" />
        </div>
        <div className="col-span-3">
          <h1 className="text-lg my-2 text-text-primary">جنگ نرم</h1>
          <div className="flex flex-col">
            <span className="text-text-primary my-2"> 200 صفحه</span>
            <span className="text-text-primary my-2">نویسنده : نشر ادب</span>
            <span className="text-text-primary my-2">موضوع : سیاسی</span>
            <span className="text-text-primary my-2">وضعیت : خوانده شده</span>
            <Link to={"/"} className="absolute bottom-4 left-4">
              <Button color="info-outline">بیشتر</Button>
            </Link>
          </div>
        </div>
      </Paper>
    </div>
  );
};

const ChooseMode = ({ displayMode }: { displayMode: string }) => {
  switch (displayMode) {
    case "VERTICAL":
      return <VerticalMode />;
    case "HERIZONTAL":
      return <HerizontalMode />;
    default:
      return <VerticalMode />;
  }
};

const Main = () => {
  const [readStatus, setReadStatus] = useState(false);
  const [displayMode, setDisplayMode] = useState("VERTICAL");

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
        <div className="config w-full bg-bg-default rounded-lg p-5 my-8 relative">
          <div className="flex items-center">
            <div className="search">
              <TextField placeholder="جستوجو" />
            </div>
            <div className="category mx-auto inline-block">
              <MenuCore>
                <MenuToggle>
                  <div className="w-40 p-2 bg-bg-paper flex items-center justify-between">
                    <span>دسته بندی</span>
                    <AiOutlineCaretDown />
                  </div>
                </MenuToggle>
                <Menu className="w-40">
                  <MenuItem>1</MenuItem>
                  <MenuItem>2</MenuItem>
                </Menu>
              </MenuCore>
            </div>
          </div>
          <div className="flex items-center mt-8">
            <MenuCore>
              <MenuToggle>
                <div className="w-60 p-2 bg-bg-paper flex items-center justify-between">
                  <span>مرتب سازی براساس</span>
                  <AiOutlineCaretDown />
                </div>
              </MenuToggle>
              <Menu className="w-60">
                <MenuItem>1</MenuItem>
                <MenuItem>2</MenuItem>
              </Menu>
            </MenuCore>
            <div className="flex flex-row-reverse mx-9">
              <Checkbox
                checked={readStatus}
                setChecked={() => setReadStatus(!readStatus)}
              >
                <LabelCheckbox className="mx-2">خوانده شده</LabelCheckbox>
                <Switch />
              </Checkbox>
            </div>
          </div>
          <div className="absolute top-full right-0 p-3 flex justify-between items-center">
            <Button
              color={displayMode === "VERTICAL" ? "link" : "light"}
              onClick={() => setDisplayMode("VERTICAL")}
            >
              <BsFillHddStackFill />
            </Button>
            <Button
              color={displayMode === "HERIZONTAL" ? "link" : "light"}
              onClick={() => setDisplayMode("HERIZONTAL")}
            >
              <BsGridFill />
            </Button>
          </div>
        </div>
      </div>
      <div className="items my-24">
        <ChooseMode displayMode={displayMode} />
      </div>
      <PaginationNumber />
    </div>
  );
};

export default Main;
