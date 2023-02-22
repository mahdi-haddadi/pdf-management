import { Fragment, memo } from "react";
import { BsArrowsFullscreen } from "react-icons/bs";
import Button from "../../../components/button/Button";
import Tooltip from "../../../components/tooltip/Tooltip";
import { openFullscreen } from "../../../utils/fullScreen";
import ChangeLanguage from "./ChangeLanguage";
import FontSize from "./FontSize";
import Mode from "./Mode";

const Screen = memo(() => {
  return (
    // <Tooltip content={"hello world"} position="bottom">
    <Button
      color="link"
      className="cursor-pointer px-4 py-3"
      rounded={true}
      onClick={openFullscreen}
    >
      <BsArrowsFullscreen size={"1rem"} color={"#626477"} />
    </Button>
    // </Tooltip>
  );
});

const Actions = () => {
  const actions = {
    actions: [
      {
        id: 1,
        name: "CHANGE_LANGUAGE",
        content: <ChangeLanguage />,
      },
      {
        id: 2,
        name: "MODE",
        content: <Mode />,
      },
      {
        id: 3,
        name: "SCREEN",
        content: <Screen />,
      },
      {
        id: 4,
        name: "FONT_SIZE",
        content: <FontSize />,
      },
    ],
  };
  return (
    <Fragment>
      {actions.actions.map((action) => {
        return <Fragment key={action.id}>{action.content}</Fragment>;
      })}
    </Fragment>
  );
};

export default Actions;
