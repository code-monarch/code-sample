import React from "react";
import { IconProps } from "@design-system/types";

interface IPulsePlaceholder extends IconProps{
    bar_height?: string;
    bar_width?: string;
}

const PulsePlaceholder = (props: IPulsePlaceholder) => {
  const { width, height, bar_height, bar_width } = props;
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      xmlnsXlink='http://www.w3.org/1999/xlink'
      style={{
        margin: "auto",
        background: "rgb(255, 255, 255)",
        display: "block",
        shapeRendering: "auto",
      }}
      width={width ?? "80px"}
      height={height ?? "80px"}
      viewBox='0 0 100 100'
      preserveAspectRatio='xMidYMid'
    >
      <rect
        x='17'
        y='14'
        width={bar_width ?? "16"}
        height={bar_height ?? "72"}
        fill='#8275f0'
      >
        <animate
          attributeName='y'
          repeatCount='indefinite'
          dur='1.075268817204301s'
          calcMode='spline'
          keyTimes='0;0.5;1'
          values='-4;14;14'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
          begin='-0.21505376344086022s'
        ></animate>
        <animate
          attributeName='height'
          repeatCount='indefinite'
          dur='1.075268817204301s'
          calcMode='spline'
          keyTimes='0;0.5;1'
          values='108;72;72'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
          begin='-0.21505376344086022s'
        ></animate>
      </rect>
      <rect
        x='42'
        y='14'
        width={bar_width ?? "16"}
        height={bar_height ?? "72"}
        fill='#8275f0'
      >
        <animate
          attributeName='y'
          repeatCount='indefinite'
          dur='1.075268817204301s'
          calcMode='spline'
          keyTimes='0;0.5;1'
          values='0.5;14;14'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
          begin='-0.10752688172043011s'
        ></animate>
        <animate
          attributeName='height'
          repeatCount='indefinite'
          dur='1.075268817204301s'
          calcMode='spline'
          keyTimes='0;0.5;1'
          values='99;72;72'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
          begin='-0.10752688172043011s'
        ></animate>
      </rect>
      <rect
        x='67'
        y='14'
        width={bar_width ?? "16"}
        height={bar_height ?? "72"}
        fill='#8275f0'
      >
        <animate
          attributeName='y'
          repeatCount='indefinite'
          dur='1.075268817204301s'
          calcMode='spline'
          keyTimes='0;0.5;1'
          values='0.5;14;14'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
        ></animate>
        <animate
          attributeName='height'
          repeatCount='indefinite'
          dur='1.075268817204301s'
          calcMode='spline'
          keyTimes='0;0.5;1'
          values='99;72;72'
          keySplines='0 0.5 0.5 1;0 0.5 0.5 1'
        ></animate>
      </rect>
    </svg>
  );
};

export default PulsePlaceholder;
