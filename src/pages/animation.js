import React, { Component } from "react";
import { ParallaxProvider } from "react-scroll-parallax";
import ParallaxExample from "./ParallaxExample";

export default function Home() {
    return (
      <ParallaxProvider scrollAxis="vertical">
        <ParallaxExample />
      </ParallaxProvider>
    );
  }