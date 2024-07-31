// Code Keypad Component Here

function Keypad() {
  return (
    <div>
      <input
        type="password"
        placeholder="Enter password"
        onChange={(e) => {
          console.log('Entering password...')
        }}
      />
    </div>
  )
}

export default Keypad
