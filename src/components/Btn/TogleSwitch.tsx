interface ToggleSwitchProps {
  isOn: boolean
  handleToggle: () => void
}

function ToggleSwitch({ isOn, handleToggle }: ToggleSwitchProps) {
  if (typeof isOn !== 'boolean') {
    throw new Error(
      `Invalid prop 'isOn': expected a boolean, but got ${typeof isOn}`,
    )
  }
  if (typeof handleToggle !== 'function') {
    throw new Error(
      `Invalid prop 'handleToggle': expected a function, but got ${typeof handleToggle}`,
    )
  }

  const handleKeyDown = (event: { key: string }) => {
    if (event.key === 'Enter' || event.key === ' ') {
      handleToggle()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      className={`w-12 h-6 flex items-center rounded-full p-1 cursor-pointer ${isOn ? 'bg-blue-500' : 'bg-gray-300'}`}
      onClick={handleToggle}
      onKeyDown={handleKeyDown}
      aria-pressed={isOn}
      aria-label="Toggle Switch"
    >
      <div
        className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${isOn ? 'translate-x-6' : ''}`}
      />
    </div>
  )
}

export default ToggleSwitch
