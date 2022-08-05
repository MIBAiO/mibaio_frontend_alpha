import { useState } from "react";
import {
    GlassMagnifier,
    MagnifierContainer,
    MagnifierPreview,
    SideBySideMagnifier,
} from "react-image-magnifiers";
// import ReactImageMagnify from "react-image-magnify";
// import "./magnifier.css";

export default function Temp({ ...props }) {
    const imageBaseUrl =
        "https://res.cloudinary.com/olanetsoft/image/upload/cat.jpg";

    const [state, setState] = useState({
        alwaysInPlace: false,
        overlayOpacity: 0.6,
        switchSides: false,
        fillAvailableSpace: false,
        fillAlignTop: false,
        fillGapLeft: 0,
        fillGapRight: 10,
        fillGapTop: 10,
        fillGapBottom: 10,
    });

    const {
        alwaysInPlace,
        overlayOpacity,
        switchSides,
        fillAvailableSpace,
        fillAlignTop,
        fillGapLeft,
        fillGapRight,
        fillGapTop,
        fillGapBottom,
    } = state;

    const sizes = [
        "355",
        "481",
        "584",
        "687",
        "770",
        "861",
        "955",
        "1033",
        "1112",
        "1192",
        "1200",
    ];

    // const { image, largeImage } = props;
    const image =
        "https://adamrisberg.github.io/react-image-magnifiers/4700d4cb26b14563be996aa5f0c53ca2.jpg";
    const largeImage = null;

    const srcSet = () => {
        sizes.forEach((i) => {
            return `https://res.cloudinary.com/olanetsoft/image/upload/w_${i},c_scale/cat.jpg`;
        });
    };
    return (
        <MagnifierContainer>
            <div className="example-class">
                <GlassMagnifier
                    className="input-position"
                    imageSrc={image}
                    allowOverflow={true}
                    magnifierSize="30%"
                    {...state}
                />
            </div>
        </MagnifierContainer>
    );
}

// {/* <ReactImageMagnify
//         {...{
//             smallImage: {
//                 alt: "Cat",
//                 isFluidWidth: true,
//                 src: `${imageBaseUrl}`,
//                 srcSet,
//                 sizes: "(min-width: 1000px) 33.5vw, (min-width: 415px) 50vw, 100vw",
//             },
//             largeImage: {
//                 alt: "",
//                 src: `${imageBaseUrl}`,
//                 width: 1200,
//                 height: 1800,
//             },
//             isHintEnabled: true,
//         }}
//     /> */}
