const sendDiscordNotification = async () => {
  try {
    await fetch(`${process.env.DISCORD_WEBHOOK}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: 'Vercel 배포 완료',
      }),
    })
    return true
  } catch (err) {
    return false
  }
}

sendDiscordNotification()
