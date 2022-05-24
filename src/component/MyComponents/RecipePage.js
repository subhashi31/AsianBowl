import React from 'react'

export const RecipePage = ({ recipeData }) => {
    console.log(recipeData,"poop")
    return(
        // console.log(recipeData),
        recipeData.map((curElem) => {
    const { id,image, name, ingrdnt, rcp, vdl } = curElem;
  return (
    <>
    <div className="col my-4 mx-auto" style={{ width: "62rem" }} key={id}>
      <div className="card" >
      <img src={image} className="card-img-top" alt="..."/>
      <div className="card-body">
        <h4 className="card-title">{name}</h4>
        <p className="card-text">{ingrdnt}</p>
        <p className="card-text">{rcp}</p>
        <a href="#" className="btn btn-primary">{vdl}</a>
      </div>
     </div>
    </div>
    </>
  )
        })
    )
}
