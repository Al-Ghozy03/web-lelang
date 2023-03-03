/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { convert } from "rupiah-format";
import { base_url, headers } from "../api/api_service";
import Card from "../component/card";
import Header from "../component/header";
import Navbar from "../component/navbar";
import Padding from "../component/padding";
import Title from "../component/title";
import { month } from "./dashboard";

export default function Kategori() {
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  document.title = `${query.get("kategori")} - Category`;
  const [kategori, setKategori] = useState([]);

  async function searchItem() {
    try {
      let url = `${base_url}/barang/category?category=${query.get("kategori")}`;
      let res = await axios.get(url, headers);
      setKategori(res.data?.data?.rows);
    } catch (er) {
      console.log(er);
    }
  }
  useEffect(() => {
    searchItem();
  }, [query.get("kategori")]);
  return (
    <>
      <Padding>
        <div className="flex">
          <Navbar />
          <div className="flex flex-col w-full pr-24">
            <Header />
            <div className="pl-20 mt-10">
              <Title text={query.get("kategori")} />
              <div className="grid grid-cols-4 gap-5 mt-7">
                {kategori?.length === 0 ? (
                  <h1>Kosong</h1>
                ) : (
                  kategori?.map((i, today) => {
                    let date = new Date();
                    return (
                      <Card
                        key={today}
                        time={i.jam}
                        title={i.namaBarang}
                        date={`${date.getDate()} ${
                          month[date.getMonth()]
                        } ${date.getFullYear()}`}
                        id={i.id}
                        img={i.fotoBarang}
                        price={convert(i.hargaAwal)}
                      />
                    );
                  })
                )}
              </div>
            </div>
          </div>
        </div>
      </Padding>
    </>
  );
}
