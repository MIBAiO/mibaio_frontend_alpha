import React from 'react';
import Card from '../Card/Card';
import styles from './Loader.module.css';
import {BounceLoader, BeatLoader} from 'react-spinners';

const Loader = ({ message }) => {
    return (
        <div  className="loader" >
            {/* <BounceLoader  size={132} color='blue' loading /> */}
            {/* <Card className="loader">
                <svg
                    className={styles.spinner}
                    width="42"
                    height="42"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <circle
                        cx="21"
                        cy="21"
                        r="18"
                        // stroke="#C4C5C5"
                        strokeWidth="4"
                    />
                    <path
                        d="M20.778 1.001A20 20 0 111.542 25.627l3.876-.922a16.016 16.016 0 1015.404-19.72l-.044-3.984z"
                        fill="#5453E0"
                    />
                </svg>
                <span className={styles.message}>{message}</span>
            </Card> */}
            <div class="preloader" id="loading">
      <div class="preloader-body">
        <div id="loading-center-object">
          <div class="object" id="object_four"></div>
          <div class="object" id="object_three"></div>
          <div class="object" id="object_two"></div>
          <div class="object" id="object_one"></div>
        </div>
        <span>Good things take time</span>
      </div>
    </div>
        </div>
    );
};

export default Loader;
