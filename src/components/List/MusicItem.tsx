interface IMusicItem {
    imgUrl: string,
    alt: string,
    mainText: string,
    secondaryText: string,
    plus?: boolean
}

const MusicItem = ({imgUrl, alt, mainText, secondaryText, plus}: IMusicItem) => {
    return(
        <div className="MusicElem">
            <img src={imgUrl} alt={alt} />
            <div className="music__description">
                <p className="main__text">{mainText}</p>
                <p className="secondary__text">{secondaryText}</p>
            </div>
            <div className={`plus-button ${plus !== false? "_active" : ""}`}></div>
      </div>
    )
}

export default MusicItem