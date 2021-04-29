
import { NavLink } from "react-router-dom";
const Card = (props) => {
    return (
        <>

            <div className="col-md-4 ">
                <div className="d-flex">
                    <div className="card box  cardine">
                        <div className="color">
                            <div className="circle">
                                <h1>{props.cardnum}</h1>
                            </div>
                        </div>
                        <img src={props.imgsrc} className="card-img-top mx-auto" alt="..." />

                        <div className="card-body text-center">

                            <h5 className="card-title ">{props.title}</h5>
                            <div className="card-text ">
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi, repellendus incidunt. Fugiat quis nihil quo ad</p>
                            </div>
                            <NavLink to="/contact" className="btn btn-sm btn-outline-success text-center mt-0">Go Somewhere</NavLink>


                        </div>


                    </div>
                </div>



            </div>





        </>
    );
}

export default Card;