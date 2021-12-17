import unsplash, { toJson } from "unsplash-js";

const unsplash = new unsplash({
    accessKey: "CeyllinLVkey-bs_VRh_uLRE7YE8i5XEopU9zlcvV_k",
});

export default function SetPhotos() {
    const SetPhoto = async (e) => {
        e.preventDefault();
        console.log("Submitting the Form")
    }
    SetPhoto();
};

