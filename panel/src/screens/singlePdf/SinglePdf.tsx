import { Fragment } from "react";
import { AiFillDelete } from "react-icons/ai";
import { BsPencilFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import Dialog from "../../components/Dialog/Dialog";
import useToggle from "../../hooks/useToggle";
const SinglePdf = () => {
  const {
    close: closeDeleteModal,
    open: openDeleteModal,
    state: showModalDeleteFile,
  } = useToggle();
  return (
    <Fragment>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="">
          <img src="./../images/test.png" alt="" />
        </div>
        <div className="md:col-span-2 flex flex-col">
          <h1 className="text-xl my-2 text-text-primary">جنگ نرم</h1>
          <span className="my-2 text-text-primary"> 200 صفحه</span>
          <span className="my-2 text-text-primary">نویسنده : نشر ادب</span>
          <span className="my-2 text-text-primary">موضوع : سیاسی</span>
          <span className="my-2 text-text-primary">وضعیت : خوانده شده</span>
          <span className="my-2 text-text-primary">مطالعه تا صفحه : 20</span>
        </div>
        <div className="flex justify-end items-end">
          <Link to={"/update-document/1"}>
            <Button color="info-outline" className="mx-1">
              <BsPencilFill />
            </Button>
          </Link>
          <Button
            color="danger-outline"
            className="mx-1"
            onClick={openDeleteModal}
          >
            <AiFillDelete />
          </Button>
        </div>
      </div>
      <div>
        <p className="my-8 px-6 text-text-secondary text-justify">
          لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده
          از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و
          سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای
          متنوع با هدف بهبود ابزارهای کاربردی می باشد. کتابهای زیادی در شصت و سه
          درصد گذشته، حال و آینده شناخت فراوان جامعه و متخصصان را می طلبد تا با
          نرم افزارها شناخت بیشتری را برای طراحان رایانه ای علی الخصوص طراحان
          خلاقی و فرهنگ پیشرو در زبان فارسی ایجاد کرد. در این صورت می توان امید
          داشت که تمام و دشواری موجود در ارائه راهکارها و شرایط سخت تایپ به
          پایان رسد وزمان مورد نیاز شامل حروفچینی دستاوردهای اصلی و جوابگوی
          سوالات پیوسته اهل دنیای موجود طراحی اساسا مورد استفاده قرار گیرد.
        </p>
      </div>
      <Button color="primary-outline" className="float-left">
        مطالعه
      </Button>
      <Dialog IsClose={closeDeleteModal} open={showModalDeleteFile} size="sm">
        <Dialog.Header className="py-4 text-center border-b-2 border-blue-300">
          <strong>حذف فایل</strong>
        </Dialog.Header>
        <Dialog.Body className="my-10 px-4">
          <p>
            فایل <strong>جنگ نرم </strong> حذف شود؟
          </p>
        </Dialog.Body>
        <Dialog.Footer>
          <Button color="danger">حذف</Button>
          <Button color="link" className="mx-2" onClick={closeDeleteModal}>
            لغو
          </Button>
        </Dialog.Footer>
      </Dialog>
    </Fragment>
  );
};

export default SinglePdf;
