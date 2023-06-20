import {Button} from './styledComponent'

const GreetinButton = props => {
  const {buttonDetails, activeId, changeLanguage} = props
  const {buttonText, id} = buttonDetails
  const ActiveBtn = id === activeId

  const onClickLanguageButton = () => {
    changeLanguage(buttonDetails)
  }

  return (
    <li>
      <Button
        type="button"
        isActiveBtn={ActiveBtn}
        onClick={onClickLanguageButton}
      >
        {buttonText}
      </Button>
    </li>
  )
}
export default GreetinButton
