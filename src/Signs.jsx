import "./BigContainer.css";

export default function Signs({ value, clickFunc }) {

    const obj = { '22': "img1", 21: "img2", 20: "img3", 11: "img4", 10: "img5", 0: "img6" }

    const src = 'imgs/' + obj[value] + '.png';


    
    function handleClick() {
        clickFunc(src, value);
    }

    return (
        <div className="flexContainer">
            <img onClick={handleClick} src={src} alt="" />
        </div>
    )
}