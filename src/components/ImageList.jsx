import ImageShow from "/ImageShow"
import "./imagelist.css"

const imagelist = ({Image}) => {
    const renderImage = Image.map((imagew) => {
    return <ImageShow key={Image.id} Image={Image} />
    })
    return (
        <div className="image-list">
            {renderImage}
        </div>
    )
}

export default ImageList