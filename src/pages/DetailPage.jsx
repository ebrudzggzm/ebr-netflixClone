import { useEffect, useState } from "react";
import api from "../utils/api";
import { useParams } from "react-router-dom";
import baseImgUrl from "../constants";
import DetailDisplay from "../components/DetailDisplay";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import ActorsCard from "../components/ActorsCard";
import millify from "millify";

const DetailPage = () => {
  const { id } = useParams();

  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const params = {
      append_to_response: "credits,videos,reviews,recommendations,similar",
    };
    api
      .get(`/movie/${id}`, { params })
      .then((res) => setDetail(res.data))
      .catch((err) => console.log(err.message));
  }, [id]);
  console.log(detail.credits, "detaillll");

  return (
    <div>
      {!detail ? (
        <Loader />
      ) : (
        <div>
          <div className="relative  h-[80vh] ">
            <img 
              className="object-cover h-full w-full"
              src={baseImgUrl + detail.backdrop_path}
            />
            <div className="absolute bg-black inset-0 grid place-items-center opacity-50">
              <h2 className="text-2xl font-bold">{detail.title}</h2>
            </div>
          </div>
          {/* //-------------- */}

          <div className="my-10 grid grid-cols-1 md:grid-cols-2 m-4">
            <div>
              <DetailDisplay title="Kategoriler" props={detail.genres} />

              <DetailDisplay
                title="Konuşulan Diller"
                props={detail.spoken_languages}
              />

              <DetailDisplay
                title="Yapımcı Şirketler"
                props={detail.production_companies}
              />
            </div>
            <div>
              <p>{detail.overview}</p>
              <p className="flex gap-3 items-center">
                <span>Bütçe :</span>
                <span className="text-green-500 ms-2">
                  ${millify(detail.budget)}
                </span>
              </p>
              <p className="flex gap-3 items-center">
                <span>Hasılat :</span>
                <span className="text-green-500 ms-2">
                  ${millify(detail.revenue)}
                </span>
              </p>

              
            </div>
          </div>
          <div>
            <Splide
              options={{
                autoWidth: true,
                gap: "10px",
                pagination: false,
                lazyLoad: true,
              }}
            >
              {detail.credits.cast && detail.credits.cast.map((actor, i) => (
                  <SplideSlide>
                    <ActorsCard actor={actor} key={i} />
                  </SplideSlide>
                ))}
            </Splide>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailPage;
