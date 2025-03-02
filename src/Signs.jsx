import "./BigContainer.css";

export default function Signs({ value, clickFunc, isSelected, onShow }) {

    const obj = { '22': "img1", 21: "img2", 20: "img3", 11: "img4", 10: "img5", 0: "img6" }

    const src = 'dist/assets/' + obj[value] + '.png';



    function handleClick() {
        clickFunc(src, value);
        onShow()
    }

    return (
        <>
            {isSelected ? (<div onClick={handleClick} className="signSelected">
                <img src={src} alt="" />
            </div>) : (<div onClick={handleClick} className="sign">
                <img src={src} alt="" />
            </div>)}

        </>
    );
}


// return (
//     <section className="panel">
//         <h3>{title}</h3>
//         {isActive ? (
//             <p>{children}</p>
//         ) : (
//             <button onClick={onShow}>
//                 Show
//             </button>
//         )}
//     </section>
// );