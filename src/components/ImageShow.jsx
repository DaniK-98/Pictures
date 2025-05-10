const ImageShow = ({Image}) => {
    return (
        <div> 
            <img src={Image.urls.small} alt = {image.alt_description} />

        </div>
    )
}

export default ImageShow