const Notification = ({ message, setMsgNotification }) => {
  if (!message.text) {
    return null
  } else {
    setTimeout(() => {
      setMsgNotification({
        text: null
      })
    }, 5000)
  }

  return (
    <div className={message.type}>
      {message.text}
    </div>
  )
}

export default Notification
