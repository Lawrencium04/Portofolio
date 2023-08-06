import "../css-files/menu-button.css"

export default function menuButton(args) {

    const openWindow = (evt) => {
        const windowName = evt.target.offsetParent.attributes.trg.value

        const windowObj = document.querySelectorAll("." + windowName)[0]

        windowObj.className = windowObj.className.replace("closed", "");
        windowObj.className = windowObj.className.replace("hidden", "");

        const buttonId = windowName + "_btn"

        document.querySelectorAll("." + buttonId)[0].className = document.querySelectorAll("." + buttonId)[0].className.replace("hidden ", "")
    }

    return (
        <>
            <div className="menu-btn" onClick={openWindow} trg={args.trg}>
                <img src={args.imgSrc}/>
                <p className="btn-name">{args.btnName}</p>
            </div>
        </>
    )
}