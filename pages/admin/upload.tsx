import React, { useState, useRef } from "react";
import styles from "./styles/admin.module.css";

const Upload = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const photographyRef = useRef<HTMLInputElement | null>(null);
  const cookeryRef = useRef<HTMLInputElement | null>(null);
  const [postData, setPostData] = useState({
    country: "",
    caption: "",
    image: "",
  });

  const [ref, setRef] = useState<any>(null);

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();
    if (e.target.id === "photography") {
      setRef(photographyRef.current);
    } else if (e.target.id === "cookery") {
      setRef(cookeryRef.current);
    }

    if (null !== ref.files) {
      reader.readAsDataURL(ref.files[0] as Blob);
      reader.onload = () => {
        setPostData({ ...postData, image: reader.result as string });
      };
    }
  };

  const handleSubmit = (e: React.SyntheticEvent) => {
    e.preventDefault();
    setPostData({
      country: "",
      caption: "",
      image: "",
    });
    if (null !== formRef.current) {
      formRef.current.reset();
    }
  };
  return (
    <div>
      <div className={styles.mask}></div>
      <div className={styles.titleOverlay}>
        <div>
          Login
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <input placeholder="username" />
            <input placeholder="password" type="password" />
            <input type="submit" value="Authenticate" />
          </form>
        </div>
        <div>
          Photography
          <form
            ref={formRef}
            autoComplete="off"
            noValidate
            onSubmit={handleSubmit}
          >
            <input
              placeholder="country"
              onChange={(e) =>
                setPostData({ ...postData, country: e.target.value })
              }
            />
            <input
              placeholder="caption"
              onChange={(e) =>
                setPostData({ ...postData, caption: e.target.value })
              }
            />
            <input
              type="file"
              id="photography"
              ref={photographyRef}
              accept="image/png, image/jpeg"
              onChange={handleImage}
            />
            <input type="submit" value="Upload"></input>
          </form>
        </div>
        <div>
          Cookery
          <form autoComplete="off" noValidate onSubmit={handleSubmit}>
            <input />
            <input />
            <input
              type="file"
              id="cookery"
              ref={cookeryRef}
              accept="image/png, image/jpeg"
              onChange={handleImage}
            />
            <input type="submit" value="Upload"></input>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Upload;
