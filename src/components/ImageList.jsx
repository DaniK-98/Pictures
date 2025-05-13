import ImageShow from "/ImageShow"
import "./imagelist.css"

const ImageList = ({Image}) => {
    const renderImage = Image.map((Image) => {
    return <ImageShow key={Image.id} Image={Image} />
    })
    return (
        <div className="image-list">
            {renderImage}
        </div>
    )
}

export default ImageList