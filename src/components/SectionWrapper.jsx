import React from "react";

import styles from "../styles/Global";
import assets from "../assets";
import Button from "./Button";

const SectionWrapper = ({
  title,
  description,
  showBtn,
  mockupImg,
  banner,
  reverse,
}) => {
  return (
    <div
      className={`min-h-screen ${styles.section} 
      ${reverse ? styles.bgWhite : styles.bgPrimary} 
      ${banner}`}
    >
      <div
        className={`flex items-center 
        ${reverse ? styles.boxReverseClass : styles.boxClass} 
        w-11/12 sm:w-full minmd:w-3/4`}
      >
        <div
          className={`${styles.descDiv} 
          ${reverse ? " fadeRightMini" : " fadeLeftMini"}
          ${reverse ? styles.textRight : styles.textLeft}
        `}
        >
          <h1
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.h1Text}`}
          >
            {title}
          </h1>
          <p
            className={`
          ${reverse ? styles.blackText : styles.whiteText}
          ${styles.descriptionText}`}
          >
            {description}
          </p>
          {showBtn && (
            <Button
              assetUrl={assets.expo}
              link="https://expo.dev/accounts/abhishekkuntare/projects/pronef/builds/4d7f8b38-b79e-46a7-a946-daa67e7ea037"
            />
          )}
        </div>
        <div className={`flex-1 ${styles.flexCenter}p-8 sm:px-0`}>
          <img
            src={mockupImg}
            alt="mockup"
            className={`
           ${reverse ? " fadeLeftMini" : " fadeRightMini"}
          ${styles.sectionImg}`}
          />
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper;
