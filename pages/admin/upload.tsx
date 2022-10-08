import React, { useState, useRef } from "react";
import styles from "./styles/admin.module.css";
import { useSession, signIn, signOut } from "next-auth/react";

const Upload = () => {
  const formRefPhotography = useRef<HTMLFormElement | null>(null);
  const formRefCookery = useRef<HTMLFormElement | null>(null);

  const photographyRef = useRef<HTMLInputElement | null>(null);
  const cookeryRef = useRef<HTMLInputElement | null>(null);
  const [postDataPhotography, setPostDataPhotography] = useState({
    country: "",
    caption: "",
    image: "",
  });

  const [postDataCookery, setPostDataCookery] = useState({
    cuisine: "",
    name: "",
    image: "",
    steps: [""],
    time: 0,
    difficulty: 0,
  });

  const handleImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const reader = new FileReader();

    if (e.target.id === "photography") {
      if (null !== photographyRef.current?.files) {
        reader.readAsDataURL(photographyRef.current?.files[0] as Blob);
        reader.onload = () => {
          setPostDataPhotography({
            ...postDataPhotography,
            image: reader.result as string,
          });
        };
      }
    } else if (e.target.id === "cookery") {
      if (null !== cookeryRef.current?.files) {
        try {
          reader.readAsDataURL(cookeryRef.current?.files[0] as Blob);
          reader.onload = () => {
            setPostDataPhotography({
              ...postDataPhotography,
              image: reader.result as string,
            });
          };
        } catch (error: any) {
          alert("Please choose a file!");
        }
      }
    }
  };

  const handleSubmitPhotography = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("/api/images/add-country-image", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(postDataPhotography),
      method: "POST",
    });

    if (response.status === 201) {
      // clear form
      setPostDataPhotography({
        country: "",
        caption: "",
        image: "",
      });
      if (null !== formRefPhotography.current) {
        formRefPhotography.current.reset();
      }

      alert("Uploaded");
    } else {
      alert("Cannot upload!");
    }
  };
  const handleSubmitCookery = async (e: React.SyntheticEvent) => {
    e.preventDefault();

    const response = await fetch("/api/images/add-food-image", {
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
      body: JSON.stringify(postDataCookery),
      method: "POST",
    });

    if (response.status === 201) {
      // clear form
      setPostDataCookery({
        cuisine: "",
        name: "",
        image: "",
        steps: [""],
        time: 0,
        difficulty: 0,
      });
      if (null !== formRefCookery.current) {
        formRefCookery.current.reset();
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
              ref={formRefPhotography}
              autoComplete="off"
              noValidate
              onSubmit={handleSubmitPhotography}
            >
              <input
                placeholder="country"
                onChange={(e) =>
                  setPostDataPhotography({
                    ...postDataPhotography,
                    country: e.target.value,
                  })
                }
              />
              <input
                placeholder="caption"
                onChange={(e) =>
                  setPostDataPhotography({
                    ...postDataPhotography,
                    caption: e.target.value,
                  })
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
            <form
              ref={formRefCookery}
              autoComplete="off"
              noValidate
              onSubmit={handleSubmitCookery}
            >
              <input
                placeholder="cuisine"
                onChange={(e) =>
                  setPostDataCookery({
                    ...postDataCookery,
                    cuisine: e.target.value,
                  })
                }
              />
              <input
                placeholder="name"
                onChange={(e) =>
                  setPostDataCookery({
                    ...postDataCookery,
                    name: e.target.value,
                  })
                }
              />
              <input
                placeholder="steps"
                onChange={(e) =>
                  setPostDataCookery({
                    ...postDataCookery,
                    steps: e.target.value.split("|"),
                  })
                }
              />
              <input
                placeholder="time"
                onChange={(e) =>
                  setPostDataCookery({
                    ...postDataCookery,
                    time: e.target.value as unknown as number,
                  })
                }
              />
              <input
                placeholder="difficulty"
                onChange={(e) =>
                  setPostDataCookery({
                    ...postDataCookery,
                    difficulty: e.target.value as unknown as number,
                  })
                }
              />

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
