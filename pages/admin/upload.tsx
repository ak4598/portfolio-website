import React, { useState, useRef } from "react";
import styles from "./styles/admin.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

const Upload = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const photographyRef = useRef<HTMLInputElement | null>(null);
  const cookeryRef = useRef<HTMLInputElement | null>(null);
  const [postData, setPostData] = useState({
    country: "",
    caption: "",
    image: "",
  });

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.id === "photography") {
      if (null !== photographyRef.current?.files) {
        reader.readAsDataURL(photographyRef.current?.files[0] as Blob);
        reader.onload = () => {
          setPostData({ ...postData, image: reader.result as string });
        };
      }
    } else if (e.target.id === "cookery") {
      if (null !== cookeryRef.current?.files) {
        try {
          reader.readAsDataURL(cookeryRef.current?.files[0] as Blob);
          reader.onload = () => {
            setPostData({ ...postData, image: reader.result as string });
          };
        } catch (error: any) {
          alert("Please choose a file!");
        }
      }
    }
  };

  const handleAuth = async () => {};

  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("/api/images/add-country-image", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(postData),
      method: "POST",
    });

    if (response.status === 201) {
      // clear form
      setPostData({
        country: "",
        caption: "",
        image: "",
      });
      if (null !== formRef.current) {
        formRef.current.reset();
      }

      alert("Uploaded");
    } else {
      alert("Cannot upload!");
    }
  };

  const { data: session } = useSession();
  if (session) {
    return (
      <div>
        <div className={styles.mask}></div>
        <div className={styles.titleOverlay}>
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
          <button onClick={() => signOut()}>Sign out</button>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className={styles.mask}></div>
      <div className={styles.titleOverlay}>
        Not signed in <br />
        <button onClick={() => signIn()}>Sign in</button>
      </div>
    </div>
  );
};

export default Upload;
