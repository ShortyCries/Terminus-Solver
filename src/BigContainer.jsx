import Signs from "./Signs"
import './BigContainer.css';
import { useState } from "react";

export default function BigContainer({ variable, bigUpdateValues }) {

    const [address, setAddress] = useState("");
    const [result, setResult] = useState(0);

    const [isSetlected, setIsSelected] = useState(false);

    const [activeIndex, setActiveIndex] = useState(6);

    const handleClick = (src, value) => {
        setAddress(src);
        setResult(value);
        bigUpdateValues(variable, value);
    }

    return (
        <div>
            <div className="ParentContainer">

                <h1 className="XYZ" style={{ marginTop: "0px", marginBottom: "100px" }}>{variable}</h1>

                <div className="resultImg">
                    <img src={address} value={result} alt="" />
                </div>
                <div className="SignsHolder">
                    <Signs value={22} clickFunc={handleClick} isSelected={activeIndex === 0} onShow={() => setActiveIndex(0)} />
                    <Signs value={20} clickFunc={handleClick} isSelected={activeIndex === 1} onShow={() => setActiveIndex(1)} />
                    <Signs value={21} clickFunc={handleClick} isSelected={activeIndex === 2} onShow={() => setActiveIndex(2)} />
                    <Signs value={11} clickFunc={handleClick} isSelected={activeIndex === 3} onShow={() => setActiveIndex(3)} />
                    <Signs value={10} clickFunc={handleClick} isSelected={activeIndex === 4} onShow={() => setActiveIndex(4)} />
                    <Signs value={0} clickFunc={handleClick} isSelected={activeIndex === 5} onShow={() => setActiveIndex(5)} />

                </div>

            </div>

        </div>
    )

}