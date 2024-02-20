import './index.css'

const Tabitem = props => {
  const {buttonDetails, isActive, tabClicked} = props

  const {id, buttonText} = buttonDetails

  const onTabClicked = () => {
    tabClicked(id)
    console.log(id)
  }

  const activeBtn = isActive ? 'active' : 'inActive'

  return (
    <li className="tab-item">
      <button
        className={`button ${activeBtn}`}
        type="button"
        onClick={onTabClicked}
      >
        {buttonText}
      </button>
    </li>
  )
}

export default Tabitem
