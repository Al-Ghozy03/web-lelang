import React from "react";
import Card from "../component/card";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Padding from "../component/padding";
import Title from "../component/title";

export default function Cart() {
  return (
    <React.Fragment>
      <Padding>
        <div className="flex">
          <Navbar />
          <div className="flex flex-col w-full pr-24">
            <Header />
            <div className="pl-20 mt-10">
              <Title text={"Cart"} />
              <div className="grid grid-cols-5 gap-5 mt-7">
                {/* <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card />
                <Card /> */}
              </div>
            </div>
          </div>
        </div>
      </Padding>
    </React.Fragment>
  );
}
