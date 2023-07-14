import './index.css'

const Message = () => {
  return (
    <>
      <div className='message desktop'>
        <div>
          <h2>Don't miss out on the biggest release of 2023</h2>
          <button>Register your interest</button>
        </div>
      </div>

      {/* Ellipses */}
      <div className='ellipse-1 message-ellipse-1'></div>
    </>
  )
}

export default Message