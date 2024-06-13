import './index.css'

const Package = props => {
  const {packageDetails} = props
  const {name, description, imageUrl} = packageDetails
  return (
    <li className="listPackage">
      <div className="cardContainer">
        <img src={imageUrl} alt={name} className="img" />
        <h1 className="name">{name}</h1>
        <p className="description">{description}</p>
      </div>
    </li>
  )
}
export default Package
