import { Link } from "react-router-dom"

export const AboutUs = () => {

    return (
        <div className="container">     
            <h1 className="aboutus__box__title">About Winter Wonderland</h1>         
            <div className="aboutus__box"> 
                <img className="aboutus__box__img img1" src="imgs\pexels-photo-5914065.jpeg" alt="" />  
                <p className="aboutus__box__info">Imagine Christmas morning as you and your family are gathered around your Christmas tree. Children are giggling with excitement and happiness while the adults are sharing memories and laughing together, enjoying this special family time. You look at your tree, and although it has been decorated and displayed since Thanksgiving, it's the perfect shade of green, not a needle lies on the floor, and it looks so realistic that no one can believe that it is not a real tree. You smile and feel relaxed as you think about how easy it was to set up your tree, the welcome absence of sticky sap and needles throughout the house, and the stunning, realistic look that has brightened up the living room for over a month. This is the holiday experience we hope to provide year after year through our luxurious, lifelike Christmas trees.</p>   
            </div>  
            <hr/>            
            <div className="aboutus__box2">
                <p className="aboutus__box2__info"><h2 className="aboutus__box2__title">ABOUT OUR CHRISTMAS TREES</h2>   
                Real vs. Artificial Christmas Trees: Which is Better?<br/><br/>
                While many love the natural beauty of real Christmas trees, artificial Christmas trees have gained much popularity in recent years. This is because today’s best selling christmas trees have become more realistic and easier to set up than ever before. Here are some benefits of artificial Christmas trees:<br/><br/>
                Convenience
                Real Christmas trees require cutting, mounting, watering, and cleaning up of fallen needles. Meanwhile, artificial Christmas trees present the opposite. Winter Wonderland Christmas trees offer you the convenience of an easier setup and upkeep, as you and your family enjoy a beautiful tree all season.<br/><br/>
                Safety
                A real Christmas tree may cause allergies to some, and its dried needles are also prone to catch fire from open flames or damaged electrical lights. prelit christmas trees from Winter Wonderland are made with synthetic materials that are non-allergenic and flame-retardant. This ensures that you’ll have a safe and worry-free holiday display for everyone to delight in.<br/><br/>
                Cost-Effectiveness
                While real Christmas trees initially cost less than artificial ones, investing in an artificial Christmas tree will save you more money in the long run. As prices of real trees increase through the years, getting an artificial Christmas tree is the more practical choice with benefits you can take advantage of for years to come.</p>  
                <img className="aboutus__box__img img2" src="imgs\pexels-photo-1684236.jpeg" alt="" />     
            </div>    
        </div>      
    )
}