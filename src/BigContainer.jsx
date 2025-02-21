import Signs from "./Signs"
import './BigContainer.css';
import { useState } from "react";

export default function BigContainer({ variable, bigUpdateValues }) {

    const [address, setAddress] = useState("imgs/img1.png");
    const [result, setResult] = useState(0);

    const handleClick = (src, value) => {
        setAddress(src);
        setResult(value);
        bigUpdateValues(variable, value);
    }

    return (
        <div>
            <div className="ParentContainer">

                <h1 style={{ marginTop: "0px", marginBottom: "100px" }}>{variable}</h1>

                <div className="resultImg">
                    <img src={address} value={result} alt="" />
                </div>
                <div className="SignsHolder">
                    <Signs value={22} clickFunc={handleClick} />
                    <Signs value={20} clickFunc={handleClick} />
                    <Signs value={21} clickFunc={handleClick} />
                    <Signs value={11} clickFunc={handleClick} />
                    <Signs value={10} clickFunc={handleClick} />
                    <Signs value={0} clickFunc={handleClick} />
                </div>

            </div>

        </div>
    )

}