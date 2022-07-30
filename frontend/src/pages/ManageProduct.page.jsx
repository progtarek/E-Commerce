import { StyledContainer, StyledFileUploader } from "../assets/styles/common";
import { Formik } from "formik";
import FormInput from "../components/input/Input.component";
import Button from "../components/button/Button.component";
import * as Yup from "yup";
import { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import {
  createProduct,
  uploadMedia,
  updateProduct,
  resetProducts,
} from "../store/reducers/products.reducer";
import { useDispatch } from "react-redux";
import { ReactComponent as TrashIcon } from "../assets/img/icons/ic-trash.svg";
import Loading from "../components/loading/Loading.component";
import { useNavigate, useParams } from "react-router-dom";
import { findProduct } from "../store/reducers/products.reducer";

const ValidationSchema = Yup.object().shape({
  imageURL: Yup.string().optional(),
  title: Yup.string()
    .min(10, "Min length is 10 !")
    .max(100, "Max length is 100 !")
    .required("This field is required"),
  description: Yup.string()
    .min(30, "Min length is 30 !")
    .max(500, "Max length is 500 !")
    .required("This field is required"),
  price: Yup.number()
    .min(30, "Min price is 30 !")
    .required("This field is required"),
});

let initialValues = { title: "", description: "", price: 0, imageURL: "" };

const ManageProduct = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [mode, setMode] = useState("create");
  const dispatch = useDispatch();
  const fileTypes = ["JPG", "PNG", "GIF"];
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      dispatch(findProduct(id)).then((res) => {
        setProduct(res?.payload);
        if (res?.payload?.imageURL) {
          setFile(res?.payload?.imageURL);
        }
        setMode("edit");
      });
    }
  }, [dispatch]);

  const handleOnFileChange = (file, setFieldValue) => {
    setLoading(true);
    setFile(window.URL.createObjectURL(file));
    const fd = new FormData();
    fd.append("image", file);

    dispatch(uploadMedia(fd))
      .then((result) => {
        setLoading(false);
        setFieldValue("imageURL", result?.payload?.url);
      })
      .catch((error) => {
        setLoading(false);
      });
  };

  const onRemoveImage = () => {
    setFile(null);
    setLoading(false);
  };

  return (
    <StyledContainer className="py-7">
      <Formik
        enableReinitialize={true}
        validationSchema={ValidationSchema}
        initialValues={{ ...initialValues, ...product }}
        onSubmit={(formValue, { setSubmitting }) => {
          setSubmitting(true);
          setLoading(true);
          dispatch(resetProducts());
          if (mode === "create") {
            dispatch(createProduct(formValue))
              .then((result) => {
                setLoading(false);
                navigate("/");
              })
              .catch((error) => {
                console.error(error);
                setLoading(false);
              });
          } else {
            dispatch(
              updateProduct({ id: product.uniqueName, payload: formValue })
            )
              .then((result) => {
                setLoading(false);
                navigate("/");
              })
              .catch((error) => {
                console.error(error);
                setLoading(false);
              });
          }
        }}
      >
        {({
          values,
          handleChange,
          handleBlur,
          handleSubmit,
          setFieldValue,
          isValid,
        }) => (
          <form onSubmit={handleSubmit}>
            <div className="grid grid-cols-2 gap-7 mb-5">
              {file ? (
                <div
                  className="flex items-center justify-center image-preview w-full bg-center h-28 bg-gray-100 bg-cover bg-no-repeat border-dashed border-2 border-gray-400 border m-auto relative overflow-hidden"
                  style={{ backgroundImage: `url(${file})` }}
                >
                  {loading ? null : (
                    <div
                      className="opacity-50 delete w-full h-9 w-9 absolute top-0 right-0 flex items-center justify-center bg-red-500 z-10 cursor-pointer hover:opacity-100 transition-all duration-300 ease-in-out"
                      onClick={() => {
                        onRemoveImage();
                        values.imageURL = "";
                      }}
                    >
                      <TrashIcon />
                    </div>
                  )}
                  {loading ? <Loading /> : null}
                </div>
              ) : (
                <StyledFileUploader>
                  <FileUploader
                    classes="media-uploader"
                    multiple={false}
                    handleChange={(e) => handleOnFileChange(e, setFieldValue)}
                    name="file"
                    types={fileTypes}
                  />
                </StyledFileUploader>
              )}
            </div>
            <div className="grid grid-cols-2 gap-7">
              <FormInput
                type="text"
                name="title"
                label="Title"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.title}
              />
              <FormInput
                type="text"
                name="description"
                label="Description"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.description}
              />
            </div>
            <div className="grid grid-cols-2 gap-7">
              <FormInput
                type="number"
                name="price"
                label="Price"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.price}
              />
            </div>

            <Button
              className="mt-5"
              type="submit"
              disabled={loading || !isValid}
            >
              {mode === "create" ? "Create Product" : "Save Product"}
            </Button>
          </form>
        )}
      </Formik>
    </StyledContainer>
  );
};

export default ManageProduct;
