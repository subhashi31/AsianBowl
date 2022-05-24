import React from 'react'


export const RecipeCard = ({ recipeData , RecipeFunc}) => {


    return (
        <div style={{ background: "#f9fbe7"}}>
    
        <div className="row" >
            {
                
                recipeData.map((curElem) => {
                    const { id, image, name, des, time, type } = curElem; 
                   
                    return (
                        <>
                            <div className="col sm-6 my-4 ms-4" key={id}>
                            <div className="card" style={{ width: "18rem" }}>
                                <img src={image} className="card-img-top" alt="..." />
                                <div className="card-body">
                                    <h5 className="card-title">{name}</h5>
                                    <p className="card-text">{des}</p>
                                </div>
                                <ul className="list-group list-group-flush">
                                    <li className="list-group-item">{type}</li> 
                                    <li className="list-group-item">{time}</li>   
                                </ul>
                                <div className="card-body">
                                    <button className="btn btn-warning" onClick={() => RecipeFunc([id])}>Recipe</button>
                                </div>

                            </div>
                            </div>
                        
                        </>
                    );
                })
            }
            </div>

        </div>
    )
}

export default RecipeCard;
