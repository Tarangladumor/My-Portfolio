import { useState } from "react";
import Edu_Card from "../components/Background/Edu_Card";
import Exp_Card from "../components/Background/Exp_Card";
import BannerLayout from "../components/common/BannerLayout";
import Footer from "../components/common/Footer";
import { useQuery } from "react-query";
import axios from "axios";
import { Skeleton } from "antd";
import ParagraphSkeleton from "../components/common/ParagraphSkeleton";
import { background } from "../apis/background";

function Background() {

    // const { isLoading, error, data } = useQuery('background', () =>
    //     axios.get('api/background')
    //         .then(({ data }) => data)
    //         .catch(error => console.error('Error fetching testimonials:', error)))

    return (
        <BannerLayout>
            <div className=" md:divide-x-4 md:divide-Green px-4 pb-2 pt-10">
                <div className="flex flex-col gap-y-4 order-2 md:order-1  md:mr-12">
                    <div className="mt-10 md:mt-0 text-xl text-Snow font-semibold">Education</div>

                    {
                        background[0].eduCards?.map((data,key) => (
                            <Edu_Card key={key} data={data}/>
                        ))
                    }

                </div>
            </div>
            <Footer />
        </BannerLayout>
    );
}

export default Background;
