function Section(){
    return(
        <>
        <main>
            <div className="leftDiv">
                <p className="tagline">YOUR FEET DESERVE THE BEST</p>
                <p className="desc">
                YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR SHOES.
                </p>
                <div className="sectionbutton">
                    <button className="shopNow">Shop Now</button>
                    <button className="category">Category</button>
                </div>
                <p className="brandshop">Also Available On</p>
                <div className="shoppingSites">
                    <img src="\assets\amazon.png" alt="amazon" /><img src="\assets\flipkart.png" alt="flipkart" />
                </div>
            </div>
            <div className="rightDiv">
                <img className="shoe" src="\assets\shoe_image.png" alt="shoes" />
            </div>
        </main>
        </>
    )
}
export default Section