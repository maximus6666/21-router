import img from "../img/12_daniel_can_bc-207.jpg";
import img2 from "../img/34599697_616021912083464_5888700754692145152_n.jpg";
import img3 from "../img/d41586-020-01390-w_17974388.jpg";
import img4 from "../img/tour_1465_03_51_2.jpg";



export default function gallery () {
	return (
		<div className="galary-wrapper">
			<img className="gallery-img" src={img} alt="img"/>
			<img className="gallery-img" src={img2} alt="img"/>
			<img className="gallery-img" src={img3} alt="img"/>
			<img className="gallery-img" src={img4} alt="img"/>
		</div>
	)
}
